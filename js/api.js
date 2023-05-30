// typing animation

var words = [' asudhiauyshdiasuhdsaiuhdiasud'];
var currentWordIndex = 0;
var currentCharIndex = 0;
var forwards = true;
var speed = 70;

var wordElement = document.querySelector('.word');
var parentElement = wordElement.parentNode;

var wordflick = function () {
  var intervalId; // Variabile per l'ID dell'intervallo

  var startAnimation = function () {
    intervalId = setInterval(function () {
      var currentWord = words[currentWordIndex];

      if (forwards) {
        if (currentCharIndex >= currentWord.length) {
          forwards = false;
        }
      }
      else {
        if (currentCharIndex == 0) {
          forwards = true;
          currentWordIndex++;
          if (currentWordIndex >= words.length) {
            currentWordIndex = 0;
          }
        }
      }

      var part = currentWord.substring(0, currentCharIndex);
      wordElement.textContent = part;

      if (forwards) {
        currentCharIndex++;
      }
     
    }, speed);
  };

  var stopAnimation = function () {
    clearInterval(intervalId);
  };

  var observerCallback = function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        startAnimation();
      } else {
        stopAnimation();
      }
    });
  };

  var observerOptions = {
    root: null,
    threshold: 0.5 // Modifica qui se desideri un diverso punto di trigger per l'animazione
  };

  var observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(parentElement);
};

document.addEventListener('DOMContentLoaded', function () {
  wordflick();
});

// end animation modal window



const app = Vue.createApp({
    data() {
      return {
        matches: []
      };
    },
    created() {
      const currentDate = new Date();
      const day = currentDate.getDate() + 1;
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
  
      const fetchMatchesWithRetry = (url, options, maxRetries, retryDelay) => {
        // ...
      };
  
      const url = `https://footapi7.p.rapidapi.com/api/matches/top/${formattedDate}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
      };
  
      const maxRetries = 3; 
      const retryDelay = 2000; 
  
      fetchMatchesWithRetry(url, options, maxRetries, retryDelay)
        .then(data => {
          if (data && data.events) {
            const events = data.events.slice(0, 10);
            this.matches = events.map(event => ({
              id: event.id,
              homeTeamName: event.homeTeam.name,
              awayTeamName: event.awayTeam.name,
              preMatchFormData: null
            }));
  
            this.fetchPreMatchForm();
          } else {
            console.error("Risposta non valida dal server");
          }
        })
        .catch(error => {
          console.error("Errore durante la richiesta delle informazioni sulle partite:", error);
        });
    },
    methods: {
      fetchPreMatchForm() {
        const maxRetries = 3; 
        const retryDelay = 2000; 
  
        this.matches.forEach(match => {
          const preMatchFormUrl = `https://footapi7.p.rapidapi.com/api/match/${match.id}/form`;
          const preMatchFormOptions = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
              'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
            }
          };
  
          fetchMatchesWithRetry(preMatchFormUrl, preMatchFormOptions, maxRetries, retryDelay)
            .then(preMatchFormData => {
              match.preMatchFormData = preMatchFormData;
            })
            .catch(error => {
              console.error("Errore durante la richiesta dei dati sulla preMatchForm:", error);
            });
        });
      }
    }
  });
  
  app.mount('#topmatches');





