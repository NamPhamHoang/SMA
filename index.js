var fs = require('fs')
var readline = require('readline')
var rd = readline.createInterface({
    input: fs.createReadStream('test.txt'),
    //output: process.stdout,
    console: true
});
var comment = ["/*", "*/", "//"]
var arrays = []
function readFileByLine(index) {
    rd.on('line', function(line) {
        arrays.push(line)
    })
    .on('close', function(line) {
        commentCount(arrays)
    });   
}

function commentCount(arrays) {
    var physical = 0 , comment = 0 , logic = 0 ;
    for(var i=0;i<arrays.length;i++) {
        if(checkComment(arrays[i]))
            comment++
        if(checkLogic(arrays[i]))
            logic++
        if(checkPhysic(arrays[i]))
            physical++ 
        
    }
    console.log(logic, physical, comment)
}

function checkComment(txt) {
    if(txt.match(/("\/\*)|("\*\/")/)) {
        return false
    }
    else if(txt.match(/\/\/|\/\*|\*\//)){
        return true
    }
}

function checkPhysic(txt) {
    var space = txt.trim().length;
    if(!checkComment(txt) && space !== 0)
        return true;
    else
        return false;
}
function checkLogic(txt){
    var space = txt.trim();
    if(checkPhysic(txt) && space !== "{" && space !== "}")
        return true;
    else
        return false;
}
function main() {
    readFileByLine()
}

main()
