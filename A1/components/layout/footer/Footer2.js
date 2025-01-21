import MargueePost from "@/components/sections/MargueePost"
import Newsletter1 from "@/components/sections/Newsletter1"
import RecendlyAddedSlider1 from "@/components/slider/RecendlyAddedSlider1"
import Link from "next/link"

export default function Footer2() {
    return (
        <>
            <footer className="ta-footer fix">
                {/* recnt post slider start */}
                <div className="rcp-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="ta-section-heading mb-60">
                                    <h2 className="ta-title ta-title--mid">Recently Added</h2>
                                    <p>The opportunity to work abroad is a popular prospect, one </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <RecendlyAddedSlider1 />
                            </div>
                        </div>
                    </div>
                </div>
                {/* recnt post slider end */}
                {/* moving cats start */}
                <MargueePost cls="pt-115 pb-90" />
                {/* moving cats end */}
                {/* newsletter start */}
                <Newsletter1 />
                {/* newsletter end */}
                <div className="container pt-100">
                    <div className="row mt-none-30">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-30">
                            <div className="ta-footer-widget widget">
                                <div className="ta-about-info-widget pr-50">
                                    <Link href="/" className="footer-logo mb-45">
                                        <img className="hide-on-dark" src="/assets/img/logo/logo.webp" alt="logo" />
                                        <img className="show-on-dark" src="/assets/img/logo/logo-white.webp" alt="logo" />
                                    </Link>
                                    <p>Get 24x7 latest English news updates from
                                        most popular online trendy newspaper. Most
                                        of them is from the capital of England.</p>
                                    <div className="ta-social-links pt-40 d-flex align-items-center">
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                        <Link href="/#"><i className="fab fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-4 col-md-3 col-sm-6 mt-30">
                            <div className="ta-footer-widget widget">
                                <h4 className="widget-title">Company</h4>
                                <ul>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/contact">Press</Link></li>
                                    <li><Link href="/contact">Support</Link></li>
                                    <li><Link href="/contact">Get In Touch</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3 col-sm-6 mt-30">
                            <div className="ta-footer-widget widget">
                                <h4 className="widget-title">Resources</h4>
                                <ul>
                                    <li><Link href="/contact">Promotions</Link></li>
                                    <li><Link href="/about-us">Terms  Conditions</Link></li>
                                    <li><Link href="/about-us">FAQ Page</Link></li>
                                    <li><Link href="/blog-details-video">Video</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt-30">
                            <div className="ta-footer-widget widget">
                                <h4 className="widget-title">Popular Tags</h4>
                                <div className="menu-list-wrapper">
                                    <ul>
                                        <li><Link href="/blog-filter-category">Business</Link></li>
                                        <li><Link href="/blog-filter-category">Technology</Link></li>
                                        <li><Link href="/blog-filter-category">AI Solution</Link></li>
                                        <li><Link href="/blog-filter-category">Sports</Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link href="/blog-filter-category">UI  UX</Link></li>
                                        <li><Link href="/blog-filter-category">Museum</Link></li>
                                        <li><Link href="/blog-filter-category">Movie</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ta-footer__bottom pt-100 pb-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="ta-bottom-wrapper ta-stroke">
                                    <div className="ta-bottom-left">
                                        <p>NextJS template by
                                            <Link href="https://themeforest.net/user/AliThemes.com"> AliThemes.com</Link>
                                        </p>
                                    </div>
                                    <div className="ta-bottom-right">
                                        <p>View more <Link href="https://themeforest.net/user/alithemes/portfolio">Projects</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}
