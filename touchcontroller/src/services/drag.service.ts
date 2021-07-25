import { changeLane, changeDirection, changeSpeed } from './car.service';

export enum xDirection {
  LEFT,
  MIDDLE,
  RIGHT,
}

export enum zDirection {
  UP,
  MIDDLE,
  DOWN,
}

export interface Command {
  horizontal: xDirection;
  vertical: zDirection;
}

/**
 * This translates the car coordinates to a requested event
 */
export const translateActionFormCoordinates = (x: number, z: number): Command => {
  if (x > 0.4) {
    if (z > 0.7) {
      return {
        horizontal: xDirection.LEFT,
        vertical: zDirection.UP,
      };
    } else if (z < -0.7) {
      return {
        horizontal: xDirection.LEFT,
        vertical: zDirection.DOWN,
      };
    } else {
      return {
        horizontal: xDirection.LEFT,
        vertical: zDirection.MIDDLE,
      };
    }
  } else if (x < -0.4) {
    if (z > 0.7) {
      return {
        horizontal: xDirection.RIGHT,
        vertical: zDirection.UP,
      };
    } else if (z < -0.7) {
      return {
        horizontal: xDirection.RIGHT,
        vertical: zDirection.DOWN,
      };
    } else {
      return {
        horizontal: xDirection.RIGHT,
        vertical: zDirection.MIDDLE,
      };
    }
  } else {
    if (z > 0.7) {
      return {
        horizontal: xDirection.MIDDLE,
        vertical: zDirection.UP,
      };
    } else if (z < -0.7) {
      return {
        horizontal: xDirection.MIDDLE,
        vertical: zDirection.DOWN,
      };
    } else {
      return {
        horizontal: xDirection.MIDDLE,
        vertical: zDirection.MIDDLE,
      };
    }
  }
};

/**
 * Last coordinates the drag event sent
 */
let lastDraggedAction: Command;
/**
 * The interval instance handling the updates
 */
let updateInterval: any;

/**
 * Handle the input event and its data to send requested action to server. Processes the drag END event
 */
export const handleDragEnd = (x: number, z: number): void => {
  clearInterval(updateInterval);
  updateInterval = undefined;
  const action = translateActionFormCoordinates(x, z);
  if (action.vertical == zDirection.MIDDLE) {
    if (action.horizontal == xDirection.LEFT) {
      changeLane('links');
    } else if (action.horizontal == xDirection.RIGHT) {
      changeLane('rechts');
    }
  } else if (action.vertical == zDirection.UP) {
    if (action.horizontal == xDirection.LEFT) {
      changeDirection('links');
    } else if (action.horizontal == xDirection.RIGHT) {
      changeDirection('rechts');
    }
  }
};

/**
 * Handle the input event and its data to send requested action to server. Processes the ONGOING drag event
 */
export const handleDragOngoing = (x: number, z: number): void => {
  lastDraggedAction = translateActionFormCoordinates(x, z);
  if (!updateInterval) {
    updateInterval = setInterval(() => {
      if (lastDraggedAction.horizontal == xDirection.MIDDLE) {
        if (lastDraggedAction.vertical == zDirection.UP) {
          changeSpeed(5);
        } else if (lastDraggedAction.vertical == zDirection.DOWN) {
          changeSpeed(-5);
        }
      }
    }, 750);
  }
};
