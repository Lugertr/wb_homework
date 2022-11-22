import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
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
  host: {'[class.page]': 'true'}
})


export class GraphsComponent implements OnInit {

  GraphsArr: GraphDataInterface[] = [];
  @ViewChild('canvas') ctx?:ElementRef<HTMLCanvasElement>;


  constructor(private jsonToArrConvertService: jsonToArrConvertService,
    public dialog: MatDialog) {}

  ngOnInit(){
      this.jsonToArrConvertService.readFile()
      .then(()=>this.GraphsArr = [...this.jsonToArrConvertService.getData()])
      .then(()=>this.createLastGraph())
  }

  fullSizeOpen(ind:number):void {
      const dialogRef = this.dialog.open(GraphComponent,{
        width: '90%',
        height: '90%',
      })
      dialogRef.componentInstance.graphData = this.GraphsArr[ind];
  }

  createLastGraph():void {
    if (this.ctx) {
      const chartData: ChartDataInterface[] = [];
      
      //Находим все даты:
      const allDateArr: Set<string> = new Set(...this.GraphsArr.map((el)=>el.data_arr));

      //формируем datasets проходя во всех объектах по всем датам
      for (let graphData of this.GraphsArr) {
        const sumArr: number[] = []
        for (let date of allDateArr) {
          const dateInd = graphData.data_arr.indexOf(date);
          const sum = (!~dateInd) ? 0:
          graphData.orders[dateInd] + graphData.new[dateInd] + graphData.deliver[dateInd] + graphData.returns[dateInd];
          sumArr.push(sum)
        }
        chartData.push({
            label: graphData.name,
            data: sumArr,
            borderWidth: 1
        })
      }
      
      new Chart( this.ctx.nativeElement, {
          type: 'line',
          options: {
              plugins: {
                  title: {
                      display: true,
                      text: 'Все офисы'
                  }
              }
          },
          data: {
              labels: Array.from(allDateArr),
              datasets: chartData
          }
      });
  }
  }


}
