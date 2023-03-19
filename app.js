// burger-menu (START)
const wrapperMenu = document.querySelector('.wrapper_menu');
const menu = document.querySelector('.new_header_line');


wrapperMenu.addEventListener('click', function(){
      wrapperMenu.classList.toggle('open');  
      menu.classList.toggle('on_or_off');
 })
// burger-menu (END)


// menu (START)

const button1 = document.getElementById("breakfast1");
const button2 = document.getElementById("lunch1");
const button3 = document.getElementById("dinner1");


const content1 = document.getElementById("breakfast2");
const content2 = document.getElementById("lunch2");
const content3 = document.getElementById("dinner2");

button1.addEventListener("click", function() {
      content1.style.display = "block";
      content2.style.display = "none";
      content3.style.display = "none";
    });
button2.addEventListener("click", function() {
      content1.style.display = "none";
      content2.style.display = "block";
      content3.style.display = "none";
    });
button3.addEventListener("click", function() {
      content1.style.display = "none";
      content2.style.display = "none";
      content3.style.display = "block";
    });





// menu (END)





