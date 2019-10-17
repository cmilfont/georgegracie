#!/bin/sh -x
yarn build
cd build
#scp -r .. chrismilfont@georgegracie.com.br:/home/chrismilfont/georgegracie.com.br/
rsync --recursive --times --compress --delete --progress . chrismilfont@georgegracie.com.br:/home/chrismilfont/georgegracie.com.br/
cd ..