const { Schema, model } = require('mongoose');

const CrupSchema =  Schema({
    crup: {
        type: String,
        required: [true, 'La crup es obligatoria'],
        unique: true
    },
    create_at: {
        type: String
    }
   
});

CrupSchema.methods.toJSON = function() {
    const { __v, password,_id, ...crup } = this.toObject();
    crup.uid = _id;
    return crup;
}

module.exports = model('Crup', CrupSchema);
