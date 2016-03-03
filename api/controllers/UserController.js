/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
    User.check({name:'test'},function(err,user){		
		return res.send(user.email)
	})
  },
  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
};

