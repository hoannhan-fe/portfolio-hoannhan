const typed = new Typed('.text1', {
    strings: ["Frontend Development ", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });

  function showHide() {
    const moreText = document.getElementById("more-text");
    const button = document.querySelector("button2");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
    } else {
        moreText.style.display = "none";
        button.innerHTML = "<b>More About Me</b>";
    }
}

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 50
  });
  
  ScrollReveal().reveal('.home-content, .header', { origin: 'top' });
  ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  

  function showAlert() {
    alert("Contact me! Zalo/Call : 0988954542");
  }