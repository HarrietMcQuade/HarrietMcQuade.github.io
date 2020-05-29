//Code for burger menu//

document.addEventListener('DOMContentLoaded', function() {

	function menuToggle() {
		document.querySelector('.nav2').classList.toggle('active');
	}

  document.querySelector('.hamburger').addEventListener('click', menuToggle);
});

//code for name and email form validation// 


function validate_form ( )
{
	if ( document.form.name.value == "" )
        {
                alert ( "Please fill in Your Name." );
                valid = false;
		}
		
	if ( document.form.email.value == "" )
        {
                alert ( "Please fill in Your Email Address." );
                valid = false;
		}	
else {
	alert("Thanks for submitting!");
		}
		
};



