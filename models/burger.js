// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
    create: function (val, cb) {
        orm.create("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },
    update: function(colVal, condition, cb) {
        orm.update("burgers", colVal, condition, function(res) {
          cb(res);
        });
      },
};


// Export the database functions for the controller
module.exports = burger;
