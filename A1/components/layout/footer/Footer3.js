import Link from "next/link";

export default function Footer3() {
  return (
    <>
      <footer className="ta-footer">
        <div className="container pt-36 mt-30">
          <div className="row mt-none">
            {/* About Section */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-30">
              <div className="ta-footer-widget widget">
                <div className="ta-about-info-widget pr-50">
                  <Link href="/" className="footer-logo mb-45">
                    <img
                      className="hide-on-dark"
                      src="/images/A1-Logo.svg"
                      alt="logo"
                    />
                    <img
                      className="show-on-dark"
                      src="/images/A1bright.png"
                      alt="logo"
                    />
                  </Link>
                  <p>
                    A1 Flash News is a fast, reliable app delivering short,
                    real-time updates from around the world. Stay informed on
                    the go with concise news summaries across politics,
                    business, sports, and entertainment.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Section with Address Beside */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-30">
              <div className="ta-footer-widget widget d-flex justify-content-between align-items-start">
                <div className="company-links">
                  <h4 className="widget-title">Company</h4>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/termsandconditions">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacypolicy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-30">
              <div className="ta-footer-widget widget">
                <div className="ta-about-info-widget pr-50">
                  <div className="company-address">
                    <h4 className="widget-title">Locate US</h4>
                    <p>
                      <span className="fw-semibold">Address : </span> Plot No.
                      1-88/2, 5th Floor, Gem Square Building, Pillar No. 1743,
                      Above HDFC Bank, Madhapur, Telangana-500081
                    </p>
                  </div>
                  <div className="ta-social-links pt-20 d-flex align-items-center">
                    <Link href="/#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/#">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/#">
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ta-footer__bottom pt-15 pb-6">
          <div className="container">
            <p className="text-center">
              &copy; {new Date().getFullYear()} A1 Flash News. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
