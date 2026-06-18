"use client";

import { useState } from "react";

type FormData = {
  pronoun: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mailingAddress: string;
  city: string;
  province: string;
  postalCode: string;
  communicationPreference: string;
  referralSource: string;
  newsletterOptIn: boolean;
  projectType: string;
  propertyArea: string;
  squareFootage: string;
  scheduleStart: string;
  scheduleCompletion: string;
  workedWithDesigner: string;
  completedRenovation: string;
  involvement: string;
  budgetRange: string;
  vision: string;
  website: string;
  instagramHandle: string;
  inspirationLink: string;
};

const initialData: FormData = {
  pronoun: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  mailingAddress: "",
  city: "",
  province: "",
  postalCode: "",
  communicationPreference: "",
  referralSource: "",
  newsletterOptIn: false,
  projectType: "",
  propertyArea: "",
  squareFootage: "",
  scheduleStart: "",
  scheduleCompletion: "",
  workedWithDesigner: "",
  completedRenovation: "",
  involvement: "",
  budgetRange: "",
  vision: "",
  website: "",
  instagramHandle: "",
  inspirationLink: "",
};

const steps = [
  "Client Info",
  "Contact Info",
  "Project Details",
  "Vision",
  "Additional",
];

const inputClass =
  "w-full border-0 border-b border-ink/30 bg-transparent py-3 text-base text-ink placeholder-ink/40 transition-colors focus:border-terracotta focus:outline-none focus:ring-0 md:text-lg";

const selectClass = `${inputClass} appearance-none bg-no-repeat pr-8`;

const selectChevron =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%231a1a1a' stroke-width='1.5'><path d='M6 8l4 4 4-4'/></svg>\")";

const selectStyle: React.CSSProperties = {
  backgroundImage: selectChevron,
  backgroundPosition: "right 2px center",
  backgroundSize: "14px 14px",
};

const labelClass =
  "block text-xs font-medium uppercase tracking-[0.2em] text-ink/60";

