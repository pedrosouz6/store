import { Chart } from "react-google-charts";

import { Container } from "./style";

export default function DashboardSalesGrafic() {
    const data = [
        [
          "Element",
          "Density",
          { role: "style" },
          {
            sourceColumn: 0,
            role: "annotation",
            type: "string",
            calc: "stringify",
          },
        ],
        
        ["Yeezy Boost", 8.94, "#6959CD", null],
        ["MacBook PRO", 10.49, "#6959CD", null],
        ["Iphone X", 19.3, "#6959CD", null],
        ["SSD", 21.45, "#6959CD", null],
    ];

    const options = {
        title: "Top 5 produtos mais vendidos",
        width: 600,
        height: 400,
        bar: { groupWidth: "60%" },
        legend: { position: "none" },
        backgroundColor: 'none'
    };

    const dataSales = [
        ["Year", "Vendas", "Reembolso"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ];

    const optionsSales = {
        width: 600,
        height: 400,
        legend: { position: "bottom" },
        backgroundColor: 'none'
    };

    return (
        <Container>
            <div className="dashboard--sales__graphics">

                <div className="dashboard--sales__graphic">

                    <Chart
                        chartType="BarChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                    
                </div>

                <div className="dashboard--sales__graphic">

                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={dataSales}
                        options={optionsSales}
                    />

                </div>
            </div> 
        </Container>
    )
}