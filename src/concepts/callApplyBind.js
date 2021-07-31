let nameV = {
  firstName: 'Deepak',
  lastName: 'Rao Gaikwad',
  printFullName: function() {
    console.log(this.firstName + " " +this.lastName);
  }
};

let name2 = {
  firstName: 'Chinnamma',
  lastName: 'Rao Gaikwad'
};

let printFullName = function() {
    console.log(this.firstName + " " +this.lastName);
}

let printFullNameV2 = function(hometown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

nameV.printFullName();

let nameV2 = {
  firstName: 'Dilip',
  lastName: 'Rao Gaikwad'
};

// function borrowing
nameV.printFullName.call(nameV2);

printFullName.call(name2);
printFullName.call(nameV2);

printFullNameV2.call(name2, "belgaum", "Karnataka");
printFullNameV2.call(nameV, "bangalore", "Karnataka");

// apply
printFullNameV2.apply(nameV, ["bangalore", "Karnataka"]);


// bind
let printMyName = printFullName.bind(name2);
console.log(printMyName); // function
printMyName();