const fieldWrapClass = "flex flex-col gap-2";

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const canProceed = (): boolean => {
    if (step === 0) {
      return Boolean(data.firstName && data.lastName && data.email);
    }
    if (step === 1) {
      return Boolean(
        data.mailingAddress &&
          data.city &&
          data.province &&
          data.postalCode &&
          data.communicationPreference &&
          data.referralSource
      );
    }
    if (step === 2) {
      return Boolean(
        data.projectType &&
          data.scheduleStart &&
          data.scheduleCompletion &&
          data.workedWithDesigner &&
          data.completedRenovation &&
          data.involvement
      );
    }
    if (step === 3) {
      return Boolean(data.vision.trim());
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed()) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f35911d6-06b6-409b-80dc-a642162ca206",
          subject: "New Discovery Call Request — D2 Design Build",
          from_name: `${data.firstName} ${data.lastName}`,
          ...data,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-paper pb-32 md:pb-40 lg:pb-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl border-t border-ink/15 pt-16 md:pt-20">
            <h2 className="font-display text-3xl leading-[1.1] text-ink md:text-4xl">
              Thank you.
            </h2>
            <p className="mt-6 text-base leading-[1.75] text-ink/85 md:text-lg">
              Raj or Christian will review your submission personally and
              reach out within 24 hours to confirm your discovery call time.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper pb-24 md:pb-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-2xl border-t border-ink/15 pt-16 md:pt-20">
          <h2 className="font-display text-3xl leading-[1.1] text-ink md:text-4xl">
            Discovery Call Questionnaire
          </h2>
          <p className="mt-4 text-sm text-ink/60 md:text-base">
            Fields marked with * are required.
          </p>

          <div className="mt-10 md:mt-12">
            <div
              className="grid h-1 w-full grid-cols-5 overflow-hidden border border-ink/15"
              aria-hidden="true"
            >
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={i <= step ? "bg-ink" : "bg-transparent"}
                />
              ))}
            </div>
            <div className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ink md:hidden">
              Step {String(step + 1).padStart(2, "0")} of{" "}
              {String(steps.length).padStart(2, "0")} — {steps[step]}
            </div>
            <div className="mt-3 hidden justify-between text-xs font-medium uppercase tracking-[0.18em] text-ink/60 md:flex">
              {steps.map((label, i) => (
                <span
                  key={label}
                  className={i === step ? "text-ink" : ""}
                >
                  {String(i + 1).padStart(2, "0")} {label}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 md:mt-16">
            {step === 0 && (
              <div className="space-y-8">
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="pronoun">
                    Pronoun (optional)
                  </label>
                  <select
                    id="pronoun"
                    value={data.pronoun}
                    onChange={(e) => update("pronoun", e.target.value)}
                    className={selectClass} style={selectStyle}
                  >
                    <option value="">Select</option>
                    <option value="He/Him">He/Him</option>
                    <option value="She/Her">She/Her</option>
                    <option value="They/Them">They/Them</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="firstName">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={data.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="lastName">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={data.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="phone">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-8">
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="mailingAddress">
                    Mailing Address *
                  </label>
                  <input
                    id="mailingAddress"
                    type="text"
                    required
                    value={data.mailingAddress}
                    onChange={(e) => update("mailingAddress", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="city">
                      City *
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      value={data.city}
                      onChange={(e) => update("city", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="province">
                      Province *
                    </label>
                    <input
                      id="province"
                      type="text"
                      required
                      value={data.province}
                      onChange={(e) => update("province", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="postalCode">
                      Postal Code *
                    </label>
                    <input
                      id="postalCode"
                      type="text"
                      required
                      value={data.postalCode}
                      onChange={(e) => update("postalCode", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className={fieldWrapClass}>
                  <label
                    className={labelClass}
                    htmlFor="communicationPreference"
                  >
                    Communication Preference *
                  </label>
                  <select
                    id="communicationPreference"
                    required
                    value={data.communicationPreference}
                    onChange={(e) =>
                      update("communicationPreference", e.target.value)
                    }
                    className={selectClass} style={selectStyle}
                  >
                    <option value="">Select</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="Text">Text</option>
                  </select>
                </div>
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="referralSource">
                    How did you find us? *
                  </label>
                  <select
                    id="referralSource"
                    required
                    value={data.referralSource}
                    onChange={(e) => update("referralSource", e.target.value)}
                    className={selectClass} style={selectStyle}
                  >
                    <option value="">Select</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <label className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    checked={data.newsletterOptIn}
                    onChange={(e) =>
                      update("newsletterOptIn", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-ink"
                  />
                  <span className="text-sm leading-relaxed text-ink/80 md:text-base">
                    Yes, keep me updated on D2 projects and upcoming
                    properties.
                  </span>
                </label>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="projectType">
                    Type of Project *
                  </label>
                  <select
                    id="projectType"
                    required
                    value={data.projectType}
                    onChange={(e) => update("projectType", e.target.value)}
                    className={selectClass} style={selectStyle}
                  >
                    <option value="">Select</option>
                    <option value="Character Home Renovation">
                      Character Home Renovation
                    </option>
                    <option value="Complete Home Redesign">
                      Complete Home Redesign
                    </option>
                    <option value="Custom New Build">Custom New Build</option>
                    <option value="Kitchen + Bathroom Renovation">
                      Kitchen + Bathroom Renovation
                    </option>
                    <option value="You Space">
                      You Space (home gym, theater room, home office)
                    </option>
                    <option value="Ready-to-Move Designer Project">
                      Ready-to-Move Designer Project
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="propertyArea">
                      Property Address or Area
                    </label>
                    <input
                      id="propertyArea"
                      type="text"
                      placeholder="e.g. Inglewood, Springbank, Canmore"
                      value={data.propertyArea}
                      onChange={(e) => update("propertyArea", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="squareFootage">
                      Square Footage
                    </label>
                    <input
                      id="squareFootage"
                      type="text"
                      value={data.squareFootage}
                      onChange={(e) => update("squareFootage", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="scheduleStart">
                      Start of Project *
                    </label>
                    <select
                      id="scheduleStart"
                      required
                      value={data.scheduleStart}
                      onChange={(e) => update("scheduleStart", e.target.value)}
                      className={selectClass} style={selectStyle}
                    >
                      <option value="">Select</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="12 months or more">12 months or more</option>
                    </select>
                  </div>
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="scheduleCompletion">
                      Completion Target *
                    </label>
                    <select
                      id="scheduleCompletion"
                      required
                      value={data.scheduleCompletion}
                      onChange={(e) =>
                        update("scheduleCompletion", e.target.value)
                      }
                      className={selectClass} style={selectStyle}
                    >
                      <option value="">Select</option>
                      <option value="Under 3 months">Under 3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="12-18 months">12-18 months</option>
                      <option value="18-24 months">18-24 months</option>
                      <option value="24 months or more">24 months or more</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="workedWithDesigner">
                      Worked with a designer before? *
                    </label>
                    <select
                      id="workedWithDesigner"
                      required
                      value={data.workedWithDesigner}
                      onChange={(e) =>
                        update("workedWithDesigner", e.target.value)
                      }
                      className={selectClass} style={selectStyle}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className={fieldWrapClass}>
                    <label className={labelClass} htmlFor="completedRenovation">
                      Completed a renovation before? *
                    </label>
                    <select
                      id="completedRenovation"
                      required
                      value={data.completedRenovation}
                      onChange={(e) =>
                        update("completedRenovation", e.target.value)
                      }
                      className={selectClass} style={selectStyle}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <fieldset className="flex flex-col gap-3 pt-2">
                  <legend className={labelClass}>Level of Involvement *</legend>
                  {[
                    "I want to be involved in all decisions and included on all communication",
                    "I want to be involved in major decisions but not included in day-to-day logistics",
                    "I want to be minimally involved and trust the team to make most decisions",
                    "Other",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink/85 md:text-base"
                    >
                      <input
                        type="radio"
                        name="involvement"
                        value={option}
                        checked={data.involvement === option}
                        onChange={(e) => update("involvement", e.target.value)}
                        required
                        className="mt-1 h-4 w-4 accent-ink"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </fieldset>
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="budgetRange">
                    Budget Range (optional)
                  </label>
                  <select
                    id="budgetRange"
                    value={data.budgetRange}
                    onChange={(e) => update("budgetRange", e.target.value)}
                    className={selectClass} style={selectStyle}
                  >
                    <option value="">Select</option>
                    <option value="Under $100,000">Under $100,000</option>
                    <option value="$100,000 to $250,000">
                      $100,000 to $250,000
                    </option>
                    <option value="$250,000 to $500,000">
                      $250,000 to $500,000
                    </option>
                    <option value="$500,000 to $1,000,000">
                      $500,000 to $1,000,000
                    </option>
                    <option value="Over $1,000,000">Over $1,000,000</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="vision">
                    Tell us about your project *
                  </label>
                  <p className="text-sm leading-relaxed text-ink/60">
                    What are you hoping to achieve and what should the
                    finished space feel like?
                  </p>
                  <textarea
                    id="vision"
                    required
                    rows={8}
                    value={data.vision}
                    onChange={(e) => update("vision", e.target.value)}
                    className={`${inputClass} resize-none border-b leading-relaxed`}
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8">
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="website">
                    Website (optional)
                  </label>
                  <input
                    id="website"
                    type="text"
                    value={data.website}
                    onChange={(e) => update("website", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="instagramHandle">
                    Instagram Handle (optional)
                  </label>
                  <input
                    id="instagramHandle"
                    type="text"
                    value={data.instagramHandle}
                    onChange={(e) =>
                      update("instagramHandle", e.target.value)
                    }
                    className={inputClass}
                  />
                </div>
                <div className={fieldWrapClass}>
                  <label className={labelClass} htmlFor="inspirationLink">
                    Pinterest or Houzz board (optional)
                  </label>
                  <p className="text-sm leading-relaxed text-ink/60">
                    Share any boards or saved images that reflect your style
                    direction.
                  </p>
                  <input
                    id="inspirationLink"
                    type="text"
                    value={data.inspirationLink}
                    onChange={(e) =>
                      update("inspirationLink", e.target.value)
                    }
                    className={inputClass}
                  />
                </div>
              </div>
            )}

            {error && (
              <p className="mt-8 text-sm text-terracotta md:text-base">
                {error}
              </p>
            )}

            <div className="mt-16 flex items-center justify-between gap-4 border-t border-ink/15 pt-8 md:mt-20 md:gap-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="text-xs font-medium uppercase tracking-[0.18em] text-ink transition-opacity hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-30 md:text-sm"
              >
                ← Previous
              </button>

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    canProceed() && setStep((s) => Math.min(steps.length - 1, s + 1))
                  }
                  disabled={!canProceed()}
                  className="inline-flex items-center border border-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 md:px-8 md:py-4 md:text-sm"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting || !canProceed()}
                  className="inline-flex items-center bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-50 md:px-8 md:py-4 md:text-sm"
                >
                  {submitting ? "Sending…" : "Let's Go"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
