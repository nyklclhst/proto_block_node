function loading(){
    document.getElementById('loader').style.display = "block";
    document.getElementById('form').style.display = "none";
}

function load(){
    let message = document.getElementById('msg').innerHTML;
    if( message == 'success'){
        Swal.fire("Congratulation", "You just registered! We will contact you soon for confirmation", "success"); 
            document.getElementById("loader").style.display = "none";
            document.getElementById("form").style.display = "block";
            setTimeout(function(){
                location.replace('./inputcard');
            }, 3000);
    }
    if(message == 'failed'){
        Swal.fire({ type: 'error', title: 'Oops...', text: 'Something went wrong!', footer: 'Please contact our administrator!'});
        document.getElementById("loader").style.display = "none";
        document.getElementById("form").style.display = "block";
    }
}