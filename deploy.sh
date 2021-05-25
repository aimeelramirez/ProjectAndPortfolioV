#!/bin/bash
#install if not
npm install
#run predeploy build
npm run build
#deploy github
npm run deploy 