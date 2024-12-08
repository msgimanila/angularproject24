import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSS = async () => {
      const parser = new Parser();
      try {
        const feed = await parser.parseURL('https://news.google.com/rss'); // Change URL as needed
        setNews(feed.items);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  if (loading) return <div>Loading news...</div>;

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.contentSnippet || article.summary}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
