/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
    User.check({name:'test'},function(err,user){		
		return res.send(user.email);
  	})
  },

  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  },

  creat:function(req,res){
  	User.creat({
  		name:req.param('name'),
  		email:req.param('email')
  	},function(err,user){
  		if (err) return res.negotiate(err);
  		return res.send(user.name + " with "+ user.email + "has been created!")
  	})
  }
};

