const express = require('express');

const { loginRouter, userRouter, categoriesRouter, blogsRouter } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', loginRouter);
app.use('/', userRouter);
app.use('/', categoriesRouter);
app.use('/', blogsRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
