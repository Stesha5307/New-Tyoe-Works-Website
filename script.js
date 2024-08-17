function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("Hello World");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

 document.addEventListener('DOMContentLoaded', () => {  
    let i = 0;
    let j = 0;
    const txt = 'WELCOME TO NEW TYPE WORKS!'; 
    const txt2 = 'Empowering communites through technology';
    const speed = 50; 

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(typeWriter2, speed); // Start typeWriter2 after typeWriter finishes
      }
    }

    function typeWriter2() {
      if (j < txt2.length) {
        document.getElementById("typewriter2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
      }
    }

    typeWriter();


  });