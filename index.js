ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Наш офис',
        balloonContent: `
            <div style="font-size: 14px; color: #111;">
                <strong>Офис нашей компании</strong><br>
                <a href="https://www.example.com">www.example.com</a><br>
                <p>Здесь находится офис 1 нашей компании, приходите к нам на чай!</p>
            </div>
        `
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.geoObjects.add(new ymaps.Placemark([55.77, 37.65], {
        hintContent: 'Наш офис',
        balloonContent: `
            <div style="font-size: 14px; color: #111;">
                <strong>Офис нашей компании 2</strong><br>
                <a href="https://www.example.com">www.example.com</a><br>
                <p>Здесь находится офис 2 нашей компании, приходите к нам на чай!</p>
            </div>
        `
    }));
}
