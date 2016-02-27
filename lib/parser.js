const fs = require('fs');

fs.readFile('./../out.txt','utf8','r', (err, data) => {
    if (err) throw err;
var regexp = /\d{4} \d{6}/g;
var matches_array = data.match(regexp);
var rObj = {};
matches_array.map(function(str){

    d= str.split(' ');
    rObj[d[0]]=d[1];
//    str= `[ ${d[0]} : ${d[1]} ]`;
    //console.log(str);
});
console.log(rObj);
fs.writeFile('./lib/out.json',JSON.stringify(rObj), 'utf8','w+' )
});