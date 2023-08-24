# visacooler

#### Track Your Visa Search

#### Support

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/


#### Prepare for Deployment

- editing for visual studio code editing
- in client remove build and node_modules and package-lock.json
- in server remove node_modules and package-lock.json

update package.json in server with below scripts for production deployments

```json

"scripts":{
  "setup-production":"npm run install-client && npm run build-client && npm install",
  "install-client":"cd client && npm install",
}

```
- npm run setup-production
- node server
- APP NEEDS TO WORK LOCALLY !!!

#### Github Repo

- create new repo
- remove all existing repos (CHECK CLIENT !!!)
- in the root
- git init
- git add .
- git commit -m "first commit"
- push up to Github
