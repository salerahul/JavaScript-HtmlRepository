var books = [];
var input = prompt("Which opertaion you want to perform? [add|delete|exit|list]");
while(input != "exit"){
    if(input == "add"){
        addBook();
    } else if(input == "list"){
        listBooks();
    } else if(input == "delete"){
        deleteBook();
    } else{
        console.log("Please choose valid option.");
    }
    input = prompt("Which opertaion you want to perform? [add|delete|exit|list]");
}
console.log("Thnanks for our application.");

function addBook(){
    var bookName = prompt("Wnter book name to add?");
    books.push(bookName)
}

function listBooks(){
    console.log("List of available books :")
    for(boook of books){
        alert(boook);
    }
}

function deleteBook(){
    var bookName = prompt("Enter book name to delete.");
    var index = books.indexOf(bookName);
    if(index == -1){
        console.log("Specified book not available");
    } else{
        books.splice(index, 1);
        console.log("Specified book is deleted.");
    }
}