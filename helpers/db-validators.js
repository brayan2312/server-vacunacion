const Crup = require('../models/crup.models');


const existeCrupPorId = async(id) => {
    const existeCrup= await Crup.findById(id);
    if(!existeCrup) throw new Error(`El id no existe ${id}`);

}

const CrupExistValida = async(crup = '') => {
    const existeCrup = await Crup.findOne({ crup });

    if(existeCrup)  throw new Error(`La CRUP: ${crup} ya se encuentra registrada.`);
}

module.exports = {
    existeCrupPorId ,
    CrupExistValida
}