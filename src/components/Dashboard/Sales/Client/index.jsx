import { Container } from "./style";

import { useSales } from '../../../../hooks/Sales/index';

export default function DashboardSalesClient() {

    const { purchases } = useSales();

    return (  
        <Container>
            <div className="center--dashboard">
                <div className="dashboard--sales--client__container">
                    <h2>Todas as vendas</h2>

                    <table>
                        <thead>
                            <tr>
                                <td>Comprador</td>
                                <td>Nome do produto</td>
                                <td>Marca do produto</td>
                                <td>Preço</td>
                                <td>Imagem do produto</td>
                                <td>Data da compra</td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                purchases.length > 0 ? 
                                    purchases.map((item, key) => (
                                        <tr key={key}>
                                            <td>{ item.name_client }</td>
                                            <td>{ item.name_product }</td>
                                            <td>{ item.brand_product }</td>
                                            <td>R$ { item.price_product },00</td>
                                            <td className="imagem_td"><img src={ item.url_product } alt="Imagem do produto" /></td>
                                            <td className="date__purchase">{ new Date(item.date_buy).toLocaleDateString() }</td>
                                        </tr>
                                    ))
                                : 'Nenhum produto foi comprado'
                            }
                        </tbody>
                    </table> 
                </div>
            </div>
        </Container>
    )
}