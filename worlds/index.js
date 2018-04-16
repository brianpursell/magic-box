const app = require('express')();

app.get('/', (req, res) => res.send('hello!'));

const port = process.env.PORT || 8084;

app.listen(port, () => console.log(`Listening on port ${port}`));