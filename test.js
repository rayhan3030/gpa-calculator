 
  function calculateGrade() {
    var scoreInput = document.getElementById('score');
    var resultElement = document.getElementById('result');
    var score = parseFloat(scoreInput.value);
    if (score <=32) {
        resultElement.textContent = ('You Failed');
    } else if (score >= 33 && score<=39) {
        resultElement.textContent = ('Your grade is D');
    } else if (score >= 40 && score<=49) {
        resultElement.textContent = ('Your grade is C');
    } else if (score >= 50 && score<=59) {
        resultElement.textContent = ('Your grade is B');
    } else if (score >= 60 && score<=69) {
        resultElement.textContent = ('Your grade is A-');
    } else if (score >= 70 && score<=79) {
        resultElement.textContent = ('Your grade is A');
    } else if (score >= 80 && score<=89) {
        resultElement.textContent = ('Your grade is A+');
    } else if (score >= 90 && score<=95) {
        resultElement.textContent = ('Your grade is Star Marks');
    } else if (score >= 96 && score<=100) {
        resultElement.textContent = ('Your grade is Boom & Cool');
    } else {
        resultElement.textContent = ('Result Not Found');
    }
}