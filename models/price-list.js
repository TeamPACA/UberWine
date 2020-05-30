module.exports = function(sequelize, DataType){
    const PriceList = sequelize.define("PriceList",
        
        {

        price: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                min:    5
            }
        }
    });
    return PriceList
};