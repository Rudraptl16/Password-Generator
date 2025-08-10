function generatePassword() {
    const length = Number(document.getElementById('length').value);
    const hasUpper = document.getElementById('uppercase').checked;
    const hasLower = document.getElementById('lowercase').checked;
    const hasNumber = document.getElementById('numbers').checked;
    const hasSymbol = document.getElementById('symbols').checked;

    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()?<>#_';
    
    let charPool = '';
    if (hasUpper) charPool += uppers;
    if (hasLower) charPool += lowers;
    if (hasNumber) charPool += numbers;
    if (hasSymbol) charPool += symbols;

    if (!charPool) {
        document.getElementById('passwordText').textContent = '⚠ Select at least one!';
        return;
    }

    let password = '';
    const selectedSets = [];
    if (hasUpper) selectedSets.push(uppers);
    if (hasLower) selectedSets.push(lowers);
    if (hasNumber) selectedSets.push(numbers);
    if (hasSymbol) selectedSets.push(symbols);

    selectedSets.forEach(set => { 
        password += set[Math.floor(Math.random() * set.length)];
    });
    for (let i = password.length; i < length; i++) {
        password += charPool[Math.floor(Math.random() * charPool.length)];
    }
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById('passwordText').textContent = password;
}

function copyPassword() {
    const password = document.getElementById('passwordText').textContent;
    navigator.clipboard.writeText(password);
    const btn = document.querySelector('.copy');
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 1000);
}

function toggleMode() {
    document.body.classList.toggle('light-mode');
    const modeBtn = document.querySelector('.mode-toggle');
    if (document.body.classList.contains('light-mode')) {
        modeBtn.textContent = '🌙 Dark Mode';
    } else {
        modeBtn.textContent = '☀ Light Mode';
    }
}
