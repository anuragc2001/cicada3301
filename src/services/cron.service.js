const axios = require('axios')

var cron = require('node-cron');


const teams = ["pikapika@gmail.com", "aqua01@gmail.com", "mystik04@gmail.com"]
const dummyScoreboardSim = () => {
  const random = Math.floor(Math.random() * teams.length);
  
  axios.post(process.env.GAME_SCORE_UPDATE_URI, {
    username: teams[random],
    points: Math.floor(Math.random() * 100),
    level: Math.floor(Math.random() * 10),
  })
  .then((response) => {
    console.log("updated");
  }, (error) => {
    console.log(error);
  });
  
}

const cronJob = () => {
  cron.schedule('*/3 * * * * *', () => {
  axios.get(process.env.GAME_STATUS_URI)
    .then((response) => {
      if(response.data.status === "1"){
            dummyScoreboardSim();
            // console.log("updated");
      }else{
        teams.map((team) => {
          axios.post(process.env.GAME_SCORE_UPDATE_URI, {
            username: team,
            points: 0,
            level: 0,
          })
        })
      }
    })
  }    
)};

module.exports = {
    cronJob,
}