const {assert, expect} =  require('chai');

const averageString = require('./index.js');

describe('Average-ing strings', function() {

    it('should average a few strings', function() {
        assert.isOk(averageString(['it', 'better', 'not', 'fail']));
    });

});
