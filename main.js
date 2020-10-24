var nameOfTheStudent = [];
function submit() {
    var displayStudentArray = [];
    for (var j = 1; j <= 5; j++) {
        var name = document.getElementById("nameOfStudent" + j).value;
        console.log(name);
        nameOfTheStudent.push(name);
    }
    console.log(nameOfTheStudent);
    var lengthOfName = nameOfTheStudent.length;
    console.log(lengthOfName);
    for (var k = 0; k < lengthOfName; k++) {
        displayStudentArray.push("<h4> name - " + nameOfTheStudent[k] + "</h4>");
        console.log(displayStudentArray);
    }
    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;
    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithCommas").innerHTML = removeCommas;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}
function sorting() {
    nameOfTheStudent.sort();
    console.log(nameOfTheStudent);
    var displayStudentArraySorting=[];
    var length=nameOfTheStudent.length;
    console.log(length);
for (var s = 0; s<length; s++){
   displayStudentArraySorting.push("<h4> name - " + nameOfTheStudent[s] + "</h4>") ;
   console.log(displayStudentArraySorting);
}

var removeCommas = displayStudentArraySorting.join(" ");
document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
console.log(removeCommas);

}
