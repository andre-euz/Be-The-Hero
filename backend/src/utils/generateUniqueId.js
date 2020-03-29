const crypto = require('crypto');
const connection = require('../database/connection');



module.exports = function gerenarteUniqueId() {
    let id = crypto.randomBytes(4).toString('HEX');
    async function generateId() {
        let existentId = true;
        while(existentId){
            id = crypto.randomBytes(4).toString('HEX');
            existentId = await connection('ongs')
                                    .where('id',id)            
                                    .select('id')
                                    .first();
        }     
        console.log(id);
        return id
    }
    
    return generateId();
}