const Sequelize = require("sequelize");

class OrderDetail extends Sequelize.Model {
  static initiate(sequelize) {
    OrderDetail.init({
      odNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "주문처리 (기본키)",
      },
      orderNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "주문 번호 (order테이블 orderNum참조)",
      },
      prodNum: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        comment: "상품 번호 (product테이블 prodNum참조)",
      },
      quantity: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        comment: "상품 수량",
      },
      result: {
        type: Sequelize.BOOLEAN, 
        allowNull: false,
        defaultValue: 1,
        comment: "배송 유무(배송 전: 1, 배송 후: 0)",
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'OrderDetail',
      tableName: 'order_detail',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.OrderDetail.belongsTo(db.Order, {foreignKey: 'orderNum', targetKey: 'orderNum'});
    db.OrderDetail.belongsTo(db.Product, {foreignKey: 'prodNum', targetKey: 'prodNum'});
  }
};

module.exports = OrderDetail;