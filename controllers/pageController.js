const hbs = require('handlebars');
const hbshelpers = require('../classes/helpers');

exports.index = async function(req, res) {       
    
    for (var key in hbshelpers) {        
        hbs.registerHelper(key, hbshelpers[key]);
    }; 
    
    let path = (req.path == '' || req.path == '/')? 'home' : (req.path).replace(/^\/|\/$/g, '');    
    
    res.render("pages/"+path, {}, function(err, html) {
        try {
            if(err) { return res.status(404).render("errors/404"); }
        } catch(e){}
        res.send(html);
    });        
};