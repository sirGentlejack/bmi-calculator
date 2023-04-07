
// const

function computeBMI (){
    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);

    let bmi = (weight / (height * height) * 703)

    document.getElementById('heading').innerHTML = 'Your result is:-'
    document.getElementById('result').innerHTML = bmi.toFixed(2)

    if(bmi <= 18.5){
        document.getElementById('condition').innerHTML = 'you are underweight'
    }else if (bmi >18.5 && bmi <25){
        document.getElementById('condition').innerHTML = 'you have normal weight'
    }else if (bmi =>25 && bmi <30){
        document.getElementById('condition').innerHTML = 'you are overweight'
    }else{
        document.getElementById('condition').innerHTML = 'you have obesity'
    }
}

function reload() {
    window.location.reload()
}

