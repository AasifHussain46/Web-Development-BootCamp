var mongoose=	require("mongoose");
var Campground =require("./models/campground");
var Comment   = require("./models/comment");

// var data=[
// 	{name: "Cloud's Rest",
// 	image:"https://cnet3.cbsistatic.com/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg",
// 	description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 	mollit anim id est laborum."},
// 	{name: "Agriculture",
// 	image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSls9BKgCziHpI5OcNLVVs9q6KMCKjH5mEu1g&usqp=CAU",
// 	description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 	mollit anim id est laborum."},
// 	{name: "Red tree",
// 	image:"https://images.livemint.com/img/2020/03/04/600x338/night_mode_1583315047071.jpg",
// 	description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 	mollit anim id est laborum."}
// ]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({})
    // , function(err){
    // //     if(err){
    // //         console.log(err);
    // //     }
    // //     console.log("removed campgrounds!");
    // //      //add a few campgrounds
    // //     data.forEach(function(seed){
    // //         Campground.create(seed, function(err, campground){
    // //             if(err){
    // //                 console.log(err)
    // //             } else {
    // //                 console.log("added a campground");
    // //                 //create a comment
    // //                 Comment.create(
    // //                     {
    // //                         text: "This place is great, but I wish there was internet",
    // //                         author: "Homer"
    // //                     }, function(err, comment){
    // //                         if(err){
    // //                             console.log(err);
    // //                         } else {
    // //                             campground.comments.push(comment);
    // //                             campground.save();
    // //                             console.log("Created new comment");
    // //                         }
    // //                     });
    // //             }
    // //         });
    // //     });
    // }); 
    //add a few comments
}

module.exports =seedDB;