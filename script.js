// ? this is level 3 + level 4 practice of local storage


window.onload = () =>{
  displayTheInputField();
}


let elements = document.querySelectorAll('.sent-btn');
for(let element of elements){
  element.addEventListener('click',function(event){
    // let name = event.target.parentNode.querySelector('#name').value;
    // console.log(name);
    if(event.target.innerText === 'Send Name'){
      let name = event.target.parentNode.querySelector('#name').value;
      event.target.parentNode.querySelector('#name').value='';
      saveToLocalStorage('name',name);
    }
    if(event.target.innerText === 'Send Email'){
      let email = event.target.parentNode.querySelector('#email').value;
      event.target.parentNode.querySelector('#email').value='';

      saveToLocalStorage('email',email);
    }
    if(event.target.innerText === 'Send Message'){
      let message = event.target.parentNode.querySelector('#message').value;
      event.target.parentNode.querySelector('#message').value='';

      saveToLocalStorage('message',message)
    }
  })
}

const saveToLocalStorage =(key,value) =>{
  localStorage.setItem(key,value);
}

let deletes = document.querySelectorAll('.delete-btn');
for(const del of deletes){
  del.addEventListener('click',function(event){
    if(event.target.innerText === 'Delete Name'){
      document.getElementById('name').value='';

      localStorage.removeItem('name');
    }
    if(event.target.innerText === 'Delete Email'){
      document.getElementById('email').value='';

      localStorage.removeItem('email');
    }
    if(event.target.innerText === 'Delete Message'){
      document.getElementById('message').innerText='';

      localStorage.removeItem('message');
    }
  })
}

function displayTheInputField(){
  let name=(localStorage.getItem('name'));
  let email=(localStorage.getItem('email'));
  let message=(localStorage.getItem('message'));
  // console.log(name,message,email);
  document.getElementById('name').value=name;
  document.getElementById('email').value=email;
  document.getElementById('message').innerText=message;

}


document.getElementById('send-all-things').addEventListener('click',function(){
 let name =   document.getElementById('name').value;
 let email =   document.getElementById('email').value;
 let message = document.getElementById('message').innerText;
 let information = {};
 information['name']=name;
 information['email']=email;
 information['message']=message;
 localStorage.setItem('person',JSON.stringify(information));

})