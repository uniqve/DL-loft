// "use strict"
const swiper = new Swiper('.swiper',{

    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    slidesPerView: 4,
    speed: 600,
  
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },


    

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        1165: {
            slidesPerView: 3,
        },
        1428: {
            slidesPerView: 4
        }
    }
});
  

let btnPlay = document.querySelector(".player");
let videoPlayer = document.querySelector(".item__video");
console.log(videoPlayer);

btnPlay.addEventListener("click",() => {
    btnPlay.hidden = 'true';
   
        
        
    //     visibility = 'visible';
    // videoPlayer.autoplay = 1;


    // if (videoPlayer.style.block !== 'block'),
    // else (videoPlayer.style.display = 'none');

});

// videoPlayer.style.block !== 'none' ? videoPlayer.style.display = 'block' : videoPlayer.style.display = 'none';
// let btn = document.querySelector('button');
// let el = document.querySelector('div');

// btn.addEventListener('click', () => {
//   el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
// });





// function showHide(btnPlay) {
//     if (btnPlay.style.display != "block") {
//         btnPlay.style.display = "block";
//     }
//     else { btnPlay.style.display = "none;" }
//     else { alert("FFFFFFF") }
// }


