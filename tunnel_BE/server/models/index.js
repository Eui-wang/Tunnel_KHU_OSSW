//mysql사용을 위한 sequelize 세팅 파일
const Sequelize = require('sequelize');

//table(모델)과 연결
const User = require("./user.js");
const Comment = require("./comment.js");
const Post = require("./post.js");

const env = process.env.NODE_ENV || 'development'; //개발버전
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;
db.Post = Post;

User.init(sequelize);
Comment.init(sequelize);
Post.init(sequelize);

User.associate(db);
Comment.associate(db);
Post.associate(db);


module.exports = db;
