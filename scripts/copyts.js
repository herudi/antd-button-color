const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');
const srcDir = path.join('./lib');
const distDir = path.join('./dist/js');
const files = glob.sync('**/*.d.ts', {
    cwd: srcDir
});
files.forEach(file => {
    const from = path.join(srcDir, file);
    const to = path.join(distDir, file);
    fse.copySync(from, to);
});


//styles
const styles = glob.sync('**/*.{less,css}', {
    cwd: srcDir
});
styles.forEach(file => {
    const from = path.join('./lib', file);
    const to = path.join('./dist', file);
    fse.copySync(from, to);
});