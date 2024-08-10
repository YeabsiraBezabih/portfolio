import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Terms = () => {
  return (
    <>
    <Navbar />
    <div className="p-10 bg-black min-h-screen flex flex-col items-center">
      <div className="container max-w-4xl p-6 rounded-lg shadow-lg  bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300"
      
      >
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to my Portfolio. These terms and conditions outline the rules and regulations for the use of my Portfolio&apos;s Website, located at https://yeabdevts.github.io/.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p className="mb-4">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Your Portfolio if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Intellectual Property Rights</h2>
        <p className="mb-4">
          Other than the content I own, under these Terms, my Portfolio and/or its licensors own all the intellectual property rights and materials contained in this Website.
        </p>
        <p className="mb-4">
          You are granted limited license only for purposes of viewing the material contained on this Website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Restrictions</h2>
        <p className="mb-4">
          You are specifically restricted from all of the following:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Publishing any Website material in any other media;</li>
          <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
          <li>Publicly performing and/or showing any Website material;</li>
          <li>Using this Website in any way that is or may be damaging to this Website;</li>
          <li>Using this Website in any way that impacts user access to this Website;</li>
          <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
          <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
          <li>Using this Website to engage in any advertising or marketing.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. my Content</h2>
        <p className="mb-4">
          In these Website Standard Terms and Conditions, &quot;my Content&quot; shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Your Portfolio a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
        </p>
        <p className="mb-4">
          my Content must be my own and must not be invading any third-party&apos;s rights. my Portfolio reserves the right to remove any of Your Content from this Website at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. No Warranties</h2>
        <p className="mb-4">
          This Website is provided “as is,” with all faults, and my Portfolio expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall my Portfolio, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. my Portfolio, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Indemnification</h2>
        <p className="mb-4">
          You hereby indemnify to the fullest extent Your Portfolio from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Severability</h2>
        <p className="mb-4">
          If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Variation of Terms</h2>
        <p className="mb-4">
          my Portfolio is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this Website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Assignment</h2>
        <p className="mb-4">
          my Portfolio is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">11. Entire Agreement</h2>
        <p className="mb-4">
          These Terms constitute the entire agreement between my Portfolio and you in relation to your use of this Website, and supersede all prior agreements and understandings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">12. Governing Law & Jurisdiction</h2>
        <p className="mb-4">
          These Terms will be governed by and interpreted in accordance with the laws of Ethiopia, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Ethiopia for the resolution of any disputes.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Terms;
