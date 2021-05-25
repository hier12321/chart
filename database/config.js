var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/test";

MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  }
);

// Insert data
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("testtable").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }
);

// insert multi data
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myobj = [
      { name: "John", address: "Highway 71" },
      { name: "Peter", address: "Lowstreet 4" },
      { name: "Viola", address: "Sideway 1633" }
    ];
    dbo.collection("testtable").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  }
);

// find one
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("testtable").findOne({}, function(err, result) {
      if (err) throw err;
      console.log("findOne : ", result.name);
      db.close();
    });
  }
);

// Find all
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo
      .collection("testtable")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
      //   console.log("find all : ", result);
        db.close();
      });
  }
);

// Find name and address
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo
      .collection("testtable")
      .find({}, { projection: { _id: 0, name: 1, address: 1 } })
      .toArray(function(err, result) {
        if (err) throw err;
        console.log("find name and address : ", result);
        db.close();
      });
  }
);

// find exclude "addrss"
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo
      .collection("testtable")
      .find({}, { projection: { address: 0 } })
      .toArray(function(err, result) {
        if (err) throw err;
        console.log("projection : ", result);
        db.close();
      });
  }
);

// find the address "Park Lane 38":
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var query = { address: "Highway 37" };
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

// find the address starts with the letter "S"
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var query = { address: /^S/ };
    dbo
      .collection("testtable")
      .find(query)
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(" letter : ", result);
        db.close();
      });
  }
);

// find Sort Descending
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var mysort = { name: -1 };
    dbo
      .collection("testtable")
      .find()
      .sort(mysort)
      .toArray(function(err, result) {
        if (err) throw err;
        console.log("sort : ", result);
        db.close();
      });
  }
);

// delete the document
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myquery = { address: "Mountain 21" };
    dbo.collection("testtable").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("deleteOne : 1 document deleted");
      db.close();
    });
  }
);

// delete all
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myquery = { address: /^O/ };
    dbo.collection("testtable").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log("deleteAll : ", obj.result.n + " document(s) deleted");
      db.close();
    });
  }
);

// updated
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myquery = { address: "Sideway 1633" };
    var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
    dbo
      .collection("testtable")
      .updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
  }
);

// Update all documents where the name starts with the letter "S":
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myquery = { address: /^S/ };
    var newvalues = { $set: { name: "Minnie" } };
    dbo
      .collection("testtable")
      .updateMany(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
      });
  }
);

//Limit the result to only return 5 documents:var
MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo
      .collection("testtable")
      .find()
      .limit(5)
      .toArray(function(err, result) {
        if (err) throw err;
        console.log("limit: ", result);
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
    var dbo = db.db("test");
    dbo
      .collection("testtable")
      .aggregate([
        {
          $lookup: {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "orderdetails"
          }
        }
      ])
      .toArray(function(err, res) {
        if (err) throw err;
        console.log("aggregate: ", JSON.stringify(res));
        db.close();
      });
  }
);