import { Component, OnInit} from '@angular/core';
import { CustomIconService } from './services/custom-icon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'my-app';

  constructor(private CustomIconService: CustomIconService) {}

  ngOnInit() {}
}


