//Different ways of declaring a array
//+ is concatination


//let numbers=[12,35,67,89,45];  /old regular js 
//document.write("Numbers");
//for(let i=0;i<numbers.length;i++) //numbers.length i.e; number of elements in a array 
                                  //number is an array, length is a state i.e; property
//{
//    document.write("<br>"+numbers[i]); //index value is i , index value will be displayed
//}

let numbers=[12,35,67,89,45];  
document.write("Numbers");
numbers.forEach(function(value){  //modern js
    document.write("<br>"+value);
});
document.write("<br><br>Numbers with Index Values")
numbers.forEach(function(value,index){  //modern javascript with using node js function
document.write("<br>"+index+"="+value);  //for chcking with index value
});

let number1=new Array(12,35,67,89,45);  //Initialization and declaration together
document.write("<br><br>Numbers1")
for(let i=0;i<number1.length;i++)       
{
    document.write("<br>"+number1[i]); 
}


let number2=new Array(12,35,"67","kiet",98.3,89,45,new Array(47,38,43,53,5));  //Initialization and declaration together
document.write("<br><br>Numbers2")
for(let i=0;i<number2.length;i++)       
{
    document.write("<br>"+number2[i]); 
}
let obj={name:"akhil",address:"kiet"};
document.write("<br>Name="+obj.name+" and address="+obj.address);
let obj1=new Object();
obj1.name="Abhi";
obj1.address="Kiet";
document.write("<br>Name="+obj.name+" and address="+obj1.address);
