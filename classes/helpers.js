'use strict';

let sections = {};

let helpers = {
    section: function(name, context) {   
        let section = sections[name];
        if (!section) section = sections[name] = [];        
        section.push(context.fn(this));
        return null;        
    },
    sections: function (name) {
        let val = (sections[name] || []).reverse().join('\n');            
        sections[name] = [];
        return val;
    },
    global: function(key){
        let keys = key.split(".");
        let value = '';
        let thisval = global;
        keys.forEach(function(e){                                 
            if(thisval[e]){                
                thisval = thisval[e];                
                value = thisval;
            }
        });
        return value;
    },
    assign: function (v1, v2 = false, options) {
        try {
            v2 = !v2 ? options.fn(this) : v2
            if (!options?.data?.root) { options.data = {}; options.data.root = {}; }
            options.data.root[v1] = v2;
        } catch(e){ console.log(e) }
        return null;
    },
    compare: function(v1, operator, v2, options){
        'use strict';
        var operators = {
            '==': v1 == v2 ? true : false,
            '===': v1 === v2 ? true : false,
            '!=': v1 != v2 ? true : false,
            '!==': v1 !== v2 ? true : false,
            '>': v1 > v2 ? true : false,
            '>=': v1 >= v2 ? true : false,
            '<': v1 < v2 ? true : false,
            '<=': v1 <= v2 ? true : false,
            '||': v1 || v2 ? true : false,
            '&&': v1 && v2 ? true : false,
            'slug' : v1.trimEnd('/') == v2.trimEnd('/') ? true : false
        }
        if (operators.hasOwnProperty(operator)) {
            if (operators[operator]) {
                return options.fn(this);
            }
            return options.inverse(this);
        }
        return console.error('Error: Expression "' + operator + '" not found');
    },
    slugify: function(str) {
        return str ? str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '') : '';        
    },
    json: function(object) {
        return JSON.stringify(object ? object : []);
    },
    for: function(from, to, incr, block) {
        var accum = '';
        for(var i = from; i < to; i += incr)
            accum += block.fn(i);
        return accum;
    },
    math: function(lvalue, operator, rvalue) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
    },
    currency: function(number, symbol){
        symbol = (!symbol || typeof symbol != 'String') ? "$" : symbol;

        let val = parseFloat(number).toFixed(2);
        let parts = val.toString().split(".");
        let num = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");

        return symbol + " "+ num;

    },
    lastItem: function(array){
        return Array.isArray(array) ? array[array.length - 1] : false
    },
    dateFormatted: function(date_epoch, timezone){         
        timezone = (!timezone || typeof timezone != 'string') ? "America/New_York" : timezone;
        date_epoch = parseInt(date_epoch);
        try {
            return date_epoch ? (new Date(String(date_epoch).length < 10 ? Math.floor(date_epoch * 1000) : date_epoch)).toLocaleString('en-US', { timeZone: timezone }) : "";
        } catch(e) {
            return "";
        }
    }
}

module.exports = helpers;