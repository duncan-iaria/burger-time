const connection = require( './connection' );

const orm =
{
    getAllFromTable: function( tTable, tCallback )
    {
        const queryString = 'SELECT * FROM ' + tTable + ';';

        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
}

module.exports = orm;