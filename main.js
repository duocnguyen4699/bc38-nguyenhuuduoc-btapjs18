var arr = [];
var arr1 = [];
function array() {
    var num = +document.getElementById("input").value;
    arr.push(num)
    document.getElementById("ketqua").innerHTML = arr
}
function array1() {
    var num1 = +document.getElementById("input1").value;
    arr1.push(num1)
    document.getElementById('ketqua1').innerHTML = arr1
}

function ex1() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }

    }
    document.getElementById("ketqua1").innerHTML = "tổng các số dương: " + sum
}



function ex2() {
    var dem = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            dem++;
        }

    }
    document.getElementById("ketqua2").innerHTML = "số dương: " + dem

}

function ex3() {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];

        }
    }
    document.getElementById('ketqua3').innerHTML = "số nhỏ nhất: " + min
}

function ex4() {
    var numMin = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < numMin && arr[i] >= 0) {
            numMin = arr[i]
        }
    }
    document.getElementById('ketqua4').innerHTML = "số dương nhỏ nhất: " + numMin

}

function ex5() {

    var soChan = arr[0];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] >= 0) {
            soChan = arr[i]
        }


    }
    document.getElementById('ketqua5').innerHTML = "số chẵn cuối cùng: " + soChan


}

function ex6() {
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;

    var i = arr[so1];
    arr[so1] = arr[so2];
    arr[so2] = i;

    document.getElementById("ketqua6").innerHTML = "mảng sau khi đổi: " + arr

}

function ex7() {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var k = 0; k < 1; k++) {
            if (arr[k] > arr[k + 1]) {
                var temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    }
    document.getElementById('ketqua7').innerHTML = "mảng được sắp xếp: " + arr
}



function ex8() {
    var numFirst = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Math.floor(arr[i] % 2 === 0)) {
            numFirst = arr[i];
            break;
        }
    }
    if (arr.length == 0){
        alert ("mảng rỗng");
        document.getElementById("ketqua8").innerHTML = -1;
    }
        document.getElementById('ketqua8').innerHTML = numFirst
}

function ex9() {
    var demSo = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            demSo++;
        }
    }
    document.getElementById('ketqua9').innerHTML = demSo

}


function ex10() {
    var soduong = 0;
    var soam = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            soduong++;
        }
        if (arr[i] < 0) {
            soam++;
        }
    }
    if (soduong > soam) {
        document.getElementById('ketqua10').innerHTML = "số dương" + " > " + "số âm";
    } else if (soam > soduong) {
        document.getElementById('ketqua10').innerHTML = "số âm" + " > " + "số dương";
    } else {
        document.getElementById('ketqua10').innerHTML = "số âm" + " = " + "số dương";
    }
}
