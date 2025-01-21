import Link from "next/link"

export default function BlogCard2({ col, item }) {
    return (
        <>
            <div className={`${col ? col : ""}`}>
                <article className="ta-blog-box ta-thumb-zoom ta-blog-box__style-2 ta-blog-box__style-5 ta-stroke ">
                    <div className="thumb ">
                        <img src={`/assets/img/blog/${item.img}`} alt="blog" />
                        <div className="ta-blog-box__cats ta-blog-box__cats--right">
                            <Link href="#0">video</Link>
                        </div>
                    </div>
                    <div className="content ">
                        <ul className="ta-blog-box__meta-info meta-infos d-flex align-items-center list-unstyled p-0 ta-bg-none">
                            <li>
                                <Link href="#0" className="author-wrapper d-flex justify-content-center align-items-center">
                                    <span className="by">By</span>
                                    <span className="author-name">{item.author}</span>
                                </Link>
                            </li>
                            <li><Link href="#0">March 21, {new Date().getFullYear()}</Link></li>
                        </ul>
                        <h3 className="ta-blog-box__title ta-blog-box__title--small ta-border-effect mt-10 ta-line-2 ta-line-2 ta-line-2 ta-line-2"><Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                    </div>
                </article>
            </div>






        </>
    )
}
