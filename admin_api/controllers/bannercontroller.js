// controllers/bannercontroller.js
const con = require('../connection');

function createBanner(req, res) {
    const data = req.body;
    con.query('INSERT INTO banner SET ?', data, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating banner');
        } else {
            res.send(result);
        }
    });
}
function deletebanner(req, res) {
    const id = req.params.id; // Get the ID from URL parameters
    con.query('DELETE FROM banner WHERE Id = ?', [id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting banner');
        } else {
            res.send(result);
        }
    });
}


function listbanner(req, res) {
        con.query('select * from banner',(error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating banner');
        } else {
            res.send(result);
        }
    });
}

module.exports={
    createBanner,
    deletebanner,
    listbanner
}



