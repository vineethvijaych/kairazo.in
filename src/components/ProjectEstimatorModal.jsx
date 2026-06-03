import React, { useState } from "react";
import { FEATURES } from "../utils/constants";
import { useProjectEstimator } from "../hooks/useProjectEstimator";

const ProjectEstimatorModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    formData,
    toggleFeature,
    calculatePrice,
    updateField,
    resetForm,
  } = useProjectEstimator();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name?.trim() ||
      !formData.email?.trim() ||
      !formData.mobile?.trim()
    ) {
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      onClose();
      setSubmitted(false);
      resetForm();
    }, 2500);
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  const estimate = calculatePrice();

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-xl
        p-4
      "
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
w-full
max-w-lg
max-h-[90vh]
overflow-y-auto
scrollbar-hide
rounded-[32px]
border
border-white/20
bg-white/80
backdrop-blur-3xl
shadow-[0_25px_80px_rgba(15,23,42,0.15)]
"
      >
        {/* Header */}
        <div
          className="
            sticky
            top-0
            z-20
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
            <h3 className="text-xl font-bold text-slate-900">
              ✨ Know Your Project
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Get an instant project estimate
            </p>
          </div>

          <button
            onClick={handleClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/70
              text-slate-500
              transition
              hover:bg-white
            "
          >
            ✕
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* Pages */}
              <div className="mb-6">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Number of Pages
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {[3, 5, 10].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => updateField("pages", p)}
                      className={`
                        rounded-2xl
                        py-3
                        font-medium
                        transition-all
                        duration-300
                        ${
                          formData.pages === p
                            ? "bg-indigo-600 text-white shadow-lg"
                            : "bg-white/70 text-slate-600"
                        }
                      `}
                    >
                      {p}+ Pages
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Features
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FEATURES.map((feature) => {
                    const selected = formData.features.find(
                      (f) => f.id === feature.id
                    );

                    return (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => toggleFeature(feature)}
                        className={`
                          flex
                          items-center
                          gap-3
                          rounded-2xl
                          px-4
                          py-3
                          text-left
                          text-sm
                          font-medium
                          transition-all
                          duration-300
                          backdrop-blur-xl
                          ${
                            selected
                              ? "bg-indigo-600 text-white shadow-lg"
                              : "bg-white/60 text-slate-700"
                          }
                        `}
                      >
                        <span className="text-lg">
                          {feature.icon}
                        </span>

                        <span>{feature.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimate Card */}
              <div
                className="
                  mb-6
                  rounded-3xl
                  border
                  border-white/30
                  bg-white/70
                  p-5
                  backdrop-blur-2xl
                "
              >
                <div className="text-sm text-slate-500">
                  Estimated Investment
                </div>

                <div className="mt-2 text-3xl font-black text-indigo-600">
                  {estimate.range}
                </div>

                <div className="mt-2 text-xs text-slate-500">
                  Final pricing may vary depending on scope and
                  project complexity.
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
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
              </div>

              {/* Trust */}
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <div className="text-sm text-slate-600">
                  ✓ Free consultation
                </div>

                <div className="text-sm text-slate-600">
                  ✓ No obligation quote
                </div>

                <div className="text-sm text-slate-600">
                  ✓ Response within 24 hours
                </div>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="
                  mt-6
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
                Get My Project Estimate
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Usually responds within 24 hours
              </p>
            </form>
          ) : (
            <div className="py-10 text-center">
              <div className="mb-5 text-6xl">
                ✨
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Request Received
              </h3>

              <p className="mt-3 text-slate-600">
                Thank you for choosing Kairoza.
                We'll contact you shortly.
              </p>

              <div
                className="
                  mt-6
                  rounded-3xl
                  border
                  border-white/30
                  bg-white/70
                  p-5
                "
              >
                <div className="text-sm text-slate-500">
                  Estimated Budget
                </div>

                <div className="mt-2 text-3xl font-black text-indigo-600">
                  {estimate.range}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectEstimatorModal;