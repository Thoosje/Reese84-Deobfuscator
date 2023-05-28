const fs = require('fs');

const loadPayload = (path) => {
    return JSON.parse(
        fs.readFileSync(path)
    );
}

// This does not work on every file since encryption is changed dynamically

// Om function -> generate random pseudo numbers
// cr is a known value from the payload
function PseudoNumbers(secretNumber, cr) {
    return function () {
        var fE = cr;
        var Od = secretNumber;
        secretNumber ^= secretNumber << 23;
        secretNumber ^= secretNumber >> 17;
        secretNumber ^= cr;
        secretNumber ^= cr >> 26;
        cr = secretNumber;
        secretNumber = cr;
        return (secretNumber + cr) % 4294967296;
    };
};

// PS
const calculateSecretArray = (secretNumber, cr) => {
    return PseudoNumbers(
        secretNumber,
        cr
    )
};

const decryptPayload = (payload, secretNumber) => {
    const {
        p,
        st,
        sr,
        cr,
        og
    } = payload;

    // Decode p into a byte array
    let decodedP = atob(p),
        byteArray = [];

    for (var i = 0; i < decodedP.length; i++) {
        var c = decodedP.charCodeAt(i);
        byteArray.push(
            c
        );
    };

    // Generate the psuedo array
    let pseudoFunc = calculateSecretArray(cr, secretNumber),
        secretArray = [],
        secretLength = 0;

    while (secretLength < 31) {
        secretArray.push(pseudoFunc() & 255);
        secretLength += 1;
    }    

    // Undo shifting from byte array
    let pd = [];
    let counter = 0;
        byteLength = byteArray.length,
        secretPseudo = secretArray[29] % 7 + 1;

    while (counter < byteLength) {
        let shifted_pd = ((byteArray[counter] & 255) << (8 - secretPseudo)) & 255;
        let temp = (byteArray[counter] >> secretPseudo) & 255;
        let originalValue = (shifted_pd | temp) & 255;

        pd.push(originalValue)
        counter += 1
    }

    let result = '',
        resultCounter = 0;
        
    while ( resultCounter < pd.length ) {
        result += String.fromCharCode(pd[resultCounter])
        resultCounter += 2 // Removes useless charcodes
    }

    return result;
};

const data = loadPayload('./payload.json')
const result = decryptPayload(
    data,
    1740574759
);

console.log(result)