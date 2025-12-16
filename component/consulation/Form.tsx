'use client';

import { useState } from 'react';

interface ConsultationFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Property Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string; // Residential, Commercial, Agricultural
  ownershipType: string; // Owner, Renter, Business

  // Roof Information
  roofType: string; // Asphalt, Metal, Tile, Slate, Concrete, Other
  roofCondition: string; // Excellent, Good, Fair, Poor
  roofAge: string; // Less than 5 years, 5-10 years, 10-20 years, 20+ years
  roofShading: string; // Full Sun, Partial Shade, Heavy Shade

  // Energy Information
  monthlyBill: string;
  energyProvider: string;
  hasExistingSolar: string; // Yes, No

  // Preferences
  installationTimeline: string; // Immediately, 3-6 months, 6-12 months, Unsure
  financingInterest: string; // Yes, No
  preferredContactMethod: string; // Email, Phone, Both

  // Additional Notes
  additionalNotes: string;
  timestamp: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<Partial<ConsultationFormData>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    propertyType: '',
    ownershipType: '',
    roofType: '',
    roofCondition: '',
    roofAge: '',
    roofShading: '',
    monthlyBill: '',
    energyProvider: '',
    hasExistingSolar: '',
    installationTimeline: '',
    financingInterest: '',
    preferredContactMethod: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Dropdown options
  const propertyTypes = ['Residential', 'Commercial', 'Agricultural', 'Multi-Family'];
  const ownershipTypes = ['Owner', 'Renter', 'Business Owner', 'Non-Profit'];
  const roofTypes = ['Asphalt Shingles', 'Metal', 'Tile', 'Slate', 'Concrete', 'Tar & Gravel', 'Other'];
  const roofConditions = ['Excellent', 'Good', 'Fair', 'Poor'];
  const roofAges = ['Less than 5 years', '5-10 years', '10-20 years', '20+ years'];
  const shadingOptions = ['Full Sun (6+ hours)', 'Partial Shade (4-6 hours)', 'Heavy Shade (Less than 4 hours)'];
  const monthlyBills = ['Under ₹100', '₹100-₹200', '₹200-₹300', '₹300-₹500', '₹500+'];
  const timelineOptions = ['Immediately', '3-6 months', '6-12 months', 'Unsure'];
  const contactMethods = ['Email', 'Phone', 'Both'];
  const states = ['CA', 'TX', 'FL', 'NY', 'PA', 'CO', 'AZ', 'NV', 'OR', 'WA', 'Other'];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create form submission data with timestamp
    const submissionData: ConsultationFormData = {
      ...formData,
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      address: formData.address || '',
      city: formData.city || '',
      state: formData.state || '',
      zipCode: formData.zipCode || '',
      propertyType: formData.propertyType || '',
      ownershipType: formData.ownershipType || '',
      roofType: formData.roofType || '',
      roofCondition: formData.roofCondition || '',
      roofAge: formData.roofAge || '',
      roofShading: formData.roofShading || '',
      monthlyBill: formData.monthlyBill || '',
      energyProvider: formData.energyProvider || '',
      hasExistingSolar: formData.hasExistingSolar || '',
      installationTimeline: formData.installationTimeline || '',
      financingInterest: formData.financingInterest || '',
      preferredContactMethod: formData.preferredContactMethod || '',
      additionalNotes: formData.additionalNotes || '',
      timestamp: new Date().toISOString(),
    };

    // Log form data to console
    console.log('📋 Consultation Form Submission:', submissionData);
    console.log('🕐 Submitted at:', new Date().toLocaleString());
    console.log('✅ Form Data Valid');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        propertyType: '',
        ownershipType: '',
        roofType: '',
        roofCondition: '',
        roofAge: '',
        roofShading: '',
        monthlyBill: '',
        energyProvider: '',
        hasExistingSolar: '',
        installationTimeline: '',
        financingInterest: '',
        preferredContactMethod: '',
        additionalNotes: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Free Solar Consultation Form
          </h2>
          <p className="text-lg text-gray-600">
            Complete this form to get a personalized solar assessment for your property
          </p>
        </div>

        {submitSuccess && (
          <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <h3 className="text-lg font-bold text-green-900">
                  Consultation Request Received!
                </h3>
                <p className="text-green-700">
                  We'll review your information and contact you shortly with personalized solar recommendations.
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Personal Information */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">👤</span> Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Property Information */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🏠</span> Property Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="123 Main Street"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="Denver"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-semibold text-gray-900 mb-2">
                  State *
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select State</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-900 mb-2">
                  Zip Code *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="80202"
                />
              </div>
              <div>
                <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Property Type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ownershipType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Ownership Type *
                </label>
                <select
                  id="ownershipType"
                  name="ownershipType"
                  value={formData.ownershipType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Ownership Type</option>
                  {ownershipTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Roof Information */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🏘️</span> Roof Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="roofType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Roof Type *
                </label>
                <select
                  id="roofType"
                  name="roofType"
                  value={formData.roofType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Roof Type</option>
                  {roofTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="roofCondition" className="block text-sm font-semibold text-gray-900 mb-2">
                  Roof Condition *
                </label>
                <select
                  id="roofCondition"
                  name="roofCondition"
                  value={formData.roofCondition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Roof Condition</option>
                  {roofConditions.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="roofAge" className="block text-sm font-semibold text-gray-900 mb-2">
                  Roof Age *
                </label>
                <select
                  id="roofAge"
                  name="roofAge"
                  value={formData.roofAge}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Roof Age</option>
                  {roofAges.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="roofShading" className="block text-sm font-semibold text-gray-900 mb-2">
                  Roof Shading & Sun Exposure *
                </label>
                <select
                  id="roofShading"
                  name="roofShading"
                  value={formData.roofShading}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Shading Level</option>
                  {shadingOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Energy Information */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">⚡</span> Energy Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="monthlyBill" className="block text-sm font-semibold text-gray-900 mb-2">
                  Monthly Electric Bill *
                </label>
                <select
                  id="monthlyBill"
                  name="monthlyBill"
                  value={formData.monthlyBill}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Bill Range</option>
                  {monthlyBills.map((bill) => (
                    <option key={bill} value={bill}>
                      {bill}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="energyProvider" className="block text-sm font-semibold text-gray-900 mb-2">
                  Energy Provider *
                </label>
                <input
                  type="text"
                  id="energyProvider"
                  name="energyProvider"
                  value={formData.energyProvider}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  placeholder="e.g., Xcel Energy, Duke Energy"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="hasExistingSolar" className="block text-sm font-semibold text-gray-900 mb-2">
                  Do you have existing solar panels? *
                </label>
                <select
                  id="hasExistingSolar"
                  name="hasExistingSolar"
                  value={formData.hasExistingSolar}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Planning">Planning to Install</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 5: Preferences */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span> Installation Preferences
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="installationTimeline" className="block text-sm font-semibold text-gray-900 mb-2">
                  Installation Timeline *
                </label>
                <select
                  id="installationTimeline"
                  name="installationTimeline"
                  value={formData.installationTimeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="financingInterest" className="block text-sm font-semibold text-gray-900 mb-2">
                  Interested in Financing Options? *
                </label>
                <select
                  id="financingInterest"
                  name="financingInterest"
                  value={formData.financingInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes, I'm interested</option>
                  <option value="No">No, cash purchase</option>
                  <option value="Unsure">Unsure</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="preferredContactMethod" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Contact Method *
                </label>
                <select
                  id="preferredContactMethod"
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Contact Method</option>
                  {contactMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 6: Additional Notes */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">💬</span> Additional Information
            </h3>

            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-900 mb-2">
                Any other details you'd like to share?
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white transition-all resize-none"
                placeholder="Tell us about any special requirements, concerns, or questions..."
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
            </button>
            <button
              type="reset"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-base sm:text-lg"
            >
              Clear Form
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </section>
  );
}
