
function expand1Card() {
  var card = document.getElementById("myCard1");
  var extraContent = card.querySelector(".extra-content1");
  

  card.classList.toggle("expanded");

  
  
  if (extraContent.style.display === "block") {
    extraContent.style.display = "none";
  } else {
    extraContent.style.display = "block";
  }
}

function expand2Card() {
  var card = document.getElementById("myCard2");
  var extraContent = card.querySelector(".extra-content2");
  
  
  card.classList.toggle("expanded");

  
  
  if (extraContent.style.display === "block") {
    extraContent.style.display = "none";
  } else {
    extraContent.style.display = "block";
  }
}

function expand3Card() {
  var card = document.getElementById("myCard3");
  var extraContent = card.querySelector(".extra-content3");
  
  
  card.classList.toggle("expanded");

  

  if (extraContent.style.display === "block") {
    extraContent.style.display = "none";
  } else {
    extraContent.style.display = "block";
  }
}

function expand4Card() {
  var card = document.getElementById("myCard4");
  var extraContent = card.querySelector(".extra-content4");
  
 
  card.classList.toggle("expanded");

  

  if (extraContent.style.display === "block") {
    extraContent.style.display = "none";
  } else {
    extraContent.style.display = "block";
    
  }
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var interest = document.getElementById("interest").value;
  
  
  setTimeout(function() {
     
      document.getElementById("successMessage").classList.remove("d-none");
      
      document.getElementById("fullName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("interest").value = "";
     
      setTimeout(function() {
          document.getElementById("successMessage").classList.add("d-none");
      }, 3000);
  }, 1000);
});



document.getElementById('registrationForm').addEventListener('submit', function(event) {
event.preventDefault(); 
if (this.checkValidity()) {
   
    window.location.href = 'pages/pagina.html';
} else {
    
    alert('Por favor, preencha todos os campos antes de enviar.');
}
});


function falarComConsultor() {
window.open('https://api.whatsapp.com/send?phone=92994340262');
}


function redirecionarParaSite() {

window.location.href = 'https://www.youtube.com/watch?v=of44opSisKI';
}