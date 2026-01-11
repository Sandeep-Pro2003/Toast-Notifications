
const toastBox = document.querySelector("#toast-box");

const successMsg = '<svg class="w-8 mr-1 fill-green-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>Successfully submited';
const errorMsg = '<svg class="w-8 mr-1 fill-orange-700 xmlns="http://www.w3.org/2000/svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg>Please fix the error!';
const invalidMsg = '<svg class="w-8 mr-1 fill-red-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>Invalid input, Check again';
function showToast(msg){
let toast =  document.createElement("div");
toast.classList.add("toast");
if(msg.includes("error")){
  toast.classList+=" after:bg-orange-700";
}
if(msg.includes("Invalid")){
  toast.classList+=" after:bg-red-500";
}
toast.innerHTML = msg;
toastBox.appendChild(toast);
setTimeout(()=>{
  toast.remove();
},5000);
}