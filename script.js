let inputSlider = document.querySelector("#inputSlider");
let sliderValue = document.querySelector("#sliderValue");
let passBox = document.querySelector(".passBox");
let copyIcon = document.querySelector("#copyIcon");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let genBtn = document.querySelector("#genBtn");

//showing input slider value
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', (dets)=> {
  sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', ()=> {
  passBox.value = generatePassword();
})

// variable letters
let uppercaseVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseVal = "abcdefghijklmnopqrstuvwxyz";
let numbersVal = "0123456789";
let specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to  generate Password
function generatePassword(){
  let Password = "";
  let allChars = "";

  allChars += lowercase.checked ? lowercaseVal : "";
  allChars += uppercase.checked ? uppercaseVal : "";
  allChars += numbersVal.checked ? numbers : "";
  allChars += symbols.checked ? specialCharacters : "";


  if(allChars == "" || allChars.length == 0){
    return Password;
  }

  for(let i = 1; i < inputSlider.value; i++){
    Password += allChars.charAt(Math.floor(Math.random() * allChars.length))
    // console.log(Password)
  }
  return Password;
}

copyIcon.addEventListener('click', ()=>{
  if(passBox.value != "" || passBox.value.length >=1){
      navigator.clipboard.writeText(passBox.value);
      copyIcon.innerText = "check";
      copyIcon.title = "Password Copied";

      setTimeout(()=>{
          copyIcon.innerHTML = "content_copy";
          copyIcon.title = "";
      }, 3000)
  }
});