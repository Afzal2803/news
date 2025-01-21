import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function BlogCard1({ col, desc, video, formatIcon, item }) {
    return (
        <>
            <div className={`${col ? col : ""}`}>
                <article className="ta-blog-box ta-thumb-zoom ta-blog-box__style-2 ta-stroke ">
                    <div className="thumb ">
                        <img src={`/assets/img/blog/${item.img}`} alt="blog" />
                        <div className="ta-blog-box__cats ta-blog-box__cats--right">
                            <Link href="/blog">{item.category}</Link>
                        </div>
                        {formatIcon &&
                            <span className="post-format-icon">
                                {item.category === "photo" && <i className="fas fa-images" />}
                                {item.category === "video" && <i className="fas fa-video" />}
                                {item.category === "nature" && <i className="fas fa-tree" />}
                                {item.category === "discover" && <i className="fas fa-globe-stand" />}
                                {item.category === "travel" && <i className="fas fa-plane-departure" />}
                                {item.category === "science" && <i className="fas fa-microscope" />}
                                {item.category === "marketing" && <i className="fas fa-megaphone" />}
                                {item.category === "podcast" && <i className="fas fa-microphone" />}
                            </span>
                        }

                        {video &&
                            <VideoPopup style={1} />
                        }

                    </div>
                    <div className="content ">
                        <ul className="ta-blog-box__meta-info meta-infos d-flex justify-content-center align-items-center list-unstyled tfy-neg-30 ta-stroke ">
                            <li>
                                <Link href="/author" className="author-wrapper d-flex justify-content-center align-items-center">
                                    <span className="by">By</span>
                                    <span className="author-name">{item.author}</span>
                                </Link>
                            </li>
                            <li>March 21, {new Date().getFullYear()}</li>
                            <li><i className="fa fa-clock" /> 20 Min</li>
                        </ul>
                        <h3 className="ta-blog-box__title ta-blog-box__title--small ta-border-effect "><Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                        {desc &&
                            <div className="excerpt excerpt__small mt-15">
                                <p>Let’s talk about Next.js, one of the most well
                                    known React frameworks.</p>
                            </div>
                        }
                        <div className="bottom-wrapper pt-20 d-flex justify-content-between align-items-center mt-30">
                            <Link href={`/blog/${item.id}`} className="ta-inline-btn">Read More <i className="fa fa-long-arrow-right" /></Link>
                            <div className="ta-blog-box__share-info share-info d-flex justify-content-center align-items-center">
                                <ul className="d-flex justify-content-center align-items-center list-unstyled">
                                    <li><i className="fa fa-comment" /> 82</li>
                                    <li><i className="fa fa-heart" /> 258</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}
