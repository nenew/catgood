module.exports = {

	attributes: {
		name:{
			type:'string'
		},
		content:{
			type:'string'
		},
		users:{
			collection: 'user',
			via: 'posts',
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


    toJSON: function() {
      var obj = this.toObject();
      return obj;
    },


};
