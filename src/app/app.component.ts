import { Component, OnInit} from '@angular/core';
import { CustomIconService } from './services/custom-icon.service';
import { hostGetter } from './services/host-getter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [ hostGetter  ],
})
export class AppComponent implements OnInit  {
  title = 'my-app';

  constructor(CustomIconService: CustomIconService, hostGetter: hostGetter) {}

  ngOnInit() {}
}


