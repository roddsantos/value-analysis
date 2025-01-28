#value-analysis application

Value Analysis application using React

You'll need Docker installed in your PC to execute the next steps

First, create a .env file in your root file project with the following:

```bash
REACT_APP_SERVER_URL=<backend URL>
```

After this, you can use the follow docker command to create the container

```bash
$ docker-compose up
```

If the connection with the backend cannot be established, try the following:

1 - Stop the ´value-analysis´ container
3 - Open a terminal in the root project and do the command:

```bash
$ npm start
```

After this, you should be able to connect to the backend
