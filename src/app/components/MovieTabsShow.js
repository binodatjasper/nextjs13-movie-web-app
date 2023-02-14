"use client"
import { useState } from "react";

import CartoonList from "./CartoonsList";
import NewMoviesList from "./NewMoviesList";
import NewReleasesList from "./NewReleasesList";
import TVSeriesList from "./TVSeriesList";

export default function MovieTabsShow() {
    const [activeTab, setActiveTab] = useState('new-releases');

    return (
        <section className="movie-tabs-show">
            <div className="container">
                <div className="movie-tabs-button">
                    <ul data-aos="fade-up">
                        <li>
                            <button
                                className={activeTab === 'new-releases' ? 'active' : ''}
                                onClick={() => setActiveTab('new-releases')}
                            >
                                NEW RELEASES
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeTab === 'movies' ? 'active' : ''}
                                onClick={() => setActiveTab('movies')}
                            >
                                MOVIES
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeTab === 'tv-series' ? 'active' : ''}
                                onClick={() => setActiveTab('tv-series')}
                            >
                                TV SERIES
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeTab === 'cartoons' ? 'active' : ''}
                                onClick={() => setActiveTab('cartoons')}
                            >
                                CARTOONS
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="movie-tabs-content" data-aos="fade-up">
                    <div className={activeTab === 'new-releases' ? 'movie-tabs-item active' : 'movie-tabs-item'}>
                        <NewReleasesList />
                    </div>
                    <div className={activeTab === 'movies' ? 'movie-tabs-item active' : 'movie-tabs-item'}>
                        <NewMoviesList />
                    </div>
                    <div className={activeTab === 'tv-series' ? 'movie-tabs-item active' : 'movie-tabs-item'}>
                        <TVSeriesList />
                    </div>
                    <div className={activeTab === 'cartoons' ? 'movie-tabs-item active' : 'movie-tabs-item'}>
                        <CartoonList />
                    </div>
                </div>
            </div>
        </section>
    );
}