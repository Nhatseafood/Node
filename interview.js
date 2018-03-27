var array = [-3,-2,-1,0,1,2,3];
var counter = 0;

for (var i=0; i<array.length; i++) {
    for (var j= i + 1; j<array.length;i++) {
        if ((array[i] + array[j]) === 0) {
        counter + 1;
       
    }
}
}
console.log(counter)