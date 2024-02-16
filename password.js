
var number = 3

function gen()
{

const uppercaseRegex= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseRegex = 'abcdefghijklmnopqrstuvwxyz';
const numberRegex= '0123456789';
const specialCharRegex = '!@#$%^&*()_+{}[]:;<>,.?~\\/-';
 

const Bigarray = Array.from(uppercaseRegex)
const smallarray = Array.from(lowercaseRegex)
const numarray = Array.from(numberRegex)
const specarray = Array.from(specialCharRegex)
console.log(Bigarray)

for (let i = Bigarray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [Bigarray[i], Bigarray[j]] = [Bigarray[j], Bigarray[i]];
    [smallarray[i], smallarray[j]] = [smallarray[j], smallarray[i]];
}
let Big = Bigarray.slice(0, number);
let small = smallarray.slice(0 , number)

for (let a = numarray.length - 1; a > 0; a--) {
    const c = Math.floor(Math.random() * (a + 1));
    [numarray[a], numarray[c]] = [numarray[c], numarray[a]];
 
}
let num = numarray.slice(0, number);

for (let b = specarray.length - 1; b > 0; b--) {
    const d = Math.floor(Math.random() * (b + 1));
    [specarray[b], specarray[d]] = [specarray[d], specarray[b]];
 
}
let spec = specarray.slice(0, number);



if(x == 1)
{

passbar.style.height = "250px"
art.style.height = "100px"
setTimeout(() => { art.style.opacity = "1"} , 1000)
art.style.color = "#f1f1f1"
art.style.textShadow = "1px 1px 5px #ff5f1f"
liconth.display = "none"
liconi.display = "none"
licont.display = "none"
info.innerHTML = [...Big, ...small, ...num, ...spec].join('');



number++
x = 2
}else if(x == 2) 
{
passbar.style.height = "250px"
art.style.height = "100px"
setTimeout(() => { art.style.opacity = "1"} , 1000)
art.style.color = "#f1f1f1"
art.style.textShadow = "1px 1px 5px #ff5f1f"
liconth.display = "none"
liconi.display = "none"
licont.display = "none"
info.innerHTML = [...Big, ...num, ...spec, ...small].join('');
number++
x = 3

}else if(x == 3)
{
passbar.style.height = "250px"
art.style.height = "100px"
setTimeout(() => { art.style.opacity = "1"} , 1000)
art.style.color = "#f1f1f1"
art.style.textShadow = "1px 1px 5px #ff5f1f"
liconth.display = "none"
liconi.display = "none"
licont.display = "none"
info.innerHTML = [...spec, ...small, ...num, ...Big].join('');
number--
x = 4

}else if(x == 4)
{
passbar.style.height = "250px"
art.style.height = "100px"
setTimeout(() => { art.style.opacity = "1"} , 1000)
art.style.color = "#f1f1f1"
art.style.textShadow = "1px 1px 5px #ff5f1f"
liconth.display = "none"
liconi.display = "none"
licont.display = "none"
info.innerHTML = [...num, ...Big, ...spec, ...small].join('');
number--
x = 1
}


console.log(Big)
console.log(small)
console.log(num)
console.log(spec)
btn.display = "flex"
bak.height = "25px"
bak.fontSize = "20px"
}