
//Copy this JS

$( document ).ready( function () {
    $( '.navbar a.dropdown-toggle' ).on( 'click', function ( e ) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        $( this ).parent( "li" ).toggleClass( 'show' );

        if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }
        $( '.navbar-nav li.show' ).not( $( this ).parents( "li" ) ).removeClass( "show" );
        return false;
    } );
} );
