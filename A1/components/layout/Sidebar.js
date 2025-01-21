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
                            <img className="hide-on-dark" src="/assets/img/logo/logo.webp" alt="logo" />
                            <img className="show-on-dark" src="/assets/img/logo/logo-white.webp" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="middle mt-50">
                    <h2 className="ta-title">Suitable for your next-gen light-weight
                        Bootstrap news  magazine.</h2>
                </div>
                <div className="bottom-wrapper mt-75">
                    <MobileMenu />
                    <div className="infos">
                        <span className="sub-heading mb-35">Get In Touch</span>
                        <p>Theodore Lowe, Ap #867-859 <br />
                            Sit Rd, Azusa New York</p>
                        <p>
                            <Link href="tel:+888-999-777-00">+888 999 777 00</Link>
                            <Link href="tel:+77-888-444-222">+77 (888) 444 222</Link>
                        </p>
                        <div className="ta-social-links d-flex align-items-center pt-55">
                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                            <Link href="#"><i className="fab fa-twitter" /></Link>
                            <Link href="#"><i className="fab fa-instagram" /></Link>
                            <Link href="#"><i className="fab fa-youtube" /></Link>
                        </div>
                    </div>
                    <div className="ta-big-menu d-none d-lg-block d-lg-block">
                        <nav>
                            <ul className="list-unstyled">
                                <li><Link href="/blog-filter-tag">Technology</Link></li>
                                <li><Link href="/blog-filter-tag">Music</Link></li>
                                <li><Link href="/blog-filter-tag">Sports</Link></li>
                                <li><Link href="/blog-filter-tag">Development</Link></li>
                                <li><Link href="/blog-filter-tag">UI  UX</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
