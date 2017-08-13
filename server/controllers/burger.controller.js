const router = require( 'express' ).Router();
const burger = require( '../models/burger' );

//=========================
//  BURGER GET
//=========================
router.get( "/",  onGetBurgers );

function onGetBurgers( tRequest, tResponse )
{
    //console.log( 'burgers!' );
    //tResponse.render( 'index' );

    burger.getAll( renderBurgers );

    function renderBurgers( tData )
    {
        console.log( tData );
        tResponse.render( 'index', { burgers: tData } );
    }
}

//=========================
//  BURGER POST
//=========================

//=========================
//  BURGER UPDATE
//=========================

//=========================
//  BURGER DELETE
//=========================


module.exports = router;
