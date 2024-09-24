require('dotenv').config();
const db = require('./models'); // Sequelize models
const app = require('./app'); // Import app.js

const PORT = process.env.PORT || 3000;

// Ensure that Sequelize is synchronized with the database
db.sequelize.sync()
  .then(() => {
    console.log('Database connected successfully!');
    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
