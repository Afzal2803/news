export default function Preloader() {
    return (
        <>
            <div className="ta-page-animation-overlay">
                <div className="ta-logo">
                    <a href="/">
                    <img className="hide-on-dark" src="/images/A1-Logo.svg" alt="logo" />
                        <img className="show-on-dark" src="/images/A1-Logo.svg" alt="logo" />
                        {/* <img className="hide-on-dark" src="/assets/img/logo/logo.webp" alt="logo" />
                        <img className="show-on-dark" src="/assets/img/logo/logo-white.webp" alt="logo" /> */}
                    </a>
                </div>
            </div>

        </>
    )
}
