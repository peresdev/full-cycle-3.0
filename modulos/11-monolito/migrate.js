require('ts-node/register');

require('./src/infrastructure/db/sequelize/config/umzug').migrator.runAsCLI();