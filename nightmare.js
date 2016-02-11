/**
 * Created by strrife on 2/10/16.
 */
var Instagram = require('./src/nightmare');
var client = new Instagram();
var start = process.hrtime();

client
    .login(process.env.INSTAGRAM_USER, process.env.INSTAGRAM_PASS)
    .then(() => {
        console.log('Logged in');
        client.comment(process.argv[2], process.argv[3])
            .then(() => {
                console.log('Commented!');
                var diff = process.hrtime(start);
                console.log('commenting took %d nanoseconds', diff[0] * 1e9 + diff[1]);
            })
            .catch(e => console.log(e));
    });

