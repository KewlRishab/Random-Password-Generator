const genButton = document.getElementById('genPass');
const dispPass=document.getElementById('showPass');

genButton.addEventListener('click',()=>{
    const length=document.getElementById('size').value;
    const password=genPass(length);
    dispPass.value=password;
})

function genPass(length){
    const str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password="";

    for(let i=0;i<length;i++){
        const ranInd=Math.floor(Math.random()* str.length);
        password+=str[ranInd];
        }
    return password;
    }