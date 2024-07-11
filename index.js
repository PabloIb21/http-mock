const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/unify-accounts', require('./routes/unify-accounts'));
app.use('/api/data-updating', require('./routes/data-updating'));
app.use('/api/corporate-profile', require('./routes/corporate-profile'));
app.use('/api/pre-validation-winner', require('./routes/pre-validation-winner'));
app.use('/api/retroactive-accreditations', require('./routes/retroactive-accreditations'));
app.use('/api/last-miles', require('./routes/last-miles'));
// app.use('/api/v1/', require('./routes/ccss'));
app.use('/api/v1/', require('./routes/mmyt'));

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
