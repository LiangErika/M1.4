const servicio=require("./servicioDatos");

//Asíncrona
/*
servicio.getDatos(1,3000);
servicio.getDatos(2,500);
servicio.getDatos(3,4000);
servicio.getDatos(4,700);
servicio.getDatos(5,3500);
*/

//Callback
/*
servicio.getDatos(1,3000,function(){
    servicio.getDatos(2,500,function(){
        servicio.getDatos(3,1500,function(){
            servicio.getDatos(4,700,function(){
                servicio.getDatos(5,3500,function(){
                    console.log("Programa terminada");
                })
            })
        })
    })
})*/

//Promises
servicio.getDatos(1,1000)
.then(()=> servicio.getDatos(2,500))
.then(()=>servicio.getDatos(3,1500))
.then(()=>servicio.getDatos(4,700))
.then(()=>servicio.getDatos(5,3500))
.then(()=>{console.log("Programa terminada");})
.catch(error => {console.log("Error: ",error);});