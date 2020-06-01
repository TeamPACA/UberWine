module.exports = function (sequelize, DataType) {
    const Users = sequelize.define("users", {
        username: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [5, 20]
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
        },
        usertype: {
            type: DataType.STRING,
            allowNull: false,
        },

    });
    return Users;
};