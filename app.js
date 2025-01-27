// import { Sequelize } from "sequelize";


// const sequelize = new Sequelize('sequelize_test', 'okibe', 'okibe007', {
//     dialect: 'mysql',
//     host: 'localhost'
// })

// try {
//     const rs = await sequelize.authenticate();
//     console.log('Connection successful')
// } catch (error) {
//     console.error(error);
// }
import express from 'express';
// import db from './models/engine/db.js';
import userRouter from './routes/user.js';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/api', userRouter);

app.get('/', (request, response) => {
    response.status(200).json({
        status: 'success',
        data: {}
    })
})
app.listen(port, () => {
    console.log("Connected and listening on port ", port);
});
