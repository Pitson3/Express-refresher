'use strict';

module.exports = {
    up: (QueryInterface, Sequelize) => {
        return QueryInterface.createTable('Users',{
            id:{
                allowNull: false,
                primaryKey: true,
                type:Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt:{
                allowNull:false,
                type: Sequelize.DATE,
            },
            username:{
                allowNull: true,
                type: Sequelize.STRING,
            },
            firstname:{
                allowNull: true,
                type: Sequelize.STRING,
            },
            lastname:{
                allowNull: true,
                type: Sequelize.STRING,
            },
            password:{
                allowNull: true,
                type: Sequelize.STRING,
            },
            email:{
                allowNull: false,
                type: Sequelize.STRING,
            }
        })
    },
    down:(QueryInterface, Sequelize)=>{
                return QueryInterface.dropTable("Users");
    }
}