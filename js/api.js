// typing animation

var words = [' asudhPORCO DIODIDODODIODIDOd'];
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






//TOP MATCHES 💵🐦❤️🤣


const app = Vue.createApp({
  data() {
    return {
      matches: []
    };
  },
  mounted() {
    this.fetchTopMatches();
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
    }
  }
});

app.mount('#topmatches');



