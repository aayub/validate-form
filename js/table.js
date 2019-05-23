/*
Name: Aayushi Baral
Student Number: 137543187
BTI225
*/
// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

window.onload = function(){

// tableX
    var table = document.querySelector("#tableX");
    var uLen = users.length;
    var rows = "";
    for (var i=0;i<uLen;i++){
        rows += "<tr>" + 
            "<td>" + users[i].first_name + "</td>" + 
            "<td>" + users[i].last_name + "</td>" +
            "<td>" + users[i].age + "</td>" +
            "<td>" +
            '<a href="mailto:' + users[i].email + '">' +
            users[i].email + 
            "</a>" + "</td>" +
            "</tr>";
    }
    
    table.innerHTML += rows;

}

