import React, { useState } from "react";
import { motion } from "framer-motion";

const EnquiryModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    budget: "",
    message: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim()
    ) {
      return;
    }

    console.log("Enquiry Submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      resetForm();
      onClose();
    }, 2500);
  };

  const handleClose = () => {
  resetForm();
  setSubmitted(false);
  onClose();
};

if (!isOpen) return null;



  return (
    <motion.div
  initial={{
    opacity: 0,
    backdropFilter: "blur(0px)",
  }}
  animate={{
    opacity: 1,
    backdropFilter: "blur(12px)",
  }}
  exit={{
    opacity: 0,
    backdropFilter: "blur(0px)",
  }}
  transition={{
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    fixed
    inset-0
    z-[999]
    flex
    items-center
    justify-center
    bg-black/30
    p-4
  "
>
      <motion.div
  initial={{
    opacity: 0,
    scale: 0.92,
    y: 40,
    filter: "blur(12px)",
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  exit={{
    opacity: 0,
    scale: 0.96,
    y: 20,
    filter: "blur(12px)",
  }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
 className="
  relative
  w-full
  max-w-2xl
  max-h-[90vh]
  overflow-y-auto
  rounded-3xl
  bg-white
  shadow-2xl
  scrollbar-hide
"
>
        {/* Header */}
        <div
          className="
            sticky
            top-0
            z-10
            flex
            items-center
            justify-between
            border-b
            border-white/30
            bg-white/70
            px-6
            py-5
            backdrop-blur-2xl
          "
        >
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Create your Project
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Tell us about your requirements
            </p>
          </div>

          <button
            onClick={handleClose}
            className="
              rounded-full
              bg-white/80
              px-4
              py-2
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-white
            "
          >
            Close
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/70
                  px-4
                  py-4
                  text-slate-900
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/70
                  px-4
                  py-4
                  text-slate-900
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) =>
                  updateField("mobile", e.target.value)
                }
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/70
                  px-4
                  py-4
                  text-slate-900
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />

              <select
                value={formData.service}
                onChange={(e) =>
                  updateField("service", e.target.value)
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/70
                  px-4
                  py-4
                  text-slate-900
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              >
                <option value="">
                  Select Service
                </option>

                <option value="Website Development">
                  Website Development
                </option>

                <option value="Web Application">
                  Web Application
                </option>

                <option value="UI/UX Design">
                  UI/UX Design
                </option>

                <option value="SEO">
                  SEO & Marketing
                </option>

                <option value="Custom">
                  Custom Solution
                </option>
              </select>

              <select
                value={formData.budget}
                onChange={(e) =>
                  updateField("budget", e.target.value)
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/70
                  px-4
                  py-4
                  text-slate-900
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              >
                <option value="">
                  Project Budget
                </option>

                <option value="10k-25k">
                  ₹10k - ₹25k
                </option>

                <option value="25k-50k">
                  ₹25k - ₹50k
                </option>

                <option value="50k-100k">
                  ₹50k - ₹100k
                </option>

                <option value="100k+">
                  ₹100k+
                </option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  updateField("message", e.target.value)
                }
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/70
                  px-4
                  py-4
                  text-slate-900
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  Free consultation
                </p>

                <p className="text-sm text-slate-600">
                  Transparent pricing
                </p>

                <p className="text-sm text-slate-600">
                  Response within 24 hours
                </p>
              </div>

              <button
                type="submit"
                className="
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  to-cyan-500
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(99,102,241,0.35)]
                  transition
                  hover:scale-[1.02]
                "
              >
                Send Enquiry
              </button>

              <p className="text-center text-xs text-slate-500">
                Usually responds within 24 hours
              </p>
            </form>
          ) : (
            <div className="py-12 text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                Enquiry Received
              </h3>

              <p className="mt-4 text-slate-600">
                Thank you for contacting Kairoza.
                We'll review your requirements and
                get back to you shortly.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EnquiryModal;