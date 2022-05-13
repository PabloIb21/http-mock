const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/unify-accounts', require('./routes/unify-accounts'));
app.use('/api/data-updating', require('./routes/data-updating'));

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
