const NAVIGATION    = require('../data/navigation.json');
const ANNOUNCEMENT    = require('../data/announcements.json');

exports.local_data = async (req,res,next) => {    
    try {        
        res.locals.flashMessage = (req?.cookies?.flashMessage) ? JSON.parse(req.cookies.flashMessage) : false;   
        if(req?.cookies?.flashMessage){
            res.cookie('flashMessage','', {expires: new Date(0)});
        }      

        res.locals.user_token = (req?.cookies?.user_token) ? req.cookies.user_token : false;     
        res.locals.query = req.query;  
        res.locals.path = "/"+(req.path).trimStart("/");   
        
        res.locals.announcement = ANNOUNCEMENT ? ANNOUNCEMENT : {};        
        res.locals.navigation = NAVIGATION ? NAVIGATION : {};            
        
    } catch(e){ console.log(e) }
    
    next();
}