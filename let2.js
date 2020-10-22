var data="This is global variable";


function changetext()
    {
        let data="This is P Tag replacement data";
        document.getElementById("demo").innerHTML=data; 
        
       text();
    }

    document.write(data);
    function text()
    {
        let data="This is change data";
        document.getElementById("demo").innerHTML=data;      
    }    
    document.write(data);