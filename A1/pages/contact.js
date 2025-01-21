import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Contact">
                <div>
                    <div className="ta-map-section pb-100 pt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56215.718841453985!2d-0.19959027821222705!3d51.48739183082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sen!2sbd!4v1656749326947!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* map area end */}
                    {/* contact info area start */}
                    <div className="ta-contactinfo-section pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="ta-section-heading mb-35">
                                        <h2 className="ta-title ta-title--mid">Catch Us Here</h2>
                                        <p>Data visualizations are everywhere; from the news to the <br />
                                            nutritional info on cereal boxes</p>
                                    </div>
                                    <div className="ta-info-lists-wrapper">
                                        <div className="ta-info-lists">
                                            <h4 className="ta-title">New York</h4>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-envelope-open" /> <Link href="mailto:info@webmail.com">info@webmail.com</Link></li>
                                                <li><i className="far fa-phone" /> <Link href="tel:+999-888-777-66">+999 888 777 66</Link></li>
                                                <li><i className="far fa-map-marker-alt" /> <p>12/A, Dumb Tower, NYC</p></li>
                                            </ul>
                                        </div>
                                        <div className="ta-info-lists">
                                            <h4 className="ta-title">London</h4>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-envelope-open" /> <Link href="mailto:info@support.com">support@webmail.com</Link></li>
                                                <li><i className="far fa-phone" /> <Link href="tel:+999-888-555-66">+999 888 555 66</Link></li>
                                                <li><i className="far fa-map-marker-alt" /> <p>12/A, Booston Studio, UK</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ta-social-links ta-social-links__big d-flex align-items-center">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-behance" /></Link>
                                        <Link href="#"><i className="fab fa-linkedin" /></Link>
                                        <Link href="#"><i className="fab fa-youtube" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="ta-contact-form-wrapper ta-input-field ta-stroke">
                                        <form action="assets/mail.php" method="POST" id="ta-contact-form" className="ta-contact-form">
                                            <div className="row row-gap-20 mt-none-20">
                                                <div className="col-md-6 mt-20">
                                                    <div className="ta-form-group">
                                                        <span className="icon"><i className="fa fa-user" /></span>
                                                        <input name="name" type="text" placeholder="Full name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-20">
                                                    <div className="ta-form-group">
                                                        <span className="icon"><i className="fa fa-envelope-open" /></span>
                                                        <input name="email" type="email" placeholder="Business email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-20">
                                                    <div className="ta-form-group">
                                                        <span className="icon"><i className="fa fa-phone" /></span>
                                                        <input name="tel" type="tel" placeholder="Phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-20">
                                                    <div className="ta-form-group">
                                                        <span className="icon"><i className="fa fa-angle-double-right" /></span>
                                                        <input name="tel" type="tel" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-20">
                                                    <div className="ta-form-group">
                                                        <span className="icon"><i className="fa fa-pen" /></span>
                                                        <textarea name="message" id="message" placeholder="Message" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-20">
                                                    <div className="ta-form-group">
                                                        <button type="submit" className="ta-button">Submit Request <i className="fal fa-long-arrow-right" /></button>
                                                    </div>
                                                    <p className="ajax-response" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}