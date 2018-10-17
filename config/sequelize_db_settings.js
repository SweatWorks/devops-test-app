module.exports = {
  username: process.env.DEVOPS_TEST_DATABASE_USERNAME || 'postgres',
  password: process.env.DEVOPS_TEST_DATABASE_PASSWORD || '',
  database: process.env.DEVOPS_TEST_DATABASE_NAME || 'devops_test_db',
  host: process.env.DEVOPS_TEST_DATABASE_HOST || 'podium-global-postgres',
  dialect: 'postgres',
};
