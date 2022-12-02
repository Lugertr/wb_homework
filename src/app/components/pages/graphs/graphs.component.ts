import { Component, OnInit } from '@angular/core';
import { jsonToArrConvertService } from '../../../services/json-to-arr-coverter.service';
import { MatDialog } from '@angular/material/dialog';

import { ChartDataInterface } from '../../../services/json-to-arr-coverter.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.scss'],
    providers: [jsonToArrConvertService],
    host: { '[class.page]': 'true' },
})
export class GraphsComponent implements OnInit {
    graphsArr$: Observable<ChartDataInterface[]>;

    constructor(
        private jsonToArrConvertService: jsonToArrConvertService,
        public dialog: MatDialog
    ) {
        this.graphsArr$ = this.jsonToArrConvertService.readFile();
    }

    ngOnInit(): void {}
}
