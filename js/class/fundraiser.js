
bab.fundraiser = (

    function ( ) {

        var privateProperty = 'xyz';

        function concealed ( ) {
            console.log ('This fundraiser function is not exposed!');
        }

        return {

            publicProperty : 789
           ,exposed : function ( ) {
                console.log ('This fundraiser function is exposed!');
                concealed ();
                console.log ('privateProperty = '+privateProperty);
            }

        }

    } ()

)
