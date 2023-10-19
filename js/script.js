function btnMenu(tipo){
	var menu = document.getElementsByClassName('menu');
	
	if(tipo == 1){
		menu[0].style.display='block';		
	}else{
		menu[0].style.display='none';		
	}
}
