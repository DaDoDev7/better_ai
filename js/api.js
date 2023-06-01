// //Modal Window

// document.addEventListener('DOMContentLoaded', function() {
//   var matchElements = document.querySelectorAll('.match_ai');
//   var modalWindow = document.querySelector('.modalwindow');
//   var closeButton = document.querySelector('.closebtn');
//   var overlay = document.querySelector('.overlay');

//   matchElements.forEach(function(matchElement) {
//     matchElement.addEventListener('click', function() {
//       showModal();
//     });
//   });

//   closeButton.addEventListener('click', function() {
//     closeModal();
//   });

//   overlay.addEventListener('click', function() {
//     closeModal();
//   });

//   function showModal() {
//     modalWindow.style.display = 'block';
//     overlay.style.display = 'block';
//     document.body.classList.add('modal-open');
//   }

//   function closeModal() {
//     modalWindow.style.display = 'none';
//     overlay.style.display = 'none';
//     document.body.classList.remove('modal-open');
//   }
// });

//end modal windows



// typing animation

// var words = [' asudhPORCO DIODIDODODIODIDOd'];
// var currentWordIndex = 0;
// var currentCharIndex = 0;
// var forwards = true;
// var speed = 70;

// var wordElement = document.querySelector('.word');
// var parentElement = wordElement.parentNode;

// var wordflick = function () {
//   var intervalId; // Variabile per l'ID dell'intervallo

//   var startAnimation = function () {
//     intervalId = setInterval(function () {
//       var currentWord = words[currentWordIndex];

//       if (forwards) {
//         if (currentCharIndex >= currentWord.length) {
//           forwards = false;
//         }
//       }
//       else {
//         if (currentCharIndex == 0) {
//           forwards = true;
//           currentWordIndex++;
//           if (currentWordIndex >= words.length) {
//             currentWordIndex = 0;
//           }
//         }
//       }

//       var part = currentWord.substring(0, currentCharIndex);
//       wordElement.textContent = part;

//       if (forwards) {
//         currentCharIndex++;
//       }
     
//     }, speed);
//   };

//   var stopAnimation = function () {
//     clearInterval(intervalId);
//   };

//   var observerCallback = function (entries) {
//     entries.forEach(function (entry) {
//       if (entry.isIntersecting) {
//         startAnimation();
//       } else {
//         stopAnimation();
//       }
//     });
//   };

//   var observerOptions = {
//     root: null,
//     threshold: 0.5 // Modifica qui se desideri un diverso punto di trigger per l'animazione
//   };

//   var observer = new IntersectionObserver(observerCallback, observerOptions);
//   observer.observe(parentElement);
// };

// document.addEventListener('DOMContentLoaded', function () {
//   wordflick();
// });

// end animation modal window



//TOP MATCHES 💵🐦❤️🤣


const app = Vue.createApp({
  data() {
    return {
      matches: []
    };
  },
  mounted() {
    this.fetchTopMatches();
    this.startWordAnimation();
  },
  methods: {
    async fetchTopMatches() {
      const currentDate = new Date();
      const day = currentDate.getDate() + 1;
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      const url = `https://footapi7.p.rapidapi.com/api/matches/top/${day}/${month}/${year}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        this.matches = data.events.slice(0, 10);
      } catch (error) {
        console.error(error);
      }
    },
    showModal(match) {
      const modalWindow = document.querySelector('.modalwindow');
      const overlay = document.querySelector('.overlay');

      modalWindow.style.display = 'block';
      overlay.style.display = 'block';
      document.body.classList.add('modal-open');

      console.log('Mostrare finestra modale per il match:', match);
    },
    closeModal() {
      const modalWindow = document.querySelector('.modalwindow');
      const overlay = document.querySelector('.overlay');

      modalWindow.style.display = 'none';
      overlay.style.display = 'none';
      document.body.classList.remove('modal-open');
    },
    startWordAnimation() {
      const words = [' ciaoasdiuasjdasojuid'];
      let currentWordIndex = 0;
      let currentCharIndex = 0;
      let forwards = true;
      const speed = 70;

      const wordElement = document.querySelector('.word');
      const parentElement = wordElement.parentNode;

      const startAnimation = function () {
        const intervalId = setInterval(function () {
          const currentWord = words[currentWordIndex];

          if (forwards) {
            if (currentCharIndex >= currentWord.length) {
              forwards = false;
            }
          } else {
            if (currentCharIndex === 0) {
              forwards = true;
              currentWordIndex++;
              if (currentWordIndex >= words.length) {
                currentWordIndex = 0;
              }
            }
          }

          const part = currentWord.substring(0, currentCharIndex);
          wordElement.textContent = part;

          if (forwards) {
            currentCharIndex++;
          } 
        }, speed);
      };

      const stopAnimation = function () {
        clearInterval(intervalId);
      };

      const observerCallback = function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            startAnimation();
          } else {
            stopAnimation();
          }
        });
      };

      const observerOptions = {
        root: null,
        threshold: 0.5 // Modifica qui se desideri un diverso punto di trigger per l'animazione
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(parentElement);
    }
  }
});

app.mount('#topmatches');



