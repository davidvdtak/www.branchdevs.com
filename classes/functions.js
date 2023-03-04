"use strict";

const zlib = require('zlib');

exports.query_to_json = function(body) {    
    
    if(!Buffer.isBuffer(body)){
        return typeof body !== "object" ? JSON.parse(body) : body;
    }

    var query = body.toString('utf-8');        

    try {        
        var object = JSON.parse(query);
        return object;
    } catch(e) {}

    var pairs = query.split('&');
    var result = {};

    pairs.forEach(function(p) {
        var pair = p.split('=');
        var key = decodeURIComponent(pair[0]);
        var value = pair[1] || '';
        value = value.replace(/\+/g, '%20');
        value = decodeURIComponent(value);

        if(key.includes("[")){
            var subkeys = key.split('[');
            var mkey = subkeys[0].replace(']', '')
            var skey = subkeys[1].replace(']', '')
            
            if(!result[mkey]) {
                result[mkey] = {};
            }
            result[mkey][skey] = value;
                        
        } else {
            if( result[key] ) {
                if( Object.prototype.toString.call( result[key] ) === '[object Array]' ) {
                    result[key].push( value );
                } else {
                    result[key] = [ result[key], value ];
                }
            } else {
                result[key] = value;
            }
        }
    });

    return JSON.parse(JSON.stringify(result));
}

exports.compress_string = function(body) {  
    let deflated;
    try {    
        deflated = zlib.gzipSync(body).toString('base64');        
    } catch(e){ }

    return deflated;
}

exports.decompress_string = function(body) {  
    let inflated;
    try {              
        inflated = zlib.gunzipSync(Buffer.from(body, 'base64')).toString("utf-8")  
    } catch(e){
        console.log(e);
    }

    return inflated;
}