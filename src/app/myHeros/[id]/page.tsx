import Hero from "./;HeroDetails";

export const metadata = {
	title: "俺のヒーロー紹介",
};

/**
 * @description
 * ヒーローの詳細を表示するコンポーネント
 * @param {string} id - ヒーローのID
 * @returns {JSX.Element} ヒーローの詳細を表示する要素
 */
const MyHeroesDetail = ({ params }: { params: { id: string } }) => {
	return (
		<main>
			<Hero id={params.id} />
		</main>
	);
};

export default MyHeroesDetail;
