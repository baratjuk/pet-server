import Db from '../Db.js';

const getItem = async (req, res) => {
    let id = req.params.id
    const item = await Db.getDB().getItem(id)
    res.send({
        error:0,
        item
    })
}

export default getItem;
