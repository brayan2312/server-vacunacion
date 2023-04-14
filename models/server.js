const express = require('express');
//const { dbConnection } = require('../database/config')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.crupPath = '/api/crup';

        this.ConectarDB();
        this.middlewares();


        this.routes();

    }

    async ConectarDB() {
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.json());
        //Configurar cors
        this.app.use(cors());
    }

    routes(){         
        this.app.use(this.crupPath,require('../routes/crup.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('SERVIDOR CORRIENDO EN EL PUERTO', this.port);
        })
    }
}

module.exports = Server;