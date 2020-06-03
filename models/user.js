
const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataType) {
    const User = sequelize.define("User", {
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
        isWineryOwner: {
            type: DataType.BOOLEAN,
            allowNull: false,

        },

    });


    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
    //Apply automatic hashing of the password with bcrypt method
    User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    //Set up database associates. User can have many orders and events.
    //Will be set as a Foreign Key in both tables.

    User.associate = function(models){
        User.hasMany(models.Order,{
            onDelete: "cascade" 
        });
    };
    
    User.associate = function(models){
        User.hasMany(models.Event,{
            onDelete: "cascade" 
        });
    };
    

    return User;

};