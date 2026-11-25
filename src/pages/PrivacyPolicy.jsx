import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const privacySections = [
  {
    title: 'Information we collect',
    text:
      'We collect contact details, project-related information, service requests, and communication records when you enquire, request a quote, or contact our team. This helps us understand your requirements and respond appropriately.',
  },
  {
    title: 'How we use your information',
    text:
      'Your information is used to manage enquiries, prepare quotations, provide support, improve our services, and communicate important updates related to your project or our business.',
  },
  {
    title: 'Cookies and analytics',
    text:
      'We may use cookies and analytics tools to understand site usage trends, measure performance, and improve the user experience on our website.',
  },
  {
    title: 'Data sharing',
    text:
      'We do not sell your personal information. We may share data only with trusted service providers who support our business operations, or where required by law.',
  },
  {
    title: 'Retention and security',
    text:
      'We keep personal information only as long as needed for the purposes described above and apply reasonable safeguards to protect it against unauthorised access or misuse.',
  },
  {
    title: 'Your rights',
    text:
      'You may request access, correction, or deletion of your personal information, and you can contact us at any time to discuss privacy concerns or update your preferences.',
  },
];

function PrivacyPolicy() {
  return (
    <main className="bg-[#0b0b0c] text-white">
      <section className="border-b border-white/10 bg-[#0d0d0f]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            Privacy, protection, and trust
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#d1d5db]">
            This policy explains how JB & SONS POWER SOLUTIONS handles personal information collected through our website, enquiries, and service requests.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Overview"
            title="How we protect your information"
            subtitle="We are committed to handling personal data responsibly, transparently, and in line with best practices."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {privacySections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-white/10 bg-[#111214] p-6">
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#d1d5db]">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

export default PrivacyPolicy;
