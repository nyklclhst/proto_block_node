function loading(){
    document.getElementById('close').click();
    document.getElementById('loader').style.display = "block";
    document.getElementById('body').style.display = "none";
}

function load(){
    let msg = document.getElementById('msg').innerHTML;
    let msg1 = document.getElementById('msg1').innerHTML;
    if(msg == 0){
        const root = document.getElementById('root');
        root.hidden = false;
        const table = document.getElementById('tbl_id');
        table.hidden = true;
        const h2 = document.createElement('h2');            
        h2.setAttribute('class','text-danger');
        h2.setAttribute('style','text-align: center');
        h2.textContent = 'Data Kosong!';
        root.appendChild(h2);
        const select = document.getElementById('idbarang');
        const option = document.createElement('option');
        option.setAttribute('value',null);
        option.textContent = '<--- Data Kosong --->';
        select.appendChild(option);
        select.disabled = true;
    }
    if( msg1 == 'Success'){
        Swal.fire("Congratulation", "You just registered! We will refresh page for you soon.", "success"); 
            document.getElementById("loader").style.display = "none";
            document.getElementById("body").style.display = "block";
            setTimeout(function(){
                location.replace('./data');
            }, 3000);
    }
    if( msg1 == 'Failed'){
        Swal.fire({ type: 'error', title: 'Oops...', text: 'Something went wrong!', footer: 'Please contact our administrator!'});
        document.getElementById("loader").style.display = "none";
        document.getElementById("body").style.display = "block";
    }
}