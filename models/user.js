module.exports = function(sequelize, DataType){
    const User = sequelize.define("User", {
        username: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [5,20]
            }
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        }
    });
    return User;
};