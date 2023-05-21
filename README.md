# E-commerce_BookApp  is under construction so plz mark after completion
 npm install @auth0/auth0-react

 <!-- MongooseServerSelectionError: / Error: querySrv ECONNREFUSED _mongodb._tcp.projectm.gx5iuhc.mongodb.net/Error: querySrv ETIMEOUT _mongodb._tcp.projectm.gx5iuhc.mongodb.net =========>>>>>>>>>>>>>>>>>>>>>>open MongoDB and go Database Access and choose Your current IP address -->






<!-- Root directory packages: -->
npm install --save-dev concurrently

scripts in package.json:
"scripts": {
    "start": "node server/app.js",
    "client": "cd client && npm start",
    "dev": "concurrently \"npm run start\" \"npm run client\""
}

