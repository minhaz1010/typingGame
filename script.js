window.onload = () =>{
  displayToTheUI()
}

let count = JSON.parse(localStorage.getItem('value')) || 0;

document.getElementById('add-button').addEventListener('click',function(){
  const elements = document.getElementById('count');
  const elementValue = elements.innerText;
  localStorage.setItem('value',JSON.stringify(++count));
  displayToTheUI();
})

let displayToTheUI = () =>{
  let item = JSON.parse(localStorage.getItem('value'));
  console.log(item);
  const elements = document.getElementById('count');
  elements.innerText=item;
}