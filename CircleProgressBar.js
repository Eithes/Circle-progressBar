const progressBar = document.querySelector('.progressBar-circle');
const radius = progressBar.r.baseVal.value;
const input = document.querySelector('.filledFor');

const circumference = 2 * Math.PI * radius;

progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
progressBar.style.strokeDashoffset = circumference;

function setProgress(num) {
    const offset = circumference - num / 100 * circumference;
    const filled = (num >= 100) ? 0 : offset;
    progressBar.style.strokeDashoffset = filled;
}

input.addEventListener('change', function() {
  setProgress(input.value);
})

setProgress(80)

