const fs = require('fs');
const path = require('path');

function loadModulesFromFolder(folderPath) {
    const modules = {};
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const moduleName = path.basename(filePath, '.js');

        if (moduleName == 'index') continue;

        if (fs.lstatSync(filePath).isDirectory()) {
            // Recursively load modules from sub-directory
            modules[moduleName] = loadModulesFromFolder(filePath);
        } else {
            // Load module from file
            const module = require(filePath).default;
            modules[moduleName] = module;
        }
    }

    return modules;
}

module.exports = loadModulesFromFolder(__dirname);