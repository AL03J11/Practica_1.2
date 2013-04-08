$(document).ready(function(e) {
	//alert("Listo!!")
	document.addEventListener('deviceready', function(){
		$(".btn").tap (function(){
			var boton=(($(this).attr('class')).split(' '))[1];
			switch (boton)
			{
				case 'b1':
				navigator.notipication.beep(1);
				break;
				case 'b2':
				navigator.notipication.beep(2);
				break;
				case 'b3':
				navigator.notipication.beep(5);
				break;
				case 'v1':
				navigator.notipication.vibrate(500);
				break;
				case 'v2':
				navigator.notipication.vibrate(500);
				navigator.notipication.vibrate(500);
				break;
			}	
			$('#derecha').swiperight(function(){
				navigator.notification.alert('deslizó a la derecha', function(){},'Practica 1', 'Aceptar');
			});
			
			$('#izquierda').swipeleft(function(){
				navigator.notification.confirm('¿Qué desea hacer?', function(opcion){
					switch (opcion){
						case '1':
						navigator.notification.beep(1)
						break;
						case '2':
						navigator.notification.vibrate(500)
						break;
					}
					},"Practica 1", "Beep, Vibrar, Cancelar");
			});
			
			
			$('table td').eq(1).text(divice.name);
			$('table td').eq(3).text(divice.cordova);
			$('table td').eq(5).text(divice.platform);
			$('table td').eq(7).text(divice.versiov);
			$('table td').eq(9).text(divice.uuid);			
			
		});		
	
}, false);
	});
	
