/**
 * Created by megan on 12/5/16.
 */
import express from 'express';
import bodyParser from 'body-parser';

export default function base(r, tableName) {
    if (!tableName) throw new Error('must provide a table name');
    // eslint-disable-next-line new-cap
    const router = express.Router();
    router.use(bodyParser.json());

    router.get('/', function (req, res){
        r.table(tableName).run().then((result)=>{
            if(result) res.json(result);
        });
    });

    router.get('/', (req, res) => {
        const id = req.params.id;
        r.table(tableName).get(id)
            .run()
            .then((result) => {
                if (result) res.json(result);
            });
    });

    router.get('/:id',(req,res)=>{
       const id=req.params.id;
       r.table(tableName).get(id)
           .run()
           .then((result) => {
                if(result) res.json(result);
           });
    });

    router.post('/:id',(req,res) =>{
        const id=req.params.id;
        console.log(id, req.body);
        r.table(tableName).get(id).update(req.body, { returnChanges: true })
            .run()
            .then((result) => {
                console.log(result);
                const resultRecord = result.changes ? result.changes[0].new_val : result;
                res.json(resultRecord);
                console.log(resultRecord);
            });
    });

  return router;
}

