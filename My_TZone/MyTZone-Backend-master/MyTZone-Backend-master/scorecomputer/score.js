var scoreStrings = require('../strings')('scores');

var scores = {
    certificates:{}
}

//Adding Certificate Scores
scores.certificates[scoreStrings.CERTIFICATES.STATE_FEDERAL_CERTIFICATION] = 3;
scores.certificates[scoreStrings.CERTIFICATES.STATE_FEDERAL_LICENSE_AWARDED] = 5;


module.exports = scores;