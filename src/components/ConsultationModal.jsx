import React, { useState } from "react";
import { motion } from "framer-motion";
const ConsultationModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", mobile: "", message: "" });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.mobile.trim()) {
      setError("Please fill in Name and Mobile.");
      return;
    }

    const msg = encodeURIComponent(
      `*New Strategy Call Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email || "Not provided"}\n` +
      `*Mobile:* ${formData.mobile}\n` +
      `*Message:* ${formData.message || "No details"}`
    );

    window.open(`https://wa.me/919526673206?text=${msg}`, "_blank");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      resetForm();
      onClose();
    }, 2800);
  };

  const handleClose = () => {
    resetForm();
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl scrollbar-hide"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-white px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-stone-900">Book a Free Strategy Call</h2>
            <p className="mt-1 text-sm text-stone-500">Let's discuss your goals</p>
          </div>
          <button
            onClick={handleClose}
            className="rounded-lg bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-200"
          >
            Close
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                required
                className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />

              <input
                type="tel"
                placeholder="Mobile Number * (WhatsApp preferred)"
                value={formData.mobile}
                onChange={(e) => updateField("mobile", e.target.value)}
                required
                className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />

              <textarea
                rows={3}
                placeholder="Tell us about your business & goals..."
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-brand-500 py-3.5 font-semibold text-white shadow-sm transition hover:bg-brand-600"
              >
                Book Free Strategy Call
              </button>

              <p className="text-center text-xs text-stone-400">
                Usually responds within 24 hours &bull; No obligation
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-14 text-center"
            >
              <h3 className="text-2xl font-bold text-stone-900">Strategy Call Booked</h3>
              <p className="mx-auto mt-4 max-w-sm leading-relaxed text-stone-600">
                Thank you! We will reach out on WhatsApp shortly to schedule your free strategy call.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConsultationModal;
