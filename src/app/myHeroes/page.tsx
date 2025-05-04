import Link from "next/link";

/**
 * @returns {JSX.Element} ヒーロー一覧を表示する要素
 * @description
 * ヒーロー一覧を表示するコンポーネント
 */
export const metadata = {
	title: "俺のヒーロー一覧",
};

const myHeroesPage = () => {
	const myHeroes = [
		{ id: 1, title: "アンパンマン" },
		{ id: 2, title: "ショクパンマン" },
		{ id: 3, title: "カレーパンマン" },
	];

	return (
		<section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
			<h1 className="text-4xl font-bold mb-8">俺のヒーロー一覧</h1>
			<ul className="space-y-4">
				{myHeroes.map((myHero) => (
					<li key={myHero.id} className="text-lg">
						<Link
							href={`/myHeroes/${myHero.id}`}
							className="text-blue-500 hover:underline"
						>
							{myHero.title}
						</Link>
					</li>
				))}
			</ul>
			<Link
				href="/myHeroes/addHero"
				className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
			>
				ヒーローを登録する
			</Link>
		</section>
	);
};

export default myHeroesPage;
