import { useNavigate } from "react-router-dom";

export default function HotSearch() {
	const navigate = useNavigate();
	const hotKeywords = ["Nintendo Switch 2", "寶可夢傳說 Z-A", "邊緣禁地4"];

	const goSearch = (kw) => {
		const q = String(kw || "").trim();
		if (q) navigate(`/search?q=${encodeURIComponent(q)}`); // 與 Navbar 相同規格
	};

	return (
		<div className="hot">
			<h3>近期熱搜</h3>
			<div className="hot-list">
				{hotKeywords.map((w, i) => (
					<button
						key={i}
						type="button"
						className="hot-item"
						onClick={() => goSearch(w)}
						aria-label={`搜尋 ${w}`}
					>
						{w}
					</button>
				))}
			</div>
		</div>
	);
}
