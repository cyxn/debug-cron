const cron = require('cron');

const CronJob = cron.CronJob;

function onTick() {
  const date = new Date();
  console.log(`cron (with issue): ${date.toLocaleString()}`);
}

(() => {
  const cron = new CronJob({
    cronTime: '*/1 * * * * *',
    onTick: onTick,
  });
  cron.start();
})();
