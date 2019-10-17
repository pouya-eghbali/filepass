
const initFilePass = () => {
  const passwordFields = document.querySelectorAll('[type="password"]')
  passwordFields.forEach(field => {
    if (field.classList.contains('filepassified')) return
    else new FilePass(field)
    field.classList.add('filepassified')
  })
}

document.addEventListener('DOMContentLoaded', initFilePass, false);
initFilePass()
