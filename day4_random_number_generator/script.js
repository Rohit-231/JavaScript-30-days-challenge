let output;

const form1=document.querySelector('.form1');
form1.addEventListener('submit', function(e){
    e.preventDefault();
    const datamsg=[...new FormData(form1)];
  const data=Object.fromEntries(datamsg);


    output=Math.floor(Math.random()*(data.max_no*1-data.min_no*1+1))+data.min_no*1;
    // console.log(data.max_no, output*1);

    // alert(`The Random number between [${data.min_no},${data.max_no}] is  ${output*1}`);
    document.querySelector('.guess_no').textContent=output;
})