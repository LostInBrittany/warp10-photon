var fs = require('fs');

fs.readFile('build/es6-bundled/index.html', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    let result = data.replace(/<base href="\/">/, `<base href="/warp10-photon/">`);
    fs.writeFile('build/es6-bundled/index.html', result, 'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
    });
});

