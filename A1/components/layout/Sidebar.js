import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Sidebar({isMobileMenu,handleMobileMenu}) {
    return (
        <>
            <div className={`ta-side-info-wrapper ${isMobileMenu? "is-open":""}`}>
                <button className="ta-info-close"  onClick={handleMobileMenu}>Close</button>
                <div className="top pb-60">
                    <div className="ta-logo">
                        <Link href="/">
                            <img className="hide-on-dark" src="/images/A1-Logo.svg" alt="logo" />
                            <img className="show-on-dark" src="/images/A1bright.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                {/* <div className="middle mt-50">
                    <h2 className="ta-title">Suitable for your next-gen light-weight
                        Bootstrap news  magazine.</h2>
                </div> */}
                <div className="bottom-wrapper mt-75">
                    <MobileMenu />
                    <div className="infos">
                        <span className="sub-heading mb-35">Get In Touch</span>
                        <p>Address: Plot No. 1-88/2, 5th Floor,
                  Gem Square Building, Pillar No. 1743,
                 Above HDFC Bank, Madhapur,
                  Telangana-500081</p>
                        <p>
                            <p>+91 90140 87362</p>
                                                    </p>
                        {/* <div className="ta-social-links d-flex align-items-center pt-55">
                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                            <Link href="#"><i className="fab fa-twitter" /></Link>
                            <Link href="#"><i className="fab fa-instagram" /></Link>
                            <Link href="#"><i className="fab fa-youtube" /></Link>
                        </div> */}
                          <div className=" pt-20 d-flex align-items-center gap-1">
                    <Link
                      href="https://www.facebook.com/a1tvtelugu"
                      target="_blank"
                    >
                      <img
                        src="/images/facebook.png"
                        alt="Facebook"
                        className="social-icon"
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/a1tv_telugu_news_official/"
                      target="_blank"
                    >
                      <img
                        src="/images/instagram.png"
                        alt="Instagram"
                        className="social-icon"
                      />
                    </Link>
                    <Link href="https://x.com/A1tvTelugu" target="_blank">
                      <img
                        src="/images/twitter.png"
                        alt="Twitter"
                        className="social-icon"
                      />
                    </Link>

                    <Link
                      href="https://m.youtube.com/channel/UCaU9uyxOfbui4-KF_iMwlpQ"
                      target="_blank"
                    >
                      <img
                        src="/images/youtube.png"
                        alt="YouTube"
                        className="social-icon"
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/a1tv-telugu-news/"
                      target="_blank"
                    >
                      <img
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        className="social-icon"
                      />
                    </Link>
                    <Link href="https://t.me/a1tvtelugu" target="_blank">
                      <img
                        src="/images/telegram.png"
                        alt="LinkedIn"
                        className="social-icon"
                      />
                    </Link>
                  </div>
                    </div>
                    {/* <div className="ta-big-menu d-none d-lg-block d-lg-block">
                        <nav>
                            <ul className="list-unstyled">
                                <li><Link href="/blog-filter-tag">Technology</Link></li>
                                <li><Link href="/blog-filter-tag">Music</Link></li>
                                <li><Link href="/blog-filter-tag">Sports</Link></li>
                                <li><Link href="/blog-filter-tag">Development</Link></li>
                                <li><Link href="/blog-filter-tag">UI  UX</Link></li>
                            </ul>
                        </nav>
                    </div> */}
                </div>
            </div>

        </>
    )
}
