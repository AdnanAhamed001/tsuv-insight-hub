import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
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
          <p className="mt-2">We will only collect personal information about a data subject if it is provided to us voluntarily by the data subject, directly, or is collected by us to provide services requested by or on behalf of a data subject. When you provide us personal information, you agree that the personal information is one of the following:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>Your personal information;</li>
            <li>Personal Information of your team members;</li>
          </ul>
          <p className="mt-2">The personal information that we collect is currently stored and processed in India. However, we may in future, choose to store this information in one of the cloud services provider based outside India. By using our services, you consent to any such storage, processing, and transfer of information outside your country of residence.</p>
          <p className="mt-2">The categories of personal information we may collect, directly or indirectly, include the following:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>Personal contact information, such as telephone number;</li>
            <li>Business contact information, such as entityname and address, and business email address and telephone number;</li>
            <li>Payment information, such as billing address, bank account and routing information;</li>
            <li>Details of core team members;</li>
            <li>References;</li>
          </ul>
          <p className="mt-2">This list is not exhaustive and may vary depending on the services we provide. With respect to our TSUV incubator services, the personal information that we collect is minimal in line with the best practices.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE II. SOURCES OF PERSONAL INFORMATION</h2>
          <p>We obtain personal information about data subjects when the data subject, or a person acting on their behalf, registers for or uses our services.</p>
          <p className="mt-2">With regards to the general user, the personal information is used for the purpose of processing the incubation application of the user. We may enter into contracts with third parties that desire to offerrelated services to our users. In the performance of such services, we do not share with the requesting third party any personal information about data subjects.</p>
          <p className="mt-2">We may use the personal information we obtain for the following purposes:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>To provide you with services that you request;</li>
            <li>To operate, administer, support, personalize, and develop our services;</li>
            <li>To seek views or comments on the services we provide;</li>
            <li>To comply with applicable laws, court order, or governmental regulations and to enforce applicable legal requirements and policies, including this Privacy Policy, and our Terms of Use;</li>
            <li>To provide data subjects with support and to respond to inquiries, including to investigate and address concerns and monitor and improve our responses.</li>
            <li>To help maintain the safety, security, and integrity of our website, application, products and services, databases and other technology assets, and business.</li>
            <li>To send communications to users of our service that may be of interest to such users;</li>
            <li>To operate, evaluate and improve our business (including developing new services; analyzing our services; managing our communications; and performing accounting, auditing and other internal functions); and</li>
            <li>To perform product development, testing and data analyses (including market and consumer research).</li>
          </ul>
          <p className="mt-2">We also may use the personal information in other ways with express consent, such as when a data subject chooses to use a service or participate in a program we may offer.</p>
          <p className="mt-2">In addition, by collecting personal information through cookies, and other automated means on our web application, we learn how to best tailor our web application and services to our users. We may use cookies to customize visits to our web application and deliver content consistent with our users' interests and the manner in which our users browse the web application. We may use IP addresses to help diagnose problems with our server and to administer our web application. We also may use IP addresses to help identify users of our web application for the duration of a session and to gather statistical information about our users. We may use web app analytics to determine how much time users spend on each page of our web application, how users navigate through the web application, and how we may tailor our web application and services to better meet the needs of our users.</p>
          <p className="mt-2">We may also use the personal information we obtain about data subjects in other ways for which we provide specific notice at the time of collection.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE III. INFORMATION WE SHARE</h2>
          <p>We do not sell or rent personal information of data subjects. We do not share any personal information with third parties for their own direct marketing purposes. In addition, we do not share or otherwise disclose such personal information, except as described in this Privacy Policy.</p>
          <p className="mt-2">We may disclose personal information for the purposes described in Article II of this Privacy Policy. In addition, we may disclose the personal information to other third parties with express consent by or on behalf of a data subject, such as when the data subject chooses to use a service or participate in a program that we may offer jointly with another entity. When information we collect is aggregated, anonymized or otherwise does not identify a data subject, we may use that information for any purpose or share it with third parties, to the extent permitted by applicable law.</p>
          <h3 className="mt-3 font-semibold text-foreground">A. DISCLOSURES TO AFFILIATES AND SERVICE PROVIDERS FOR BUSINESS PURPOSE</h3>
          <p>We may share personal information of data subjects with our affiliates primarily for business and operational purposes. We may share personal information we obtain about data subjects to service providers we retain to perform services on our behalf, including, payment processors, data analytics providers, and cloud services infrastructure providers. We further contractually prohibit our service providers who access personal information of data subjects from using or disclosing the information, other than to perform services on our behalf or comply with legal requirements. We require these service providers to appropriately safeguard the privacy and security of the consumer personal information they collect, use, disclose or otherwise process on our behalf.</p>
          <h3 className="mt-3 font-semibold text-foreground">B. DISCLOSURES FOR OTHER PURPOSES</h3>
          <p>We may disclose personal information we obtain about a data subject if we are required to do so (1) by law, regulation or pursuant to legal process (such as a court order or subpoena); (2) in response to requests by government agencies, such as law enforcement authorities, and other regulatory authorities; (3) to establish, exercise or defend our legal rights; (4) when we believe disclosure is necessary or appropriate to prevent physical or other harm or financial loss; (5) in connection with an investigation of suspected or actual illegal activity, to address fraud, security or technical issues or to respond to emergencies; or (6) otherwise with consent or at the direction of, or on behalf of, the affected data subject.</p>
          <p className="mt-2">We may transfer personal information we have about a data subject in the event we sell or transfer all or a portion of our business or assets, as permitted or required by law. Should such a transfer occur, we will use commercially reasonable efforts to direct the transferee to use the personal information in a manner that is consistent with this Privacy Policy.</p>
          <p className="mt-2">We also may share the personal information we obtain about you in other ways for which we provide specific notice at the time of collection.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE IV. YOUR CHOICES</h2>
          <p>We offer certain choices in connection with the personal information we maintain about a data subject. At any time, you, the data subject, or your authorized agent or the authorized agent of the data subject (including the parent or guardian of such data subject that is a minor) (the "requestor") may submit to us a verifiable request not to use your or the data subject's personal information, or to refrain from sharing the personal information with third parties, or to access, erase, or amend the personal information we maintain about you or the data subject.</p>
          <p className="mt-2">To help protect the privacy and maintain security, we will take reasonable steps to verify the requestor's identity before granting access to or deleting the data subject's personal information. The requestor is not required to have an account with us to make a verifiable request. The requestor must be able to verify their identity with us and provide us with their authority to act on behalf of you or the data subject, as the case may be.</p>
          <p className="mt-2">To make these requests, please contact us as indicated in the "How to Contact Us" section of this Privacy Policy. If we deny a request, we will notify the requestor of the reasons for the denial. You control the personal information that you provide to us. If you choose not to provide us or let us use certain personal information, you may not be able to take advantage of some of the services we offer.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE V. HOW WE PROTECT PERSONAL INFORMATION</h2>
          <p>We maintain administrative, technical and physical safeguards. However, no system is 100% secure.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">ARTICLE VI. RETENTION OF PERSONAL INFORMATION</h2>
          <p>By contacting us as specified in the "How to Contact Us" section of this Privacy Policy, you or your authorized agent may, at any time, may request that we remove from our databases any personal information we maintain about you or a data subject on whose behalf you are acting, and we will honor such request upon verification, subject to certain exceptions and exemptions. We cannot respond to a request or provide personal information if we are not able to verify the identity or authority of the requestor to make the request or confirm the personal information relates to the data subject to whom the request pertains.</p>
          <p className="mt-2">We may retain certain personal information so we can comply with the request, and notify our service providers to do the same. Unless prohibited by applicable law, we may also retain personal information for archival or record-keeping purpose as required by law or our internal policies and operations.</p>
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
