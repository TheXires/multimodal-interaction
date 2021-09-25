#!/bin/bash

cd ./voicecontroller
npm install
cd -
cd ./server
npm install
cd -
cd ./touchcontroller
npm install
npm run pack
cd -