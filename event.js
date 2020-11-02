function checktext(obj){
    let data=obj.value;
    let checkname=/^[a-zA-Z]+$/; //regular expression
    if(checkname.test(data)===false)
    { 
    alert("Please enter correct namme");
    obj.value="";
    obj.setFocus=true;
    }      
}

function checknumber(obj){
    let data=obj.value;
    data=parseInt(data);
    if(!Number.isInteger(data))
    {
        alert("Please enter correct Age");
        obj.value="";
        obj.setFocus=true;
    }
}