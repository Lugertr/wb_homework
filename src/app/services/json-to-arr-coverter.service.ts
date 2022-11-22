import { GraphDataInterface } from "../types/jsonDataTypes";

export class jsonToArrConvertService {

    data: Map<number, GraphDataInterface> = new Map();

    constructor() {}

    async readFile(): Promise<any> {
        return fetch('assets/json/charts.json')
        .then(res => res.json())
        .then((res) => {
            res.forEach((objects: any)=>{
    
                if (!this.data.has(objects.src_office_id)) {

                    const graphData: GraphDataInterface = {
                        name: objects.office_name || `office id: ${objects.src_office_id.toString()}`,
                        data_arr: [objects.dt_date],
                        orders: [objects.qty_orders],
                        new: [objects.qty_new],
                        deliver: [objects.qty_delivered],
                        returns: [objects.qty_return],
                    } 
                    this.data.set(objects.src_office_id,graphData)
                }
                else {
                    const graphData = this.data.get(objects.src_office_id);
                    if (graphData) {
                        graphData.data_arr.push(objects.dt_date)
                        graphData.orders.push(objects.qty_orders)
                        graphData.new.push(objects.qty_new)
                        graphData.deliver.push(objects.qty_delivered)
                        graphData.returns.push(objects.qty_return)

                        if (graphData.name.length<3 && objects.office_name.length>=3)
                            graphData.name = objects.office_name;
                    }
                }
            })
        })
    }

    getData():GraphDataInterface[]  {
        return [...this.data.values()]
    }
}
