import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function BlogCard4({ formatIcon, video, item }) {
    return (
        <>
            <div className="col-xl-12 mt-30">
                <article className="ta-blog-box ta-blog-box__featured ta-blog-box__style-4 ta-stroke ">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="thumb ta-stroke">
                                <div className="ta-post-gallery ta-radious-40 ta-stroke">
                                    <img src={`/assets/img/blog/${item.img}`} alt="blog" />
                                </div>
                                <div className="ta-blog-box__cats ta-blog-box__cats--right">
                                    <Link href="#0">PHOTO</Link>
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
                        </div>
                        <div className="col-xl-7">
                            <div className="content position-relative">
                                <ul className="ta-blog-box__meta-info meta-infos d-flex align-items-center list-unstyled">
                                    <li>
                                        <Link href="#0" className="author-wrapper d-flex justify-content-center align-items-center">
                                            <span className="by">By</span>
                                            <span className="author-name">{item.author}</span>
                                        </Link>
                                    </li>
                                    <li><Link href="#0">March 21, {new Date().getFullYear()}</Link></li>
                                    <li><Link href="#0"><i className="fa fa-clock" /> 20 Min</Link></li>
                                </ul>
                                <h2 className="ta-blog-box__title ta-blog-box__title--mid-24 ta-border-effect mt-10"><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                                <div className="excerpt excerpt__small mt-15">
                                    <p>Let’s talk about Next.js, one of the most well
                                        known React frameworks.</p>
                                </div>
                                <div className="bottom-wrapper pt-20 d-flex justify-content-between align-items-center mt-80">
                                    <Link href={`/blog/${item.id}`} className="ta-inline-btn">Read More <i className="fa fa-long-arrow-right" /></Link>
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
