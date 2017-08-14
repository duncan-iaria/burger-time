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

    createTableEntry: function( tTable, tColumns, tValues, tCallback )
    {
        let queryString = `INSERT INTO ${ tTable }`;
        queryString += " (";
        queryString += tColumns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(tValues.length);
        queryString += ") ";

        console.log( queryString );
        connection.query( queryString, tValues, function( err, tResult) {
            if (err) {
                throw err;
            }
            tCallback( tResult );
         });
    },
}


// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

module.exports = orm;