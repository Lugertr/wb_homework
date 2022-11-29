import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js/auto';

import { ChartDataInterface } from 'src/app/services/json-to-arr-coverter.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['../graphs.component.scss'],
})
export class GraphComponent implements AfterViewInit {
  @ViewChild('canvas') ctx?: ElementRef<HTMLCanvasElement>;
  @Input() graphData: ChartDataInterface = {
    title: 'none',
    label: [],
    datasets: [],
  };
  @Input() isDialog = false;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.setChart();
  }

  setChart() {
    if (this.ctx) {
      new Chart(this.ctx.nativeElement, {
        type: 'line',
        options: {
          responsive: false,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: this.graphData.title,
            },
          },
        },
        data: {
          labels: this.graphData.label,
          datasets: this.graphData.datasets,
        },
      });
    }
  }

  fullSizeOpen(): void {
    const dialogRef = this.dialog.open(GraphComponent, {
      width: '90%',
      height: '90%',
    });
    dialogRef.componentInstance.graphData = this.graphData;
    dialogRef.componentInstance.isDialog = true;
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
