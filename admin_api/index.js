const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/loginrout');
const profileRoutes = require('./routes/profileroutes');
const category = require('./routes/categoryroutes');
const categoryRoutes = require('./routes/itemroutes');
const itemRoutes = require('./routes/itemroutes');
const addressdetail = require('./routes/addressroutes');
const orderdetail = require('./routes/order');
const orderlist = require('./routes/orderllist');
const userlist = require('./routes/userroute');
const userdetail = require('./routes/userdetail');
const updateUser = require('./routes/updatedeleetuser');
const adminitem = require('./routes/additems,removeitems');
const banner = require('./routes/bannerrorute');
const deleted = require('./routes/bannerrorute');
const list = require('./routes/bannerrorute');
const logout = require('./routes/logoutroutes');
const contact_us = require('./routes/contactroute');
const update = require('./routes/additems,removeitems')
const PORT = process.env.PORT || 200;
const app = express();

app.use(bodyParser.json());

// Use your routes
app.use('/login', loginRoutes);
app.use('/profile', profileRoutes);
app.use('/category',category);
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);
app.use('/addressdetail',addressdetail);
app.use('/contact_us',contact_us);
app.use('/orderdetail',orderdetail);
app.use('/orderlist',orderlist);
app.use('/listuser',userlist);
app.use('/userdetail',userdetail);
app.use('/updateuser',updateUser);
app.use('/banner',banner);
app.use('/delete',deleted);
app.use('/list',list)
app.use('/adminitem', adminitem);
app.use('/update',update);
app.use(
    session({
      secret: 'Auth_key', // Change this to a secure secret key
      resave: false,
      saveUninitialized: true
    })
  );
  
app.use('/logout',logout);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
