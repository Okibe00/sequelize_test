import { DataTypes, Sequelize } from "sequelize";
import user from "../user.js";

const config = {
    HOST: 'localhost',
    PASSWORD: 'okibe007',
    DATABASE: 'sequelize_test',
    USER: 'okibe',
    DIALECT: 'mysql'
}
const sequelize = new Sequelize(
    config.DATABASE,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.DIALECT,
        logging: false
    }
);

//test connection
(
    async () => {
        try {
            await sequelize.authenticate();
            console.log('Connected to database successfully');
        } catch (error) {
            console.error('Failed to connect to database ', error)
        }
    }
)()
const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = user(sequelize, DataTypes);
db.sequelize.sync({alter: true});
export default db;