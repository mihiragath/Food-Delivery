const categoryModel = require('../models/category');
const con = require('../connection');   
const { status, jsonStatus, messages } = require('../apiresponse');
async function getAllCategories(req, res) {
    try {
        con.query("select * from category",(err,result)=>{
            if(err)
            {
                res.send("error");
            }
            else
            {
                res.send(result);
                console.log(result);
            }
        })
    
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching categories');
    }
}

module.exports=getAllCategories;
