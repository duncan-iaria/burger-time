const connection = require( './connection' );

const orm =
{
    getAllFromTable: function( tTable, tCallback )
    {
        const queryString = 'SELECT * FROM ' + tTable + ';';

        connection.query( queryString, onGetQueryComplete );

        //when the query is complete
        function onGetQueryComplete( tError, tResult )
        {  
            //if there is an error, log it, otherwise call passed callback with the data
            if( tError )
            {
                console.log( `There was an error with the db query: ${tError}` );
            }
            else
            {
                tCallback( tResult );
            }
        }
    },
}

module.exports = orm;