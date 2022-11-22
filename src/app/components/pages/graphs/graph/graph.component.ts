import { AfterViewInit, Component, ElementRef, Input,  ViewChild } from '@angular/core';
import {Chart} from 'chart.js/auto';

import { GraphDataInterface, ChartDataInterface } from 'src/app/types/jsonDataTypes';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['../graphs.component.scss'],
})
export class GraphComponent implements AfterViewInit {

    @ViewChild('canvas') ctx?:ElementRef<HTMLCanvasElement>;
    @Input() graphData: GraphDataInterface = {
        name: '',
        data_arr: [],
        orders: [],
        new: [],
        deliver: [],
        returns: [],
    };

    ngAfterViewInit(): void {
        if (this.ctx) {
            const chartData: ChartDataInterface[] = [];

            Object.keys(this.graphData).forEach((key)=>{
                if (key !== 'name' && key!=='data_arr')
                    chartData.push({
                        label: key,
                        data: this.graphData[key as keyof GraphDataInterface] as number[],
                        borderWidth: 1
                })   
            })
            
            new Chart( this.ctx.nativeElement, {
                type: 'line',
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: this.graphData.name
                        }
                    }
                },
                data: {
                    labels: this.graphData.data_arr,
                    datasets: chartData
                }
            });
        }
    }  
}
