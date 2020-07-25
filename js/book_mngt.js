var books = [];
var input = prompt("Which operation you want perform?[add|list|exist]:");
while(input != "exit"){
    if(input == "add"){
         var newBook = prompt("Enter name of the book to add");
         books.push(newBook);
    } else if(input == "list"){
        console.log("List of available books :");
        alert(books);
    } else{
        alert("Choose valid option.");
    }

    input = prompt("Which operation you want perform?[add|list|exist]:");
}
alert("Thanks for using our application.")