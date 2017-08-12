require( 'dotenv' ).config( { path: './server/.env' } );
const express = require( 'express' );

//server
const server = express();

//server vars
const PORT = process.env.PORT;
const router = express.Router();

//=========================
//  INIT
//=========================
server.listen( PORT, onServerInit )

function onServerInit()
{
    console.log( `Server is listening at ${PORT}` );
}