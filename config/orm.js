// Import MySQL connection.
var connection = require("../config/connection.js");


//selectAll()
var orm = { 
    all: function(tableInput, cb) 
    { 
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) 
        {  
        if (err) 
        { 
          throw err;
        } //end if
            cb(result);
        })
    }
}
  
//insertOne();
//updateOne();