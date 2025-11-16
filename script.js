function fun(){
    let heightInput=prompt('Enter your height')
    let weightInput=prompt('Enter your Weight')

    let heightCm=parseFloat(heightInput)
    let weight=parseFloat(weightInput)


    let height=heightCm/100

    let bmi=weight/(height*height)

    document.querySelector('.result').innerHTML=`Your BMI is : ${bmi.toFixed(2)}`

}