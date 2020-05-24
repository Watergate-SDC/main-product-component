const controller = {
  getOne:(req, res) => {
      let db = req.app.locals.db;
      let id = Math.floor(Math.random() * 1000000) + 9000000 // generates id number within last 10% of database
    db.collection("luluProducts").find({id: id}).sort({id: -1}).limit(1).toArray()
      .then(data => {
        console.log(`querying for id: ${id}`)
        res.status(200).send(data)
      })
      .catch(err => res.status(400).send(err))
    }
};

module.exports = controller;