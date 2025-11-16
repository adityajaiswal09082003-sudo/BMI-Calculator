
let form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let height = Number(document.querySelector('#height').value)/100   
    let weight = Number(document.querySelector('#weight').value)   
    let bmival = Number((weight/(height**2)).toFixed(2))


let result = document.querySelector('.result')

if (bmival<=18){
    result.innerHTML = `BMI value is: ${bmival}, you are under weight`
}

else if(bmival<=24){
    result.innerHTML = `BMI value is: ${bmival}, you are Normal weight `
}

else if(bmival<=30){
    result.innerHTML = `BMI value is: ${bmival}, you are over weight `
}
})
