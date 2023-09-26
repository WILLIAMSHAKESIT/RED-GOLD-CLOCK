const suburl    = process.env.suburl;
const suburl2   = process.env.suburl2;
module.exports = function (app) {
    app.get(`/${suburl}/:tableno`, async function (req, res) {
        res.render(`clock.ejs`, { data : { _tableno : req.params.tableno } });
    });
    app.get(`/${suburl2}`, async function (req, res) {
        res.render(`app.ejs`);
    });
} 
