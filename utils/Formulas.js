export const calculateBMI = (height, weight) => {
    let heightMeters = height * 0.01;
    const bmi = weight / (heightMeters * heightMeters)
    return Math.round(bmi * 10)/10;
};

export const calculateDailyCalories = (age, gender, height, weight) => {
    if (gender === 'woman') {
        let calculatedWeight = Math.round(9.247 * weight * 100)/100;
        let calculatedHeight = Math.round(3.098 * height * 100)/100;
        let calculatedAge = Math.round(4.330 * age * 100)/100;
        const BMR = (calculatedWeight + calculatedHeight - calculatedAge + 447.593) * 1.2;
        return Math.round(BMR) - 500 ;
    } else
    {
        let calculatedWeight = Math.round(13.397 * weight * 100)/100;
        let calculatedHeight = Math.round(4.79 * height * 100)/100;
        let calculatedAge = Math.round(5.677 * age * 100)/100;
        const BMR = (calculatedWeight + calculatedHeight - calculatedAge + 88.362) * 1.2;
        return Math.round(BMR) - 500 ;
    }
};

export const bmiType = (height, weight) => {
    let myBmi = calculateBMI(height, weight);
    console.log(myBmi);
    if (myBmi < 18.5) {
        return 'Underweight';
    }
    if (myBmi >= 18.5 && myBmi <= 24.9) {
        return 'Normal weight';
    }
    if (myBmi >= 25 && myBmi <= 29.9) {
        return 'Overweight';
    }
    if (myBmi >= 30) {
        return 'Obesity';
    }
    return 'None';
};
