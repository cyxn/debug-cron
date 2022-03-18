const Cron = require('croner');


function onTick() {
  const date = new Date();
  console.log(`croner: ${date.toLocaleString()}`);
}

(() => {
  const cron = new Cron('*/1 * * * * *', onTick);
})();
