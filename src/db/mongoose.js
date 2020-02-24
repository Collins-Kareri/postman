const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const user = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot be password');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive integer')
            }
        }
    }
});

const me = new user({
    name: 'Mike',
    email: 'MIKE@MIKE.IO',
    password: 'passwor',
    age: 36
});

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error);
});

/*Task, description: String and completed: boolean
learn how to mongoose, true/false
save*/

// const tasks = mongoose.model('Tasks', {
//     description: String,
//     completed: Boolean
// });

// const done = new tasks({
//     description: 'Reading',
//     completed: false
// });

// done.save().then(() => {
//     console.log(done)
// }).catch((error) => {
//     console.log('Error!', error)
// });