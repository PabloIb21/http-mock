# HTTP Mock

## How does it work?

### Add a new controller
_Create a new file in the 'controllers' folder._
```
const nameFunction = (req, res) => {
  const { status } = req.headers;
  
  // Place the required status and json in the response.
  switch (status) {
    case '200':
      return res.status(200).json({ ok: true });

    case '400':
      return res.status(400).json({ ok: false, message: 'Bad request' });

    default:
      return res.status(500).json({ ok: false, message: 'Internal server error' });
  }
}

// Export the functions created in this file
module.exports = { nameFunction }
```

### Add a new route
_Create a new file in the folder 'routes'._
```
const { Router } = require('express');
// Import controller functions
const { nameFunction } = require('../controllers/controller-name');

const router = Router();

// Create the routes with the required method and name
// http://localhost:4000/api/route-name/action-name
router.post('/action-name', nameFunction);

module.exports = router;
```
_Add route in index._

```
// http://localhost:4000/api/nombre-ruta
app.use('/api/nombre-ruta', require('./routes/nombre-archivo'));
```

### Try endpoint
_Run app._
```
yarn start
```
_In postman or already inside a project consume the endpoint with the defined method:_
```
http://localhost:4000/api/nombre-ruta/nombre-accion
```
_In headers set the required status._
```
headers: {
  status: '200'
}
```
_You will get the defined response._