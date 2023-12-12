
let present;
let past;
let words = 0;
let startTime;
let quote = document.getElementById('sentence').innerText;
let elements=document.getElementById('sentence');
let sentence=elements.innerText;
let countOfwords=-1;
let mainSentence = quote.split(' ');
let captureTheWord='';
let aheadOfWords = 0;
document.addEventListener('keypress',(event)=>{
  if(event.key !== ' ' && event.key !=='Enter') {
    past = Date.now();
    captureTheWord +=event.key
  }
  if(event.key === ' ') {
     let change = sentence.replace(mainSentence[++aheadOfWords],`<span id="change">${mainSentence[aheadOfWords]}</span>`);
     elements.innerHTML=change;
    //  console.log(elements);
     if(captureTheWord === mainSentence[++countOfwords]){
      ++words;
     }
     else {
      // let dangerText = quote.replace(mainSentence[countOfwords],`<span class='danger'> ${captureTheWord} </span>`)
      let dangerText = quote.replace(mainSentence[countOfwords],`<span class='danger'> ${mainSentence[countOfwords]} </span>`)

      document.getElementById('sentence').innerHTML=dangerText;
     }
     captureTheWord='';

  }
  if(event.key==='Enter'){
    document.getElementById('sentence').innerHTML=quote;
    if(captureTheWord === mainSentence[++countOfwords]){
      ++words;
     }
    present = Date.now();
    let current  = (present - past) /1000;
    let speed = (words/current);
    console.log(`okay boss your speed is ${speed}`);
    console.log(`current time is ${current}`);
    console.log(`total word is ${words}`);
    const h3=document.createElement('h3');
    h3.innerHTML=`Your typing speed is ${parseInt(speed)}`;
    console.log(h3);
    const legend = document.getElementById('legend');
    legend.appendChild(h3);

  }
})

// let text = "My name is minhaz";
let text=document.getElementById('sentence').innerText;
    let index = 0;
    const h1Element = document.getElementById('typingContent');
    h1Element.innerText = text.substring(0, index);
    let user='';
    
    document.addEventListener('keypress', (event) => {
      
      // if (text[index].toLowerCase() === event.key.toLowerCase()) {
      //   index++;
      //   // h1Element.innerText = text.substring(0, index);
      //   h1Element.innerText=user;
      //   // if (index < text.length) {
      //   //   h1Element.innerHTML += '<span class="blinking-cursor">|</span>';
      //   // }
      //   h1Element.innerHTML += '<span class="blinking-cursor">|</span>';

        
      // }
      if(event.key!=='Enter'){
        user+=event.key;
        index++;
        h1Element.innerText=user;
        h1Element.innerHTML += '<span class="blinking-cursor">|</span>';
      }
      else{
        h1Element.innerText='';
      }
      
    });
