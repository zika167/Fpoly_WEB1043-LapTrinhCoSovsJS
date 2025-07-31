let a = null, b = null, o = null;
function thucHien() {
    switch(o){
        case '+':
            var kq = a + b;
            document.getElementById("display").innerHTML = kq;
            break;
        case '-':
            var kq = a - b;
            document.getElementById("display").innerHTML = kq;
            break;
        case '*':
            var kq = a * b;
            document.getElementById("display").innerHTML = kq;
            break;
        case '/':
            if (b != 0) {
                var kq = a / b;
                document.getElementById("display").innerHTML = kq;
            } else alert('Không thể chia tử cho mẫu = 0');
            break;
        }
        a = null, b = null;
    }

function toanHang(x){
    if( a == null ) a = x
    else b = x
}

function toanTu(x) {
    o = x
}

function lamLai() {
    a = null, b = null, o = null;
    document.getElementById("display").innerHTML = '0';
}