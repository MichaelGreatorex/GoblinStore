var forms = document.querySelectorAll('.needs-validation');
    
    Array.prototype.slice.call( forms ).forEach( function( form )
    {
        form.addEventListener( 'submit', function ( event )
        {
            if ( !form.checkValidity( ) )
            {
                event.preventDefault( )
                event.stopPropagation( );
            }

            todatabase.addEventListener('click', function(e){

                const firstName = document.getElementById("firstName");
                const lastName = document.getElementById("lastName");
                const emailaddressinput = document.getElementById("EmailAddressInput");
                const address = document.getElementById("address");
                const country = document.getElementById("country");
                const state = document.getElementById("state");
                const zip = document.getElementById("zip");
                const cardname = document.getElementById("cc-name");
                const cardnumber = document.getElementById("cc-number");
                const expiration = document.getElementById("cc-expiration");
                const cvv = document.getElementById("cc-cvv");
    
                const formdata = document.getElementById("special");
    
                let email =
                "<p>Hi " + firstName.value +
                "<br><br>" +
                "<p>We have recieved your order and it will be dispatched shortly. Please see the following details below:" +
                "<br>" +
                "<p>Name : " + firstName.value + "&nbsp" + lastName.value +
                "<br>" +
                "<p>Email : " + emailaddressinput.value +
                "<br>" +
                "<p>Address : " + address.value +
                "<br>" +
                "<p>Country : " + country.value +
                "<br>" +
                "<p>State : " + state.value +
                "<br>" +
                "<p>Postcode : " + zip.value +
                "<br>" +
                "<p>Full name as displayed on card : " + cardname.value +
                "<br>" +
                "<p>Card ending : **** **** **** " + cardnumber.value[12] + cardnumber.value[13] + cardnumber.value[14] + cardnumber.value[15] +
                "<br>" +
                "<p>Expires : " + expiration.value +
                "<br>" +
                "<p>CVV : " + cvv.value +
                "<br>";
                
                Email.send({
                    SecureToken : "8369981c-6420-4e59-b065-63fc08fcec14",
                    To : 'vzmgreatorex@gmail.com',
                    From : "goblinstore@gmx.com",
                    Subject : "Order Recieved!",
                    Body : email
                }).then(
                message => alert(message)
                );

                alert("Email Sent!");
            })
        }, false );
    } );

