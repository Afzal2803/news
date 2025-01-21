import Layout from "@/components/layout/Layout"
import Newsletter2 from "@/components/sections/Newsletter2"
export default function Author() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Me">
                <div>
                    {/* about area start */}
                    <div className="ta-about-section ta-about-me-section pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="thumb position-relative ta-stroke">
                                        <img src="/assets/img/team/team-big-1.webp" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7 align-self-center">
                                    <div className="info-wrapper pl-80">
                                        <h1 className="ta-name mb-15">I’m <span>Alexis D. Dowson</span></h1>
                                        <p className="ta-headline">Headline-making Entrepreneur, Author, Podcaster,
                                            Speaker, Determinista  the Sidekick who always
                                            brings a sizzling slice of pizza.</p>
                                        <p>Headline-making Entrepreneur, Author, Podcaster, Speaker, Determinista
                                            the sidekick who always brings a sizzling slice of pizza. Get interesting weekly
                                            ocean news, animal facts, sustainability tips and more. Read Sea Smarts blog
                                            for updates on the environment.</p>
                                        <div className="ta-social-links ta-social-links__big d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-behance" /></a>
                                            <a href="#"><i className="fab fa-linkedin" /></a>
                                            <a href="#"><i className="fab fa-youtube" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* about area end */}
                    {/* newsletter start */}
                    <Newsletter2 />
                </div>

            </Layout>
        </>
    )
}