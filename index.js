const express = require('express');
const bodyParser = require('body-parser');
// const connect = require('/config/db');
const path = require('path');
var  cors = require('cors')
const router = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use('/',cors(), router);
app.use('/',cors(), postRoutes);
app.use('/', cors(),profileRoutes);
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build/')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(()=>{
    app.listen(PORT, () => {
      	console.log('Your app is running');
      })
   }
  )
  .catch((err) => console.log(err));

