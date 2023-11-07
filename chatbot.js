const repl = require('node:repl');

const r = repl.start({ prompt: '> ', eval: myEval});

function myEval(cmd, context, filename, callback) {
    console.log('cmd: ' + cmd);
    if (cmd === 'exit\n') {
        process.exit();
    }
  callback(null, cmd);
}
