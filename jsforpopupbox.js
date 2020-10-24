//let showalert=()=>{        //This is not a function its a object
                             //Arrow Function in jS  //Java lambda function
//alert("This is Arrow box");  //latest java script code
//}


function showalert()
{
    window.alert("This is Alert Box "); //window. is optional
}


function showconfirm()
{
    let value=confirm("Do you want to display message?");
    if(value==true)
    {
        alert("Welcome to confirm box");
    }
    else
    {
        alert("You are not welcome");
    }
}

function showprompt()
{
    let name=prompt("Enter your name", "Kiet");
    if(name!=null)
    {
        alert("Welcome "+name);
    }
    else
    {
        alert("We do not know your name");
    }
}