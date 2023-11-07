var friendsAge = [15,17,19,23,16];
var sonaliAge = friendsAge[2];
var abirAge = friendsAge[1] = 33;
console.log(abirAge);
console.log(friendsAge[4]);
console.log(sonaliAge);

var position = friendsAge.indexOf(16);
console.log(position);

friendsAge.push(37);
friendsAge.push(19);

console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
friendsAge.unshift(17);
console.log(friendsAge);

var friendsName = ['Abir','Turag','Imran','Irfan'];
console.log(friendsName);
var namePart = friendsName.slice(1);
console.log(namePart);
var namePart2 = friendsName.slice(1,3);
console.log(namePart2);