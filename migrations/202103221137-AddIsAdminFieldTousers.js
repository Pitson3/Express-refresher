'use strict'

const columnAndTypes = [{
    name : 'is_admin',
    type : (Sequelize) => {
        return {
            type : Sequelize.BOOLEAN,
            allowNull : true,
            defaultvalue : false
        }
    }
}];

module.exports = {
    up : (queryInteface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map(c=>{
                return queryInteface.addColumn(
                    'Users',
                    c.name,
                    c.type(Sequelize)
                )
            })
        )
    },
    down : (queryInteface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map(c => {
                return queryInteface.removeColumn(
                    'Users',
                    c.name,
                )
            })
        )
    }
}