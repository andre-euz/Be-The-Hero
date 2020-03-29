const crypto = require('crypto');
const connection = require('../database/connection');

let id = 0;
const generateId = async () => {
    let existentId = true;
    while(existentId){
        id = crypto.randomBytes(4).toString('HEX');
        existentId = await connection('ongs')
                                .where('id',id)            
                                .select('id')
                                .first();
    }     
    return id
}

generateId();

module.exports = function gerenarteUniqueId() {
    return id;
}