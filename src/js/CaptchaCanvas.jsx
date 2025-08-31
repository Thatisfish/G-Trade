import React, { useEffect, useRef, useState, useCallback } from "react";

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randChar = () => {
	// 去掉容易混淆的字元：0 O o 1 I l 等
	const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz";
	return chars[randInt(0, chars.length - 1)];
};

const genCode = (len = 5) => Array.from({ length: len }, randChar).join("");

export default function CaptchaCanvas({
	length = 5,
	width = 120,
	height = 40,
	onChange
}) {
	const canvasRef = useRef(null);
	const [code, setCode] = useState(genCode(length));

	const draw = useCallback((text) => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");

		// 背景
		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = "#f3f4f6"; // 淺灰底
		ctx.fillRect(0, 0, width, height);

		// 隨機雜點
		for (let i = 0; i < 30; i++) {
			ctx.fillStyle = `rgba(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)}, 0.6)`;
			ctx.fillRect(randInt(0, width), randInt(0, height), 1, 1);
		}

		// 隨機干擾線
		for (let i = 0; i < 3; i++) {
			ctx.strokeStyle = `rgba(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)}, 0.7)`;
			ctx.lineWidth = randInt(1, 2);
			ctx.beginPath();
			ctx.moveTo(randInt(0, width / 3), randInt(0, height));
			ctx.bezierCurveTo(
				randInt(0, width), randInt(0, height),
				randInt(0, width), randInt(0, height),
				randInt(width / 2, width), randInt(0, height)
			);
			ctx.stroke();
		}

		// 繪制文字
		const per = width / (text.length + 1);
		for (let i = 0; i < text.length; i++) {
			const ch = text[i];
			const fontSize = randInt(18, 24);
			ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
			ctx.fillStyle = `rgb(${randInt(30, 120)}, ${randInt(30, 120)}, ${randInt(30, 120)})`;
			const x = per * (i + 1);
			const y = randInt(height * 0.6, height * 0.8);
			const angle = (randInt(-25, 25) * Math.PI) / 180;

			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(angle);
			ctx.fillText(ch, 0, 0);
			ctx.restore();
		}
	}, [width, height]);

	const refresh = useCallback(() => {
		const next = genCode(length);
		setCode(next);
		onChange?.(next); // 告知父元件答案（父層自行保管於 state）
	}, [length, onChange]);

	useEffect(() => {
		draw(code);
	}, [code, draw]);

	// 初次通知父層
	useEffect(() => {
		onChange?.(code);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="captcha">
			<canvas
				ref={canvasRef}
				width={width}
				height={height}
				aria-label="驗證碼（captcha，驗證使用者是否為人類）圖片"
				role="img"
			/>
			<button type="button" className="captcha__refresh" onClick={refresh} aria-label="重整驗證碼">
				↻
			</button>
		</div>
	);
}
