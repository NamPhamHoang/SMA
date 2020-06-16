module.exports.ifModel = function ifModel(arrays, begin) {
    var connect = ""
    var path = []
    for(var i = begin-1;i<arrays.length;i++) {
        if(arrays[i-1] === '{') {
            var head = i;
            var index = i;
            path.push(head)
            while(arrays[index] !== '}'){
                index++;
            }
            var tail = index
            path.push(tail)         
        }
    }
    console.log(path)
} 
module.exports.forModel = function forModel(arrays, begin) {
   
} 
module.exports.whileModel = function whileModel(arrays, begin) {
  
} 
