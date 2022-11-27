import { Component, OnInit } from '@angular/core';
import { jsonToArrConvertService} from '../../../services/json-to-arr-coverter.service';
import {MatDialog} from '@angular/material/dialog';

import { ChartDataInterface } from '../../../services/json-to-arr-coverter.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
  providers:  [ jsonToArrConvertService  ],
  host: {'[class.page]': 'true'},
})


export class GraphsComponent implements OnInit {

  graphsArr: ChartDataInterface[] = [];
  sumData: ChartDataInterface = {
    title: '',
    label: [],
    datasets: []}



  constructor(private jsonToArrConvertService: jsonToArrConvertService,
    public dialog: MatDialog) {}

  ngOnInit(): void{
      this.jsonToArrConvertService.readFile()
      .then(()=>this.graphsArr = this.jsonToArrConvertService.getData())
      .then(()=>this.sumData = this.jsonToArrConvertService.getSumData())
  }

}
