const Sequelize = require("sequelize");

class Cart extends Sequelize.Model {
  static initiate(sequelize) {
    Cart.init({
      cartNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "장바구니 번호 (기본키)",
      },
      userId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "장바구니 이용 회원 (user테이블 id참조)",
      },
      prodNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "상품 번호 (product테이블 peodNum참조) ",
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
        comment: "결제 유무(결제 전: 1, 결제 후: 0)",
      },
      indate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: "카트 등록일",
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Cart',
      tableName: 'cart',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Cart.belongsTo(db.User, {foreignKey: 'userId', targetKey: 'id'});
    db.Cart.belongsTo(db.Product, {foreignKey: 'prodNum', targetKey: 'prodNum'});
  }
};

module.exports = Cart;