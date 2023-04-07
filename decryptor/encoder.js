function Om(hA, rw) {
    return function() {
        var fE = rw;
        var Od = hA;
        hA ^= hA << 23;
        hA ^= hA >> 17;
        hA ^= rw;
        hA ^= rw >> 26;
        rw = hA;
        hA = rw;
        return (hA + rw) % 4294967296;
    };
}

var nL = {
    'test': 'value'
}; // The value we want to known
var OP = 464891767; // Known value

var yO = new RegExp("[\\u007F-\\uFFFF]", "g");
function xc(t4) {
    return "\\u" + ("0000" + t4.charCodeAt(0).toString(16)).substr(-4);
}

var QH = {};
var rz = Om(1740574759, OP);
var PS = [];
var r8 = 0;
while (r8 < 31) {
    PS.push(rz() & 255);
    r8 += 1;
}

var XP = JSON.stringify(nL, function (wK, Hv) {
    return Hv === undefined ? null : Hv;
});
var iL = XP.replace(yO, xc);
var oh = [];
var DT = 0;
while (DT < iL.length) {
    oh.push(iL.charCodeAt(DT));
    DT += 1;
}

var iu = oh.length;
var qh = PS["slice"](0, 29).length;
var pd = [];
var lv = 0;
while (lv < iu) {
    pd.push(oh[lv]);
    pd.push(PS["slice"](0, 29)[lv % qh]);
    lv += 1;
}

var rA = PS[29] % 7 + 1;
var ki = [];
var BF = 0;
while (BF < pd.length) {
    ki.push((pd[BF] << rA | pd[BF] >> 8 - rA) & 255);
    BF += 1;
}

var bS = [];
for (var bO in ki) {
    var c0 = ki[bO];
    if (ki.hasOwnProperty(bO)) {
        var bu = String.fromCharCode(c0);
        bS.push(bu);
    }
}

var hQD = btoa(bS.join(""));

QH["p"] = hQD;
QH["st"] = 1680518170;
QH["sr"] = 4049448104;
QH["cr"] = OP;
QH["og"] = 1;
console.log(QH)