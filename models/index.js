const Sequelize = require('sequelize');
const User = require('./user');
const Product = require('./product');
const Employee = require('./employee');
const Cart = require('./cart');
const Order = require('./order');
const OrderDetail = require('./orderDetail');
// const CartView =  require('../migrations/20231016053437-cartView');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Product = Product;
db.Employee = Employee;
db.Cart = Cart;
db.Order = Order;
db.OrderDetail = OrderDetail;

User.initiate(sequelize);
Product.initiate(sequelize);
Employee.initiate(sequelize);
Cart.initiate(sequelize);
Order.initiate(sequelize);
OrderDetail.initiate(sequelize);

User.associate(db);
Product.associate(db);
Employee.associate(db);
Cart.associate(db);
Order.associate(db);
OrderDetail.associate(db);


module.exports = db;
