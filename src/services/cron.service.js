const axios = require('axios')

var cron = require('node-cron');


const dummyScoreboardSim = () => {
  const teams = ["pikachu", "aqua01", "mystik", "kaleido", "tessarus"]
  const random = Math.floor(Math.random() * teams.length);
  
  axios.post('/update_score', {
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
      }
    })
  }    
)};

module.exports = {
    cronJob,
}