'use strict';

var child_process = require('child_process');

module.exports.hello = (event, context, callback) => {

  var strToReturn = '';

  var php = './php';
  
  // workaround to get 'sls invoke local' to work
  if (typeof process.env.PWD !== "undefined") {
    php = 'php';
  }

  var proc = child_process.spawn(php, [ "index.php", JSON.stringify(event), { stdio: 'inherit' } ]);

  proc.stdout.on('data', function (data) {
    var dataStr = data.toString()
    // console.log('stdout: ' + dataStr);
    strToReturn += dataStr
  });

  proc.stderr.on('data', function (data) {
    console.log(`stderr: ${data}`);
  });

  proc.on('close', function(code) {
    if(code !== 0) {
      return callback(new Error(`Process exited with non-zero status code ${code}`));
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: strToReturn,
//        input: event,
      }),
    };

    callback(null, response);
  });
};