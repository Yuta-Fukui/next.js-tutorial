"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const heroSchema = z.object({
	title: z.string().nonempty("タイトルを入力してください"),
	content: z
		.string()
		.nonempty("内容を入力してください")
		.min(10, "内容は10文字以上で入力してください")
		.optional(),
});

type HeroFormData = z.infer<typeof heroSchema>;

export default function AddHeroPage() {
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<HeroFormData>({
		mode: "onChange",
		resolver: zodResolver(heroSchema),
	});

	const onSubmit = (data: HeroFormData) => {
		console.log("フォーム送信データ:", data);
		setSuccessMessage("ヒーローが正常に登録されました！");
	};

	return (
		<section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
			<h1 className="text-2xl font-bold mb-6">ヒーローを登録する</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-md bg-white p-6 rounded shadow"
			>
				<div className="mb-4">
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						タイトル
					</label>
					<input
						id="title"
						type="text"
						{...register("title")}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					/>
					{errors.title && (
						<p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
					)}
				</div>

				<div className="mb-4">
					<label
						htmlFor="content"
						className="block text-sm font-medium text-gray-700"
					>
						内容
					</label>
					<textarea
						id="content"
						{...register("content")}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					/>
					{errors.content && (
						<p className="mt-1 text-sm text-red-500">
							{errors.content.message}
						</p>
					)}
				</div>

				<button
					type="submit"
					className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
				>
					登録
				</button>
			</form>

			{successMessage && (
				<p className="mt-4 text-green-500 font-medium">{successMessage}</p>
			)}
		</section>
	);
}
