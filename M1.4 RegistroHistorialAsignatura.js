//Entrada de datos
console.log("Insertar la cantidad de regitro que se va a simular");
let numReg="";
for(let i=2;i<process.argv.length;i++){
    numReg+=process.argv[i];
}
try{
	if(isNaN(numReg) || numReg<=0){
		throw new Error("El valor que se inserta debe ser un número o un número mayor a 0");
	}
}catch(error){
	console.error("Error: "+error.message);
}

//Función para generar número aleatorio con un rango
function generarNumeroAleatorio(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}

function crearRegistro(cla,cre,nom,cal,fec){
	const registro={
		clave: cla,
		credito: cre,
		nombre: nom,
		calificación: cal,
		fecha: fec
	}
	return registro;
}

const clavePre=[100001,100002,100003,100004,100005,100006,100007,100008,100009,100010,100011,100012,100013];
const nombrePre=["Erika","Eliana","Carmen","Martín","Juan","Sofía","Susana","Leticia","Andrea"];

function inicializarRegistro(){
	const fechaInicio=new Date(2021,01,01);
	const fechaFin=new Date(2023,06,30);
	const tiempoInicio=fechaInicio.getTime();
	const tiempoFin=fechaFin.getTime();
	const regis=new Array();
	for(let i=0;i<numReg;i++){
		let aleCla=generarNumeroAleatorio(0,clavePre.length-1);
		let aleNom=generarNumeroAleatorio(0,nombrePre.length-1);
		let aleCal=generarNumeroAleatorio(0,100);
		let aleCre=generarNumeroAleatorio(4,8);
		let aleFec=generarNumeroAleatorio(tiempoInicio,tiempoFin);
		let date=new Date(aleFec);
		regis.push(crearRegistro(clavePre[aleCla],aleCre,nombrePre[aleNom],aleCal,date));
	}
	return regis;
}

const registro=inicializarRegistro();
//Registros tengan calificaciones menor a 60 con fecha mayor a 2023-04-18
const fechaCom=new Date(2023,04,18);
const filtro=registro.filter(registro => registro.calificación<60 && fechaCom>registro.fecha);
//console.log(filtro);
const mapear=filtro.map(function(filtro){
	let robj={};
	robj["clave"]=filtro.clave;
	robj["calificacion"]=filtro.calificación;
	robj["fechaStr"]=filtro.fecha;
	return robj;
});
console.log(mapear);