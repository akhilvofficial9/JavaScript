var data="This is global variable";
data="This is changed value of data"

function changetext()
    {
        data="This is P Tag replacement data";
        document.getElementById("demo").innerHTML=data; 
        
       text();
    }

    document.write(data);
    function text()
    {
        let data="This is change data";
      
    }    
    document.write(data);