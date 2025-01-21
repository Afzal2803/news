
export default function BlogCard3({ col, desc, item }) {
    return (
        <>
            <div className={`${col ? col : ""}`}>
                <article className="ta-blog-box ta-thumb-zoom ta-blog-box__featured p-0 ta-stroke ">
                    <div className="thumb ta-brd-b-none ">
                        <div className="ta-post-gallery ">
                            <img src={`/assets/img/blog/${item.img}`} alt="blog" />
                        </div>
                        <div className="ta-blog-box__cats ta-blog-box__cats--right">
                            <a href="#0">music</a>
                        </div>
                        <span className="post-format-icon"><i className="fal fa-music" /></span>
                    </div>
                    <div className="content position-relative ">
                        <h2 className="ta-blog-box__title ta-blog-box__title--big ta-border-effect mt-25 ta-lh-125"><a href={`/blog/${item.id}`}>Own handsome delicate its property mistress...</a></h2>
                        {desc &&
                            <div className="excerpt mt-20">
                                <p>The opportunity to work abroad is a popular prospect, one undimmed by the years
                                    of restriction due to the pandemic and made only more accessible thanks to hybrid
                                    working.</p>
                            </div>
                        }
                        <div className="bottom-wrapper mt-35 pt-25 pb-25 d-flex justify-content-between align-items-center">
                            <ul className="ta-blog-box__meta-info d-flex justify-content-center align-items-center list-unstyled">
                                <li>
                                    <a href="#0" className="author-wrapper d-flex justify-content-center align-items-center">
                                        <span className="by">By</span>
                                        <span className="author-name"> Alexis D.</span>
                                    </a>
                                </li>
                                <li><a href="#0">March 21, {new Date().getFullYear()}</a></li>
                                <li><a href="#0"><i className="fa fa-clock" /> 20 Min Read</a></li>
                            </ul>
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
