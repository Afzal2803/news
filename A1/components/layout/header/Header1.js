import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll ,handleMobileMenu}) {
    return (
        <>
            <header className="ta-header">
                <div className="ta-header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 align-self-center d-none d-md-block">
                                <div className="ta-social-links d-flex align-items-center">
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fab fa-youtube" /></Link>
                                </div>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <div className="ta-header__top__center">
                                    <div className="ta-logo">
                                        <Link href="/">
                                            <img className="hide-on-dark" src="/assets/img/logo/logo.webp" alt="logo" />
                                            <img className="show-on-dark" src="/assets/img/logo/logo-white.webp" alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 align-self-center d-none d-md-block">
                                <div className="ta-header__top__right">
                                    <Link href="/contact" className="ta-button">Subscribe <i className="fa fa-paper-plane" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`ta-header__menuarea bg-white-on-sticky ${scroll ? "ta-sticky-header" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="menu-area-wrapper menu-area-wrapper__nobg bg-white-on-sticky ta-border-bottom ta-border-top ta-border-top__bg">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-2 col-md-6 col-8 align-self-center">
                                            <div className="ta-header__menuarea__right justify-content-start">
                                                <div className="ta-search">
                                                    <form action="#">
                                                        <div>
                                                            <button type="submit"><i className="fa fa-search" /></button>
                                                            <input type="text" placeholder="Search" />
                                                            <span className="ta-underline" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-9 d-none d-lg-block align-self-center">
                                            <div className="ta-main-menu text-center">
                                                <Menu />
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-1 col-md-6 col-4 d-flex align-self-center justify-content-end">
                                            <button className="side-info-trigger side-info-trigger__dark" onClick={handleMobileMenu}>
                                                <img src="/assets/img/icons/side-info-icon.webp" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
