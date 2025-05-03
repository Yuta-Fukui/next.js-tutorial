import TodayMessage from "@/app/component/TodayMessage";
import type { JSX } from "react/jsx-runtime";
import HeroDetails from "./HeroDetails";

export const metadata = {
	title: "俺のヒーロー紹介",
};

/**
 * @description
 * ヒーローの詳細を表示するページ
 * @param {Object} params - 動的ルートのパラメータ
 * @returns {JSX.Element} ヒーローの詳細を表示する要素
 */
const MyHeroesDetail = ({
	params,
}: { params: { id: string } }): JSX.Element => {
	const todayMessage = "今日も頑張ろう！";
	return (
		<main>
			<HeroDetails id={params.id} />
			<TodayMessage message={todayMessage} />
		</main>
	);
};

export default MyHeroesDetail;
