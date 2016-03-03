/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
	var resualt = User.findOne({name:'nenew'});
	var pro;
	var tt;
	for(pro in resualt)
{
  tt="pro"+"="+resualt[pro]+'<br>';
};
    return res.send(tt);
  },
  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
};

