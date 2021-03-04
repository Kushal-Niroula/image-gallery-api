const knex = require("../db.js");

/**
*@param {req} object
*@param {res} object
*deletes the link of image with specific uuid from the database
*/
function deleteImage(req, res) {
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
