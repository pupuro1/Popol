const Sequelize = require("sequelize");

class Employee extends Sequelize.Model {
  static initiate(sequelize) {
    Employee.init({
      id: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
        comment: "관리자 아이디",
      },
      pwd: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "관리자 비밀번호",
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "관리자 이름",
      },
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        validate: {
          isEmail: true,
        },
        comment: "관리자 이메일",
      },
      phone: {
        type: Sequelize.STRING(20), 
        allowNull: false,
        comment: "관리자 번호",
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Employee',
      tableName: 'employees',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {}
};

module.exports = Employee;