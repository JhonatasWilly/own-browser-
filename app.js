const buttonSwitch = document.querySelector('.buttonSwitch')
const checkBox = buttonSwitch.querySelector('input')
const divRow = document.querySelector('.row')
const frame = document.querySelector('iframe')
const min = document.querySelector('.yellow')
const max = document.querySelector('.green')
const close = document.querySelector('.red')

checkBox.addEventListener('click', function () {
  if (checkBox.checked) {
    divRow.classList.add('blackBackground')
    document.querySelector('body').classList.add('blackBackground')
  } else {
    divRow.classList.remove('blackBackground')
    document.querySelector('body').classList.remove('blackBackground')
  }
})

min.addEventListener('click', function () {
  frame.classList.add('minMax')
})

max.addEventListener('click', function () {
  if (frame.classList.contains('minMax')) {
    frame.classList.remove('minMax')
  }
})

close.addEventListener('click', function () {
  document.querySelector('body').remove()
})
