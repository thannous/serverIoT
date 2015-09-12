# App Clint Rest


## API Status

> ##### Stability: [2](http://nodejs.org/api/documentation.html#documentation_stability_index) - Unstable
>
> The API is in the process of settling, but has not yet had sufficient real-world testing to be considered stable.
>



## Start api server

```
$ cd into the folder clint root
```

```
$ npm install
```

```
$ npm start
```

## To test api

Start api server

then open a new console

```
$ cd into the folder clint root
```

```
$ mocha test --require test/helpers/chai.js
```

PS : dont forget to install mocha
```
$ npm install -g mocha
```

# cd into the new folder
$ cd testProject

# fire up the Api !


> All URLs APi start with  http:/localhost:3000/api/v1
>

#### Endpoints

######## CRUD Vehicule

- [<code>GET</code> vehicule] `return all vehicules`
- [<code>GET</code> vehicule/:id] `return vehicule JSON`
- [<code>POST</code> vehicule] @param : name(string, required), type(string, optionnal), _marque(objectId Marque, optionnal) `return 201 with json vehicule`
- [<code>PUT</code> vehicule/:id] @param : name(string, required), type(string, optionnal), _marque(ONLY objectId Marque, optionnal `update vehicule by its id`
- [<code>DELETE</code> vehicule/:id]  `delete one vehicule by its id`

######## CRUD marque

- [<code>GET</code> marque] `return all marques`
- [<code>GET</code> marque/:id]  `return marquesJson with its id`
- [<code>POST</code> marque]&nbsp; @param : name(string, required), vehicules(objectId Vehicule) `return 201 with json marque`
- [<code>PUT</code> marque/:id] @param : name(string, required), vehicules(objectId Vehicule)  `update marques by its id`
- [<code>DELETE</code> marque/:id]   `delete one marques by its id`

PS : POST and PUT encoded in x-www-form-urlencoded

## Compatibility

App Clint Rest is built on [Node.js](http://nodejs.org/),  [Express](http://expressjs.com/), and [MongoDb](http://www.mongodb.org/).



<a target="_blank" href="http://nodejs.org/"><img width="150" title="Nodejs" src="https://nodejs.org/images/logos/nodejs.png"/></a>&nbsp; &nbsp; &nbsp; &nbsp;
<a target="_blank" href="http://www.mongodb.org/"><img width="200" title="MongoDB" src="http://i.imgur.com/bC2j13z.png"/></a>&nbsp; &nbsp; &nbsp; &nbsp;
<a target="_blank" href="http://expressjs.com/"><img width="200" title="ExpressJs" src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png"/></a>&nbsp; &nbsp; &nbsp; &nbsp;


