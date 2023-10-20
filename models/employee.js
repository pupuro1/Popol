/*
작성자: 김지환
수정일자: 2023-10-18
내용: Employee모델 정의 (관리자 테이블) 
*/
const Sequelize = require("sequelize");

class Employee extends Sequelize.Model {
  static initiate(sequelize) {
    Employee.init({ //테이블 컬럼에 대한 설정
      id: { //컬럼이름 (관리자 id)
        //컬럼설정
        type: Sequelize.STRING(20), //타입은 string 20문자 제한
        primaryKey: true, //기본키
        allowNull: false, //null금지
        comment: "관리자 아이디", //컬럼 설명 
      },
      pwd: { //관리자 비번
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "관리자 비밀번호",
      },
      name: { //관리자 이름
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "관리자 이름",
      },
      email: { //관리자 이메일
        type: Sequelize.STRING(40),
        allowNull: false,
        comment: "관리자 이메일",
      },
      phone: { //관리자 폰 번호
        type: Sequelize.STRING(20), 
        allowNull: false,
        comment: "관리자 번호",
      },
    }, {
      sequelize,
      timestamps: false, //자동 생성되는 시간 컬럼 생성 안함 
      underscored: false, //스네이크 표기법 사용
      modelName: 'Employee', //모델이름 설정
      tableName: 'employees', //테이블 이름 설정
      paranoid: false, //true하면 deletedAt이라는 컬럼이 생기고 삭제할때 삭제안되고 deletedAt에 해당 시간 들어감 
      charset: 'utf8', //한글사용
      collate: 'utf8_general_ci',//한글사용
    });
  }

  static associate(db) {} //다른 모델과 연결 안됨
};

module.exports = Employee;