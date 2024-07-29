# Instructions

## Instructions for installing

Navigate to blog-app/client, and run the following in the command line:

```
npm install
```

Now, navigate to blog-app/server, and run the following in the command line:

```
npm install
```

Place the config.env file in the server folder. Note that this will not be synced to github as it contains sensitive information.

## Instructions for running

In a terminal window, in the blog-app/server directory, run the following:
```
node --env-file=config.env server
```

Now, in a separate terminal window, in the blog-app/client directory, run the following:
```
npm run dev
```