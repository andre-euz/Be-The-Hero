const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

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
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return res.json({ id });
    }
};