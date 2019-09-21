'use strict';

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.926009, 30.307996],
            zoom: 17,
            controls: []
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/small-logo.png',
            // Размеры метки.
            iconImageSize: [70, 80],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-10, -50]
        });
    
        myMap.behaviors
        // Отключаем часть включенных по умолчанию поведений:
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        .disable(['drag', 'scrollZoom']);
        // Включаем линейку.

    myMap.geoObjects
        .add(myPlacemark);
});
