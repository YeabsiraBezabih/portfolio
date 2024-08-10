import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
    <Navbar/>
    <div className="p-10 bg-black min-h-screen flex flex-col items-center">
    
      <div className="container max-w-4xl p-6 rounded-lg shadow-lg  bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300"
      
      >
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last updated: [08/02/2024]</p>
        <p className="mb-4">
          Welcome to my Portfolio. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website  
          <a href="https://YeabsiraBezabih.github.io/" target='_blank'></a> https://YeabsiraBezabih.github.io/. Please read this privacy policy carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect information about you in a variety of ways. The information we may collect includes:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
          <li><strong>Derivatives Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have previously viewed on the Site.</li>
          <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Your Information</h2>
        <p className="mb-4">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Assist law enforcement and respond to subpoenas.</li>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Create and manage your account.</li>
          <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
          <li>Email you regarding your account or order.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Notify you of updates to the Site.</li>
          <li>Perform other business activities as needed.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Disclosure of Your Information</h2>
        <p className="mb-4">
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers that perform services for us or on our behalf.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Security of Your Information</h2>
        <p className="mb-4">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Policy for Children</h2>
        <p className="mb-4">
          We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>By email: <a href="mailto:yeabsirabezabih791@gmail.com" className="text-black">yeabsirabezabih791@gmail.com</a></li>
          <li>By visiting this page on our website: <Link to="/#contact" className="text-black">Contact Us</Link></li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Privacy;
