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


// if 
//        (screen.width <739) {

//         circularText("NICE TO MEET YOU  NICE TO MEET YOU  NICE TO MEET YOU ", 50, 0);

//        } else {

//         circularText("NICE TO MEET YOU  NICE TO MEET YOU  NICE TO MEET YOU ", 90, 0);
//        }
circularText("NICE TO MEET YOU  NICE TO MEET YOU  NICE TO MEET YOU ", 90, 0); 


  

  
  // window.addEventListener('resize', functionName);



    // circularText("NICE TO MEET YOU  NICE TO MEET YOU  NICE TO MEET YOU ", 90, 0);
  


  
  