const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userid:{
                type: Sequelize.STRING(30),
                allowNull: false,
                unique:true,
            },
            comment:{
                type: Sequelize.TEXT,
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
            modelName: 'Comment',
            tableName:'comments',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }


    static associate(db) {
        db.Comment.belongsTo(db.Post,{foreignKey: 'postid', targetKey:'id' });
    }
};