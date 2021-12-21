var data=[{name:"shirt",size:"medium",price:1000,path:"img/m1.webp"},
{name:"pants",size:"large",price:6000,path:"img/m2.webp"},
{name:"shorts",size:"small",price:5000,path:"img/m3.webp"},
{name:"kurta",size:"medium",price:2000,path:"img/w1.webp"},
{name:"formal",size:"XL",price:500,path:"img/w2.webp"},
{name:"shoes",size:"small",price:3000,path:"img/c1.webp"},
{name:"kids",size:"large",price:2000,path:"img/c2.webp"}
]




document.getElementById("btn").onclick=function(){
    var tbl=`<table border='1' width='600'><tr><th>Name</th><th>Size</th><th>Price</th><th>image</th></tr>`
    var getvalue=document.getElementById("search").value
    filterdata=data.filter(function(abc){
        if(abc.name==getvalue){
            return abc;
        }
        
    })
   
    filterdata.forEach(function(xyz){
        tbl+=`<tr><th>${xyz.name}</th><th>${xyz.size}</th><th>${xyz.price}</th><th><img src='${xyz.path}'></th></tr>`
        
        
    });
    document.getElementById("msg").innerHTML=tbl
    
}