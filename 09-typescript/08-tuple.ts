type MyFirstTuple = [number, string]; // (*)

var empId: number = 1;
var empName: string = "Steve";
// Tuple type variable
var employee: MyFirstTuple = // (**)
    [empId, empName];


var employers: [number, string][]; // (*)
employers = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

