/**
 * Created by strrife on 2/10/16.
 */
var Instagram = require('./src/nightmare');
new Instagram()
    .login(process.env.INSTAGRAM_USER, process.env.INSTAGRAM_USER)
    .then(() => {
        console.log("fdff");
    }).catch(e => {
        console.log(e);
    });

