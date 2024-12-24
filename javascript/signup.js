const form=document.getElementById('form');
const firstname=document.getElementById('firstname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const firstnameerror=document.getElementById('firstnameerror');
const emailerror=document.getElementById('emailerror');
const passworderror=document.getElementById('passworderror');
const confirmpassworderror=document.getElementById('confirmpassworderror');

form.addEventListener('submit' , (e) =>
{
    var email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     let errors=false;

   if(firstname.value === '' || firstname.value == null)
   {
    e.preventDefault();
    firstnameerror.innerHTML = 'Name is required';
    errors=true;
   }
   else
   {
    firstnameerror.innerHTML = '';
   }

   if (!email.value.match(email_check))
   {
     e.preventDefault();
     emailerror.innerHTML = 'Invalid email address';
     errors=true;
   }
   else
   {
    emailerror.innerHTML = '';
   }

   if(password.value.length <= 5 )
    {
     e.preventDefault();
    passworderror.innerHTML = 'length should be greater than 5';
    errors=true;
    }
    else
   {
    passworderror.innerHTML = '';
   }

    if(password.value != confirmpassword.value )
        {
         e.preventDefault();
         confirmpassworderror.innerHTML = 'password is not match';
         errors=true;
        }
        else
        {
         confirmpassworderror.innerHTML = '';
        }
        if (errors) {
            e.preventDefault();
        } else {
            // Redirect to login page after successful sign-up
            e.preventDefault();
            window.location.href = 'login.html'; 
        }
    
})