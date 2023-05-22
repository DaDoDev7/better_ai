// const currentDate = new Date();
// const day = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();
// const formattedDate = `${day}/${month}/${year}`;

// const fetchMatchesWithRetry = (url, options, maxRetries, retryDelay) => {
//   let retries = 0;

//   const fetchMatches = () => {
//     return fetch(url, options)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Errore nella richiesta');
//         }
//         return response.json();
//       })
//       .catch(error => {
//         console.error('Errore durante la richiesta delle informazioni sulle partite:', error);
//         throw error;
//       });
//   };

//   const retry = () => {
//     retries++;

//     if (retries <= maxRetries) {
//       console.log(`Tentativo ${retries} di ${maxRetries} - Ritento dopo ${retryDelay}ms`);

//       return new Promise(resolve => setTimeout(resolve, retryDelay)).then(fetchMatches);
//     } else {
//       console.error('Numero massimo di tentativi raggiunto');
//       throw new Error('Numero massimo di tentativi raggiunto');
//     }
//   };

//   return fetchMatches().catch(() => retry());
// };

// const url = `https://footapi7.p.rapidapi.com/api/matches/top/${formattedDate}`;
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
//     'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
//   }
// };

// const maxRetries = 3; 
// const retryDelay = 2000; 

// fetchMatchesWithRetry(url, options, maxRetries, retryDelay)
//   .then(data => {
//     if (data && data.events) {
//       const events = data.events.slice(0, 10);
//       console.log("Prime dieci partite del giorno:");
//       events.forEach(event => {
//         const homeTeamName = event.homeTeam.name;
//         const awayTeamName = event.awayTeam.name;
//         console.log(`${homeTeamName} vs ${awayTeamName}`);

//         const preMatchFormUrl = `https://footapi7.p.rapidapi.com/api/match/${event.id}/form`;
//         const preMatchFormOptions = {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
//             'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
//           }
//         };

//         fetchMatchesWithRetry(preMatchFormUrl, preMatchFormOptions, maxRetries, retryDelay)
//           .then(preMatchFormData => {
//             console.log("Dati sulla preMatchForm:");
//             console.log(preMatchFormData);
//           })
//           .catch(error => {
//             console.error("Errore durante la richiesta dei dati sulla preMatchForm:", error);
//           });
//       });
//     } else {
//       console.error("Risposta non valida dal server");
//     }
//   })
//   .catch(error => {
//     console.error("Errore durante la richiesta delle informazioni sulle partite:", error);
//   });


//live results Fetch

// const url = 'https://footapi7.p.rapidapi.com/api/matches/live';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '00f86281a9mshc24dc7075c5d773p1f9175jsn91f5d88b88b1',
//     'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
//   }
// };

// fetch(url, options)
//   .then(response => response.json())
//   .then(result => {
//     const matches = result.events;

//     matches.forEach(match => {
//       const homeTeamName = match.homeTeam.name;
//       const awayTeamName = match.awayTeam.name;
//       const homeScore = match.homeScore.current;
//       const awayScore = match.awayScore.current;
//       const league = match.tournament.name;

//       console.log("Partita:", homeTeamName, "vs", awayTeamName);
//       console.log("Punteggio:", homeScore, "-", awayScore);
//       console.log("Lega:", league);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });



