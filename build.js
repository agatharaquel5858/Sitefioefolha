const fs = require('fs');

const required = ['SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY'];
const missing = required.filter((name) => !process.env[name]);

if (missing.length) {
  console.error('Missing required environment variables:', missing.join(', '));
  process.exit(1);
}

const config = `window.FIO_E_FOLHA_CONFIG = ${JSON.stringify({
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
})};`;
fs.writeFileSync('config.js', config + '\n', 'utf8');
console.log('Supabase runtime configuration generated.');
