// 加減按鈕增減數量

// 增加
function numPlus(){
    var num = document.getElementById('buyNum');
    var buynum = parseInt(num.value);

    num.value = buynum +1;
}
// 減少
function numMinus(){
    var num = document.getElementById('buyNum');
    var buynum = parseInt(num.value);

    if(buynum >1){
        num.value = buynum -1;
    }
}