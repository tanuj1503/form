var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var x = 0;
var n = 1;

function addrow()
{
    var Addrow = document.getElementById("show");
    var newrow = Addrow.insertRow(n);

    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("lname").value;
    list3[x] = document.getElementById("roll").value;
    list4[x] = document.getElementById("sem").value;
    list5[x] = document.getElementById("book").value;

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];
    cell5.innerHTML = list5[x];

    cell1.style.padding = "14px";
    cell1.style.textAlign = "center";

    n++;
    x++;
}