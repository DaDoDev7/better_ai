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
        const matches = result.events.slice(0, 15);

        // Array di promesse per i fetch delle immagini delle squadre
        const imagePromises = matches.map(match => {
          if (match.homeTeam && match.homeTeam.id) {
            const homeTeamId = match.homeTeam.id;
            const homeImageUrl = `https://footapi7.p.rapidapi.com/api/team/${homeTeamId}/image`;
            const awayTeamId = match.awayTeam.id;
            const awayImageUrl = `https://footapi7.p.rapidapi.com/api/team/${awayTeamId}/image`;

            const homeImagePromise = fetch(homeImageUrl, options)
              .then(response => response.json())
              .then(imageResult => {
                match.homeTeam.image = imageResult.image;
              })
              .catch(error => {
                console.error(error);
              });

            const awayImagePromise = fetch(awayImageUrl, options)
              .then(response => response.json())
              .then(imageResult => {
                match.awayTeam.image = imageResult.image;
              })
              .catch(error => {
                console.error(error);
              });

            return Promise.all([homeImagePromise, awayImagePromise])
              .then(() => match);
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
      const day = today.getDate() +1;
      const month = today.getMonth() +1 ;
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
  