import express from "express";
import exphbs from "express-handlebars";
import path from "path";
import morgan from "morgan";
import usersRoutes from './routes/users.routes'

import cors from 'cors'
import cookieParser from 'cookie-parser'


import main from './database/start_bd.js' //para iniciar la base de datos
main()

const Handlebars = require('handlebars');

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
import config from './config.js';
import moment from 'moment';
moment.locale('es')
moment().format();

const app=express();

// Configuraciones
app.set("port", config.PORT);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: {
        inc: function (value, options) {
          return parseInt(value) + 1;
        },
        fecha: function(value){
            return moment(value).format('L');
        },
        class_projects: function(value){
          if(value=="Pendiente"){
            return "pending"
          }
          if(value=="En proceso"){
            return "process"
          }
          if(value=="Terminado"){
            return "completed"
          }
        }
    },
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);
app.set("view engine", ".hbs");

//Middlewares
app.use(cookieParser())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.json())


//Archivos estaticos
app.use(express.static(__dirname + '/public'));

app.use(usersRoutes)


app.use((req, res) => {
  res.render("404");
});


export default app;