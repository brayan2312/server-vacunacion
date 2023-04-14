
/*const { Sequelize } = require('sequelize');

const conexion = new Sequelize('vacunacion', 'root', '12345', {
    host: 'localhost',
    // port: 3306,
    dialect: 'mysql',
    // logging: false
});

const dbConnection = async() => {
    try {
        await conexion.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports = {
    dbConnection,
    conexion,
}
*/


const mongoose = require('mongoose');

const dbConnection = async() => {

    try{
        // await mongoose.connect(process.env.MONGODB_CNN, {
        //     useNewUrlParse: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        //     useFindAndModify: false
        // });

        await mongoose.connect(
            process.env.MONGODB_CNN, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
            console.log('Base de datos corriendo');
    }catch(error){
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}