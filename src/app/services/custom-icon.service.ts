import { Injectable } from '@angular/core';

import { LinksInterface } from '../types/typesUI';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CustomIconService {

  customIconLinks: LinksInterface[] = [
    {name: "iphone",link: "assets/custom_svg/iPhone.svg"},
    {name: "mail",link: "assets/custom_svg/Mail.svg"},
    {name: "outline",link: "assets/custom_svg/outline.svg"},
    {name: "chat",link: "assets/custom_svg/Chat.svg"},
    {name: "mic", link: "assets/custom_svg/mic.svg"},

    {name: "eye",link: "assets/custom_svg/Eye.svg"},
              //{name: "arrow",link: "assets/custom_svg/Arrow.svg"},
    //blog Article
    {name: "rectangle", link: "assets/custom_svg/Rectangle.svg"},
    //nav
    {name: "person", link: "assets/custom_svg/Person.svg"},
    //footer copywrite
    {name: "heart", link: "assets/custom_svg/copyright_heart.svg"},
    //social networks logos:
    {name: "facebook",link: "assets/custom_svg/social_network_logo/Facebook.svg"},
    {name: "google",link: "assets/custom_svg/social_network_logo/Google.svg"},
    {name: "twitter",link: "assets/custom_svg/social_network_logo/Twitter.svg"},
    {name: "youtube",link: "assets/custom_svg/social_network_logo/YouTube.svg"},
    {name: "inst",link: "assets/custom_svg/social_network_logo/Instagram.svg"},
    {name: "linked",link: "assets/custom_svg/social_network_logo/Linked-In.svg"},
    {name: "telegram",link: "assets/custom_svg/social_network_logo/telegram.svg"},
  ]

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) { 

    this.customIconLinks.forEach((value)=>

      this.matIconRegistry.addSvgIcon(
        value.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(value.link)
      )
    )
  }
}
