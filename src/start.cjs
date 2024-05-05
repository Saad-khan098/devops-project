const throng = require('throng')
const child_process = require('child_process')

function Start() {
    const process = child_process.exec('npm run start')
    process.stdout.on('data', function(data) {
        console.log(data); 
    });
    process.stderr.on('data', function(data) {
        console.error(data);
    });
}

const WORKERS = process.env.WEB_CONCURRENCY || 1;

throng({
    master: Start,
    worker: Start,
    count: WORKERS,
    lifetime: Infinity
})