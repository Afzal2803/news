import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Newsletter2 from "@/components/sections/Newsletter2";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import styles from "../pages/news/page.module.css"; // Import the CSS module
import Link from "next/link";
import { useState } from "react";
export default function AboutUS() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="About Us">
        <div className={styles.containeraboutus}>
          <div className={styles.content}>
            <h2 className={styles.heasdings}>
              About Us – BLM Tech Private Limited
            </h2>
            <p>
              At <b>BLM Tech Private Limited</b>, we are driven by a passion for
              ethical journalism. Since our inception in <b>2017</b>, we have
              remained steadfast in delivering unbiased and fact-based news,
              ensuring that every story we report serves the public good.
            </p>
            <p>
              With a network of <b>400+ dedicated reporters</b> across Andhra
              Pradesh and Telangana, our commitment extends to covering
              hyperlocal, regional and national news with accuracy and
              integrity. Our team upholds the highest standards of professional
              ethics, ensuring that every report is free from bias and political
              influence.
            </p>

            <p>
              Through <b>A1 TV</b>, we have built a strong presence in multiple
              languages, offering diverse content across:
            </p>

            <ul>
              <li>
                <b>A1 TV Telugu News</b> – Comprehensive coverage of current
                affairs in Telugu
              </li>
              <li>
                <b>A1 TV Bhakti</b> – Spiritual and devotional programs
              </li>
              <li>
                <b>A1 TV Kannada</b> – News and updates in Kannada
              </li>
              <li>
                <b>A1 TV Tamil</b> – Reliable news for Tamil-speaking audiences
              </li>
              <li>
                <b>A1 Flash News </b>– The Fastest Telugu Short News App!
              </li>
            </ul>

            <p>
              Expanding our digital footprint, <b>A1 FLASH NEWS</b> is our
              latest venture bringing real-time, credible news to mobile users,
              ensuring that breaking news reaches audiences first.
            </p>
            <p>
              With <b>24/7 broadcasts in stunning 4K resolution</b>, available
              via cable and YouTube, we are also active across social media
              platforms like{" "}
              <b>
                Facebook, Instagram, Twitter, Telegram, LinkedIn, ShareChat and
                WhatsApp{" "}
              </b>
              for instant updates.
            </p>
            <p>
              At <b>BLM Tech</b>, we remain committed to journalistic
              excellence, innovation and transparency bringing you the news that
              matters, when it matters.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
