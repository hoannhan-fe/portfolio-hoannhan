var typed = new Typed('.text1', {
    strings: ["Frontend Development ", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });

  function showHide() {
    var moreText = document.getElementById("more-text");
    var button = document.querySelector("button");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.innerHTML = "<b>Less About Me</b>";
    } else {
        moreText.style.display = "none";
        button.innerHTML = "<b>More About Me</b>";
    }
}