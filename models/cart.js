/*
작성자: 김지환
수정일자: 2023-10-18
내용: cart모델 정의  (장바구니 테이블)
*/
const Sequelize = require("sequelize");

class Cart extends Sequelize.Model {
  static initiate(sequelize) {
    Cart.init({ //테이블 컬럼에 대한 설정 
      cartNum: { //컬럼이름(장바구니 번호)
        //컬럼설정
        type: Sequelize.INTEGER, //타입설정(int)
        primaryKey: true, //기본키
        autoIncrement: true, //자동으로 1씩 증가해서 들어감
        allowNull: false, //null금지
        comment: "장바구니 번호 (기본키)", //컬럼 설명
      },
      userId: { //장바구니 넣은 회원의 id 
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "장바구니 이용 회원 (user테이블 id참조)",
      },
      prodNum: { //장바구니에 담긴 제품 번호
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "상품 번호 (product테이블 peodNum참조) ",
      },
      quantity: { //제품 수량
        type: Sequelize.INTEGER(5),
        allowNull: false,
        comment: "상품 수량",
      },
      result: { //결제유무
        type: Sequelize.BOOLEAN, 
        allowNull: false,
        defaultValue: 1, //기본값 1
        comment: "결제 유무(결제 전: 1, 결제 후: 0)",
      },
      indate: { //담긴 날짜시간
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, //기본값 현재날짜시간
        comment: "카트 등록일",
      },
    }, { //테이블 자체에대한 설정
      //static init 메서드의 매개변수와 연결되는 옵션으로, db.sequelize 객체를 넣어야 한다. 나중에 model/index.js에서 연결
      sequelize, 

      //true면 시퀄라이즈는 createdAt과 updatedAt 컬럼을 추가하며, 각각 로우가 생성될 때와 수정될 때의 시간이 자동으로 입력 지금은 indate있어서 false설정
      timestamps: false, 

      //기본적으로 테이블명과 컬럼명은 카멜 표기법(camel case). 이를 스네이크 표기법(snake case)으로 바꾸는 옵션 (예를들어 updatedAt 을 updated_at 으로)
      underscored: false,
      
      //모델 이름을 설정할 수 있다. 노드 프로젝트에서 사용
      modelName: 'Cart', 

      //실제 데이터베이스의 테이블 이름.
      tableName: 'cart',
      
      //true로 설정하면 deletedAt이라는 컬럼이 생긴다. 로우를 삭제할 때 완전히 지우지 않고, deletedAt에 지운 시각이 기록됨(나중에 복구 위함)
      paranoid: false, 

      //각각 utf8 과 utf8_general_ci 로 설정해야 한글이 입력된다. 이모티콘까지 입력할 수 있게 하고 싶다면 utf8mb4 와 utf8mb4_general_ci 를 입력
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) { //다른 모델과의 관계 정의
    //참조키로 User모델의 id(targetKey)를 userId(foreignKey)라는 이름으로 가져옴
    db.Cart.belongsTo(db.User, {foreignKey: 'userId', targetKey: 'id'});

    //참조키로 Product모델의 prodNum(targetKey)을 prodNum(foreignKey)라는 이름으로 가져옴
    db.Cart.belongsTo(db.Product, {foreignKey: 'prodNum', targetKey: 'prodNum'}); 
  }
};

module.exports = Cart;