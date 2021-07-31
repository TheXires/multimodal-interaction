// IMPORTANT if after npm start no logs appear, just retry once
// is for some reason not working in the same instance with dist folder creation

import carController from './controller/car.controller';
import stateController from './controller/state.controller';
const Picovoice = require('@picovoice/picovoice-node');
const recorder = require('node-record-lpcm16');

// picovoice setup
// weake word
const keywordArgument = __dirname + '/../picovoice/hey_auto.ppn';
// rhino context file
const contextPath = __dirname + '/../picovoice/carController_de_linux.rhn';
// picovoice files for german language support
const porcupineModelFilePath = __dirname + '/../picovoice/porcupine_params_de.pv';
const porcupineLibraryFilePath = undefined;
const rhinoModelFilePath = __dirname + '/../picovoice/rhino_params_de.pv';
const rhinoLibraryFilePath = undefined;
// sensitivity for wake word and context
const sensitivity = 0.5;

/**
 * converts audiostream into processable frames
 *
 * @param array
 * @param size
 * @returns
 */
function chunkArray(array: any, size: any) {
  return Array.from({ length: Math.ceil(array.length / size) }, (v, index) =>
    array.slice(index * size, index * size + size),
  );
}

/**
 * logs to the console that wake word is detected and sends signal to the Server
 *
 * @param keyword number of the called wake word
 */
const keywordCallback = function (keyword: number) {
  console.log(`Wake word detected.`);
  stateController.startListening();
};

const inferenceCallback = function (inference: any) {
  stateController.stopListening();
  console.log(JSON.stringify(inference, null, 4));
  if (!inference.isUnderstood) return;
  switch (inference.intent) {
    case 'changeSpeed':
      carController.changeSpeed(inference.slots);
      break;
    case 'changeDirection':
      carController.changeDirection(inference.slots);
      break;
    case 'changeLane':
      carController.changeLane(inference.slots);
      break;
    default:
      break;
  }
};

const handle = new Picovoice(
  keywordArgument,
  keywordCallback,
  contextPath,
  inferenceCallback,
  sensitivity,
  sensitivity,
  porcupineModelFilePath,
  porcupineLibraryFilePath,
  rhinoModelFilePath,
  rhinoLibraryFilePath,
);

const frameLength = handle.frameLength;
const sampleRate = handle.sampleRate;

const recording = recorder.record({
  sampleRate: sampleRate,
  channels: 1,
  audioType: 'raw',
  recorder: 'arecord',
});

var frameAccumulator: any = [];

recording.stream().on('error', (data: any) => {
  console.log('recorder stream error');
});

recording.stream().on('data', (data: any) => {
  // Two bytes per Int16 from the data buffer
  let newFrames16 = new Array(data.length / 2);
  for (let i = 0; i < data.length; i += 2) {
    newFrames16[i / 2] = data.readInt16LE(i);
  }

  // Split the incoming PCM integer data into arrays of size Picovoice.frameLength. If there's insufficient frames, or a remainder,
  // store it in 'frameAccumulator' for the next iteration, so that we don't miss any audio data
  frameAccumulator = frameAccumulator.concat(newFrames16);
  let frames = chunkArray(frameAccumulator, frameLength);

  if (frames[frames.length - 1].length !== frameLength) {
    // store remainder from divisions of frameLength
    frameAccumulator = frames.pop();
  } else {
    frameAccumulator = [];
  }

  for (let frame of frames) {
    handle.process(frame);
  }
});
