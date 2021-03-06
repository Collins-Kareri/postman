const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/tasks');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'POST') {
//         res.status(503).send('Site is currently down. Contact Emmanuel')
//     };
//     next();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port' + ' ' + port)
});

const bcrypt = require('bcryptjs');

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'data1' }, 'lovepizza', { expiresIn: '3 days' });
//     console.log(token);

//     const data = jwt.verify(token, 'lovepizza');
//     console.log(data);
// };

// myFunction();