import React from 'react';
import { Shield, Lock, EyeOff, FileText, Globe } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 animate-fade-in">
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 md:p-12">
        
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#333333] mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-[#555555] text-lg">
            Your privacy is our priority. We believe in transparency, security, and user control.
          </p>
          <p className="mt-4 text-sm text-gray-400 font-medium uppercase tracking-wide">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        
        <div className="prose prose-lg text-[#555555] max-w-none">
          
          {/* Key Highlight Box */}
          <div className="bg-[#65a30d]/5 border border-[#65a30d]/20 rounded-[16px] p-6 mb-10">
            <h3 className="text-[#65a30d] font-bold text-xl mb-2 flex items-center gap-2">
              <Shield size={24} />
              Commitment to Data Non-Retention
            </h3>
            <p className="text-[#333333] font-medium leading-relaxed">
              We do not collect or permanently store your personal data or uploaded images. 
              Your content is processed in real-time for the sole purpose of analysis and is 
              <span className="font-bold"> automatically deleted </span> 
              immediately after the session ends or when you leave the page.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#333333] mb-4 flex items-center gap-2">
              <FileText size={22} className="text-gray-400" />
              1. Introduction
            </h2>
            <p className="leading-relaxed text-base">
              Welcome to EyeShapeAI. This Privacy Policy applies to our website and its associated services. 
              By accessing or using our Service, you signify that you have read, understood, and agree to our collection, 
              storage, use, and disclosure of your personal information as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#333333] mb-4 flex items-center gap-2">
              <EyeOff size={22} className="text-gray-400" />
              2. Image Processing & Data Handling
            </h2>
            <p className="leading-relaxed text-base mb-3">
              To provide our eye shape analysis service, you may upload an image ("User Content"). Here is how we handle it:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><strong>Ephemeral Processing:</strong> Images are processed in memory and are not saved to our databases or servers. Processing occurs transiently during your active session.</li>
              <li><strong>No Facial Recognition Database:</strong> We do not build biometric profiles, store facial recognition templates, or maintain any database associated with your biometric identity.</li>
              <li><strong>Third-Party Processing:</strong> We utilize secure, industry-standard third-party artificial intelligence technologies to analyze the visual features of the image. These providers process data strictly for the purpose of generating analysis results and in accordance with strict data privacy and security standards.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#333333] mb-4 flex items-center gap-2">
              <Lock size={22} className="text-gray-400" />
              3. Cookies, Analytics, and Advertising
            </h2>
            <p className="leading-relaxed text-base mb-3">
              We may use cookies, log files, and similar tracking technologies to enhance your experience and support our services.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><strong>Log Files:</strong> Like many other websites, we utilize standard log files. This includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. This information is not linked to any information that is personally identifiable.</li>
              <li><strong>Cookies:</strong> We use cookies to store information about visitors' preferences and to record user-specific information on visits to pages.</li>
              <li><strong>Advertising Partners:</strong> We may partner with reputable third-party advertising networks to display advertising on our website. These partners may use cookies and web beacons to collect non-personal data about your activities on this and other websites to provide you with targeted advertising based on your interests.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#333333] mb-4 flex items-center gap-2">
              <Globe size={22} className="text-gray-400" />
              4. GDPR & CCPA Data Protection Rights
            </h2>
            <p className="leading-relaxed text-base mb-3">
              We are committed to ensuring your data protection rights are fully respected, regardless of your location.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><strong>The Right to Access & Deletion:</strong> Since we do not store your personal image data, we do not hold any personal information to access or delete upon request. Your data is automatically deleted as part of our standard operational procedure.</li>
              <li><strong>CCPA Privacy Rights:</strong> Under the California Consumer Privacy Act (CCPA), consumers have the right to request that a business disclose the categories and specific pieces of personal data that it has collected. As we do not retain personal user data, no such data is available for disclosure or sale.</li>
              <li><strong>GDPR Rights:</strong> Users in the European Economic Area (EEA) have the right to access, rectification, erasure, restriction of processing, and data portability. Our non-retention policy ensures compliance with the principles of data minimization and storage limitation.</li>
            </ul>
          </section>
          
           <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">5. Children's Information</h2>
            <p className="leading-relaxed text-base">
              We do not knowingly collect any Personal Identifiable Information from children under the age of 13. 
              If you think that your child provided this kind of information on our website, we strongly encourage you to 
              contact us immediately. However, given our strict non-retention policy, such data would not be stored in our systems.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">6. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed text-base">
              We may update our Privacy Policy from time to time. We advise you to review this page periodically for any changes. 
              We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately 
              after they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">7. Contact Us</h2>
            <p className="leading-relaxed text-base">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at 
              <a href="mailto:support@eyeshapeai.com" className="text-[#65a30d] font-semibold hover:underline ml-1">support@eyeshapeai.com</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;