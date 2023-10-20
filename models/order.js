/*
작성자: 김지환
수정일자: 2023-10-18
내용: Order모델 정의  (주문 테이블)
*/
const Sequelize = require("sequelize");

class Order extends Sequelize.Model {
  static initiate(sequelize) {
    Order.init({
      orderNum: { //주문번호
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "주문 번호 (기본키)",
      },
      userId: { //주문한 회원 번호
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "주문한 회원 (user테이블 id참조)",
      },
      indate: { //주문날짜 시간 
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
    //참조키로 OrderDetail모델에 orderNum(sourceKey)를 orderNum(foreignKey)라는 이름으로 보냄
    db.Order.hasMany(db.OrderDetail, { foreignKey: 'orderNum', sourceKey: 'orderNum'});

    //참조키로 User모델의 id(targetKey)를 userId(foreignKey)라는 이름으로 가져옴
    db.Order.belongsTo(db.User, {foreignKey: 'userId', targetKey: 'id'});
  }
};

module.exports = Order;