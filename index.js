var order = true;
var discWhite = '太';
var discBlack = '犬';
var discColor = discBlack;
window.onload = function () {
    var $tableCells = document.getElementsByTagName('td');
    for (var i = 0; i < $tableCells.length; i++) {
        $tableCells[i].addEventListener('click', function () {
            var tableCells = [].slice.call($tableCells);
            var index = tableCells.indexOf(this);
            console.log(tableCells[index]);
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
    }
    function putBlack(index) {
        $tableCells[index].innerHTML = discBlack;
    }
    function putWhite(index) {
        $tableCells[index].innerHTML = discWhite;
    }
    function putDisc(index) {
        $tableCells[index].innerHTML = discColor;
    }
};
function passTurn() {
    changeOrder();
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
