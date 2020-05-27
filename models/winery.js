module.exports = function(sequelize, DataType){
    const Winery = sequelize.define("Winery", {
        wineryname: {
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
        phone: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                isNumeric: true
            }
        },

        address: {
            type: DataType.STRING,
            allowNull: false,
        },
        postcode: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
        
    });
    return Winery;
};