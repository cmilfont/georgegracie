#!/bin/sh -x
yarn build
# cd build
# rsync --recursive --times --compress --delete --progress . chrismilfont@georgegracie.com.br:/home/chrismilfont/georgegracie.com.br/
firebase deploy
#cd ..