var reloj = document.getElementById('fecha_Footer');
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
reloj.innerHTML = (f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());