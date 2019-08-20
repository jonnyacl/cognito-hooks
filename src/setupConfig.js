const prompt = require('prompt');
const fs = require('fs');

var prompt_attributes = [
    {
        name: 'region',
    },
    {
        name: 'user_pool_id',
    },
    {
        name: 'app_client_id',
    },
    {
        name: 'id_pool_id',
    }
];
console.log("Running setup...");
prompt.start();

prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        var region = result.region && result.region.length > 0 ? result.region : 'eu-west-1';
        var user_pool_id = result.user_pool_id;
        var app_client_id = result.app_client_id;
        var id_pool_id = result.id_pool_id;

        var message = "  Region : " + region + " , user pool ID : " + user_pool_id + ", app: " + app_client_id + ", pool: " + id_pool_id;

        const expText = "export default {\n  env: process.env.REACT_APP_ENV,\n  cognito\n};"

        const fileText = `const cognito = {\n  REGION: "${region}",\n  USER_POOL_ID: "${user_pool_id}",\n  APP_CLIENT_ID: "${app_client_id}",\n  IDENTITY_POOL_ID: "${id_pool_id}"\n}\n\n${expText}`;

        fs.writeFile("./src/config.js", fileText, (e) => {
            if (e) {
                console.log(e);
                return 1;
            }
        }); 

        // Display user input in console log.
        console.log(message);
    }
});
