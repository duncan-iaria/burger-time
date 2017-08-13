require( 'dotenv' ).config( { path: './server/.env' } );
const express = require( 'express' );
const exphbs  = require( 'express-handlebars' );

//=========================
//  SERVER
//=========================
const server = express();
const PORT = process.env.PORT;
const router = express.Router();

//=========================
//  VIEW ENGINE
//=========================
server.engine( 'handlebars', exphbs( { defaultLayout: 'main' } ) );
server.set( 'view engine', 'handlebars' );

//=========================
//  MIDDLEWARE
//=========================
server.use( express.static( "public" ) );
server.use( bodyParser.urlencoded( { extended: false } ) );

//basic test route
server.get( '/', function ( tRequest, tResponse )
{
    tResponse.render( 'index' );
});

//=========================
//  INIT
//=========================
server.listen( PORT, onServerInit )

function onServerInit()
{
    console.log( `Server is listening at ${ PORT }` );
}