const { User } = require('../models');
const userdata = [
  {
    username: 'katy1',
    password: 'fatima12',
   
  },
  {
    username: 'katy2',
    password: 'fatima23',
   
  },
  {
    username: 'katy3',
    password: 'fatima34',
   
  },
 
 
 
];
const seedUser = () => User.bulkCreate(userdata);
module.exports = seedUser;