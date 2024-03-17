import React from "react";
import styles from "../../style";

const TermsAndConditions = () => {
    return (
        <>
      <main className="wrap">
        <section className="containert flex flex-col items-center justify-between p-4 bg-black rounded-md shadow-lg text-white">
          <div className="container__heading pb-4 border-b border-gray-300">
            <h2 className="terms-heading text-2xl font-bold">Terms & Conditions</h2>
          </div>
          <div className="container__content flex-grow overflow-y-auto p-4">
            <p>Last Updated: 17/03/2024</p>
            <p className="text-dimWhite">
              Please read these Terms and Conditions carefully before using the
              CareBee Elder Care Network Application operated by CareBee. By
              accessing or using the CareBee Application, you agree to be bound
              by these Terms. If you do not agree to all these Terms, you may
              not use the Application.<br/> 
            </p>
            <ol>
              <li className="text-xl font-bold mb-2">Application Overview</li>
              <p className="text-dimWhite">
                The CareBee Application connects elderly individuals and their
                families ("Users") with caregivers and care services
                ("Services"). Users may browse and request Services through the
                Application. Caregivers may provide Services and communicate
                with Users through the Application.
              </p>
              <li className="text-xl font-bold mb-2">User Accounts</li>
              <p className="text-dimWhite">
                Users must create an account to access certain features of the
                Application. Users are responsible for maintaining the
                confidentiality of their account credentials. Users must provide
                accurate and up-to-date information during registration. Users
                are responsible for all activities that occur under their
                account.
              </p>
              <li className="text-xl font-bold mb-2">Services</li>
              <p className="text-dimWhite">
                Services offered through the Application may include but are not
                limited to diet, sanitation, eco-haven, mobilizing, and more.
                Users may browse and select Services based on their needs and
                preferences. The Company does not provide Services directly but
                facilitates connections between Users and Caregivers.
              </p>
              <li className="text-xl font-bold mb-2">Privacy and Data Security</li>
              <p className="text-dimWhite">
                We are committed to protecting user privacy. Our Privacy Policy
                outlines how we collect, use, and safeguard user data. By using
                the Application, you consent to the practices described in our
                Privacy Policy.
              </p>
              <li className="text-xl font-bold mb-2">User Responsibilities</li>
              <p className="text-dimWhite">
                Users must use the Application responsibly and in accordance
                with applicable laws and regulations. Users must not engage in
                any fraudulent, abusive, or harmful activities on the
                Application. Users must respect the privacy and rights of other
                Users and Caregivers.
              </p>
              <li className="text-xl font-bold mb-2">Payments and Fees</li>
              <p className="text-dimWhite">
                Users may be required to pay fees for certain Services. Payment
                terms and methods are detailed in the Application's Payment
                Policy.
              </p>
              <li className="text-xl font-bold mb-2">Termination</li>
              <p className="text-dimWhite">
                The Company reserves the right to terminate or suspend user
                accounts at its discretion, with or without notice. Users may
                terminate their accounts at any time by following the
                Application's account closure procedure.
              </p>
              <li className="text-xl font-bold mb-2">Intellectual Property</li>
              <p className="text-dimWhite">
                The Application and its content, including but not limited to
                text, graphics, logos, and images, are protected by intellectual
                property laws. Users may not reproduce, distribute, or create
                derivative works based on the Application without prior written
                permission.
              </p>
              <li className="text-xl font-bold mb-2">Disclaimer</li>
              <p className="text-dimWhite">
                The Company does not endorse or guarantee the quality, safety,
                or legality of Services provided by Caregivers. Users use the
                Application and Services at their own risk.
              </p>
              <li className="text-xl font-bold mb-2">Limitation of Liability</li>
              <p className="text-dimWhite">
                The Company shall not be liable for any indirect, incidental,
                special, or consequential damages arising from the use of the
                Application or Services.
              </p>
              <li className="text-xl font-bold mb-2">Governing Law</li>
              <p className="text-dimWhite">
                These Terms shall be governed by and construed in accordance
                with the laws of India.
              </p>
              <li className="text-xl font-bold mb-2">Changes to Terms</li>
              <p className="text-dimWhite">
                The Company reserves the right to modify these Terms at any
                time. Updates will be posted on the Application, and continued
                use of the Application constitutes acceptance of the modified
                Terms.
              </p>
            </ol>
            <p>
              For questions or concerns regarding these Terms, please contact us
              at carebee@gmail.com.
            </p>
          </div>
          <div className="containert__nav w-full pt-4 border-t border-gray-300 text-right">
            <p>
              By using the CareBee Application, you acknowledge that you have
              read and understood these Terms and agree to be bound by them
            </p>
            <a href="/" className="button-29 inline-block py-2 px-4 bg-indigo-700 text-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg">Accept & Continue</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default TermsAndConditions;
