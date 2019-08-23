## Simple React Hooks app with user auth

Using Cognito for user auth, this is a basic app ready to build an actual with user authentication already setup

### Getting started

```yarn install```

Then setup your cognito settings

```yarn run setup```

You will be prompted to enter
 - region (defaults to eu-west-1)
 - User Pool ID
 - App client ID
 - Identity Pool ID

Cognito and API endpoints for the app can be created by the [Serverless-Create-Apps](https://gitlab.com/fractal-frontend/serverless-create-apps) project. Then the output is passed into this setup command to configure with Cognito.

For guidance on setting up Cognito: 

https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-getting-started.html

Then build an app using React Hooks around this app as a starting block

https://reactjs.org/docs/hooks-intro.html

