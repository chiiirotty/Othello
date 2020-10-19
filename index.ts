let order = true;
let discWhite = '太';
let discBlack = '犬';
let discColor = discBlack;

window.onload = function() {
    var $tableCells = document.getElementsByTagName('td');

    for(let i=0; i<$tableCells.length; i++) {
        $tableCells[i].addEventListener('click', function() {
            let tableCells = [].slice.call($tableCells);
            let index = tableCells.indexOf(this);
            console.log(tableCells[index]);
            if($tableCells[index].innerHTML.match(discBlack)) {
                putWhite(index);
            } else if($tableCells[index].innerHTML.match(discWhite)) {
                putBlack(index);
            } else {
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

}

function passTurn() {
    changeOrder();
}

function changeOrder() {
    if(order) {
        discColor = discWhite;
        order = false;
    } else {
        discColor = discBlack;
        order = true;
    }
}