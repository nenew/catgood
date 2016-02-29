/**
 * ViewtestController
 *
 * @description :: Server-side logic for managing viewtests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	viewtest:function(req,res){
		return res.view('viewtest',{
		layout: 'viewtest',
		title:'viewtest-title',
		});
	}
};
