import React from "react";
import { motion } from "framer-motion";

const privacyContent = {
  title: "Privacy Policy",
  sections: [
    {
      heading: "Information We Collect",
      text: "We collect information you provide when filling out our contact or project enquiry forms, including your name, email address, phone number, and project details. We also collect basic analytics data such as pages visited and time spent on the site.",
    },
    {
      heading: "How We Use Your Information",
      text: "We use your information to respond to enquiries, provide quotes, deliver services, improve our website, and communicate with you about your project. We do not sell, rent, or share your personal information with third parties for their marketing purposes.",
    },
    {
      heading: "Data Protection",
      text: "We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We retain your information only as long as necessary to provide services and comply with legal obligations.",
    },
    {
      heading: "Third-Party Services",
      text: "We may use third-party tools (such as analytics providers) that collect anonymized data. These services have their own privacy policies governing data use.",
    },
    {
      heading: "Your Rights",
      text: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello.kairoza@gmail.com.",
    },
    {
      heading: "Cookies",
      text: "This website may use cookies for analytics and functionality. You can control cookie preferences through your browser settings.",
    },
  ],
};

const termsContent = {
  title: "Terms of Service",
  sections: [
    {
      heading: "Services",
      text: "Kairoza provides website development, web application development, SEO, and digital marketing services. The scope, deliverables, timeline, and pricing for each project will be outlined in a separate agreement or proposal.",
    },
    {
      heading: "Payment Terms",
      text: "Payment terms are specified in individual project agreements. Typically, a deposit is required before work begins, with the balance due upon completion or as per the agreed milestone schedule. All payments are non-refundable unless otherwise stated.",
    },
    {
      heading: "Project Timeline",
      text: "Estimated timelines are provided based on the initial scope. Delays caused by client feedback cycles, late content delivery, or scope changes may extend the timeline. We will communicate any changes promptly.",
    },
    {
      heading: "Revisions & Changes",
      text: "Project agreements include a defined number of revision rounds. Additional revisions or scope changes beyond the agreed scope may incur extra charges.",
    },
    {
      heading: "Intellectual Property",
      text: "Upon full payment, the client owns the final delivered work. Kairoza retains the right to display completed work in its portfolio unless otherwise agreed in writing.",
    },
    {
      heading: "Client Responsibilities",
      text: "Clients are responsible for providing timely feedback, content (text, images, branding assets), and access to any required third-party accounts. Delays in providing these may affect project timelines.",
    },
    {
      heading: "Limitation of Liability",
      text: "Kairoza is not liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability is limited to the amount paid for the specific project.",
    },
    {
      heading: "Termination",
      text: "Either party may terminate a project agreement with written notice. In case of termination, the client pays for work completed up to the termination date.",
    },
    {
      heading: "Governing Law",
      text: "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Kerala, India.",
    },
  ],
};

const LegalModal = ({ isOpen, onClose, type }) => {
  const content = type === "privacy" ? privacyContent : termsContent;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl scrollbar-hide"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-white px-6 py-5">
          <h2 className="text-xl font-bold text-stone-900">{content.title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-200"
          >
            Close
          </button>
        </div>

        <div className="space-y-6 p-6">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-lg font-bold text-stone-900">{section.heading}</h3>
              <p className="mt-2 leading-relaxed text-stone-600">{section.text}</p>
            </div>
          ))}

          <p className="border-t border-stone-200 pt-4 text-sm text-stone-400">
            Last updated: June 2026. For questions, contact hello.kairoza@gmail.com
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LegalModal;
