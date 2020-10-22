var data="This is global variable";


function changetext()
    {
        var data="This is P Tag replacement data";
        document.getElementById("demo").innerHTML=data; 
        
       text();
    }

    document.write(data);
    function text()
    {
        var data="This is change data";
        document.getElementById("demo").innerHTML=data;      
    }    