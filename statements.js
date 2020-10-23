//Function declaration 
//(If you want to call a statement multipl times then we use function)
function msg() 
{
    document.write("<br>This is function statement 1");
    document.write("<br>This is function statement 2");
}

msg();
msg();

function sum() //This will print the same value 2 times
{
    let num1=20;
    let num2=30;
    document.write("<br>Sum of two number is="+(num1+num2));
}

sum();
sum();

function summ(num1,num2) //Parameters(num1,num2) Differet times different value
                         //--Never use let,var keyword in a function
                         //No need to declare a variable
{
    document.write("<br>Sum of two number ="+(num1+num2));
}

summ(30,40);
summ(50,60);

document.write("<br>This is document object");//single statement

let num=10;
if(num>10)
{
    document.write("<br>This is conditional statement 1");
    document.write("<br>This is conditional statement 2");
}
else
{
    document.write("<br>This is conditional statement under else");
}

let i=0;
for(i=0;i<10;i=i+2)
{
   document.write("<br>This is a for looping statement"+i);    
}

let j=0;
while(j<10)
{
    document.write("<br>This is a while looping statement"+j);
    j++;
}

function greater(num1,num2) //You can also use for/while loop in a function
{
    if(num1>num2)
    {
        document.write("<br>Num 1 is greater="+num1);
    }
    else
    {
        document.write("<br>Num 2 is greater="+num2);
    }
}

greater(76,39);