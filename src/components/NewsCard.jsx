// src/components/NewsCard.jsx
import { Link } from 'react-router-dom';

const NewsCard = ({ img, title, content, link = '#' }) => {
	return (
		<Link to={link} className="news-card">
			<img src={img} alt={title} />
			<div className="newfont">
				<h4>{title}</h4>
				<p>{content}</p>
			</div>
		</Link>
	);
};

export default NewsCard;
