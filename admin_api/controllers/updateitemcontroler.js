const con = require('../connection');

function update(req,resp){
    const data=[req.body.Name,req.body.Price,req.params.Id];
    con.query("update product set Name = ?,Price = ? where Id= ?",data,(err,result)=>{
            if(err) throw error
            resp.send(result);
    });
};

module.exports=update;