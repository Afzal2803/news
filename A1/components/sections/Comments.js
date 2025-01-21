import Link from "next/link"

export default function Comments() {
    return (
        <>
            <div className="ta-comment-area-wrapper ta-stroke">
                <div className="ta-post-comments-wrapper">
                    <div className="comment-title-wrapper">
                        <h4 className="ta-title ta-border-bottom mb-40 pb-15">User Comments <span className="comment-count">06</span></h4>
                    </div>
                    <div className="ta-comment-lists">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <div className="ta-comment-box">
                                    <div className="comment-avatar ta-stroke">
                                        <img src="/assets/img/author/comment-author-1.webp" alt="" />
                                    </div>
                                    <div className="comment-text">
                                        <div className="mb-15 position-relative">
                                            <h5 className="avatar-name"><Link href="#0" className="url">Alonso D. Humble</Link></h5>
                                            <span className="date"> September 13, {new Date().getFullYear()}</span>
                                        </div>
                                        <div className="comment-like-disslike">
                                            <Link href="#0" className="comment-like"><i className="fal fa-thumbs-up" /></Link>
                                            <Link href="#0" className="comment-disslike"><i className="fal fa-thumbs-down" /></Link>
                                            <Link href="#0" className="comment-close"><i className="fal fa-times-circle" /></Link>
                                        </div>
                                        <div className="comment-desc">
                                            <p>User comments can add SEO value to webpages in the form of additional context. If
                                                users stay on topic, and leave comments related to what the page is about, then that
                                                information can assist with search rankings.</p>
                                            <Link href="#0" className="comment-reply-link"><i className="fas fa-reply" /> Reply</Link>
                                        </div>
                                    </div>
                                </div>
                                <ul className="children">
                                    <li>
                                        <div className="ta-comment-box">
                                            <div className="comment-avatar ta-stroke">
                                                <img src="/assets/img/author/comment-author-1.webp" alt="" />
                                            </div>
                                            <div className="comment-text">
                                                <div className="mb-15 position-relative">
                                                    <h5 className="avatar-name"><Link href="#0" className="url">Theme Alpha</Link></h5>
                                                    <span className="date"> Admin</span>
                                                </div>
                                                <div className="comment-like-disslike">
                                                    <Link href="#0" className="comment-like"><i className="fal fa-thumbs-up" /></Link>
                                                    <Link href="#0" className="comment-disslike"><i className="fal fa-thumbs-down" /></Link>
                                                    <Link href="#0" className="comment-close"><i className="fal fa-times-circle" /></Link>
                                                </div>
                                                <div className="comment-desc">
                                                    <p>Already we solved your issues. Thanks for your comments <i className="fa fa-smile" /></p>
                                                    <Link href="#0" className="comment-reply-link"><i className="fas fa-reply" /> Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="ta-comment-box">
                                    <div className="comment-avatar ta-stroke">
                                        <img src="/assets/img/author/comment-author-2.webp" alt="" />
                                    </div>
                                    <div className="comment-text">
                                        <div className="mb-15 position-relative">
                                            <h5 className="avatar-name"><Link href="#0" className="url">Marlie H. Evens</Link></h5>
                                            <span className="date"> September 13, {new Date().getFullYear()}</span>
                                        </div>
                                        <div className="comment-like-disslike">
                                            <Link href="#0" className="comment-like"><i className="fal fa-thumbs-up" /></Link>
                                            <Link href="#0" className="comment-disslike"><i className="fal fa-thumbs-down" /></Link>
                                            <Link href="#0" className="comment-close"><i className="fal fa-times-circle" /></Link>
                                        </div>
                                        <div className="comment-desc">
                                            <p>User comments can add SEO value to webpages in the form of additional context. If
                                                users stay on topic, and leave comments related to what the page is about, then that
                                                information can assist with search rankings.</p>
                                            <Link href="#0" className="comment-reply-link"><i className="fas fa-reply" /> Reply</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ta-contact-form-wrapper ta-post-comment-form logged-in">
                    <div className="comment-respond">
                        <h4 className="ta-title ta-border-bottom mb-35 pb-15 mt-45">Comment  Review</h4>
                        <form action="/" className="comment-form">
                            <div className="row mt-none-20 ta-input-field">
                                <div className="col-xl-12 mt-20">
                                    <div className="ta-form-group">
                                        <textarea name="message" placeholder="Comments" />
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-20">
                                    <div className="ta-form-group">
                                        <input type="text" name="author" placeholder="Full Name" />
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-20">
                                    <div className="ta-form-group">
                                        <input type="text" name="email" placeholder="Email address" />
                                    </div>
                                </div>
                                <div className="col-xl-12 submit-button mt-20">
                                    <button className="ta-button" type="submit">Submit Comment <i className="fal fa-long-arrow-right" /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
