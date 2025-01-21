import Link from "next/link"

export default function BlogCard7() {
    return (
        <>

            <article className="ta-blog-box ta-blog-box__style-3">
                <div className="thumb ta-stroke">
                    <img src="/assets/img/blog/blog-3-3.webp" alt="blog" />
                    <div className="inner-content text-center pb-75 pl-60 pr-60">
                        <div className="ta-blog-box__cats position-static">
                            <Link href="#0">PHOTO</Link>
                        </div>
                        <h3 className="ta-blog-box__title ta-blog-box__title--small ta-border-effect mt-20 ta-line-2">
                            <Link href="/blog-details">Calendars For Web Designer
                                Developer ({new Date().getFullYear()} Edition)</Link></h3>
                    </div>
                </div>
                <div className="content mt-none-40 d-flex justify-content-center align-items-center flex-column">
                    <div className="author-thumb">
                        <img src="/assets/img/author/author-5.webp" alt="" />
                    </div>
                    <ul className="ta-blog-box__meta-info meta-infos pt-30 d-flex justify-content-center align-items-center list-unstyled">
                        <li>
                            <Link href="#0" className="author-wrapper d-flex justify-content-center align-items-center">
                                <span className="by">By</span>
                                <span className="author-name">Alexis D.</span>
                            </Link>
                        </li>
                        <li><Link href="#0">March 21, {new Date().getFullYear()}</Link></li>
                    </ul>
                </div>
            </article>




        </>
    )
}
