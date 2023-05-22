//live MATCHES

const live = Vue.createApp({
    data() {
      return {
        matches: []
      };
    },
    mounted() {
      const url = 'https://footapi7.p.rapidapi.com/api/matches/live';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
      };
  
      fetch(url, options)
        .then(response => response.json())
        .then(result => {
          const currentTime = new Date().getTime();
          const matches = result.events.slice(0, 15);
  
          // Array di promesse per i fetch delle immagini delle squadre
          const imagePromises = matches.map(match => {
            if (match.homeTeam && match.homeTeam.id) {
              const teamId = match.homeTeam.id;
              const imageUrl = `https://footapi7.p.rapidapi.com/api/team/${teamId}/image`;
  
              return fetch(imageUrl, options)
                .then(response => response.json())
                .then(imageResult => {
                  match.homeTeam.image = imageResult.image;
                  return match;
                })
                .catch(error => {
                  console.error(error);
                });
            } else {
              return match;
            }
          });
  
          // Attendiamo che tutte le promesse di fetch delle immagini siano risolte
          Promise.all(imagePromises)
            .then(updatedMatches => {
              this.matches = updatedMatches;
            })
            .catch(error => {
              console.error(error);
            });
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
  
  live.mount('#live');
  
  
  

//   SCHEDULES

const schedules = Vue.createApp({
    data() {
      return {
        matches: []
      };
    },
    mounted() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      
      const url = `https://footapi7.p.rapidapi.com/api/matches/${day}/${month}/${year}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
      };
  
      fetch(url, options)
        .then(response => response.json())
        .then(result => {
          this.matches = result.events.slice(0, 15);;
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
  
  schedules.mount('#schedules');
  