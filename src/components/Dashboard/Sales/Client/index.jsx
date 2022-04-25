import { Container } from "./style"

export default function DashboardSalesClient() {
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
                                <td>Preço</td>
                                <td>Data da compra</td>
                                <td>Quantidade</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pedro Souza</td>
                                <td>MaacBook Pro</td>
                                <td>R$ 3.589,00</td>
                                <td>25/04/2022</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Pedro Souza</td>
                                <td>MaacBook Pro</td>
                                <td>R$ 3.589,00</td>
                                <td>25/04/2022</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Pedro Souza</td>
                                <td>MaacBook Pro</td>
                                <td>R$ 3.589,00</td>
                                <td>25/04/2022</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
            </div>
        </Container>
    )
}