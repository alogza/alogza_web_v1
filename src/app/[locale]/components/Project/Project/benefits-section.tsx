export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Helps Businesses & Users</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        <BenefitItem text="Saves Time & Effort - Eliminates the manual certificate generation process." />
        <BenefitItem text="Enhances Accuracy - Minimizes errors by automating name placement and serial number assignment." />
        <BenefitItem text="Improves Accessibility - Certificates are stored securely and can be retrieved anytime via Google Drive." />
        <BenefitItem text="Boosts Professionalism - Ensures high-quality, standardized certificate issuance." />
        <BenefitItem text="Strengthens Verification - QR codes allow for instant certificate validation, enhancing trust and credibility." />
      </div>

      <p className=" text-gray-300 mt-8 max-w-3xl mx-auto">
        This system is ideal for corporate training, universities, online courses, and events, ensuring seamless
        certificate issuance with minimal manual work.
      </p>
    </section>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <span className="text-green-500 mr-2">✅</span>
      <p className="text-gray-200">{text}</p>
    </div>
  )
}
