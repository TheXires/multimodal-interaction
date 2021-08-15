#!/bin/bash

cd ./server
npm start &
cd -
cd ./voicecontroller
npm start &
cd -
cd ./touchcontroller/pack/*
./touchcontroller &
cd -