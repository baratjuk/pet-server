import mysql from 'mysql2';

class Db {

    static instance

    dbConnect

    static getDB() {
        if(this.instance == null) {
            this.instance = new Db()
        }
        return this.instance
    }

    constructor() {
        super.constructor()
        let host = process.env.DATABASE_HOST
        let user = process.env.DATABASE_ROOT_USER
        let password = process.env.DATABASE_ROOT_PASSWORD
        let database = process.env.DATABASE_NAME
        let port = process.env.DATABASE_PORT
        // console.log(`${host} ${port} ${user} ${password} ${database}`)
        this.dbConnect = mysql.createConnection({
            host,
            port,
            user,
            password,
            database
        })
        this.dbConnect.connect((err) => {
            if (err) {
                throw err
            }
            console.log("DB Connected!");
        })
    }

    async select(sql) {
        let tableData = await new Promise(r => this.dbConnect.query(sql, (err, result) => {
            if (err) {
                console.log('select sql : ' + sql)
                console.log('select error : ' + err.message)
                r([])
            } else {
                r(result)
            }
        }))
        return tableData
    }

    update(sql) {
        this.dbConnect.query(sql, (err, result) => {
            if (err) {
                console.log('update sql : ' + sql)
                console.log('update error : ' + err.message)
            }
        })
    }

    upsert(updateSql, insertSql) {
        this.dbConnect.query(updateSql, (err1, result1) => {
            if (err1) {
                this.dbConnect.query(insertSql, (err2, result2) => { 
                })
            }
        })
    }

    async getItems() {
        let ret = await this.select(`SELECT * FROM table1;`)
        return ret
    }

    async getItem(id) {
        let ret = await this.select(`SELECT * FROM table1 WHERE id = ${id}`)
        return ret
    }

    addItem(name) {
        let ret = this.update(`INSERT INTO table1 (name1) VALUES('${name}')`)
        return ret
    }

    updateItem(id, name) {
        let ret = this.update(`UPDATE table1 SET name1 = '${name}' WHERE id = ${id}`)
        return ret
    }

    deleteItem(id) {
        let ret = this.update(`DELETE FROM table1 WHERE id = ${id}`)
        return ret
    }

}
export default Db;