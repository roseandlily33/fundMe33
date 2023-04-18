const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
console.log(sequelize);
class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               len: [10],
            }
        }
    },
    {
        hooks: {
            beforeCreate: async(newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10); return newUserData;
            },
            beforeUpdate: async(updatedData) => {
                updatedData.password = await bcrypt.hash(updatedData.password, 10); return updatedData;
            }
        }

    },
    { 
        sequelize,
        modelName: 'user',
        freezeTableName: true,
        underscored: true,  
    }
);

module.exports = User;