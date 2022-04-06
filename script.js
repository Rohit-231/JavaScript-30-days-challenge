if('speechSynthesis' in window){
  console.log("supported")
}else{
  console.log("not supported")
}

let msg,vol,rate,pitch, accent="en-US";
const formDetails=document.querySelector('.form1');
formDetails.addEventListener('submit',function(e){
  e.preventDefault();
  const datamsg=[...new FormData(formDetails)];
  const data=Object.fromEntries(datamsg);

  msg=data.textInput;
  console.log(msg);

  vol=data.vol;
  console.log(vol*0.1);

  rate=data.rate;
  console.log(rate*1);

  pitch=data.pitch;
  console.log(pitch*1);


  var message1=new SpeechSynthesisUtterance();
  message1.text=msg;
  message1.volume=vol*0.1;
  message1.pitch=pitch/5;
  message1.lang=data.accent;
  window.speechSynthesis.speak(message1);
})

