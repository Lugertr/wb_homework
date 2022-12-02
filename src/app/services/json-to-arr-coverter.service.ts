import { Injectable } from '@angular/core';
import { from, map, Observable, switchMap } from 'rxjs';

export interface ChartDataInterface {
    title: string;
    label: string[];
    datasets: ChartDatasetsInterface[];
}

export interface ChartDatasetsInterface {
    label: string;
    data: number[];
    borderWidth: number;
}

interface JsonDataInterface {
    src_office_id: number;
    office_name: string;
    dt_date: string;
    qty_orders: number;
    qty_new: number;
    qty_delivered: number;
    qty_return: number;
}

@Injectable()
export class jsonToArrConvertService {
    private sumData: ChartDataInterface = {
        title: 'Суммарные значения всех офисов',
        label: [],
        datasets: [
            {
                label: 'qty_orders',
                data: [],
                borderWidth: 1,
            },
            {
                label: 'qty_new',
                data: [],
                borderWidth: 1,
            },
            {
                label: 'qty_delivered',
                data: [],
                borderWidth: 1,
            },
            {
                label: 'qty_return',
                data: [],
                borderWidth: 1,
            },
        ],
    };

    constructor() {}

    readFile(): Observable<ChartDataInterface[]> {
        return from(
            fetch('assets/json/charts.json', {
                mode: 'no-cors',
            })
        ).pipe(
            switchMap((response) => response.json()),
            map((val) => this.CollectData(val)),
            map((val) => this.calcSumData(val))
        );
    }

    CollectData(res: Array<JsonDataInterface>): ChartDataInterface[] {
        {
            const data: Map<number, ChartDataInterface> = new Map();
            res.forEach((object: JsonDataInterface) => {
                if (!data.has(object.src_office_id)) {
                    const chartDatasets: ChartDatasetsInterface[] = [];

                    Object.keys(object).forEach((key) => {
                        if (
                            key !== 'src_office_id' &&
                            key !== 'dt_date' &&
                            key !== 'office_name'
                        )
                            chartDatasets.push({
                                label: key,
                                data: [
                                    object[key as keyof JsonDataInterface],
                                ] as number[],
                                borderWidth: 1,
                            });
                    });

                    data.set(object.src_office_id, {
                        title:
                            object.office_name ||
                            `office id: ${object.src_office_id.toString()}`,
                        label: [object.dt_date],
                        datasets: chartDatasets,
                    });
                } else {
                    const graphData = data.get(object.src_office_id);
                    if (graphData) {
                        Object.keys(object).forEach((key) => {
                            if (key == 'dt_date')
                                graphData.label.push(object[key]);
                            else if (
                                key !== 'src_office_id' &&
                                key !== 'office_name'
                            ) {
                                const dataSetArr = graphData.datasets.find(
                                    (el) => el.label == key
                                );
                                if (dataSetArr)
                                    dataSetArr.data.push(
                                        object[
                                            key as keyof JsonDataInterface
                                        ] as number
                                    );
                            }
                        });
                        if (
                            graphData.title.length < 3 &&
                            object.office_name.length >= 3
                        )
                            graphData.title = object.office_name;
                    }
                }
            });
            return [...data.values()];
        }
    }

    calcSumData(chartsData: ChartDataInterface[]): ChartDataInterface[] {
        const allDateArr: Set<string> = new Set(
            ...chartsData.map((el) => el.label)
        );

        this.sumData.label = Array.from(allDateArr);

        for (let date of allDateArr.values()) {
            const sumsCalculateObj: { [dataName: string]: number } = {
                qty_orders: 0,
                qty_new: 0,
                qty_delivered: 0,
                qty_return: 0,
            };
            for (let graphData of chartsData) {
                const dateInd = graphData.label.indexOf(date);

                Object.keys(sumsCalculateObj).forEach((key) => {
                    if (~dateInd) {
                        const datasetArr = graphData.datasets.find(
                            (el) => el.label == key
                        );
                        if (datasetArr)
                            sumsCalculateObj[key] += datasetArr.data[dateInd];
                    }
                });
            }
            Object.keys(sumsCalculateObj).forEach((key) => {
                const dataSetArr = this.sumData.datasets.find(
                    (el) => el.label == key
                );
                if (dataSetArr) dataSetArr.data.push(sumsCalculateObj[key]);
            });
        }
        return [...chartsData, this.sumData];
    }
}
