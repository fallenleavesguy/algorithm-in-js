const fs = require('fs');
const path = require('path');

// gather all Javascript file 
function walkSync(dir) {
  let results = [];

  fs.readdirSync(dir).forEach(p => {
    let fullPath = path.join(dir, p);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(walkSync(fullPath));
    } else if (p.endsWith('.js')) {
      results.push(fullPath);
    }
  });
  
  return results;
}

// walk all source code
walkSync(path.resolve(__dirname, '..', 'src')).forEach(f => require(f));
// walk all test
walkSync(__dirname).forEach(p => {
  if (p !== __filename) {
    require(p)
  }
});