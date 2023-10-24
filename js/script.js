document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}

let box = document.querySelector('.box');
			window.onmousemove = function(e){
				let x = e.clientX/3;
				box.style.transform = "perspective(1000px) rotateY(" + x + " deg)";
			}


    document.addEventListener("DOMContentLoaded", function() {
        const pruebaDropdown = document.querySelector('.ta');
        const pruebaLink = document.querySelector('li:has(> a[href="#"])');

        pruebaLink.addEventListener('click', function() {
            if (pruebaDropdown.style.display === 'none') {
                pruebaDropdown.style.display = 'block';
            } else {
                pruebaDropdown.style.display = 'none';
            }
        });
    });

    



