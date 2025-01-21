import BlogPost from "@/components/blog/BlogPost"

export default function BlogSidebar() {
    return (
        <>
            <div className="ta-sidebar-wrapper mt-none-60 pl-20">
                <div className="ta-blog-widget widget mt-60">
                    <div className="ta-author-wrapper">
                        <div className="top text-center bg_img" data-background="assets/img/bg/author-bg.webp">
                            <span className="designation">head of idea</span>
                            <h4 className="name">Josephina Robinson</h4>
                        </div>
                        <div className="thumb">
                            <img src="/assets/img/author/author-2.webp" alt="" />
                        </div>
                        <div className="content mb-30">
                            <p>Its sometimes her behaviour are
                                contented. Do listening am eagerness oh
                                objection collected.</p>
                        </div>
                        <div className="ta-social-links d-flex justify-content-center align-items-center">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-youtube" /></a>
                        </div>
                    </div>
                </div>
                <div className="ta-blog-widget widget mt-60">
                    <div className="ta-widget-title-wrapper text-center">
                        <h4 className="ta-widget-title">
                            Popular Post
                            <span className="border-shape" />
                            <span className="border-shape" />
                        </h4>
                    </div>
                    <div className="ta-latest-posts mt-none-30">
                        <BlogPost showItem={5} showStart={0} showEnd={6} style={12} />
                    </div>
                </div>
                <div className="ta-blog-widget widget mt-60">
                    <div className="ta-widget-title-wrapper text-center">
                        <h4 className="ta-widget-title">
                            Trending Tags
                            <span className="border-shape" />
                            <span className="border-shape" />
                        </h4>
                    </div>
                    <div className="tagcloud">
                        <a href="#0"><span>#</span> Design</a>
                        <a href="#0"><span>#</span> Development</a>
                        <a href="#0"><span>#</span> User</a>
                        <a href="#0"><span>#</span> UX</a>
                        <a href="#0"><span>#</span> Interface</a>
                        <a href="#0"><span>#</span> UI Design</a>
                        <a href="#0"><span>#</span> Website</a>
                        <a href="#0"><span>#</span> Fashion</a>
                        <a href="#0"><span>#</span> Lifestyle</a>
                    </div>
                </div>
                <div className="ta-blog-widget widget mt-60">
                    <div className="ta-widget-title-wrapper text-center">
                        <h4 className="ta-widget-title">
                            Newsletter
                            <span className="border-shape" />
                            <span className="border-shape" />
                        </h4>
                    </div>
                    <div className="ta-newsletter-form ta-input-field">
                        <form>
                            <div>
                                <input type="email" placeholder="Business email" />
                                <i className="fa fa-envelope-open" />
                                <button className="ta-button" type="submit">Subscribe <i className="fa fa-paper-plane" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="ta-blog-widget widget mt-60">
                    <div className="ta-sidebar-ad ta-stroke">
                        <div className="thumb">
                            <img src="/assets/img/bg/sidebar-ad.webp" alt="" />
                        </div>
                        <div className="content ta-stroke">
                            <h6 className="title">Ads Banner</h6>
                            <p>Character design for a big project</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
