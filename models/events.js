module.exports = function(sequelize, DataType){
    const Event = sequelize.define("Events",
        
        {

        event: {
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
    return Event
};