const { JSDOM } = require("jsdom")

let options = {
    resources: 'usable',
    runScripts: 'dangerously',
}

JSDOM.fromFile('./index.html', options)
    .then((dom) => {
        let data = dom.window.document.getElementById('userData').innerHTML;
            console.log(data)
    });