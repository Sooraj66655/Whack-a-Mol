  const container = document.querySelectorAll(".container");
  const length = container.length;


  var interval = setInterval(() => {
    /**************************************Generate a random number***********************************/
    const random = Math.floor(Math.random() * length);

    /*********************************Remove the active class from every ground**********************/
    container.forEach((e) => {
      e.classList.remove("active");

    });

    /*************************************Add the active class to random ground**********************/
    container[random].classList.add("active");
  }, 900);


/********************************************Score-Card*********************************************/
let score = 0;

  container.forEach((e) => {
    e.addEventListener("click", () => {
    
      if (e.classList.contains("active")) {
        score++;
       document.getElementById("score").innerHTML = score;
      }
    });
  });



/****************************************Cookies Storage *****************************************/
function setCookies(){
       var high = score;
       document.cookie ="HScore=" +high;

}
function getCookies(){
  var scorearray = document.cookie;
  scorearray.split("=");
  var secArray =scorearray.split("=");
  secArray[1];

  if (secArray[1]==0) {
    setCookies();
  }else if (score > secArray[1]) {
    setCookies();
  }else{
    console.log(document.cookie);
    document.getElementById("highScore").innerHTML = secArray[1]; 
  }
 
}

/**************************************************Strat Button********************************/
  function Start(){
     var start = document.getElementById("main");
     start.style.display = "block";
   
}

function Stop(){
    getCookies();
    var start = document.getElementById("main");
    start.style.display = "none";
    score = 0;
    document.getElementById("score").innerHTML = score;
   
}


