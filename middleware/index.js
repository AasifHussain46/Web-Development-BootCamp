var Campground=require("../models/campground");
var Comment=require("../models/comment");

var middlewareObj= {};

middlewareObj.checkcampgroundownership = function(req,res,next){
	if(req.isAuthenticated()){
		Campground.findById(req.params.id,function(err,foundCampground){
				if(err || !foundCampground){
					req.flash("error","Campground Not Found");
					res.redirect("back");
				} else{
						if(foundCampground.author.id.equals(req.user._id)){
						next();
						}
						else {
							req.flash("error","Permission Denied");
							res.redirect("back");
						}
					}
			});
	}	else{
		req.flash("error","You need to be login to do that");
		res.redirect("back");
	}
}
middlewareObj.checkcommentownership = function(req,res,next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id,function(err,foundComment){
				if(err || !foundComment){
					req.flash("error","Comment Not Found");
					res.redirect("back");
				} else{
						if(foundComment.author.id.equals(req.user._id)){
						next();
						}
						else {
							res.redirect("back");
						}
					}
			});
	}	else{
		req.flash("error","You need to be login to do that");
		res.redirect("back");
	}
}
middlewareObj.isloggedIn = function (req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error","You need to be login to do that");
	res.redirect("/login");
}

module.exports =middlewareObj;