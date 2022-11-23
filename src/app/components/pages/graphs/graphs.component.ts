import { Component, OnInit } from '@angular/core';
import { jsonToArrConvertService} from '../../../services/json-to-arr-coverter.service';
import {MatDialog} from '@angular/material/dialog';
import {Chart} from 'chart.js/auto';

import { GraphComponent } from './graph/graph.component';

import { GraphDataInterface, ChartDataInterface } from 'src/app/types/jsonDataTypes';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
  providers:  [ jsonToArrConvertService  ],
  host: {'[class.page]': 'true'},
})


export class GraphsComponent implements OnInit {

  graphsArr: GraphDataInterface[] = [];
  graphData: GraphDataInterface = {
    name: '',
    data_arr: [],
    orders: [],
    new: [],
    deliver: [],
    returns: [],
};



  constructor(private jsonToArrConvertService: jsonToArrConvertService,
    public dialog: MatDialog) {}

  ngOnInit(): void{
      this.jsonToArrConvertService.readFile()
      .then(()=>this.graphsArr = [...this.jsonToArrConvertService.getData()])
      .then(()=>this.createLastGraph())
  }

  fullSizeOpen(ind:number):void {
      const dialogRef = this.dialog.open(GraphComponent,{
        width: '90%',
        height: '90%',
      })
      dialogRef.componentInstance.graphData = this.graphsArr[ind];
  }

  createLastGraph():void {
      //Находим все даты:
      const allDateArr: string[] = Array.from(new Set(...this.graphsArr.map((el)=>el.data_arr)));
      this.graphData.data_arr.push(...allDateArr)
      
      for (let date of allDateArr) {
        let orderSum: number = 0;
        let newSum: number = 0;
        let deliverSum: number = 0;
        let returnsSum: number = 0;
        for (let graphData of this.graphsArr) {
          const dateInd = graphData.data_arr.indexOf(date);
          orderSum +=(!~dateInd) ? 0: graphData.orders[dateInd];
          newSum += (!~dateInd) ? 0: graphData.new[dateInd]
          deliverSum += (!~dateInd) ? 0: graphData.deliver[dateInd]
          returnsSum += (!~dateInd) ? 0: graphData.returns[dateInd]
        }
        this.graphData.orders.push(orderSum)
        this.graphData.new.push(newSum)
        this.graphData.deliver.push(deliverSum)
        this.graphData.returns.push(returnsSum)

        this.graphData.name = 'Суммарные значения всех офисов'
    }
  }


}
