import React from 'react';
import Header3 from '@/components/layout/header/Header3';
import Footer3 from '@/components/layout/footer/Footer3';
import styles from '../pages/news/page.module.css';  // Import the CSS module
import Layout from '@/components/layout/Layout';

export default function PrivacyPolicy() {
  return (
    <>
      {/* <div className={styles.headerWrapper}>
        <Header3 />
      </div> */}
      <Layout headerStyle={3}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.content}>
          <h2 className={styles.heasdings}>1. Introduction</h2>
          <p>
            At A1 Flash News App (“we”, “our”, “us”), we are dedicated to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our app. Please read this policy carefully to understand how we handle your personal data.
          </p>
          <p>
            By using the A1 Flash News App, you agree to the collection and use of your information as outlined in this policy. If you do not agree, please refrain from using the app.
          </p>
          <h2 className={styles.heasdings}>2. Information We Collect</h2>
          <p>Personal Data: During registration, we collect your full name, contact number, email address, location (state, district, constituency), and information like Aadhaar ID and PAN ID.</p>
          <p>Account Sign-In: Users sign in using their registered email to access certain features.</p>
          <p>Usage Data: We track interactions with the app, such as the number of news articles posted and engagement with content (likes, dislikes).</p>
          <p>Location Data: We collect your location to provide relevant, localized news.</p>
          <p>Media Data: Reporters can upload images or videos when posting news, which are stored for moderation and publication purposes.</p>

          <h2 className={styles.heasdings}>3. Device Information</h2>
          <p>We may gather device-related information, including:</p>
          <ul>
            <li>Device model and manufacturer</li>
            <li>Operating system and version</li>
            <li>Mobile network details</li>
          </ul>

          <h2 className={styles.heasdings}>4. How We Use Your Information</h2>
          <p>We use your data for the following purposes:</p>
          <ul>
            <li>Managing and authenticating user accounts</li>
            <li>Enabling reporters to submit news and track approval and non-approval status</li>
            <li>Facilitating user interactions like likes and shares</li>
            <li>Providing personalized news based on preferences</li>
            <li>Offering customer support and responding to inquiries</li>
            <li>Improving app functionality and user experience based on usage patterns</li>
            <li>Detecting and preventing technical issues or fraudulent activity</li>
            <li>Meeting legal requirements for the app and protecting your rights</li>
          </ul>

          <h2 className={styles.heasdings}>5. Data Sharing</h2>
          <p>Internal Use: Data is primarily used by our in-house journalists for moderation purposes.</p>
          <p>
            Third-Party Services: We use Google Analytics for usage statistics. Personal data like Aadhaar and PAN IDs will be securely stored and not shared externally without consent.
          </p>
          <p>
            Legal Requirements: We may disclose personal data if required by law or to comply with legal and statutory obligations.
          </p>

          <h2 className={styles.heasdings}>6. Third-Party Services</h2>
          <p>
            Our app may include links to third-party websites or services not operated by us. We encourage you to review their privacy policies as we are not responsible for their content or practices.
          </p>

          <h2 className={styles.heasdings}>7. Data Retention</h2>
          <p>
            We retain your data as long as your account is active or necessary for the purposes described. You can request the deletion of your data by contacting us.
          </p>

          <h2 className={styles.heasdings}>8. Security</h2>
          <p>
            We take appropriate security measures, such as encryption and access control, to protect your data. However, no method of data transmission over the internet is completely secure, so we cannot guarantee absolute security.
          </p>

          <h2 className={styles.heasdings}>9. Children’s Privacy</h2>
          <p>
            Our app is not intended for children under 13. We do not knowingly collect information from children under 13. If you believe we have done so, please contact us, and we will promptly delete the information.
          </p>

          <h2 className={styles.heasdings}>10. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul>
            <li>Right to access your data</li>
            <li>Right to correct inaccurate or incomplete information</li>
            <li>Right to request deletion of your data under certain conditions</li>
            <li>Right to restrict processing of your data</li>
            <li>Right to withdraw consent at any time, where applicable</li>
          </ul>
          <p>
            To exercise these rights, contact us at “blmtech2024@gmail.com“. We will respond promptly, in accordance with applicable laws.
          </p>

          <h2 className={styles.heasdings}>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Significant changes will be posted on this page, along with the “Effective Date”. We encourage you to review the policy regularly to stay informed.
          </p>

          <h2 className={styles.heasdings}>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how your personal data is handled, please contact us at:
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
