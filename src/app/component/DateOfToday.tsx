"use client";

type DateOfTodayProps = {
	date: string;
};

export default function DateOfToday({ date }: DateOfTodayProps) {
	return <p className="text-right text-lg mb-2">📅 今日の日付: {date}</p>;
}
