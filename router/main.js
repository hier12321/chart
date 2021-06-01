const bodyParser = require('body-parser');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/test";

module.exports = function(app) {
     app.use(bodyParser.json());       // to support JSON-encoded bodies
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
         extended: true
      }));
     
      app.get('/',function(req,res){
        let result
         res.render('index.html')
      });
      app.get('/login',function(req,res){
         res.render('login.html')
      });
      app.get('/sign',function(req,res){
         res.render('sign.html')
      });
      app.get('/findpwd',function(req,res){
        res.render('findpwd.html')
      });
      app.get('/checkuserinfo',function(req,res){
       res.render('checkuserinfo.html')
      });
      app.get('/resetpwd',function(req,res){
       res.render('resetpwd.html')
      });
      app.get('/about',function(req,res){
         res.render('about.html');
      });
      app.get('/products',function(req,res){
         res.render('products.html');
      });
      app.get('/accounts',function(req,res){
         res.render('accounts.html');
      });
      app.get('/point',function(req,res){
         res.render('point.html');
      });
      app.get('/accounts',function(req,res){
         res.render('accounts.html');
      });
     
      app.get('/listall', function (req, res) {
         //res.render('about.html');
         console.log('listall...');
         let getNumber = req.body.getNumber;
         let postName = req.body.st_name;
         let postId = req.body.st_id;
         let postDepartment = req.body.department;
         let response = {
               'result': 'true',
               'getLists': getNumber 
      }
      
      console.log('response : ' , response);
      res.status(200).json(response);
   });  // end of get
     
   app.get("/showlist", function(req, res) {
      res.render("table");
    });

   app.post("/updatelist", function(req, res) {
      // res.render("table.html");
      let resultList;
      MongoClient.connect(
        "mongodb://localhost:27017",
        { useUnifiedTopology: true },
        async function(err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");          
          dbo
            .collection("accounthistory")
            .find({})
            .toArray(function(err, result) {
              resultList = result;
              if (err) throw err;
              //console.log("find all : ", result);
              res.render("tableplace", { data_list: resultList });
              db.close();
            });
        }
      );
   });

   app.get("/feedbacklist", function(req, res) {
      // res.render("table.html");
      let resultList;
  
      MongoClient.connect(
        "mongodb://localhost:27017",
        { useUnifiedTopology: true },
        async function(err, db) {
          if (err) throw err;
          var dbo = db.db("test");
          dbo
            .collection("testtable")
            .find({})
            .toArray(function(err, result) {
              resultList = result;
              if (err) throw err;
              //console.log("find all : ", result);
              res.render("feedbacklist", { data_list: resultList });
              db.close();
            });
        }
      );
   });

   app.get("/feedbacklistmatch", function(req, res) {
    // res.render("table.html");
    let resultList;

    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      async function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo
          .collection("testtable")
          .find({})
          .toArray(function(err, result) {
            resultList = result;
            if (err) throw err;
            //console.log("find all : ", result);
            res.render("feedbacklistmatch", { data_list: resultList });
            db.close();
          });
      }
    );
   });
   
   app.get("/userslist", function(req, res) {
      // res.render("table.html");
      let resultList;
  
      MongoClient.connect(
        "mongodb://localhost:27017",
        { useUnifiedTopology: true },
        async function(err, db) {
          if (err) throw err;
          var dbo = db.db("test");
          dbo
            .collection("testtable")
            .find({})
            .toArray(function(err, result) {
              resultList = result;
              if (err) throw err;
              //console.log("find all : ", result);
              res.render("userslist", { data_list: resultList });
              db.close();
            });
        }
      );
   });
   
   app.get("/clientslist", function(req, res) {
      // res.render("table.html");
      let resultList;
  
      MongoClient.connect(
        "mongodb://localhost:27017",
        { useUnifiedTopology: true },
        async function(err, db) {
          if (err) throw err;
          var dbo = db.db("test");
          dbo
            .collection("testtable")
            .find({})
            .toArray(function(err, result) {
              resultList = result;
              if (err) throw err;
              //console.log("find all : ", result);
              res.render("clientslist", { data_list: resultList });
              db.close();
            });
        }
      );
   });

   app.get("/suggestslist", function(req, res) {
      // res.render("table.html");
      let resultList;
  
      MongoClient.connect(
        "mongodb://localhost:27017",
        { useUnifiedTopology: true },
        async function(err, db) {
          if (err) throw err;
          var dbo = db.db("test");
          dbo
            .collection("testtable")
            .find({})
            .toArray(function(err, result) {
              resultList = result;
              if (err) throw err;
              //console.log("find all : ", result);
              res.render("suggestslist", { data_list: resultList });
              db.close();
            });
        }
      );
   });

   app.get("/giftcardlist", function(req, res) {
    // res.render("table.html");
    let resultList;

    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      async function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo
          .collection("testtable")
          .find({})
          .toArray(function(err, result) {
            resultList = result;
            if (err) throw err;
            //console.log("find all : ", result);
            res.render("giftcardlist", { data_list: resultList });
            db.close();
          });
      }
    );
 });

 app.get("/pointlist", function(req, res) {
  // res.render("table.html");
  let resultList;

  MongoClient.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    async function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      dbo
        .collection("testtable")
        .find({})
        .toArray(function(err, result) {
          resultList = result;
          if (err) throw err;
          //console.log("find all : ", result);
          res.render("pointlist", { data_list: resultList });
          db.close();
        });
    }
  );
 });

   app.get("/deletelist", function(req, res) {
      // res.render("table.html");
      let resultList;
  
      MongoClient.connect(
         "mongodb://localhost:27017",
         { useUnifiedTopology: true },
         function(err, db) {
           if (err) throw err;
           var dbo = db.db("test");
           var myquery = { address: req.params.address };
           dbo.collection("testtable").deleteMany(myquery, function(err, obj) {
             if (err) throw err;
             console.log("deleteAll : ", obj.result.n + " document(s) deleted" + req.params.address);
             db.close();
           });
         }
       );
   });

   app.post("/deleteone", function(req, res) {
      // res.render("table.html");
      let resultList;
      console.log("adress : " , req.body.acntItem)
      MongoClient.connect(
         "mongodb://localhost:27017",
         { useUnifiedTopology: true },
         function(err, db) {
           if (err) throw err;
           let address = req.body.acntItem;
           let dbo = db.db("test");
           let myquery = { address: address };
           console.log("deleteOne : yet 1 document deleted" + address);
           dbo.collection("testtable").deleteOne(myquery, function(err, obj) {
             if (err) throw err;
             console.log("deleteOne : 1 document deleted" + address);
             db.close();
           });
         }
       );
   });

   app.get("/findone", function(req, res) {
      // res.render("table.html");
      let resultList;
  
      MongoClient.connect(
         "mongodb://localhost:27017",
         { useUnifiedTopology: true },
         function(err, db) {
           if (err) throw err;
           var dbo = db.db("test");
           var query = { name: "testname" };
           dbo
             .collection("testtable")
             .find(query)
             .toArray(function(err, result) {
               if (err) throw err;
               console.log("find address : ", result);
               db.close();
             });             
         }
       );
   });
   
  app.post("/acntHistoryInput", function(req, res) {
    // res.render("table.html");
    let resultList;
 
        // Insert data
    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        let postPutAcntDate = req.body.putAcntDate;
        let postPutAcntItem = req.body.putAcntItem;
        let postPutAcntAmount = req.body.putAcntAmount;
        let postPutAcntEtc = req.body.putAcntEtc;
        let myobj = { acntid: "asdf", acntdate: postPutAcntDate, acntitem: postPutAcntItem , acntamount: postPutAcntAmount , acntetc: postPutAcntEtc };
        dbo.collection("accounthistory").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      }
    );
    res.render('index.html')
  });

  app.post("/matchReq", function(req, res) {
    // res.render("table.html");
    let resultList;
 
    // updated
    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        //req.body.putAcntAmount
        var myquery = { gid: "asdf" };
        var newvalues = { $set: { gsdate: req.body.putGsDate, gterm : req.body.putGTerm } };
        dbo
          .collection("goal")
          .updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
          });
      }
    );
  });


};
