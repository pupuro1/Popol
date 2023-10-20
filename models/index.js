const Sequelize = require('sequelize'); 
const User = require('./user'); //user파일을 User로 불러옴 
const Product = require('./product'); //product파일을 Product로 불러옴
const Employee = require('./employee'); //employee파일을 Employee로 불러옴
const Cart = require('./cart'); //cart파일을 Cart로 불러옴
const Order = require('./order'); //order파일을 Order로 불러옴
const OrderDetail = require('./orderDetail'); //orderDetail파일을 OrderDetail로 불러옴
// const CartView =  require('../migrations/20231016053437-cartView');

const env = process.env.NODE_ENV || 'development'; //상수 env에 NODE_ENV없으면 'development' 넣음
const config = require('../config/config')[env]; //상수config에 ../config/config파일에서 env(development) 불러옴
const db = {}; //상수 db라는 빈 객체 생성

//sequelize 인스턴스 생성../config/config파일의 development 내용들 넣음  
const sequelize = new Sequelize(config.database, config.username, config.password, config); 

//생성된 인스턴스를 나중에 재사용하기 위해 db.sequelize에 넣음
db.sequelize = sequelize;

//만든 모델들 추가
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
