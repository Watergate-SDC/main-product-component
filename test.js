let request = require('supertest')('http://localhost:3000')


it('should query a GET request to one item in "products" table', (done) => {
    request.get('/api/one')
    .expect(200)
    .expect(function(res) {
      expect(res.body[0].id > 0)
    })
    .end(done)
});

it('should query a GET request to one item in "cart" table', (done) => {
  request.get('/api/cart')
  .expect(200)
  .expect(function(res) {
    expect(res.body.subtotal === 0)
  })
  .end(done)
});