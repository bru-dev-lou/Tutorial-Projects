function caesarCipher (string, shift) {
  return string.replace(/[a-zA-Z]/g, function(c) {
    const base = c < 'a' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
   });
}

function translate () {
  const plaintextValue = document.getElementById("plaintext").value;
  const shiftValue = document.getElementById("shift").value;
  const parsedShiftValue = parseInt(shiftValue);
  const outputValue = caesarCipher(plaintextValue, parsedShiftValue);
  document.getElementById("output").innerHTML = outputValue; 
}

const plainText = document.getElementById("plaintext");
plainText.addEventListener("input", translate);
const shift = document.getElementById("shift");
shift.addEventListener("input", translate); 