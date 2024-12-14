'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
     return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'John Doe',
        username: 'admin',
        password: "rehan123",
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        id: 2,
        name: 'ghandur doe',
        username: 'user',
        password: "rehan123",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      id: 3,
      name: 'tukul doe',
      username: 'userr',
      password: "rehan123",
      createdAt: new Date(),
      updatedAt: new Date()
   }
    
    ],
     
     
     
     {});
    
  },

  async down (queryInterface, Sequelize) {
    
    
    return queryInterface.bulkDelete('Users', null, {});
     
  }
};
