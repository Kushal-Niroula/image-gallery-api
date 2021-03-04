const knex = require("../db.js");

function deleteImage(req, res) {
  console.log(req.body.id);
  knex("images")
    .where({
      uuid: req.body.id,
    })
    .del()
    .then(() => {
      res.json({
        status: "success",
      });
    });
}

module.exports = deleteImage;
