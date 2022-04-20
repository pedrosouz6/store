import { Container } from "./style";

export default function DashboardProductsAllProducts() {
    return (
        <Container>
            <div className="center--dashboard">
                <div className="dashboard--all--products__container">
                    <h2>Todos os produtos</h2>

                    <table>
                        <thead>
                            <tr>
                                <td className="td__name">Nome</td>
                                <td className="td__category">Categoria</td>
                                <td className="td__price">Preço</td>
                                <td className="td__amount">Quant</td>
                                <td className="td__status">Status</td>
                                <td className="td__image">Imagem</td>
                                <td className="td__description">Descrição</td>
                                <td className="td__actions">Ações</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tênis Yeezy</td>
                                <td>Tênis</td>
                                <td>R$ 399,99</td>
                                <td className="td__amount">345</td>
                                <td className="td__status">Desativo</td>
                                <td><img src='https://img.freepik.com/fotos-gratis/fundo-de-pintura-grunge_1409-1337.jpg?w=2000' /></td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, cupiditate porro aliquam sapiente magnam.</td>
                                <td>Editar</td>
                            </tr>
                            <tr>
                                <td>Tênis Yeezy</td>
                                <td>Tênis</td>
                                <td>R$ 399,99</td>
                                <td className="td__amount">345</td>
                                <td className="td__status">Desativo</td>
                                <td><img src='https://img.freepik.com/fotos-gratis/fundo-de-pintura-grunge_1409-1337.jpg?w=2000' /></td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, cupiditate porro aliquam sapiente magnam.</td>
                                <td>Editar</td>
                            </tr>
                            <tr>
                                <td>Tênis Yeezy</td>
                                <td>Tênis</td>
                                <td>R$ 399,99</td>
                                <td className="td__amount">345</td>
                                <td className="td__status">Desativo</td>
                                <td><img src='https://img.freepik.com/fotos-gratis/fundo-de-pintura-grunge_1409-1337.jpg?w=2000' /></td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, cupiditate porro aliquam sapiente magnam.</td>
                                <td>Editar</td>
                            </tr>
                            <tr>
                                <td>Tênis Yeezy</td>
                                <td>Tênis</td>
                                <td>R$ 399,99</td>
                                <td className="td__amount">345</td>
                                <td className="td__status">Desativo</td>
                                <td><img src='https://img.freepik.com/fotos-gratis/fundo-de-pintura-grunge_1409-1337.jpg?w=2000' /></td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, cupiditate porro aliquam sapiente magnam.</td>
                                <td>Editar</td>
                            </tr>
                            <tr>
                                <td>Tênis Yeezy</td>
                                <td>Tênis</td>
                                <td>R$ 399,99</td>
                                <td className="td__amount">345</td>
                                <td className="td__status">Desativo</td>
                                <td><img src='https://img.freepik.com/fotos-gratis/fundo-de-pintura-grunge_1409-1337.jpg?w=2000' /></td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, cupiditate porro aliquam sapiente magnam.</td>
                                <td>Editar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    )
}