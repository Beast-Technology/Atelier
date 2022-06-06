
## Building and running on localhost

First install dependencies:

```sh
npm install
```
Create ENV file in ROOT folder (make sure this matches .gitignore name):
```sh
TOKEN=“your Github TOKEN”
API_URL=“https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp”
```

To build the Webpack:

```sh
npm run client-dev
```
To run localhost client:

```sh
npm run server-dev
```

## Running

Open the file `dist/index.html` in your browser

OR

Open `localHost:3000`
