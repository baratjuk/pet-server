import Db from '../Db.js';

const getItem = async (req, res) => {
    let {id} = req.params
    Db.getDB().deleteItem(id)
    res.send({error:0})
}

export default getItem;
