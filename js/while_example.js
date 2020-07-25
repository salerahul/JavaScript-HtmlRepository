var numbers = [10, 20, 30, 40, 50, 60, 70];
var i = 0;
while(i < numbers.length){
    console.log(numbers[i]);
    i++;
}

for(var i=0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for(x of numbers){
    alert(x);
}

numbers.forEach(function(x){console.log(x)});

function show(x){
    alert(x)
}

numbers.forEach(show(x));

var heroines = ["veena", "sunny", "Deepika", "katrina", "Mallika"];
heroines.forEach(function(heroine){
    console.log("********************");
    console.log(heroine);
    console.log("*********************");
});

heroines[3] = "SHama";
console.log(heroines)

var name = "Sunny";
name[0] = "B";
console.log(name);

function max( array){
    var max = array[0];
    for(var i=0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

function sum( array){
    var sum = 0;
    for(no of array){
        sum = no+sum;
    }
    return sum;
}

 function demo(){
     console.log("Done");
     
 }

var movies = {
    here : "Prabhas",
    year :2016,
    name : "Bahubai",
    getInfo : function(){
        console.log("Movie Name :: "+this.name);
        
    },
    test : demo
}

var object = {
    name : "Rahul",
    add   : "Pune",
    qlfy : "B.E",
    dob : "14-02-1991"
}

for(key in object){
    console.log(object[key]);
}

var moviess = [
    {name : "Bahubali", isWatched : true, isHit : true},
    {name : "Sanju", isWatched : false, isHit : true},
    {name : "Spider", isWatched : false, isHit : true}
]

moviess.forEach(function(movie){
     var result = "";
     if(movie.isWatched == true){
        result = result+" I watched";
     } else{
         result = result + " I hava not seen";
     }
     result = result +movie.name;
     if(movie.isHit == true){
        result = result + " And Movie is hit !!!";
     }else{
         result = result+" And movie is flop !!!";
     }

     console.log("result :"+result);
});

var links = document.querySelector('a');
for(link of links){
    link.style.background = "Green";
    link.style.color = "White";
    link.style.textContnt = "Sunny";
}