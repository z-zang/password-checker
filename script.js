const textInput = document.getElementById('password-input')
const progressBar = document.getElementById('progress-bar-fill')
const pwValue = document.getElementById('value')
const feedback = document.getElementById('feedback')

textInput.addEventListener('input', () => {
    const password = textInput.value

    const progressPercent = password.length * 5
    const adjustedPercent = progressPercent >= 100 ? 100 : progressPercent
    progressBar.style.width = `${adjustedPercent}%`
    pwValue.innerText = adjustedPercent;

    if (password.length < 8) {
        feedback.innerText = 'Should be longer'
        progressBar.style.backgroundColor = 'red'
    } else if (password.length >= 8 && password.length < 12) {
        feedback.innerText = 'Pretty good'
        progressBar.style.backgroundColor = 'orange'
    } else {
        feedback.innerText = 'Grrrreat!'
        progressBar.style.backgroundColor = 'green'
    }
})
