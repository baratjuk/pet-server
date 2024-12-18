import Db from '../Db.js';

const addItem = async (req, res) => {
    let {name} = req.body
    console.log(JSON.stringify(req.params, null, 4))
    Db.getDB().addItem(name);
    res.send({error:0});
}

export default addItem;
