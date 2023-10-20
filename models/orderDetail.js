/*
작성자: 김지환
수정일자: 2023-10-18
내용: OrderDetail모델 정의  (상세주문 테이블)
*/
const Sequelize = require("sequelize");

class OrderDetail extends Sequelize.Model {
  static initiate(sequelize) {
    OrderDetail.init({
      odNum: { // 상세주문 번호
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "주문처리 (기본키)",
      },
      orderNum: { //주문번호(order모델의 orderNum참조)
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "주문 번호 (order테이블 orderNum참조)",
      },
      prodNum: { //주문한 상품번호(product모델의 prodNum참조)
        type: Sequelize.INTEGER(5),
        allowNull: false,
        comment: "상품 번호 (product테이블 prodNum참조)",
      },
      quantity: { //상품수량
        type: Sequelize.INTEGER(5),
        allowNull: false,
        comment: "상품 수량",
      },
      result: { //배송유무
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

  static associate(db) { // 다른 모델과의 관계 정의 
    //참조키로 Order모델의 orderNum(targetKey)를 orderNum(foreignKey)라는 이름으로 가져옴
    db.OrderDetail.belongsTo(db.Order, {foreignKey: 'orderNum', targetKey: 'orderNum'});

    //참조키로 Product모델의 prodNum(targetKey)를 prodNum(foreignKey)라는 이름으로 가져옴
    db.OrderDetail.belongsTo(db.Product, {foreignKey: 'prodNum', targetKey: 'prodNum'});
  }
};

module.exports = OrderDetail;