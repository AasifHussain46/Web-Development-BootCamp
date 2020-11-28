var 	express		= require("express")
	app		=express(),
	bodyParser	=require("body-parser"),
	mongoose	=require("mongoose"),
	Campground	=require("./models/campground"),
	Comment		=require("./models/comment"),
	seedDB		=require("./seed"),
	passport	=require("passport"),
	LocalStrategy=require("passport-local"),
	User		=require("./models/user"),
	methodOverride=require("method-override"),
	flash		=require("connect-flash");

require('dotenv').config()
//requiring routes
var campgroundRoutes	= require("./routes/campgrounds"),
    commentRoutes	= require("./routes/comments"),
    authRoutes		=require("./routes/index");
	
const pass=process.env.password;
mongoose.connect("mongodb+srv://campground:"+pass+"@campground.u8dxx.mongodb.net/<dbname>?retryWrites=true&w=majority",{
		  useNewUrlParser: true,
		  useUnifiedTopology: true
		});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

// 	Passport Configuration
app.use(require("express-session")({
	secret:"Onece again I won",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser= req.user;
	res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
	next();
});

app.use(authRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

var port = process.env.PORT || 6544;
app.listen(port, function () {
  console.log("Server Has Started!");
});
