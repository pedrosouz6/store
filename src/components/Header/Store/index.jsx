import { Header } from './style';

export default function HeaderStore() {
    return (
        <Header>
            <div className="center--store">
                <h1>Logo</h1>

                <nav>
                    <ul>
                        <li>login</li>
                        <li>produtos</li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </Header>
    )
}