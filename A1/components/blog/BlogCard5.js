import Link from "next/link"

export default function BlogCard5({ item }) {
    return (
        <>
            <article className="ta-blog-box mt-60">
                <div className="thumb ta-stroke ">
                    <img src={`/assets/img/blog/${item.img}`} alt="blog" />
                    <div className="ta-blog-box__cats">
                        <Link href="#0">Technology</Link>
                    </div>
                </div>
                <div className="content mt-35 text-center pl-50 pr-50">
                    <ul className="ta-blog-box__meta-info d-flex justify-content-center align-items-center list-unstyled">
                        <li>
                            <Link href="#0" className="author-wrapper d-flex justify-content-center align-items-center">
                                <span className="author-thumb">
                                    <img src="/assets/img/author/author-1.webp" alt="author" />
                                </span>
                                <span className="author-name">{item.author}</span>
                            </Link>
                        </li>
                        <li><Link href="#0">March 21, {new Date().getFullYear()}</Link></li>
                        <li><Link href="#0"><i className="fa fa-clock" /> 20 Min Read</Link></li>
                    </ul>
                    <h2 className="ta-blog-box__title ta-border-effect mt-10"><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                    <div className="excerpt mt-15">
                        <p>Let’s talk about Next.js, one of the most well-known React frameworks used for production.
                            From new components to font optimization</p>
                    </div>
                    <div className="ta-blog-box__share-info d-flex justify-content-center align-items-center mt-35">
                        <ul className="d-flex justify-content-center align-items-center list-unstyled ta-stroke">
                            <li><i className="fa fa-comment" /> 82</li>
                            <li><i className="fa fa-eye" /> 12000</li>
                            <li><i className="fa fa-heart" /> 258</li>
                            <li className="like-btn"><Link href="#0"><i className="fa fa-heart" /></Link></li>
                        </ul>
                        <Link href="#0" className="ta-share-btn ta-stroke"><i className="fa fa-share" /> Share</Link>
                    </div>
                </div>
            </article>




        </>
    )
}
