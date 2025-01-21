import Link from "next/link"

export default function BlogCard11() {
    return (
        <>

            <article className="ta-blog-box ta-thumb-zoom ta-blog-box__style-2 ta-blog-box__style-6 mb-30">
                <div className="content ta-stroke ">
                    <ul className="ta-blog-box__meta-info meta-infos d-flex align-items-center list-unstyled p-0 ta-bg-none">
                        <li>
                            <Link href="#0" className="author-wrapper d-flex justify-content-center align-items-center">
                                <span className="by">By</span>
                                <span className="author-name">Alexis D.</span>
                            </Link>
                        </li>
                        <li><Link href="#0">March 21, {new Date().getFullYear()}</Link></li>
                    </ul>
                    <h3 className="ta-blog-box__title ta-blog-box__title--small ta-border-effect mt-10 ta-line-2"><Link href="/blog-details">The Anatomy Of Themed Design
                        System Components</Link></h3>
                </div>
            </article>


        </>
    )
}
