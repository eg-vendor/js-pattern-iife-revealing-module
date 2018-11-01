
bab.global = (

    function ( ) {

        var privateProperty = 'abc';

        function concealed ( ) {
            console.log ('This global function is not exposed!');
        }

        return {

            publicProperty : 123
           ,exposed : function ( ) {
                console.log ('This global function is exposed!');
                concealed ();
                console.log ('privateProperty = '+privateProperty);
            }

        }

    } ()

)
