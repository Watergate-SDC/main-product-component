// Math.floor(Math.random() * 10000000)
const controller = {
  getOne: async (req, res, next) => {
    try {
    let db = req.app.locals.db;
      let data = await db.collection("luluProducts").findOne({id: 2999999})
        if(data) {
          res.status(200).send(data);
        } else {
          res.status(400).send("Could not GET")
        }
      } catch (err) {
        next(err);
      }
  }
};

module.exports = controller;


