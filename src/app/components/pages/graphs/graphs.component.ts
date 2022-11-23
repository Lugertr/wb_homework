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

  graphsArr: GraphDataInterface[] = [];
  @ViewChild('canvas') ctx?:ElementRef<HTMLCanvasElement>;


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
    if (this.ctx) {
      const chartData: ChartDataInterface[] = [];
      
      //Находим все даты:
      const allDateArr: Set<string> = new Set(...this.graphsArr.map((el)=>el.data_arr));

      const sumArr: number[] = [];
      for (let date of allDateArr) {
        let sum: number = 0;
        for (let graphData of this.graphsArr) {
          const dateInd = graphData.data_arr.indexOf(date);
          sum +=(!~dateInd) ? 0:
          graphData.orders[dateInd] + graphData.new[dateInd] + graphData.deliver[dateInd] + graphData.returns[dateInd];
        }
        sumArr.push(sum);
      }

      chartData.push({
        label: "Суммарная статистика по всем офисам",
        data: sumArr,
        borderWidth: 1
    })
      
      new Chart( this.ctx.nativeElement, {
          type: 'line',
          data: {
              labels: Array.from(allDateArr),
              datasets: chartData
          },
          options: {
            scales: {
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
      });
  }
  }


}
