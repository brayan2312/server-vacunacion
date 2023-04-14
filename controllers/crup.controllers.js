const { response, request } = require("express");
const Crup = require('../models/crup.models');

const crupsGET = async (req, res = response) => {
    try {
        const crup = await Crup.find();
        return res.json(crup);
    } catch (error) {
        return res.status(500).json({ msg: "Error en el server" });
    }
};

const crupIdGET = async (req = request, res = response) => {

    const id = req.params.id;

    try {
        const crup = await Crup.findById(id)
        return res.json({ data: crup });
    } catch (error) {
        return res.status(500).json({ msg: "Error en el server" });        
    }
}

const crupsPOST = async (req, res = response) => {

    console.log(req.body);
    const { crup, create_at } = req.body;

    try {
         const crupDB = new Crup({ crup, create_at });

        // Guardar en DB
        await crupDB.save();

        return res.json(crupDB);
    } catch (error) {
        return res.status(500).json({ msg: "Error en el server" });
        
    }

   
}

const crupPUT = async (req = request, res = response) => {

    const { id } = req.params;
    const { crup } = req.body;

    try {
         const crupDB = await Crup.findByIdAndUpdate(id, { crup });
        crupDB.crup = crup;
       return res.json({
            msg: 'PUT API',
            data: crupDB
        })
    } catch (error) {
        return res.status(500).json({ msg: "Error en el server" });
    }


   
}

const crupDELETE = async (req, res = response) => {

    const { id } = req.params;
    try {

        const crupDB = await Crup.findByIdAndDelete(id);


        res.json({
            msg: 'DELETE API',
            data: crupDB,
        })
    } catch (error) {
        return res.status(500).json({msg: "Error en el server" });
    }
}

module.exports = {
    crupsGET,
    crupIdGET,
    crupsPOST,
    crupPUT,
    crupDELETE
}