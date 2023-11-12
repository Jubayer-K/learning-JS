var marks = [34,64,4,64,4,4,,646,64,4,45,];
var max = marks[0];
console.log(max);
for( var i = 0; i<marks.length; i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
};
console.log('highest value is :',max);