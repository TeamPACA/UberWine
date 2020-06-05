module.exports = function(sequelize, DataType){
    const Event = sequelize.define("Event",
        
        {

        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [5,20]
            }
        },
        eventdate:{
            type:DataType.STRING,
            allowNull: false,
            validate: {
                isDate: true
            }
        }
    });
    
    Event.associate = function(models){
        Event.belongsTo(models.User,{
            foreignKey:{
                allowNull: false
            }
        });
    };
    
    Event.associate = function(models){
        Event.belongsTo(models.Winery,{
            foreignKey:{
                allowNull: false
            } 
        });
    };

    return Event
};