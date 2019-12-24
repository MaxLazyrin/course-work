module.exports = {
    getParamsCount: function(text) {
        var reg = /\. |\? |\! /;
        var w = text.split(' ');
        var s = text.split(reg);

        return {w: w.length, s: s.length};
    },
    getSymbolsCount: (text) => text.length,
};