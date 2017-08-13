const router = require( 'express' ).Router();
const burger = require( '../models/burger' );

//=========================
//  BURGER GET
//=========================
router.get( "/",  onGetBurgers );

function onGetBurgers( tRequest, tResponse )
{
    console.log( 'burgers!' );
}

module.exports = router;
