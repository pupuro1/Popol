const Sequelize = require("sequelize");

class Product extends Sequelize.Model {
  static initiate(sequelize) {
    Product.init({
      prodNum: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "상품 번호 (기본키)",
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
        comment: "상품 이름",
      },
      kind: {
        type: Sequelize.STRING(10),
        allowNull: false,
        comment: 
          "상품 종류(1: 과일(1,1-1,1-2,1-3,1-4),2: 채소(2,2-1,2-2,2-3,2-4), 3: 쌀/잡곡(3,3-1,3-2,3-3,3-4), 4: 육류/계란류(4,4-1,4-2,4-3,4-4), 5: 수산물(5,5-1,5-2,5-3,5-4))",
      },
      price: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        comment: "상품 가격",
      },
      content: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        comment: "상품 설명",
      },
      imageUrl:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      useyn: {
        type: Sequelize.BOOLEAN, 
        allowNull: false,
        defaultValue: 1,
        comment: "상품 판매 여부(판매: 1, 판매중단: 0)",
      },
      regdate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: "상품 등록일",
        //INSERT INTO foodingdb.products (name, price, content) values('삼다수', 1000, '제주도의 삼다수입니다');
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Product',
      tableName: 'products',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Product.hasMany(db.Cart, { foreignKey: 'prodNum', sourceKey: 'prodNum'});
    db.Product.hasMany(db.OrderDetail, { foreignKey: 'prodNum', sourceKey: 'prodNum'});
  }
};

module.exports = Product;