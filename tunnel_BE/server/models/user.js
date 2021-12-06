const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name:{
                type: Sequelize.STRING(30),
                allowNull: false,
                unique:true,
            },
            pw:{
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            personality:{
                type: Sequelize.CHAR(4),
                allowNull: false,
            },
            status:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName: 'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }


    static associate(db) {}
};