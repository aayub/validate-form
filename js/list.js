/*
Name: Aayushi Baral
Student Number: 137543187
BTI225
*/
// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];




// DIRECTORY
var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){ 
    
    // FRUITS
    var fLen = fruits.length;
    text = "<ol>";
    for (var i=0;i<fLen;i++){
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ol>";
    document.getElementById('list1').innerHTML = text;
    
    // DIRECTORY
    var dLen = directory.length;
    text2 = "<ul>";
    for (var j=0;j<dLen;j++){
        if (directory[j].type === "file"){
            text2 += "<li>" + directory[j].name + "</li>"
        } else if (directory[j].type === "directory"){
            
            text2 += "<li>" + directory[j].name;
            for (var k=0; k< directory[j].files.length;k++){
                text2 += "<ul><li>" + directory[j].files[k].name + "</li></ul>";
}
            text2 += "</li>";
        }
    }
    text2 += "</ol>";
    document.getElementById('list2').innerHTML = text2;
}





