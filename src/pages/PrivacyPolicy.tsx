import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <span className="text-primary-foreground">Privacy Policy</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">PRIVACY POLICY</h1>
        <p className="mt-2 text-sm text-primary-foreground/60">Effective Date: 30th April 2021</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-3xl space-y-8 text-sm text-foreground/80 leading-relaxed">
        <p>
          At The Step Up Ventures, (hereafter referred to as TSUV), we are committed to protecting and respecting your privacy. This Privacy Policy explains how TSUV and its affiliates handle personal information.
        </p>
        <p>
          This Privacy Policy describes the types of personal information we obtain from or about users of our services ("data subjects"), how we may use the personal information, with whom we may share such personal information, and the choices available to the data subjects with respect to the use of their personal information. This Privacy Policy also describes the measures we take to safeguard personal information and how data subjects can contact us to exercise their choices and to learn more about our privacy practices.
        </p>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE I. PERSONAL INFORMATION WE COLLECT</h2>
          <p>We collect information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular data subject, household or device ("personal information").</p>
          <p className="mt-2">We will only collect personal information about a data subject if it is provided voluntarily, directly, or is collected to provide services requested by or on behalf of a data subject.</p>
          <p className="mt-2">Categories include:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>Personal contact information (telephone number)</li>
            <li>Business contact information (entity name, address, business email, telephone)</li>
            <li>Payment information (billing address, bank account, routing information)</li>
            <li>Core team member details</li>
            <li>References</li>
          </ul>
          <p className="mt-2">Information is stored and processed in India. It may in future be stored in cloud services outside India. By using our services, you consent to such transfer.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE II. SOURCES OF PERSONAL INFORMATION</h2>
          <p>We obtain personal information when a data subject registers for or uses our services.</p>
          <p className="mt-2">Purposes include:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>Processing incubation applications</li>
            <li>Providing requested services</li>
            <li>Operating and improving services</li>
            <li>Legal compliance</li>
            <li>Communication and support</li>
            <li>Security and fraud prevention</li>
            <li>Research and analytics</li>
            <li>Cookie usage and automated web analytics</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE III. INFORMATION WE SHARE</h2>
          <p>We do not sell or rent personal information. We do not share personal information for third-party direct marketing.</p>
          <h3 className="mt-3 font-semibold text-foreground">A. DISCLOSURES TO AFFILIATES AND SERVICE PROVIDERS</h3>
          <p>We may share information with affiliates and service providers (payment processors, analytics providers, cloud infrastructure providers) for operational purposes.</p>
          <h3 className="mt-3 font-semibold text-foreground">B. DISCLOSURES FOR OTHER PURPOSES</h3>
          <p>We may disclose information:</p>
          <ol className="ml-6 mt-1 list-decimal space-y-1">
            <li>If required by law or legal process</li>
            <li>To government authorities</li>
            <li>To establish or defend legal rights</li>
            <li>To prevent harm or fraud</li>
            <li>During investigations</li>
            <li>With consent</li>
          </ol>
          <p className="mt-2">Business transfers may involve data transfer consistent with this Privacy Policy.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE IV. YOUR CHOICES</h2>
          <p>Data subjects may request: Access, Correction, Deletion, and Restriction of sharing. Verification of identity may be required.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE V. HOW WE PROTECT PERSONAL INFORMATION</h2>
          <p>We maintain administrative, technical and physical safeguards. However, no system is 100% secure.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE VI. RETENTION OF PERSONAL INFORMATION</h2>
          <p>Personal information is retained as required for legal, archival or operational purposes.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE VII. CHILDREN'S PERSONAL INFORMATION</h2>
          <p>Our services are intended for adults. We do not knowingly collect data from minors.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE VIII. UPDATES TO PRIVACY POLICY</h2>
          <p>This Privacy Policy may be updated periodically. Updates will be posted with revision date.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE IX. HOW TO CONTACT US</h2>
          <p>Email: info@thestepupventures.com</p>
          <p>Address: StepUp Ventures Consulting Pvt Ltd, #669F, 3rd Floor, AMG Towers, Above ICICI Bank, 2nd Block, HBR Layout, Near BDA Complex, Bangalore – 560043</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
