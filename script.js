function count() {
  var first_number = window.document.getElementById('num1').value
  var last_number = window.document.getElementById('num2').value
  var step = window.document.getElementById('step').value
  var res = window.document.getElementById('res')
  var reset = window.document.getElementById('reset')
  
  
  //Errors
  if(first_number.length == 0 || last_number.length == 0|| step.length == 0){
    window.alert (`[ERROR] Double check your values, there cannot be any missing values` )
  } else {
    if (step < 1){
      window.alert(`[ERROR] Invalid value. It will be considered step equal to 1`)
      step = 1
    }
  
  //Ascending and descending
    res.innerHTML ='The count is as follows: <br>'
    
    for (var c = Number(first_number) ; c <= Number(last_number) ; c += Number(step)){
      res.innerHTML += `${c} \u{27A1}`
    } 
    for (var c = Number(first_number); c >= Number(last_number); c-= Number (step)) {
      res.innerHTML += `${c}  \u{27A1}`
    }
  } 
  res.innerHTML += `\u{1F3C1}`
  
}
  
//Reset button
reset.addEventListener('click', function(){
  window.document.getElementById('num1').value = ''
  window.document.getElementById('num2').value = ''
  window.document.getElementById('step').value = ''
  window.document.getElementById('res').innerHTML = 'Preparing to count...'
}) 


