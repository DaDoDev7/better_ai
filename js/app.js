// Funzione per creare una promessa di ritardo
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const live = Vue.createApp({
  data() {
    return {
      matches: []
    };
  },
  async mounted() {
    const url = 'https://footapi7.p.rapidapi.com/api/matches/live';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
        'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const matches = result.events.slice(0, 10);

      for (let i = 0; i < matches.length; i++) {
        const match = matches[i];

        if (match.homeTeam && match.homeTeam.id) {
          const homeTeamId = match.homeTeam.id;
          const homeImageUrl = 'https://footapi7.p.rapidapi.com/api/team/' + homeTeamId + '/image';
          const awayTeamId = match.awayTeam.id;
          const awayImageUrl = 'https://footapi7.p.rapidapi.com/api/team/' + awayTeamId + '/image';

          const homeResponse = await fetch(homeImageUrl, options);
          const homeBlob = await homeResponse.blob();
          match.homeTeam.image = URL.createObjectURL(homeBlob);

          const awayResponse = await fetch(awayImageUrl, options);
          const awayBlob = await awayResponse.blob();
          match.awayTeam.image = URL.createObjectURL(awayBlob);

          if (i < matches.length - 1) {
            await delay(1000); // Ritardo di 1 secondo tra le richieste
          }
        }
      }

      this.matches = matches;
    } catch (error) {
      console.error(error);
    }
  }
});

live.mount('#live');






  
  //SCHEDULES
  

// Funzione per creare una promessa di ritardo
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const schedules = Vue.createApp({
  data() {
    return {
      matches: []
    };
  },
  async mounted() {
    const today = new Date();
    const day = today.getDate() + 1;
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

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const matches = result.events.slice(0, 10);

      for (let i = 0; i < matches.length; i++) {
        const match = matches[i];

        if (match.homeTeam && match.homeTeam.id) {
          const homeTeamId = match.homeTeam.id;
          const homeImageUrl = `https://footapi7.p.rapidapi.com/api/team/${homeTeamId}/image`;
          const awayTeamId = match.awayTeam.id;
          const awayImageUrl = `https://footapi7.p.rapidapi.com/api/team/${awayTeamId}/image`;

          const homeResponse = await fetch(homeImageUrl, options);
          const homeBlob = await homeResponse.blob();
          match.homeTeam.image = URL.createObjectURL(homeBlob);

          const awayResponse = await fetch(awayImageUrl, options);
          const awayBlob = await awayResponse.blob();
          match.awayTeam.image = URL.createObjectURL(awayBlob);

          if (i < matches.length - 1) {
            await delay(1000); // Ritardo di 1 secondo tra le richieste
          }
        }
      }

      this.matches = matches;
    } catch (error) {
      console.error(error);
    }
  }
});

schedules.mount('#schedules');

  