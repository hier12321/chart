const bodyParser = require('body-parser');
//var MongoClient = require("mongodb").MongoClient;
//var url = "mongodb://localhost:27017/test";
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const alert = require('alert');

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
            .find({acntitem : req.body.shAcntItem})
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

  app.post("/sendPwdEmail", function(req, res) {
    //res.status(400).send('email required');
    const token = crypto.randomBytes(5).toString('hex'); // token 생성  20
    const data = { // 데이터 정리
      token,
      //userId: 'asdf',//user.id
      ttl: 6000 // ttl 값 설정 (100분)
    }; 

    // updated
    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //req.body.putAcntAmount
        var myquery = { id: req.body.findPwdId, roll: req.body.findPwdRoll };
        var newvalues = { $set: { pwd: token } };
        dbo
          .collection("privacy")
          .updateOne(myquery, newvalues, function(err, res) {
            if (err) {alert("일치하는 정보를 찾을 수 없습니다.");
               throw err;
            }else{
              //메일 전송
              const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: { // 이메일을 보낼 계정 데이터 입력
                  user: 'mejjh0416@gmail.com',
                  pass: '',
                },
              });
              const emailOptions = { // 옵션값 설정
                  from: 'mejjh0416@gmail.com',
                  to: 'mejjh0416@naver.com',
                  subject: '비밀번호 초기화 이메일입니다.',
                  text: 'This is the authentication code to find the password!', // 내용
                  html: '비밀번호 초기화를 위한 임시 비밀번호 입니다. '
                    + `임시비밀번호 : ${token}`
                  //+ `http://localhost/resetpwd/${token}`
                   ,
              };  
          
              transporter.sendMail(emailOptions, function(error, res){
          
                if (error){
                  console.log(error,"error T.T");
                } else {
                  console.log("Message sent : " + res.message);
                }
                transporter.close();
              });

            }
            console.log("1 document updated");
            db.close();
          });
      }
    );

    
    res.render('login.html')
  });

  app.post("/insertPrivacy", function(req, res) {
    // res.render("table.html");
    let resultList;
 
        // Insert data
    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        let postsignEmail = req.body.signEmail;
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

  app.post("/loginIn", function(req, res) {
    // res.render("table.html");
    let resultList;
 
    // // Find name and address
    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("privacy").findOne({id: req.body.loginId, pwd: req.body.loginPwd}, function(err, result) {
            resultList = result;
            if (err) throw err;

            if(resultList) res.render("index.html", { userData_list: resultList });
            if(!resultList) alert("정보가 일치하지 않습니다.");

            console.log("input loginId and loginPwd : ", req.body.loginId," & ",req.body.loginPwd);
            console.log("find Id and Pwd : ", result);
            
            db.close();
          });
      }
    ); 

    // Join the matching "products" document(s) to the "orders" collection:
    MongoClient.connect(
      "mongodb://localhost:27017",
      { useUnifiedTopology: true },
      function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo
          .collection("privacy")
          .aggregate([
            {
              $lookup: {
                from: "goal",
                localField: "id",
                foreignField: "gid",
                as: "id"
              }
            }
          ])
          .toArray(function(err, res) {
            resultList = result;
            if (err) throw err;
            if (resultList) res.render("index.html", { userData_list: resultList });
            if (!resultList) alert("정보가 일치하지 않습니다.");

            console.log("input loginId and loginPwd : ", req.body.loginId," & ",req.body.loginPwd);
            console.log("find Id and Pwd : ", result);            
            console.log("aggregate: ", JSON.stringify(res));
            db.close();
          });
      }
    );

  });
};





