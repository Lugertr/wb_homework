import { Component, OnInit } from '@angular/core';
import {  ChekboxFormsInterface } from 'src/app/data/InputForms';
import { LinksInterface } from 'src/app/data/linksNames';

import { contactInputForm, contactMessageInput } from 'src/app/data/InputForms';
import { social_networks_links } from 'src/app/data/linksNames';
import {contactsData} from 'src/app/data/contactsData';

declare var ymaps:any;

@Component({
  selector: 'app-main',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {


  social_networks: LinksInterface[] = social_networks_links;

  inputs = contactInputForm;
  lastInput = contactMessageInput;

  contactsData = contactsData;
  
  constructor() {}
  
  checkboxData: ChekboxFormsInterface = {
    labelName: "I agree to receive communications from Createx Online School",
    type:"checkbox",
    required:true,
  }


  ngOnInit() {

    ymaps.ready(function (): void {
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
