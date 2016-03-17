module.exports = {

	attributes: {
		name:{
			type:'string'
		},
		content:{
			type:'string'
		}
	},

	post:function(inputs,cb){
		Post.create({
			name:inputs.name,
			content:inputs.content
		}).exec(cb);
	},
	getpost:function(inputs,cb){
		Post.findOne({
			name:inputs.name
		}).exec(cb);
	},
};
