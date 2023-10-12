const Sequelize = require("sequelize");

class Order extends Sequelize.Model {
  static initiate(sequelize) {
    Order.init({
      orderNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "주문 번호 (기본키)",
      },
      userId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "주문한 회원 (user테이블 id참조)",
      },
      indate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: "주문날짜",
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Order',
      tableName: 'orders',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Order.hasMany(db.OrderDetail, { foreignKey: 'orderNum', sourceKey: 'orderNum'});
    db.Order.belongsTo(db.User, {foreignKey: 'userId', targetKey: 'id'});
  }
};

module.exports = Order;