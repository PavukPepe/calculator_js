function plus() {
	document.getElementById('num1').value =
		Number(document.getElementById('num1').value) +
		Number(document.getElementById('num2').value)
	if (document.getElementById('num2').value != '') result()
}

function minus() {
	document.getElementById('num1').value =
		Number(document.getElementById('num1').value) -
		Number(document.getElementById('num2').value)
	if (document.getElementById('num2').value != '') result()
}

function multiply() {
	document.getElementById('num1').value =
		Number(document.getElementById('num1').value) *
		Number(document.getElementById('num2').value)
	if (document.getElementById('num2').value != '') result()
}

function divers() {
	document.getElementById('num1').value =
		Number(document.getElementById('num1').value) /
		Number(document.getElementById('num2').value)
	if (document.getElementById('num2').value != '') result()
}

function pow() {
	document.getElementById('num1').value = Math.pow(
		Number(document.getElementById('num1').value),
		Number(document.getElementById('num2').value)
	)
	if (document.getElementById('num2').value != '') result()
}

function sqrt() {
	document.getElementById('num1').value = Math.sqrt(
		Number(document.getElementById('num1').value)
	)
	result()
}

function persent() {
	document.getElementById('num1').value =
		Number(document.getElementById('num1').value) / 100
	result()
}

function sin() {
	document.getElementById('num1').value = Math.sin(
		Number(document.getElementById('num1').value)
	)
	result()
}

function cos() {
	document.getElementById('num1').value = Math.cos(
		Number(document.getElementById('num1').value)
	)
	result()
}

function tg() {
	document.getElementById('num1').value = Math.tan(
		Number(document.getElementById('num1').value)
	)
	result()
}

function ctg() {
	document.getElementById('num1').value = Math.atan(
		Number(document.getElementById('num1').value)
	)
	result()
}

function pi() {
	document.getElementById('num2').value = Math.PI
}

function e() {
	document.getElementById('num2').value = Math.E
}

function log() {
	if (document.getElementById('num2') != '') {
		document.getElementById('num1').value =
			Math.log(Number(document.getElementById('num1').value)) /
			Math.log(Number(document.getElementById('num2').value))
	} else {
		document.getElementById('num1').value = Math.log(
			Number(document.getElementById('num1').value)
		)
	}
	result()
}

function additions(kek) {
	let but = document.createElement('button')
	but.id = kek
	but.innerHTML = kek
	but.onclick = () => {
		document.getElementById('num1').value = kek
	}
	// document.body.append(but)
	test = document.getElementById('history')
	test.append(but)
}

function result() {
	if (document.getElementById('num1').value != '') {
		additions(document.getElementById('num1').value)
	}
	document.getElementById('num2').value = ''
}
