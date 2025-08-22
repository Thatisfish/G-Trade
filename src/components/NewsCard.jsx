// src/components/NewsCard.jsx
import React from 'react';

const NewsCard = ({ img, title, content, link = '#' }) => {
	return (
		<a href={link} className="news-card">
			<img src={img} alt={title} />
			<div className="newfont">
				<h4>{title}</h4>
				<p>{content}</p>
			</div>
		</a>
	);
};

export default NewsCard;
