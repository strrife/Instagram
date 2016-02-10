/**
 * Created by strrife on 2/10/16.
 */
var Instagram = require('./src/nightmare');
var client = new Instagram();
const util = require('util');

client
    .login(process.env.INSTAGRAM_USER, process.env.INSTAGRAM_PASS)
    .then(() => {
        console.log('Logged in');
        client.comment(process.argv[2], process.argv[3])
            .then(() => {
                console.log('Commented!');
                console.log(util.inspect(process.memoryUsage()));
            })
            .catch(e => console.log(e));
    });

