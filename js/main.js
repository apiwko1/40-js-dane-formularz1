function uzupelnij(){
    let fname = document.getElementById('fname');
    let name = document.querySelector('#name');
    name.textContent = fname.value;
    let fsurname = document.getElementById('fsurname');
    let surname = document.querySelector('#surname');
    surname.textContent = fsurname.value;
    let fphone = document.getElementById('fphone');
    let phone = document.querySelector('#phone');
    phone.textContent = fphone.value;
}

let b = document.querySelector('#button');

b.onclick = uzupelnij;