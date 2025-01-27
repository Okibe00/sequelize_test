export default function user(sequelize, DataType) {

    const user = sequelize.define(
        'user',
        {
            firstname: {
                type: DataType.STRING 
            },
            lastname: {
                type: DataType.STRING
            }
        }
    )
    return user;
}