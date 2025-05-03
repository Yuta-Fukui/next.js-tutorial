"use client";

import { useState } from "react";

type TodayMessageProps = {
	message: string;
};

export default function TodayMessage({ message }: TodayMessageProps) {
	const [likes, setLikes] = useState(0);

	return (
		<section className="mt-7">
			<p className="text-lg mb-4">💬 今日の一言: {message}</p>
			<button
				type="button"
				onClick={() => setLikes(likes + 1)}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
			>
				🔥　頑張る ({likes})
			</button>
		</section>
	);
}
