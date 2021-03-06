const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize('nodedb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  
//   // force: true will drop the table if it already exists
//   User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });

// Find All Data
  User.findAll({
    where: {
      id: 2
    }
  });
//Find One
  User.findOne().then(user => {
    console.log(user.get('id'));
  });
//Delete From table_name where id = 1;
  User.destroy({
    where: {
      id: 1
    }
  });
//Update users SET firstName = 'Test', lastName = 'Demo' WHERE createdAt IS NOT NULL
  User.update({
    firstName: 'Test',
    lastName: 'Demo',
  }, {
    where: {
      createdAt: {
        [Op.ne]: null
      }
    }
  });
  
  
