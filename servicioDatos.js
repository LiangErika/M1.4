//Asíncronas
/*let finDeTransmisionDeDatos=function(id){
	console.log("Transferencia",id,"terminada");
}

let obtenDatosDeInternet=function(id,duracion){
	console.log("Proceso",id,"obteniendo datos de Internet");
	setTimeout(finDeTransmisionDeDatos,duracion,id);
}
*/

//Callback
/*
let finDeTransmisionDeDatos=function(id,callback){
	console.log("Transferencia",id,"terminada");
	callback();
}

let obtenDatosDeInternet=function(id,duracion,callback){
	console.log("Proceso",id,"obteniendo datos de Internet");
	setTimeout(finDeTransmisionDeDatos,duracion,id,callback);
}*/

//Promises
let finDeTransmisionDeDatos=function(id){
	return new Promise(resolve=>{
		console.log("Transferencia",id,"terminada");
		resolve();
	})
}

let obtenDatosDeInternet=function(id,duracion){
	return new Promise(resolve => {
		console.log("Proceso", id, "obteniendo datos de Internet");
		setTimeout(() => {
		  finDeTransmisionDeDatos(id)
			.then(() => resolve());
		}, duracion);
	  });
}

module.exports.getDatos=obtenDatosDeInternet;