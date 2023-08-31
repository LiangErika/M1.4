const ataqueGolpe = function() {
  return "Atacando con golpe";
};

const ataqueRayo = function() {
  return "Atacando con rayo fulminante";
};

const atacar=function(ataque,personaje){
	const mensajeAtaque=ataque();
	return mensajeAtaque+ " a " + personaje;
};
console.log(atacar(ataqueGolpe,"personaje 1"));
console.log(atacar(ataqueRayo,"personaje 2"));