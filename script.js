function bmiRechner(){
    let weight = document.querySelector("#weight").value;
    weight = parseFloat(weight);

    let height = document.querySelector("#height").value;
    height = parseFloat(height);

    let bmi = weight / height / height;
    bmi = bmi.toFixed(2)

    document.querySelector("#bmi").innerHTML = "BMI " + bmi;
}