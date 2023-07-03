
// ==========Mirror function this input value
function mirrorNum(){
  var inputValue = document.getElementById("number").value;
  document.getElementById("mirrorSpanNum").textContent = inputValue
}
function mirrorText() {
    var inputValue = document.getElementById("cname").value;
    document.getElementById("mirrorSpanName").textContent = inputValue;
  }
  function mirrormm(){
    var inputValue = document.getElementById("mm").value;
    document.getElementById("mirrorSpanmm").innerText = inputValue
  }
  function mirroryy(){
    var inputValue = document.getElementById("yy").value;
    document.getElementById("mirrorSpanyy").textContent = inputValue
  }
  function mirrorcvc(){
    var inputValue = document.getElementById("cvc").value;
    document.getElementById("mirrorSpancvc").textContent = inputValue
  }



  let formEl=document.getElementById('form')
  let comEl=document.getElementById('successpop')
//   ======This hide function 
  function hide(){
     event.preventDefault();
   
     var number = document.getElementById("number");
         var numerror = document.getElementById("numerror");
     
         var isValid = true;
       
         if (!/^\d+$/.test(number.value)) {
           numerror.textContent = "Wrong format, numbers only";
           numerror.style.display = "block";
           number.style.border = "1px solid hsl(0, 100%, 66%)"
           isValid = false;
         } else {
           numerror.style.display = "none";
           number.style.border = "1px solid black"
          
         }
     
     
     
       var cvc = document.getElementById("cvc");
       var errCVC = document.getElementById("errCVC");
       
     
     
       
       
       if (isValid) {
     
     formEl.style.visibility='hidden'
     comEl.style.visibility='visible'
     }
     
     return(isValid)

      }
    function revFun(){
      event.preventDefault();
    formEl.style.visibility='visible'
    comEl.style.visibility='hidden'
    
    let inputEl=document.querySelectorAll('.input');
    inputEl.forEach(el => {
      el.value=''    });
  }