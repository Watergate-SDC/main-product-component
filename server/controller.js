// const Cart = require('../database/schema.js')
const Pool = require('pg').Pool
const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'SDC',
  password: '',
  port: 5432,
}) 

let id = Math.floor(Math.random() * 1000000) + 9000000; // generates id number within last 10% of database
let currentId = 10000001;

const controller = {
  getOne:(req, res) => {
    let queryString = `SELECT * FROM products WHERE id = ${id} ORDER BY id DESC;`
    pool.query(queryString, (err, results) => {
      console.log(`querying for id: ${id}`)
        if (err) {
          res.status(400).send(err)
        }
          res.status(200).send(results.rows)
      })
    },
  addToCart: (req, res) => {
    let {price} = req.body
    let queryString = `INSERT INTO cart (price) VALUES (${price});`

    pool.query(queryString, (err, results) => {
      if (err) {
        res.status(400).send(err)
      }
      res.status(201).send(results.rows)
    })
  },
    getCartInfo: (req, res) => {
      let queryString = `SELECT * FROM cart;`
      pool.query(queryString, (err, results) => {
      if (err) {
        res.status(400).send(err)
      }

      let information = {
        subtotal: 0,
        totalItems: 0
      };

      for (let i = 0; i < results.rows.length; i++) {
        information.subtotal += results.rows[i].price;
        information.totalItems += 1;
      };
        res.status(200).send(information)
    })
  },
  deleteCart: (req, res) => {
    let queryString = `TRUNCATE TABLE cart;`
    pool.query(queryString, (err, results) => {
        if (err) {
          res.status(400).send(err)
        }
          res.status(200).send("Cleared Cart Table")
      })
  }
}  

module.exports = controller;


  // addProduct: (req, res) => {
  //   let {name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4} = req.body
  //   let data = [currentId, name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4]
  //   // let queryString = `INSERT INTO products(1, 'name', 'sex', 1, 1, 'design', 'fabric', 'fit', 'color1', 'color2', 'colorId1', 'colorId2', 'type', 'img1', 'img2', 'img3', 'img4') VALUES (${currentId},${name},${sex}, ${price}, ${reviews},'${design}','${fabric}','${fit}','${color1}','${color2}','${colorId1}','${colorId2}','${type}','${img1}','${img2}','${img3}','${img4}');`
  //   let queryString = `INSERT INTO products(id, name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4) VALUES ();`
  //   pool.query(queryString, data, (err, results) => {
  //       if (err) {
  //         res.status(400).send(err)
  //       }
  //         currentId+=1
  //         res.status(200).send(results)
  //     })
  // }

  // INSERT INTO products(id, name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4) VALUES (1, 'name', 'sex', 1, 1, 'design', 'fabric', 'fit', 'color1', 'color2', 'colorId1', 'colorId2', 'type', 'img1', 'img2', 'img3', 'img4');