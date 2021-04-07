const submit = document.getElementById("form_button");

submit.addEventListener("click", validate);

function validate(e) {
   e.preventDefault() 
  
    checkUsername()
    checkPhone()

}

function checkUsername(){
    const userName = document.getElementById('name_input').value
    const nameErrorHolder = document.querySelector('.name .alert')
    let nameError = '';
 
    if(!userName){
 
     nameErrorHolder.innerHTML="Please enter a valid name"
     nameErrorHolder.classList.remove("d-none")
    
    } else if(userName.match(/\d/g)){
     nameErrorHolder.innerHTML="Username Cannont contain digits"
     nameErrorHolder.classList.remove("d-none")
    } else {
     nameErrorHolder.classList.add("d-none")
    }
}


function checkPhone() {
  const userPhone = document.getElementById('telephone_input').value;



  if( userPhone.match(/\D/g)){
    console.log("error error");
    var errorTemplate = `<div class="alert alert-danger" role="alert">
        `+ `Phone number cannot contain strings` + `
    </div>`

    var div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.textContent = "appended div";

     document.querySelector('.telephone').insertAdjacentHTML('afterend', errorTemplate)
  
    //$('.telephone').append(errorTemplate)
}

  
}