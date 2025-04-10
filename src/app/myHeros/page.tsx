import Link from 'next/link';

export const metadata = {
	title: "俺のヒーロー一覧",
};

const myHerosPage = () => {
    const myHeros = [
        { id: 1, title: 'アンパンマン' },
        { id: 2, title: 'ショクパンマン' },
        { id: 3, title: 'カレーパンマン' },
    ];

    return (
        <div>
            <h1>メモ一覧</h1>
            <ul>
                {myHeros.map(myHero => (
                    <li key={myHero.id}>
                        <Link href={`/myHeros/${myHero.id}`}>{myHero.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default myHerosPage;