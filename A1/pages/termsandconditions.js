import React from 'react';
import Header3 from '@/components/layout/header/Header3';
import Footer3 from '@/components/layout/footer/Footer3';
import styles from '../pages/news/page.module.css';  // Import the CSS module
import Layout from '@/components/layout/Layout';

export default function TermsAndConditions() {
  return (
    <>

      {/* <div className={styles.headerWrapper}>
        <Header3 />
      </div> */}
      <Layout headerStyle={3}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <div className={styles.content}>
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions govern the use of the A1 Flash News App. By accessing or using the app, you agree to comply with these terms. Please read them carefully.
          </p>

          <h2>2. Acceptance of Terms</h2>
          <p>
            By using the A1 Flash News App, you accept and agree to be bound by these Terms and Conditions. If you do not agree with these terms, please refrain from using the app.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
            <li>You agree not to use the app for any unlawful activities or to violate any applicable laws.</li>
            <li>You are responsible for all activities that occur under your account.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, trademarks, and logos on the app are the property of A1 Flash News App. Unauthorized use of these materials is prohibited.
          </p>

          <h2>5. Prohibited Activities</h2>
          <ul>
            <li>Using the app for any illegal or fraudulent activities.</li>
            <li>Attempting to disrupt the functionality of the app.</li>
            <li>Uploading malicious software or content.</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            A1 Flash News App is not responsible for any damages, losses, or liabilities resulting from your use or inability to use the app.
          </p>

          <h2>7. Modifications to Terms</h2>
          <p>
            We may update or modify these Terms and Conditions from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms and Conditions will be governed by and construed in accordance with the laws of [Your Country].
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
          </p>
          <p>Email: blmtech2024@gmail.com</p>
          <p>Address: Plot No. 1-88/2, 5th Floor, Gem Square Building, Pillar No. 1743, Above HDFC Bank, Madhapur, Telangana-500081</p>
          <p>Contact Number: +91 90140 87362</p>
        </div>
      </div>
      {/* <Footer3 /> */}
      </Layout>
    </>
  );
}
