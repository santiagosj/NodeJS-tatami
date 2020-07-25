const express = require('express')
const app = express()
const bodyParser = require('body-parser')

console.log('Holiiiis')


/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use((req, res, next) => {

    const { method, path } = req;

    const ip = "127.0.0.1";

    console.log(`${method} ${path} - ${ip}`);

    next();
});

/** 8) Chaining middleware. A Time server */
// rta:1
/*app.get(
  "/now",
  (req, res, next) => {
    // adding a new property to req object
    // in the middleware function
    req.time = new Date().toString();

    next();
  },
  (req, res) => {
    // accessing the newly added property
    // in the main function
    res.send({time:req.time})
  }
);*/

/*
 rta:2
  const middleWare = (req, res, next) => {
       req.time = new Date().toString();
       next()
  }
  app.use('/now', middelWare, (req, res)=>{
       res.send({
           time:req.time
       })
  })
 */

/** 9)  Get input from client - Route parameters */

/*app.get("/:word/echo", (req, res) => {
  const { params } = req;
  res.json({ echo: params.word });
});*/

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
//url example : host/name?first=tito&last=puente
/*app.get('/name',(req,res)=>{

  const {first: firstName, last: lastName} = req.query

  res.json({
    name:`${firstName} ${lastName}`
  })

})*/

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/:word/echo", (req, res) => {
    const { params } = req;
    res.json({ echo: params.word });
});

app.get("/name", (req, res) => {

    const { first: firstName, last: lastName } = req.query;

    res.json({
        name: `${firstName} ${lastName}`,
    });

});
/** 12) Get data form POST  */ // https://www.npmjs.com/package/body-parser
app.post("/name", (req, res) => {
    const string = `${req.body.first} ${req.body.last}`;

    res.send({
        name: string
    })
});

/** 2) A first working Express Server */
app.get('/', (req, res)=>{
    res.send("Hello express")
})

/** 3) Serve an HTML file */
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
});

/** 4) Serve static assets  */
app.use(express.static(`${__dirname}/public`))

/** 5) serve JSON on a specific route */
app.get('/hellojson', (req, res) => {
    res.json({ "message": "Hello JSON" })
})

/** 6) Use the .env file to configure the app */
app.get('/json',(req,res)=>{

    const message = (process.env.MESSAGE_STYLE === 'uppercase') ? 'HELLO JSON' : 'hello json';

    res.json({ message })

})


//==========================================================

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;





