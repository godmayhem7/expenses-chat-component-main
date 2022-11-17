let bars = document.querySelectorAll(".bar");

bars.forEach((bar)=>{
  bar.addEventListener("mouseover",function(){
     let span = document.querySelectorAll("span");
     if (this===bars[0]){
        span[0].classList.toggle("spare")
        span[0].classList.toggle("span")
     }else if (this===bars[1]){
        span[1].classList.toggle("spare")
        span[1].classList.toggle("span")
     }else if (this===bars[2]){
        span[2].classList.toggle("spare")
        span[2].classList.toggle("span")
     }else if (this===bars[3]){
        span[3].classList.toggle("spare")
        span[3].classList.toggle("span")
     }else if (this===bars[4]){
        span[4].classList.toggle("spare")
        span[4].classList.toggle("span")
     }else if (this===bars[5]){
        span[5].classList.toggle("spare")
        span[5].classList.toggle("span")
     }else if (this===bars[6]){
        span[6].classList.toggle("spare")
        span[6].classList.toggle("span")
     }
  })
})

bars.forEach((bar)=>{
    bar.addEventListener("mouseleave",function(){
       let span = document.querySelectorAll("span");
       if (this===bars[0]){
          span[0].classList.toggle("spare")
          span[0].classList.toggle("span")
       }else if (this===bars[1]){
          span[1].classList.toggle("spare")
          span[1].classList.toggle("span")
       }else if (this===bars[2]){
          span[2].classList.toggle("spare")
          span[2].classList.toggle("span")
       }else if (this===bars[3]){
          span[3].classList.toggle("spare")
          span[3].classList.toggle("span")
       }else if (this===bars[4]){
          span[4].classList.toggle("spare")
          span[4].classList.toggle("span")
       }else if (this===bars[5]){
          span[5].classList.toggle("spare")
          span[5].classList.toggle("span")
       }else if (this===bars[6]){
          span[6].classList.toggle("spare")
          span[6].classList.toggle("span")
       }
    })
  })