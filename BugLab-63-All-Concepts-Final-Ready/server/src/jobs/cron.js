import cron from 'node-cron'; export function startJobs(){cron.schedule('0 * * * *',()=>console.log('[cron] hourly maintenance job'));}
