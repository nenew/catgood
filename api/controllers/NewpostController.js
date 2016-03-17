/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  showUrl: function (req, res) {
    return res.send("request url :" + req.params.url );
    }
  };

