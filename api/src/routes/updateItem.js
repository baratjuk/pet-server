import Db from '../Db.js';

const updateItem = async (req, res) => {
    let {id} = req.params
    let {name} = req.body
    console.log(JSON.stringify(req.params, null, 4))
    Db.getDB().uodateItem(id, name);
    res.send({error:0});
}

export default updateItem;
