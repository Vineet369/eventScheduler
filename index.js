require('dotenv').config();
const db = require('./models');  
const app = require('./app'); 

const PORT = process.env.PORT || 3000;

 db.sequelize.sync()
  .then(() => {
    console.log('Database connected successfully!');
     app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
