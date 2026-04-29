import pg from 'pg';
const pool = new pg.Pool({ connectionString: "postgresql://neondb_owner:npg_u25NwLohAZbH@ep-long-queen-anfmsww3-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" });
pool.query('SELECT NOW()')
  .then(res => console.log('Connected:', res.rows[0]))
  .catch(err => console.error('Error:', err))
  .finally(() => pool.end());
