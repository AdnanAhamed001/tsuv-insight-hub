import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const Disclaimer = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <span className="text-primary-foreground">Disclaimer</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">DISCLAIMER</h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-3xl space-y-8 text-sm text-foreground/80 leading-relaxed">
        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">1. INTRODUCTION</h2>
          <p>1.1 This disclaimer shall govern your use of our website.</p>
          <p>1.2 By using our website, you accept this disclaimer in full. Accordingly, if you disagree with this disclaimer or any part of this disclaimer, you must not use our website.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">2. COPYRIGHT NOTICE</h2>
          <p>2.1 We own and control all the copyright and other intellectual property rights in our website and the material on our website.</p>
          <p>2.2 All the copyright and other intellectual property rights in our website and the material on our website are reserved.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">3. PERMISSION TO USE WEBSITE</h2>
          <p>3.1 You may view, download for caching purposes only, and print pages from the website.</p>
          <p className="mt-2">3.2 You must not:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>republish material from this website;</li>
            <li>sell, rent or sub-license material from the website;</li>
            <li>reproduce, duplicate, copy or otherwise exploit material for a commercial purpose;</li>
            <li>redistribute material from this website.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">4. MISUSE OF WEBSITE</h2>
          <p>4.1 You must not:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>use our website in any way that causes, or may cause, damage to the website;</li>
            <li>use our website in any way which is unlawful, illegal, fraudulent or harmful;</li>
            <li>use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.</li>
          </ul>
          <p className="mt-2">4.2 You must not conduct any systematic or automated data collection activities without our express written consent.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">5. LIMITED WARRANTIES</h2>
          <p>5.1 We do not warrant the completeness or accuracy of the information published on our website.</p>
          <p>5.2 We reserve the right to discontinue or alter any or all of our website services.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">6. LIMITATIONS AND EXCLUSIONS OF LIABILITY</h2>
          <p>6.1 We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.</p>
          <p>6.2 We will not be liable for any business losses, including loss of or damage to profits, income, revenue, production, anticipated savings, business, contracts, commercial opportunities or goodwill.</p>
          <p>6.3 We will not be liable for loss or corruption of any data, database or software.</p>
          <p>6.4 We will not be liable for any special, indirect or consequential loss or damage.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">7. VARIATION</h2>
          <p>7.1 We may revise this disclaimer from time to time.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">8. SEVERABILITY</h2>
          <p>8.1 If a provision of this disclaimer is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">9. LAW AND JURISDICTION</h2>
          <p>9.1 This disclaimer shall be governed by and construed in accordance with Indian Law.</p>
          <p>9.2 Any disputes relating to this disclaimer shall be subject to the exclusive jurisdiction of the courts of India.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">10. STATUTORY AND REGULATORY DISCLOSURES</h2>
          <p>10.1 We are registered at #669F, 3rd floor, AMG Towers, Above ICICI Bank, 2nd Block, HBR Layout, Near BDA Complex, Bangalore – 560043</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">11. CREDIT</h2>
          <p>11.1 This document was created using a template from Docular (https://docular.net).</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Disclaimer;
