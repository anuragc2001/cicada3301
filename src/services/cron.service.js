var cron = require('node-cron');

const cronJob = () => {
    cron.schedule('*/10 * * * * *', () => {
      console.log('running your cron-job');
    });
}

module.exports = {
    cronJob,
}