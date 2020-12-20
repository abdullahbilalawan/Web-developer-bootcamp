
const fs = require('fs')
fs.mkdir('MADE BY FS', { recursive: true }, (err) => {
    if (err) throw err;
  });




  const add = (x,y) =>{
      return x+y;
  }
exports.add = add;
