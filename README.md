# Neconfig examples

## Description

Example of using the [Neconfig](https://github.com/maximpyshko/neconfig) module to configure a [Nest](https://github.com/nestjs/nest) application.

The AppModule registers NeconfigModule with `hash` reader for default values and with `env` reader to read from file and process.env. After that, in main.ts, you can get ConfigReader instance.

## Install

```bash
git clone https://github.com/maximpyshko/neconfig-examples.git
cd neconfig-examples
npm i
```

## Run

If you run the application just after installation, you could see that host and port are have the values by default:

```bash
$ npm start
> Listening on http://localhost:3000
```

Now, stop the application and in root of the project create a file with name `.env`. Add the following text to this file:

```dotenv
PORT = 4000
```

If you run now the application, you could see that application listening on port `4000`:

```bash
$ npm start
> Listening on http://localhost:4000
```

But if you need override port without editing file, you can export environment variables before start application:

```bash
$ export PORT=5000
$ npm start
> Listening on http://localhost:5000
```

Or simply:

```bash
$ PORT=5000 npm start
> Listening on http://localhost:5000
```
