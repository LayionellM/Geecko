
	function nuevaHistoria(){
 		var titulo=document.getElementById('titulo').value;
 		var historia=document.getElementById('historia').value;
 		localStorage.setItem(titulo, historia);
 		mostrar();
 		document.getElementById('titulo').value = '';
 		document.getElementById('historia').value = '';
	}
	function mostrar(){
 		var cajadatos=document.getElementById('cajadatos');
 		cajadatos.innerHTML = '';
 		for(var f=0;f<localStorage.length;f++){
 			var titulo = localStorage.key(f);
 			var historia = localStorage.getItem(titulo);
            cajadatos.innerHTML += '<div><strong>' + titulo + ':</strong><br>' + historia + '<br></div>';
 		}
	}
    // alert(window.localStorage.remainingSpace);

window.addEventListener('load', mostrar, false);