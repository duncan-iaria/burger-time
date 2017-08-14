const router = require( 'express' ).Router();
const burger = require( '../models/burger' );

//=========================
//  BURGER GET
//=========================
router.get( '/',  onGetBurgers );

function onGetBurgers( tRequest, tResponse )
{
    //console.log( 'burgers!' );
    //tResponse.render( 'index' );

    burger.getAll( renderBurgers );

    function renderBurgers( tData )
    {
        //console.log( tData );
        tResponse.render( 'index', { burgers: tData } );
    }
}

//=========================
//  BURGER POST
//=========================
router.post( '/', onPostBurger )

function onPostBurger( tRequest, tResponse )
{
    const tColumns = [ 'burger_name' ];
    const tValues = [ tRequest.body.name ];

    burger.create( 'burgers', tColumns, tValues, onPostBurgerComplete );

    function onPostBurgerComplete( tResult )
    {
        //refresh the page
        console.log( `successfully added burger to database: ${ tResult }` );
        tResponse.redirect( '/' );
    }
    
    //console.log( `new burger ${ tRequest.body.name }` );  
}

//=========================
//  BURGER UPDATE
//=========================
router.put( '/:id', onUpdateBurger )

function onUpdateBurger( tRequest, tResponse )
{
    if( tRequest.params.id != null )
    {
        console.log( `update burger with id ${ tRequest.params.id }` );
    }
    else
    {
        console.log( `there was an error when attempting to update a burger (no id passed)` );
    }
}

//=========================
//  BURGER DELETE
//=========================
router.delete( '/:id', onDeleteBurger )

function onDeleteBurger( tRequest, tResponse )
{
    console.log( `delete burger ${ tRequest.params.id }` );
}

module.exports = router;
