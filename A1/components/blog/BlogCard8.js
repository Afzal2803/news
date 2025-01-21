import Link from "next/link"

export default function BlogCard8({ col, item }) {
    return (
        <>

            <div className={`${col ? col : ""}`}>
                <article className="ta-blog-box ta-blog-box__style-3 ta-stroke">
                    <div className="thumb">
                        <img src={`/assets/img/blog/${item.img}`} alt="blog" />
                        <div className="ta-blog-box__cats ta-blog-box__cats--right">
                            <Link href="#0">music</Link>
                        </div>
                    </div>
                    <div className="inner-content text-center pb-55 pl-60 pr-60">
                        <div className="content">
                            <ul className="ta-blog-box__meta-info ta-blog-box__meta-info--white meta-infos d-flex justify-content-center align-items-center list-unstyled">
                                <li>
                                    <Link href="#0" className="author-wrapper d-flex justify-content-center align-items-center">
                                        <span className="author-thumb">
                                            <img src="/assets/img/author/author-1.webp" alt="" />
                                        </span>
                                        <span className="author-name">Alexis Dowson</span>
                                    </Link>
                                </li>
                                <li><Link href="#0">March 21, {new Date().getFullYear()}</Link></li>
                                <li><Link href="#0"><i className="fa fa-clock" /> 20 Min Read</Link></li>
                            </ul>
                            <h3 className="ta-blog-box__title ta-blog-box__title--white ta-border-effect mt-10">
                                <Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                        </div>
                    </div>
                </article>
            </div>



        </>
    )
}
