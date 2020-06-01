module.exports = function(sequelize, DataType){
    const Wine = sequelize.define("Wine",{
    winename:{
        type:DataType.STRING,
        allowNull: false,
        validate: {
            len: [3,20]
            }
        },
    year:{
        type:DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1970
            }
        },
    variety:{
        type:DataType.STRING,
        allowNull: false,
        validate: {
            len: [3,20]
            }
        },
    description:{
        type:DataType.STRING,
        allowNull: false,
        validate: {
            len: [10,100]
            }
        }   
    
    
    });
    
    Wine.associate = function(models){
        Wine.belongsTo(models.Order,{
            foreignKey:{
                allowNull: false
            }
        });
    }
    Wine.associate = function(models){
        Wine.belongsTo(models.Winery,{
            foreignKey:{
                allowNull: false
            }
        });
    };
    

    return Wine
};