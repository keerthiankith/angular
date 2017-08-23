var User = require("../model/user");

exports.registerUser = function (req, res) {
    console.log(req.body);
    
    var email = req.body.email;
    var password = req.body.password;
    var mobile = req.body.mobile;
    
    var newUser = new User({
        
        email: email,
        password: password,
        mobile: mobile
    });
    User.findOne({ email: email }, function (err, event) {
        if (err) {
            res.send({status : false, message:"Error occured while finding if email exists", err});
            console.error(err);
        }
        else {
            if (event == null) {
                newUser.save(function (err1, result) {
                    if (err1) {
                        res.send({ status: false, message: "Registration failed", err1 });
                        console.error(err1);
                    } else {
                        res.send({ status: true, message: "Registration successful", result });
                        console.log(result);
                    }
                });
            } else {
                res.send({ status: false, message: "Email already exists", event });
                console.log("email already exists:" + event);
            }
        }
    });
}
exports.loginUser = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({email : email}, function(err,obj){
       if(err){
           res.send({status : false, message : "error occured while procesing login request"});
           console.log(err);
       } else {
           if(obj == null){
               res.send({status : false, message : "User not registered"});
           } else {
               if(obj.password == password){
                   res.send({status : true, message : "login successful", obj});
                   console.log(obj);
               } else {
                   res.send({status : false, message : "Incorrect password"});
                   console.log(obj);
               }
           }
       }
    });
}



