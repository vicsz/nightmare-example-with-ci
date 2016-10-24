#!/bin/bash

# install newer version of node as drone-io doesn't have latest
nvm install v6.2.2 

npm install nightmare

# run xvfb-run which is required for running headless NightMareJs
sudo xvfb-run -e /dev/stdout -a /home/ubuntu/nvm/v6.2.2/bin/node example.js