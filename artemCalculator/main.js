function insert(num) {
  document.querySelector('.output').value = document.querySelector('.output').value+num;
}

function give() {
	return document.querySelector('.output').value//возвращает значение поля сверху
}

function change(argument) {
	document.querySelector('.output').value = argument//функция меняет значение поля сверху
}

function equal() {
  //это твоя функция она срабатывает при нажатии клавиши ровно
  alert(give())
}

function clean() {
  document.querySelector('.output').value="";
}