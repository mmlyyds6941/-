// script.js

function greet() {

    var currentTime = new Date();

    var hours = currentTime.getHours();



    if (hours < 12) {

        alert('新的一天，新的开始，愿你拥有无限可能');

    } else if (hours < 18) {

        alert('阳光正好，微风不燥，愿你享受这美好的时光');

    } else {

        alert('星辰点点，愿你的心灵得到宁静与安详');

    }

}



// 调用函数以显示问候

greet();
