module.exports = function (sequelize, DataType) {
    const User = sequelize.define("users", {
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
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    User.associate = function (models) {
        User.hasMany(models.Order, {
            onDelete: "cascade"
        });
    };

    User.associate = function (models) {
        User.hasMany(models.Event, {
            onDelete: "cascade"
        });
    };


    return User;

};