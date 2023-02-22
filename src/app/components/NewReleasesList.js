'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function NewReleasesList() {
    const router = useRouter();

    return (
        <div className="new-releases-list">
            <div className="row">
                <div className="col-sm-6">
                    <div className="new-releases-item">
                        <div>
                            <div className="new-releases-item-thumbnail">
                                <div className="movie-card-thumbnail">
                                    <Image src="/images/movie_poster_1.jpg" alt="" width={261} height={387} />
                                    <a onClick={() => router.push("movies/movie-details")} className="movie-link">
                                        <span>View Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="new-releases-item-content">
                                <h4>Benched</h4>
                                <span>Comedy</span>
                                <ul className="rating-info">
                                    <li><Image src="/images/star.svg" alt="" width={16} height={16} /> 7.1</li>
                                    <li>FHD</li>
                                    <li>18+</li>
                                </ul>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="new-releases-item">
                        <div>
                            <div className="new-releases-item-thumbnail">
                                <div className="movie-card-thumbnail">
                                    <Image src="/images/movie_poster_2.jpg" alt="" width={261} height={387} />
                                    <a onClick={() => router.push("movies/movie-details")} className="movie-link">
                                        <span>View Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="new-releases-item-content">
                                <h4>Whitney</h4>
                                <span>Romance, Drama, Music</span>
                                <ul className="rating-info">
                                    <li><Image src="/images/star.svg" alt="" width={16} height={16} /> 6.3</li>
                                    <li>HD</li>
                                    <li>13+</li>
                                </ul>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="new-releases-item">
                        <div>
                            <div className="new-releases-item-thumbnail">
                                <div className="movie-card-thumbnail">
                                    <Image src="/images/movie_poster_3.jpg" alt="" width={261} height={387} />
                                    <a onClick={() => router.push("movies/movie-details")} className="movie-link">
                                        <span>View Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="new-releases-item-content">
                                <h4>Blindspotting</h4>
                                <span>Comedy, Drama</span>
                                <ul className="rating-info">
                                    <li><Image src="/images/star.svg" alt="" width={16} height={16} /> 7.9</li>
                                    <li>HD</li>
                                    <li>16+</li>
                                </ul>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="new-releases-item">
                        <div>
                            <div className="new-releases-item-thumbnail">
                                <div className="movie-card-thumbnail">
                                    <Image src="/images/movie_poster_4.jpg" alt="" width={261} height={387} />
                                    <a onClick={() => router.push("movies/movie-details")} className="movie-link">
                                        <span>View Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="new-releases-item-content">
                                <h4>I Dream in Another Language</h4>
                                <span>Action, Triler</span>
                                <ul className="rating-info">
                                    <li><Image src="/images/star.svg" alt="" width={16} height={16} /> 8.4</li>
                                    <li>HD</li>
                                    <li>12+</li>
                                </ul>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="new-releases-item">
                        <div>
                            <div className="new-releases-item-thumbnail">
                                <div className="movie-card-thumbnail">
                                    <Image src="/images/movie_poster_5.jpg" alt="" width={261} height={387} />
                                    <a onClick={() => router.push("movies/movie-details")} className="movie-link">
                                        <span>View Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="new-releases-item-content">
                                <h4>Benched</h4>
                                <span>Comedy</span>
                                <ul className="rating-info">
                                    <li><Image src="/images/star.svg" alt="" width={16} height={16} /> 7.1</li>
                                    <li>HD</li>
                                    <li>16+</li>
                                </ul>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="new-releases-item">
                        <div>
                            <div className="new-releases-item-thumbnail">
                                <div className="movie-card-thumbnail">
                                    <Image src="/images/movie_poster_6.jpg" alt="" width={261} height={387} />
                                    <a onClick={() => router.push("movies/movie-details")} className="movie-link">
                                        <span>View Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="new-releases-item-content">
                                <h4>I Dream in Another Language</h4>
                                <span>Action, Triler</span>
                                <ul className="rating-info">
                                    <li><Image src="/images/star.svg" alt="" width={16} height={16} /> 8.4</li>
                                    <li>HD</li>
                                    <li>16+</li>
                                </ul>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to on the Beatch...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}