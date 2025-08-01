	window.addEventListener("scroll" , function(){
			var header = document.querySelector("header");
			header.classList.toggle("sticky" , window.scrollY > 0)
		});
window.addEventListener('scroll',reveal);

	function reveal(){

		var reveals = document.querySelectorAll('.reveal');

		for(var i = 0; 1< reveals.length; i++){

			var windowheight = window.innerHeight;
			var revealtop = reveals[i].getBoundingClientRect().top;
			var revealpoint = 0;

			if(revealtop < windowheight - revealpoint){
				reveals[i].classList.add('active','animate__fadeInDown');
				reveals[i].classList.remove('invisibl');

			}
			else{
				reveals[i].classList.remove('active','animate__fadeInDown');
			}
		}
	}