function submitForm(event) {
    var n = document.getElementById("name").value
    var e = document.getElementById("email").value
    var b = document.getElementById("feedback").value
    // 判斷EMAIL是否符合格式(開頭必須是/^，結尾必須是$/)
    var ep = /^\w+@+[a-zA-Z0-9]+$/


    if (n == "" | b == "" | e == "") {
        event.target.form.default();
    }
    else if (e.search(ep)!=-1) {
        event.preventDefault();
        alert("感謝您的聯繫，我們會盡快給您回覆！")
    }
    else{event.target.form.default();}

    event.target.form.submit();

}