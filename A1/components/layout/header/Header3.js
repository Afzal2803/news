import Link from "next/link";
import Menu from "../Menu";

export default function Header3({ scroll, handleMobileMenu }) {
  return (
    <>
      <header className="ta-header ta-header__style-5 ta-header__style-10">
        <div
          className={`ta-header__menuarea dark-bg ${
            scroll ? "ta-sticky-header" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="menu-area-wrapper menu-area-wrapper__nobg">
                  <div className="row">
                    <div className="col-xl-3 col-lg-2 col-md-6 col-8 align-self-center">
                      <Link href="/">
                        <img
                          className="a1logo"
                          src="/images/A1bright.png"
                          alt="logo"
                        />
                        {/* <img className="show-on-dark" src="/images/A1bright.png" alt="logo" /> */}
                      </Link>
                    </div>
                    <div className="col-xl-6 col-lg-9 d-none d-lg-block align-self-center">
                      <div className="ta-main-menu ta-main-menu__style-2 text-center">
                        <Menu />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-1 col-md-6 col-4 d-flex align-self-center justify-content-end d-lg-none d-sm-block text-end">
                      <button
                        className="side-info-trigger side-info-trigger__light "
                        onClick={handleMobileMenu}
                      >
                        <img
                          src="/assets/img/icons/side-info-icon.webp"
                          alt=""
                        />
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
  );
}
