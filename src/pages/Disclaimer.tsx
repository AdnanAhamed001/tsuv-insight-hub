import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const Disclaimer = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20 bg-[url('https://images.unsplash.com/photo-1589829085449-307ba711d953?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
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
          <p>2.1 Subject to the express provisions of this disclaimer:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>(a) we, together with our licensors, own and control all the copyright and other intellectual property rights in our website and the material on our website; and</li>
            <li>(b) all the copyright and other intellectual property rights in our website and the material on our website are reserved.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">3. PERMISSION TO USE WEBSITE</h2>
          <p>3.1 You may:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>(a) view pages from our website in a web browser;</li>
            <li>(b) download pages from our website for caching in a web browser; and</li>
            <li>(c) print pages from our website for your own personal and non-commercial use, subject to the other provisions of this disclaimer.</li>
          </ul>
          <p className="mt-2">3.2 Except as expressly permitted by Section 3.1 or the other provisions of this disclaimer, you must not download any material from our website or save any such material to your computer.</p>
          <p className="mt-2">3.3 Unless you own or control the relevant rights in the material, you must not:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>(a) republish material from our website (including republication on another website);</li>
            <li>(b) sell, rent or sub-license material from our website;</li>
            <li>(c) show any material from our website in public;</li>
            <li>(d) exploit material from our website for a commercial purpose; or</li>
            <li>(e) redistribute material from our website.</li>
          </ul>
          <p className="mt-2">3.4 We reserve the right to suspend or restrict access to our website, to areas of our website and/or to functionality upon our website. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on the website.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">4. MISUSE OF WEBSITE</h2>
          <p>4.1 You must not:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>(a) use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability, accessibility, integrity or security of the website;</li>
            <li>(b) use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity;</li>
            <li>(c) hack or otherwise tamper with our website;</li>
            <li>(d) probe, scan or test the vulnerability of our website without our permission;</li>
            <li>(e) circumvent any authentication or security systems or processes on or relating to our website;</li>
            <li>(f) use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;</li>
            <li>(g) impose an unreasonably large load on our website resources (including bandwidth, storage capacity and processing capacity);</li>
            <li>(h) decrypt or decipher any communications sent by or to our website without our permission;</li>
            <li>(i) conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent;</li>
            <li>(j) access or otherwise interact with our website using any robot, spider or other automated means, except for the purpose of search engine indexing;</li>
            <li>(k) use our website except by means of our public interfaces;</li>
            <li>(l) violate the directives set out in the robots.txt file for our website;</li>
            <li>(m) use data collected from our website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing); or</li>
            <li>(n) do anything that interferes with the normal use of our website.</li>
          </ul>
          <p className="mt-2">4.2 You must not use data collected from our website to contact individuals, companies or other persons or entities.</p>
          <p className="mt-2">4.3 You must ensure that all the information you supply to us through our website, or in relation to our website, is true, accurate, current, complete and non-misleading.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">5. LIMITED WARRANTIES</h2>
          <p>5.1 We do not warrant or represent:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>(a) the completeness or accuracy of the information published on our website;</li>
            <li>(b) that the material on the website is up to date;</li>
            <li>(c) that the website will operate without fault; or</li>
            <li>(d) that the website or any service on the website will remain available.</li>
          </ul>
          <p className="mt-2">5.2 We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in this disclaimer, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any website services, or if we stop publishing the website.</p>
          <p className="mt-2">5.3 To the maximum extent permitted by applicable law and subject to Section 6.1, we exclude all representations and warranties relating to the subject matter of this disclaimer, our website and the use of our website.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">6. LIMITATIONS AND EXCLUSIONS OF LIABILITY</h2>
          <p>6.1 Nothing in this disclaimer will:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>(a) limit or exclude any liability for death or personal injury resulting from negligence;</li>
            <li>(b) limit or exclude any liability for fraud or fraudulent misrepresentation;</li>
            <li>(c) limit any liabilities in any way that is not permitted under applicable law; or</li>
            <li>(d) exclude any liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p className="mt-2">6.2 The limitations and exclusions of liability set out in this Section 6 and elsewhere in this disclaimer:</p>
          <ul className="ml-6 mt-1 list-disc space-y-1">
            <li>(a) are subject to Section 6.1; and</li>
            <li>(b) govern all liabilities arising under this disclaimer or relating to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty, except to the extent expressly provided otherwise in this disclaimer.</li>
          </ul>
          <p className="mt-2">6.3 To the extent that our website and the information and services on our website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
          <p className="mt-2">6.4 We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.</p>
          <p className="mt-2">6.5 We will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill.</p>
          <p className="mt-2">6.6 We will not be liable to you in respect of any loss or corruption of any data, database or software.</p>
          <p className="mt-2">6.7 We will not be liable to you in respect of any special, indirect or consequential loss or damage.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">7. VARIATION</h2>
          <p>7.1 We may revise this disclaimer from time to time.</p>
          <p className="mt-2">7.2 The revised disclaimer shall apply to the use of our website from the time of publication of the revised disclaimer on the website.</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-bold text-foreground">8. SEVERABILITY</h2>
          <p>8.1 If a provision of this disclaimer is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.</p>
          <p className="mt-2">8.2 If any unlawful and/or unenforceable provision of this disclaimer would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>
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
