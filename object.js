var student = {
    id: 121,
    phone: 2342521,
    name: "Abir",

};
var student2 = {
    id: 234,
    phone: 3203495,
    name: "Mahi"
};
var phone = student.phone;
console.log(student);
console.log(student2);
console.log(phone);

var phone2 = student2["phone"];
console.log(phone2);
// Update properties:
// method 1
student2.phone = 48293472;
// method 2
student2["phone"] = 84975627934;
// method 3
var updateMahiPhone = "phone";
student2[updateMahiPhone] = 392734837;

var phone2 = student2["phone"];
console.log(phone2);

// add property
student.class = 7.
student2.class = 9.

console.log(student);
console.log(student2);

let car = {
    name: "ford",
    model: "fiesta",
    weight: 850,
    color: "white",
    start: function (a) {
        console.log('car has started');
    },
    drive: function () {
        this.start();
        console.log('car is being driven');
    }
};
console.log(car.model);
car.drive();

