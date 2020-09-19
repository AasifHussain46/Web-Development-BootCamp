var express=require("express");
var router=express.Router();
var Campground=require("../models/campground");
var middleware =require("../middleware");

router.get('/',function(req,res){
	Campground.find({},function(err,campgrounds){
		if(err){
			console.log(err);
		}
		else{
			res.render("campgrounds/index",{campgrounds:campgrounds});
		}
	});
});

router.post("/",middleware.isloggedIn,function(req,res){
	var name=req.body.name;
	var price=req.body.price;
	var image=req.body.image;
	var dsc=req.body.description;
	var author={
		id: req.user._id,
		username: req.user.username
	}
	var newcamp={ name: name,price:price,image:image, description:dsc,author: author}
	Campground.create(newcamp,function(err,campgrounds){
								if(err){
									console.log(err);
										}
								else{
									console.log(campgrounds);
									res.redirect("/campgrounds");
									}}
					  );
});
router.get("/new",middleware.isloggedIn,function(req,res){
	res.render("campgrounds/new");
});
router.get("/:id",function(req,res){
	Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
		if(err || !foundCampground){
			req.flash("error","Campground Not Found");
			res.redirect("back");
		} else {
			console.log(foundCampground);
			res.render("campgrounds/show", {campground : foundCampground});
		}
	});
});

router.get("/:id/edit",middleware.checkcampgroundownership,function(req,res){
	Campground.findById(req.params.id,function(err,foundCampground){
			res.render("campgrounds/edit",{campground:foundCampground});
	});
	
});
router.put("/:id",middleware.checkcampgroundownership,function(req,res){
	Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		}else {
			res.redirect("/campgrounds/"+req.params.id);
		}
	});
});
router.delete("/:id",middleware.checkcampgroundownership,function(req,res){
	Campground.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/campgrounds");
		}	else{
			res.redirect("/campgrounds");
		}
	});
});

module.exports = router;