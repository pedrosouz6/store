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
        title: "Top 5 melhores produtos",
        width: 600,
        height: 400,
        bar: { groupWidth: "60%" },
        legend: { position: "none" },
    };

    return (
        <Container>
            <div className="dashboard--sales__grafic">
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
            </div> 
        </Container>
    )
}