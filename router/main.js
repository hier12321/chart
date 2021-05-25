const bodyParser = require('body-parser');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/test";

module.exports = function(app) {
     app.use(bodyParser.json());       // to support JSON-encoded bodies
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
         extended: true
      }));
     
      app.get('/',function(req,res){
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

   app.get("/updatelist", function(req, res) {
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

   app.get("/deleteone", function(req, res) {
      // res.render("table.html");
      let resultList;
  
      MongoClient.connect(
         "mongodb://localhost:27017",
         { useUnifiedTopology: true },
         function(err, db) {
           if (err) throw err;
           let address = req.body.address;
           var dbo = db.db("test");
           var myquery = { address: address };
           console.log("deleteOne : yet 1 document deleted" + req.body.address);
           dbo.collection("testtable").deleteOne(myquery, function(err, obj) {
             if (err) throw err;
             console.log("deleteOne : 1 document deleted" + req.body.address);
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
   
};
