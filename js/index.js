function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("circTxt")[classIndex];
  
    var deg = 360 / txt.length,
      origin = 0;
  
    txt.forEach((ea) => {
      ea = `<p class= "round" style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });

  }

circularText("NICE TO MEET YOU  NICE TO MEET YOU  NICE TO MEET YOU ", 90, 0); 


  



  
  