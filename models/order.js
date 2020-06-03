module.exports = function(sequelize, DataType){
    const Order = sequelize.define("Order",{
        quantity: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
            }
        }

    });

    Order.associate = function(models){
        Order.belongsTo(models.User,{
            foreignKey:{
                allowNull: false
            }
        });
    }
    
    Order.associate = function(models){
        Order.hasMany(models.Wine,{
            onDelete: "cascade"
        });
    };
    
    return Order;

};