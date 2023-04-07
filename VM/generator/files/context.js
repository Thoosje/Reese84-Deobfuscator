function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class DateTimer {
    constructor() {
        this.marks = {};
        this.measures = {};
    }

    start(markName) {
        this.marks[markName] = performance.now();
    }

    startInternal() {}

    stop(markName) {
        this.measures[markName] = performance.now() - this.marks[markName] + getRandomInt(200, 400); // Add random ints to make timing more realistig
    }

    stopInternal() {}

    summary() {
        return this.measures;
    }
}

// Copied hash function from the original script
var hasher = {
    hash: function (_0x56a128) {
        _0x56a128 = unescape(encodeURIComponent(_0x56a128));
        for (var _0x278341 = [1518500249, 1859775393, 2400959708, 3395469782], _0x2fa2dc = (_0x56a128 += String.fromCharCode(128)).length / 4 + 2, _0x1b2d39 = Math.ceil(_0x2fa2dc / 16), _0x2e7c0d = new Array(_0x1b2d39), _0x1e0cab = 0; _0x1e0cab < _0x1b2d39; _0x1e0cab++) {
            _0x2e7c0d[_0x1e0cab] = new Array(16);
            for (var _0x2829fc = 0; _0x2829fc < 16; _0x2829fc++) _0x2e7c0d[_0x1e0cab][_0x2829fc] = _0x56a128.charCodeAt(64 * _0x1e0cab + 4 * _0x2829fc) << 24 | _0x56a128.charCodeAt(64 * _0x1e0cab + 4 * _0x2829fc + 1) << 16 | _0x56a128.charCodeAt(64 * _0x1e0cab + 4 * _0x2829fc + 2) << 8 | _0x56a128.charCodeAt(64 * _0x1e0cab + 4 * _0x2829fc + 3);
        }
        _0x2e7c0d[_0x1b2d39 - 1][14] = 8 * (_0x56a128.length - 1) / Math.pow(2, 32), _0x2e7c0d[_0x1b2d39 - 1][14] = Math.floor(_0x2e7c0d[_0x1b2d39 - 1][14]), _0x2e7c0d[_0x1b2d39 - 1][15] = 8 * (_0x56a128.length - 1) & 4294967295;
        var _0x22fad9, _0x29abb7, _0x568896, _0x105ab4, _0xc5c5e6, _0x141035 = 1732584193,
            _0x2d8003 = 4023233417,
            _0x56f680 = 2562383102,
            _0x41b681 = 271733878,
            _0x1e4221 = 3285377520,
            _0x57700b = new Array(80);
        for (_0x1e0cab = 0; _0x1e0cab < _0x1b2d39; _0x1e0cab++) {
            for (var _0xa49426 = 0; _0xa49426 < 16; _0xa49426++) _0x57700b[_0xa49426] = _0x2e7c0d[_0x1e0cab][_0xa49426];
            for (_0xa49426 = 16; _0xa49426 < 80; _0xa49426++) _0x57700b[_0xa49426] = hasher.ROTL(_0x57700b[_0xa49426 - 3] ^ _0x57700b[_0xa49426 - 8] ^ _0x57700b[_0xa49426 - 14] ^ _0x57700b[_0xa49426 - 16], 1);
            _0x22fad9 = _0x141035, _0x29abb7 = _0x2d8003, _0x568896 = _0x56f680, _0x105ab4 = _0x41b681, _0xc5c5e6 = _0x1e4221;
            for (_0xa49426 = 0; _0xa49426 < 80; _0xa49426++) {
                var _0x34a4ea = Math.floor(_0xa49426 / 20),
                    _0x5144d1 = hasher.ROTL(_0x22fad9, 5) + hasher.f(_0x34a4ea, _0x29abb7, _0x568896, _0x105ab4) + _0xc5c5e6 + _0x278341[_0x34a4ea] + _0x57700b[_0xa49426] & 4294967295;
                _0xc5c5e6 = _0x105ab4, _0x105ab4 = _0x568896, _0x568896 = hasher.ROTL(_0x29abb7, 30), _0x29abb7 = _0x22fad9, _0x22fad9 = _0x5144d1;
            }
            _0x141035 = _0x141035 + _0x22fad9 & 4294967295, _0x2d8003 = _0x2d8003 + _0x29abb7 & 4294967295, _0x56f680 = _0x56f680 + _0x568896 & 4294967295, _0x41b681 = _0x41b681 + _0x105ab4 & 4294967295, _0x1e4221 = _0x1e4221 + _0xc5c5e6 & 4294967295;
        }
        return hasher.toHexStr(_0x141035) + hasher.toHexStr(_0x2d8003) + hasher.toHexStr(_0x56f680) + hasher.toHexStr(_0x41b681) + hasher.toHexStr(_0x1e4221);
    },
    f: function (_0x64d37b, _0xc6b9c8, _0x4e22f8, _0x4cfff9) {
        switch (_0x64d37b) {
            case 0:
                return _0xc6b9c8 & _0x4e22f8 ^ ~_0xc6b9c8 & _0x4cfff9;
            case 1:
            case 3:
                return _0xc6b9c8 ^ _0x4e22f8 ^ _0x4cfff9;
            case 2:
                return _0xc6b9c8 & _0x4e22f8 ^ _0xc6b9c8 & _0x4cfff9 ^ _0x4e22f8 & _0x4cfff9;
        }
    },
    ROTL: function (_0x50664e, _0x51b183) {
        return _0x50664e << _0x51b183 | _0x50664e >>> 32 - _0x51b183;
    },
    toHexStr: function (_0x35d24c) {
        for (var _0xf4ad8b = "", _0x4c48d0 = 7; _0x4c48d0 >= 0; _0x4c48d0--) _0xf4ad8b += (_0x35d24c >>> 4 * _0x4c48d0 & 15).toString(16);
        return _0xf4ad8b;
    }
};

// Loggers to log result
const reeseReturnError = (data) => {
    console.log(data)
    console.log('Data above is from error.')
}

const reeseReturnSuccess = (data) => {
    console.log(data)
    console.log('Data above is payload.')
}