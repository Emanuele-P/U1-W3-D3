const liElements = document.getElementsByTagName('li')
for (let i = 0; i < liElements.length; i++) {
  const span = document.createElement('span')
  const text = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(text)
  liElements[i].appendChild(span)
}

const close = document.getElementsByClassName('close')
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement
    div.style.display = 'none'
  }
}

const list = document.querySelector('ul')
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'Li') {
      ev.target.classList.toggle('checked')
    }
  },
  false
)

function newElement() {
  const li = document.createElement('li')
  const inputValue = document.getElementById('addElement').value
  const t = document.createTextNode(inputValue)
  li.appendChild(t)
  if (inputValue === '') {
    alert('You must write something!')
  } else {
    document.getElementById('myUL').appendChild(li)
  }
  document.getElementById('addElement').value = ''

  const span = document.createElement('span')
  const text = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(text)
  li.appendChild(span)

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement
      div.style.display = 'none'
    }
  }
}

list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked')
    }
  },
  false
)
