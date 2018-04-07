function average(__strings) {
    let _strings = prepareStrings(__strings);
    let strings = [];
    for (let s of _strings) {
        strings.push(s.split(""));
    }

    let nS = "";
    for (let i = 0; i < strings[0].length; i++) {
        let chars = [];
        for (let c of strings) {
            chars.push(c[i]);
        }
        let counts = {};

        for (let n = 0; n < chars.length; n++) {
            var num = chars[n];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }


        let v = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

        nS += v;
    }
    return nS;
}

function prepareStrings(_strings) {
    console.log(_strings);
    for (let s of _strings) {
        if  (typeof s != "string") throw new TypeError('One of the values was not a string.');
    }

    const newStrings = _strings.map(val => val.length);
    const shortest = newStrings.reduce((a, b) => Math.min(a, b));

    return _strings.map(val=>val.slice(0, shortest));
}

module.exports = (strings) => {
    return average(strings);
};
