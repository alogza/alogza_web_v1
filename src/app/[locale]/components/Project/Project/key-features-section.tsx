import FeatureCard from "./feature-card"

export default function KeyFeaturesSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Key Features</h2>

      <div className="space-y-24">
        <FeatureCard
          title="Provide Certificate Templates"
          description="Choose from multiple certificate template designs for customized for specific events."
          imageUrl="/images/asd1.png?height=400&width=600"
          imageAlt="Certificate Templates"
          imagePosition="right"
        />

        <FeatureCard
          title="Google Drive Integration"
          description="Store certificates in a secure Google Drive folder, making them easily accessible."
          imageUrl="/images/asd5.png?height=200&width=200"
          imageAlt="Google Drive Logo"
          imagePosition="left"
          isIcon={true}
        />

        <FeatureCard
          title="CSV-Based Data Processing"
          description="Upload a CSV file containing recipient details, set back and let the magic works."
          imageUrl="/images/asd6.png?height=400&width=600"
          imageAlt="CSV File Preview"
          imagePosition="right"
        />

        <FeatureCard
          title="Automated & Dynamic Certificate Generation"
          description="The system automatically customizes the certificates with recipients' full name, ensuring a unique serial number for each certificate. The system also creates a PDF and archives them in a dedicated folder, making it easy to manage for your organization and accessibility."
          imageUrl="/images/asd6.png?height=400&width=600"
          imageAlt="Dynamic Certificate Generation"
          imagePosition="left"
        />

        <FeatureCard
          title="Email Notification to Recipients"
          description="Emails are sent to each recipient with a direct link to their certificate on Google Drive."
          imageUrl="/images/asd7.png?height=400&width=600"
          imageAlt="Email Notification Preview"
          imagePosition="right"
        />
      </div>
    </section>
  )
}
