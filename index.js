var order = true;
var discBlank = '';
var discWhite = '太';
var discBlack = '犬';
var discColor = discBlack;
var $tableCells = document.getElementsByTagName('td');
window.onload = function () {
    window.alert(discColor + 'からスタート！');
    for (var i = 0; i < $tableCells.length; i++) {
        $tableCells[i].addEventListener('click', function () {
            var tableCells = [].slice.call($tableCells);
            var index = tableCells.indexOf(this);
            if ($tableCells[index].innerHTML.match(discBlack)) {
                putWhite(index);
            }
            else if ($tableCells[index].innerHTML.match(discWhite)) {
                putBlack(index);
            }
            else {
                putDisc(index);
                changeOrder();
            }
        });
        $tableCells[i].addEventListener('dblclick', function () {
            var tableCells = [].slice.call($tableCells);
            var index = tableCells.indexOf(this);
            $tableCells[index].innerHTML = discBlank;
        });
    }
};
function putBlack(index) {
    $tableCells[index].innerHTML = discBlack;
}
function putWhite(index) {
    $tableCells[index].innerHTML = discWhite;
}
function putDisc(index) {
    $tableCells[index].innerHTML = discColor;
}
function changeOrder() {
    if (order) {
        discColor = discWhite;
        order = false;
    }
    else {
        discColor = discBlack;
        order = true;
    }
}
function passTurn() {
    changeOrder();
    window.alert('パス！' + discColor + 'の番！');
}
