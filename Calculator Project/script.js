function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height && weight) {
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);
        var result = "Your BMI is: " + bmi.toFixed(2);

        if (bmi < 18.5) {
            result += " (Underweight)";
        } else if (bmi >= 18.5 && bmi < 25) {
            result += " (Normal weight)";
        } else if (bmi >= 25 && bmi < 30) {
            result += " (Overweight)";
        } else {
            result += " (Obese)";
        }

        document.getElementById('result').innerText = result;
    } else {
        alert("Please enter both height and weight in the correct measurement scale to calculate BMI.");
    }
}
