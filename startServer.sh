#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

if [ -f "./server.env" ]
then
    set -o allexport
    source ./server.env
    set +o allexport
else
echo -e "${RED}can't find env file...${NC}"
echo -e "Bye!"
exit
fi

# Run test case first
npm test
#Check if test passed or failed
retVal=$?
if [ $retVal -ne 0 ]; then
    echo "${RED}One or more test cases Failed!!!${NC}"
    exit $retVal
fi

# echo "Node environement: $NODE_ENV"
nodemon ./bin/www