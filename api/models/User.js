/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

 	attributes: {
 		name:{
 			type:'string'
 		},
 		email:{
 			type:'string'
 		},
 		posts:{
 			collection: 'post',
 			via: 'users',
 			dominant: true
 		}
 	},


 	check:function(inputs,cb){

 		User.findOne({

 			name:inputs.name
 		})
 		.exec(cb);
 	},
 	creat:function(inputs,cb){
 		User.create({
 			name:inputs.name,
 			email:inputs.email
 		}).exec(cb);
 	},

 	postupdate:function(inputs){
 		User.findOne({
 			name:inputs.name
 		}).exec(function(err,user){
 			user.posts.add(Post.findOne({name:inputs.post}).exec(function(err,p){return p.id}))
 		})
 	}


 };

