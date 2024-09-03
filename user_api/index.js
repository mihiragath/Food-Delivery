const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/loginrout');
const profileRoutes = require('./routes/profileroutes');
const category = require('./routes/categoryroutes');
const categoryRoutes = require('./routes/itemroutes');
const itemRoutes = require('./routes/itemroutes');
const address = require('./routes/addressroutes');
const feedback = require('./routes/feedbackroutes');
const cancel = require('./routes/cancelroutes');
const past = require('./routes/ongoing,placeroutes');
const cartRoutes = require('./routes/addtocart,removetocart');
const logout = require('./routes/logoutroutes');
const contact = require('./routes/contactusroutes');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

// Use your routes
app.use('/login', loginRoutes);
app.use('/profile', profileRoutes);
app.use('/category',category);
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);
app.use('/address',address);
app.use('/feedback',feedback);
app.use('/cancel',cancel);
app.use('/past',past);
app.use('/cart', cartRoutes);
app.use(
    session({
      secret: 'Auth_key', // Change this to a secure secret key
      resave: false,
      saveUninitialized: true
    })
  );
  
app.use('/logout',logout);
app.use('/contact',contact);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
