import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);

    const fetchNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        try {
            const response = await fetch(url);
            if (response.status === 429) {
                setError(true);
                console.error("API rate limit exceeded.");
                return;
            }
            const data = await response.json();
            setArticles(data.articles || []);
        } catch (error) {
            console.error("Error fetching news:", error);
            setError(true);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [category]);

    const dummyData = [
        {
            title: "Fallback News Title 1",
            description: "This is a fallback description for news 1.",
            urlToImage: "https://via.placeholder.com/360x200",
            url: "#"
        },
        {
            title: "Fallback News Title 2",
            description: "This is a fallback description for news 2.",
            urlToImage: "https://via.placeholder.com/360x200",
            url: "#"
        }
    ];

    const newsToDisplay = error ? dummyData : articles;

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            <div className="d-flex flex-wrap justify-content-center">
                {newsToDisplay.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsBoard;
