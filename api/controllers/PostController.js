module.exports = {

  getpost:function(req,res){
  	Post.getpost({
  		name:req.params.postname,
  	},function(err,post){
  		if (err) return res.negotiate(err);
  		return res.send(post.toJSON() )
  	})
  },
  postpost:function(req,res){
    Post.post({
      name:req.param('name'),
      content:req.param('content')
    },function(err,post){
      if (err) return res.negotiate(err);
      return res.send(post.name + " /n"+ post.content )
    })
  }
};


