const form=document.getElementById('form');
const email=document.getElementById('email');
const password=document.getElementById('password');
const emailerror=document.getElementById('emailerror');
const passworderror=document.getElementById('passworderror');



form.addEventListener('submit' , (e) =>
{
     let errors=false;

   if(email.value === '' || email.value == null)
   {
     e.preventDefault();
     emailerror.innerHTML = ' email address is required';
     errors=true;
   }
   else
   {
    emailerror.innerHTML = '';
   }

   if(password.value === '' || password.value == null)
    {
     e.preventDefault();
    passworderror.innerHTML = 'password is required';
    errors=true;
    }
    else
   {
    passworderror.innerHTML = '';
   }

        if (errors) {
            e.preventDefault();
        } else {
            // Redirect to login page after successful sign-up
            alert('login succesfully')
            window.location.href = 'home.html'; 
            e.preventDefault();  
        }
});


