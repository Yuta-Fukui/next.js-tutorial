import Link from "next/link";

export const metadata = {
	title: "俺のヒーロー紹介",
};
export default function HomePage() {
	return (
            <main>
				<h1>ようこそ！</h1>
				<p>君はヒーローになれる！！！</p>
				<Link href="/myHeros">ヒーロー一覧を見る</Link>
			</main>
	);
}