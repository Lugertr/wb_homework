//Интерфейс объекта из JSON файла
export interface GraphDataInterface {
    name: string,
    data_arr: string[],
    orders: number[],
    new: number[],
    deliver: number[],
    returns: number[],
}

//интерфейс объекта для отрисовки графика 
export interface ChartDataInterface {
    label:string,
    data: number[],
    borderWidth: number,
}

