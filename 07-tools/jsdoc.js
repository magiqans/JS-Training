/**
 * @namespace
 */
var util = {
    /**
     * Repeat srting several times
     * @param {string} str The sting to repeat
     * @param {number} [times = 1] How many times to repeat
     */
    repeat: function(str, times){
        return new Array(times + 1).join(str);
    }
};

util.repeat(123)