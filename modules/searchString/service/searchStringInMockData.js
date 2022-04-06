'use strict';

// load the mockData
const mockDataArr = require('../../../mock_data-1.json');

/**
 * This function returns the search result of a particular string
 * @param {String} searchString => A string to be searched in the mock data.
 * @returns {JSON}
 */
const searchInArray = (searchString) => {
    let searchStrArr = [];
    if(searchString.includes("'")) {
        searchStrArr.push(searchString.toLowerCase().split("'")[1]);
    } else {
        searchStrArr = searchString.toLowerCase().split(' ');
    }
    const searchStrLen = searchStrArr.length;
    const searchResult = [];
    for(let j = 0; j < mockDataArr.length; j++) {
        const currMockData = mockDataArr[j];
        let i = 0;
        for(; i < searchStrLen; i++) {
            const currSearchStr = searchStrArr[i];
            if((!currMockData.name.toLowerCase().includes(currSearchStr) && !currMockData.description.toLowerCase().includes(currSearchStr))) {
                break;
            }
        }
        if(i >= searchStrLen ) {
            searchResult.push(currMockData);
        }
    }

    searchResult.sort((rec1, rec2) => {
        if(rec1.name < rec2.name) {
            return 1;
        } else if(rec1.dateLastEdited < rec2.dateLastEdited) {
            return 1;
        } else {
            return -1;
        }
    });

    return {
        result: searchResult,
        count: searchResult.length,
    }

};

module.exports = {
    searchInArray: searchInArray,
};

