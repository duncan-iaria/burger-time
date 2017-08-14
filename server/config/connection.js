const mysql = require( 'mysql2' );

const connection = mysql.createConnection
(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

//=========================
//  CONNECTION LOGIC
//=========================
connection.connect( onConnectionComplete );

function onConnectionComplete( tError )
{
    if( tError )
    {
        console.log( `there was an error when connecting: ${ tError }` );
    }
    else
    {
        console.log( `MySQL connection complete at port ${ process.env.DB_PORT }` );
    }
}

//=========================
//  EXPORT
//=========================
module.exports = connection;