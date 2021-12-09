const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title:{
                type: Sequelize.TEXT,
                allowNull: false,
            },
            post:{
                type: Sequelize.TEXT,
                allowNull: false,
            },
            status:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            created_at:{
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName: 'Post',
            tableName:'posts',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }


    static associate(db) {
        db.Post.belongsTo(db.User,{foreignKey: 'userid', targetKey:'name' });
    }
};