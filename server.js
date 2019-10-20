const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.send(ReactDOMServer.renderToString(React.createElement(path.join(__dirname, 'build', 'index.html'))));
});

app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});