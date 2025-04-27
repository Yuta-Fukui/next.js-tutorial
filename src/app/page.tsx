import Link from "next/link";

export const metadata = {
	title: "俺のヒーロー紹介",
};
export default function HomePage() {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-12 pb-12">
			<h1 className="text-4xl font-bold mb-4">ようこそ！</h1>
			<p className="text-lg mb-6">君はヒーローになれる！！！</p>
			<Link
				href="/myHeroes"
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
			>
				ヒーロー一覧を見る
			</Link>
		</section>
	);
}
