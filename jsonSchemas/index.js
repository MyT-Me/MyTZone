'use strict';
// This evaluates the incoming JSON before saving them.
// Reason I chose this without using direct Mongoose validation was I wanted to make the scores and other sections required.
// (And also wanted to work on JSON Schema :P)

module.exports = function (value) {
    switch (value){
    case 'user':
        return require('./userSchemas');
    case 'addition':
        return require('./additionSchemas');
    case 'edit':
        return require('./editSchemas');
    case 'remove':
        return require('./removeSchemas');
    }
};