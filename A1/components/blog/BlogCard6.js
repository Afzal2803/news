import Link from "next/link"

export default function BlogCard6({ col, latest, formatIcon, item }) {
    return (
        <>

            <div className={`${col ? col : ""}`}>
                <article className="ta-blog-box ta-stroke ta-radious-40 ta-blog-box__featured">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="thumb ta-stroke ">
                                <img src={`/assets/img/blog/${item.img}`} alt="blog" />
                                <div className="ta-blog-box__cats ta-blog-box__cats--right">
                                    <Link href="#0">{item.category}</Link>
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
                                <div className="inner-dots" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content position-relative">
                                {latest &&
                                    <span className="ta-round-btn mt-none-60">Latest <br />News</span>
                                }
                                <h2 className="ta-blog-box__title ta-blog-box__title--big ta-border-effect mt-30"><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                                <div className="excerpt excerpt__small mt-15">
                                    <p>The opportunity to work abroad is a popular prospect, one undimmed by the years
                                        of restriction due to the pandemic and made only more accessible thanks to hybrid
                                        working and the rise of the digital native.</p>
                                </div>
                                <Link href={`/blog/${item.id}`} className="ta-button ta-button__borderd mt-35">Read More <i className="fa fa-long-arrow-right" /></Link>
                                <div className="bottom-wrapper mt-55 pt-20 d-flex justify-content-between align-items-center">
                                    <ul className="ta-blog-box__meta-info d-flex justify-content-center align-items-center list-unstyled">
                                        <li>
                                            <Link href="#0" className="author-wrapper d-flex justify-content-center align-items-center">
                                                <span className="by">By</span>
                                                <span className="author-name"> Alexis D.</span>
                                            </Link>
                                        </li>
                                        <li><Link href="#0">March 21, {new Date().getFullYear()}</Link></li>
                                        <li><Link href="#0"><i className="fa fa-clock" /> 20 Min Read</Link></li>
                                    </ul>
                                    <div className="ta-blog-box__share-info share-info d-flex justify-content-center align-items-center">
                                        <ul className="d-flex justify-content-center align-items-center list-unstyled">
                                            <li><i className="fa fa-comment" /> 82</li>
                                            <li><i className="fa fa-heart" /> 258</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>



        </>
    )
}
