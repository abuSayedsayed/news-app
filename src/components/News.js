import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general',
    };

    state = { articles: [], loading: false, page: 1 };

    async componentDidMount() {
        const { pageSize, country, category } = this.props;

        const BASE_URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9cd569bc1d5c418fa55220eaba34e0a0&pageSize=${pageSize}`;
        try {
            const data = await fetch(BASE_URL);
            const news = await data.json();
            this.setState({
                articles: news.articles,
                loading: true,
                totalResults: news.totalResults,
            });
        } catch (error) {
            console.log(error);
        }
    }

    handlePrevClick = async () => {
        const { page } = this.state;
        const { pageSize, country, category } = this.props;
        this.setState({ loading: false });
        const BASE_URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9cd569bc1d5c418fa55220eaba34e0a0&pageSize=${pageSize}&page=${
            page - 1
        }`;
        try {
            const data = await fetch(BASE_URL);
            const news = await data.json();
            this.setState({ articles: news.articles, loading: true, page: page - 1 });
        } catch (error) {
            console.log(error);
        }
    };

    handleNextClick = async () => {
        const { page, totalResults } = this.state;
        const { pageSize, country, category } = this.props;

        if (page + 1 > Math.ceil(totalResults / pageSize)) {
            console.log('No More News');
        } else {
            this.setState({ loading: false });
            const BASE_URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9cd569bc1d5c418fa55220eaba34e0a0&pageSize=${pageSize}&page=${
                page + 1
            }`;
            try {
                window.scrollTo(0, 0);
                const data = await fetch(BASE_URL);
                const news = await data.json();
                this.setState({ articles: news.articles, loading: true, page: page + 1 });
            } catch (error) {
                console.log(error);
            }
        }
    };

    render() {
        console.log('Ia am news component');
        const { articles, loading, page, totalResults } = this.state;
        const { pageSize } = this.props;
        const fixedStyle = {
            display: loading ? 'none' : 'block',
            pointerEvents: loading ? 'none' : 'all',
        };

        return (
            <div>
                <div className="container py-5 mt-5">
                    <h3 className="text-center py-3">
                        Cat News - <span className="text-warning"> Top HeadLines </span>
                    </h3>
                    <div className="row">
                        <Spinner givenStyle={fixedStyle} />
                        {articles.map((article) => (
                            <div className="col-md-4 my-2" key={article.url}>
                                <NewsItem
                                    title={article.title}
                                    description={article.description}
                                    imgUrl={article.urlToImage}
                                    url={article.url}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button
                            type="button"
                            onClick={this.handlePrevClick}
                            className="btn btn-dark"
                            disabled={page <= 1}
                        >
                            &larr; Previous
                        </button>
                        <button
                            type="button"
                            onClick={this.handleNextClick}
                            className="btn btn-dark"
                            disabled={page + 1 > Math.ceil(totalResults / pageSize)}
                        >
                            Next &rarr;
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
