function spinWheel() {
    const wheel = document.getElementById('wheel');
    const fixedOption = document.getElementById('fixedOption').value;
    const degreePerOption = 360 / 4;
    const baseRotation = 360 * 3 + 45; // Spins 3 full times
    const targetRotation = baseRotation + (fixedOption * degreePerOption);

    wheel.style.transform = `rotate(${targetRotation}deg)`;
}

function setOptionTexts() {
    document.getElementById('segment1').textContent = document.getElementById('option1Text').value || 'Option 1';
    document.getElementById('segment2').textContent = document.getElementById('option2Text').value || 'Option 2';
    document.getElementById('segment3').textContent = document.getElementById('option3Text').value || 'Option 3';
    document.getElementById('segment4').textContent = document.getElementById('option4Text').value || 'Option 4';
}

