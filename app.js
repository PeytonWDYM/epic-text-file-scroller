const express = require('express');
const app = express();
const path = require('path');
const port = 2500

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`listening @ http://localhost:${port}`);
});

