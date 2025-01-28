import express from 'express';

const app = express();


//declare we are using Pug as a template language
app.set('view engine', 'pug');
app.set('views', "./src/views");

//static assets (css, JS, images, ...)
app.use(express.static('./src/public'));

//routes
app.get("/home", (req, res) => {res.render('home', { author: "<Your Name>" })})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));