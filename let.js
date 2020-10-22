let data="This is global variable";
document.write(data);
function changetext()
    {
        let value="This is P Tag replacement data";
        document.getElementById("demo").innerHTML=value;      
    }