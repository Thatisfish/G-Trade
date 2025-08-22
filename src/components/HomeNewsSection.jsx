// src/components/HomeNews.jsx
import React from 'react';
import NewsCard from './NewsCard';
import { newsData } from '../data/NewsData';

const HomeNews = () => {
	return (
		<div className="home-news">
			{newsData.slice(0, 4).map(item => (
				<NewsCard
					key={item.id}
					img={item.img}
					title={item.title}
					content={item.content}
					link={`/news/${item.id}`}
				/>
			))}
		</div>
	);
};

export default HomeNews;
