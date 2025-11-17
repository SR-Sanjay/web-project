function fun() {
  let heightInput = prompt("Enter your height");
  let weightInput = prompt("Enter your Weight");

  let heightCm = parseFloat(heightInput);
  let weight = parseFloat(weightInput);

  let height = heightCm / 100;

  let bmi = weight / (height * height);

  document.querySelector(".result").innerHTML = `Your BMI is : ${bmi.toFixed(2)}`;

  if (bmi >20 && bmi<=24) {
    document.body.style.backgroundImage = "url('train.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
  else if(bmi>=25){
    document.body.style.backgroundImage = "url('run.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
  else if(bmi<=20){
    document.body.style.backgroundImage = "url('food.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }else{
    document.body.style.backgroundImage = "url('wall.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
}
