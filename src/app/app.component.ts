import { Component,Output, EventEmitter } from '@angular/core';

declare var ymaps:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  modalVis: boolean = false;

  ngOnInit() {

    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [55.67233260, 37.70533794],
              zoom: 15
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              iconLayout: 'default#image',
              // Размеры метки.
              iconImageSize: [30, 42],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          })
  
      myMap.geoObjects
    .add(myPlacemark)
  });
  

  }
}


