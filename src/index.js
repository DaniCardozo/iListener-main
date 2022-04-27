const express = require('express');
const morgan = require('morgan');
const app = express();

const { engine } = require('express-handlebars');
const path = require('path');

app.set('port',process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',engine({
    defaultLayout: 'main',
    layoutsDie : path.join(app.get('views'),'layouts'),
    partialsDir : path.join(app.get('views'),'partials'),
    extname : '.hbs',
    helpers : require('./lib/handlebars')
}));
app.set('view engine','.hbs');
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Variables globales
app.use((req,res,next)=>{

    next();

});

//Rutas
app.use(require('./routes/index.js'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));


//Public
app.use(express.static(path.join(__dirname,'public')));
//Starting
app.listen(app.get('port'),function(){
    console.log("Servidor inicializado");
});






if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
/*
    Archivo principal para los archivos html
*/
/* Creamos la Conexión con la BBDD */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database : "users"
});

/*connection.connect(function(err){
    if(err){
        throw err;
    }
    var sql = "CREATE TABLE usuarios (username varchar(90), password varchar (100));";
    connection.query(sql, function(err,resultado){
        if(err){
            throw err;
        }
        {
            console.log("Tabla creada");
        }
    });

});*/
/*Creamos el servidor */


/*JQUERY iniciado*/
//try {
    

        /*
            Formulario de registro
        */
        
 /*       $("#form_register").submit(function(){
                var username = $("#register_nombre").val();
                var password = $("#regiser_password").val();
               
                connection.connect(function(err){
                    var sql ="INSERT INTO usuarios(username,password) VALUES('"+username+"','"+password+"');"
                    connection.query(sql,function(err,result){
                        if(err){
                            throw err;
                        }
                        console.log("Usuario registrado");
                    });
                });
               
                event.preventDefault();
            });*/
        
        /*
            Formulario de login
        */
        
         /*   $("#form_login").submit(function(){
                var login_nombre = $("#login_nombre").val();
                var login_password = $("#login_password").val();
                usuario_validar ={
                    "nombre" : login_nombre,
                    "password" : login_password
                }
        
                for(let index in localStorage){
                    var key = localStorage.key(index);
                    console.log();
                }
                event.preventDefault();
            }); 
        

        }
catch (error) {
    console.log(error);
}*/