import { useLanguage } from '../contexts/LanguageContext'

function TermsAndConditions() {
  const { language } = useLanguage()

  if (language === 'en') {
    return (
      <>
        <p><strong>Last updated:</strong> February 16, 2026</p>

        <h3>1. Introduction</h3>
        <p>
          Welcome to DevAgency. By accessing and using our website, services and applications,
          you agree to these Terms and Conditions. If you do not agree with these terms,
          please do not use our services.
        </p>

        <h3>2. Definitions</h3>
        <ul>
          <li><strong>"Services"</strong> – all services offered by DevAgency, including but not limited to web development, mobile applications, UI/UX design and IT consulting</li>
          <li><strong>"Client"</strong> – any individual or legal entity using our services</li>
          <li><strong>"Platform"</strong> – the website, applications and all digital media of DevAgency</li>
          <li><strong>"Content"</strong> – text, images, code, design and other materials provided through the platform</li>
        </ul>

        <h3>3. Acceptance of Terms</h3>
        <p>By using our services, you confirm that you:</p>
        <ul>
          <li>Have full legal capacity to enter into contracts</li>
          <li>Have read and understood these terms</li>
          <li>Agree to comply with applicable laws in Romania and the EU</li>
          <li>Provide accurate and up-to-date information</li>
        </ul>

        <h3>4. Services Provided</h3>
        <p>DevAgency offers the following services:</p>
        <ul>
          <li>Custom web application development</li>
          <li>Mobile application development (iOS, Android)</li>
          <li>UI/UX design and prototyping</li>
          <li>Technical and strategic consulting</li>
          <li>Maintenance and technical support</li>
        </ul>
        <p>We reserve the right to modify, suspend or discontinue any service without prior notice.</p>

        <h3>5. Order and Contract Process</h3>
        <ul>
          <li>Client submits a request via the contact form or email</li>
          <li>DevAgency reviews the request and provides a quote within 3 business days</li>
          <li>Upon acceptance of the quote, a specific service contract is concluded</li>
          <li>The contract becomes valid upon signature by both parties</li>
          <li>Delivery is made according to the timelines set out in the contract</li>
        </ul>

        <h3>6. Pricing and Payments</h3>
        <ul>
          <li>All prices are expressed in RON or EUR and include VAT in accordance with Romanian legislation</li>
          <li>Prices may vary depending on the complexity of the project</li>
          <li>Payment is made according to the schedule established in the contract (typically: 50% upfront, remainder upon delivery)</li>
          <li>Accepted payment methods: bank transfer, credit/debit card</li>
          <li>Tax invoices are issued in accordance with the Romanian Tax Code</li>
          <li>Late payment may incur penalties as set out in the contract</li>
        </ul>

        <h3>7. Intellectual Property</h3>
        <p>
          <strong>7.1 Code Ownership</strong><br />
          Upon full payment, the source code and deliverables become the property of the client,
          with the exception of reusable components and open-source libraries.
        </p>
        <p>
          <strong>7.2 Licences</strong><br />
          DevAgency reserves the right to use the knowledge and techniques developed
          in projects, without disclosing confidential client information.
        </p>
        <p>
          <strong>7.3 DevAgency Property</strong><br />
          The DevAgency name, logo and marketing materials remain the exclusive property
          of the company and are protected by Romanian copyright law.
        </p>

        <h3>8. Confidentiality</h3>
        <p>
          Both parties undertake to maintain the confidentiality of information received during
          the collaboration. For more details, please see the Privacy Policy.
        </p>

        <h3>9. Client Obligations</h3>
        <ul>
          <li>Timely provision of necessary materials and information</li>
          <li>Clear communication of requirements and prompt feedback</li>
          <li>Compliance with payment deadlines</li>
          <li>Legal use of delivered services and products</li>
          <li>Non-disclosure of confidential information received from DevAgency</li>
        </ul>

        <h3>10. DevAgency Obligations</h3>
        <ul>
          <li>Delivery of services in accordance with agreed specifications</li>
          <li>Compliance with the timelines set out in the contract</li>
          <li>Ensuring the quality and functionality of solutions</li>
          <li>Technical support as per the contract terms</li>
          <li>Protection of personal data in accordance with GDPR</li>
        </ul>

        <h3>11. Warranties and Liabilities</h3>
        <p>
          <strong>11.1 Warranty</strong><br />
          DevAgency provides a 30-day warranty period for functional defects,
          starting from the date of final acceptance of the project.
        </p>
        <p>
          <strong>11.2 Limitations</strong><br />
          DevAgency is not liable for:
        </p>
        <ul>
          <li>Indirect damages or loss of profit</li>
          <li>Issues caused by unauthorised modifications to the code</li>
          <li>Unavailability of third-party servers or external services</li>
          <li>Improper use of delivered products</li>
        </ul>

        <h3>12. Force Majeure</h3>
        <p>
          Neither party shall be liable for failure to fulfil contractual obligations due to
          force majeure events (natural disasters, wars, pandemics, major legislative changes, etc.)
          in accordance with the Romanian Civil Code.
        </p>

        <h3>13. Contract Termination</h3>
        <ul>
          <li>The contract may be terminated by mutual agreement between the parties</li>
          <li>The client may terminate with 15 days' written notice</li>
          <li>DevAgency may terminate in the event of non-payment or serious breach of terms</li>
          <li>Upon termination, the client owes payment for services rendered up to that point</li>
        </ul>

        <h3>14. Right of Withdrawal</h3>
        <p>
          In accordance with applicable consumer protection regulations, consumers (individuals)
          have the right to withdraw within 14 days of concluding the contract, unless the
          services have begun with the consumer's explicit consent.
        </p>

        <h3>15. Dispute Resolution</h3>
        <ul>
          <li>The parties will attempt to resolve any disputes amicably</li>
          <li>In the event of disagreement, disputes shall be resolved by the competent courts in Romania</li>
          <li>Romanian law and applicable EU directives apply</li>
          <li>Consumers may use the ODR platform (online dispute resolution): ec.europa.eu/consumers/odr</li>
        </ul>

        <h3>16. Personal Data Protection</h3>
        <p>
          The processing of personal data is carried out in accordance with Regulation (EU) 2016/679 (GDPR)
          and applicable national legislation. For more information, please see the Privacy Policy.
        </p>

        <h3>17. Changes to Terms</h3>
        <p>
          DevAgency reserves the right to modify these terms at any time.
          Changes will be communicated by email or on the website. Continued use of
          services after changes constitutes acceptance of the new terms.
        </p>

        <h3>18. General Provisions</h3>
        <ul>
          <li>If any clause becomes void, the remaining terms remain valid</li>
          <li>These terms represent the entire agreement between the parties</li>
          <li>Any amendments must be made in writing and signed by both parties</li>
        </ul>

        <h3>19. Contact Details</h3>
        <p>For questions regarding these terms, you can contact us at:</p>
        <ul>
          <li><strong>Email:</strong> andreipaiudev@gmail.com</li>
          <li><strong>Phone:</strong> +44 7367 438 601</li>
        </ul>

        <p style={{ marginTop: '32px', fontSize: '0.875rem', color: '#6b8998' }}>
          By using DevAgency's services, you confirm that you have read, understood and accepted
          these Terms and Conditions in their entirety.
        </p>
      </>
    )
  }

  return (
    <>
      <p><strong>Data ultimei actualizări:</strong> 16 februarie 2026</p>

      <h3>1. Introducere</h3>
      <p>
        Bine ați venit la DevAgency. Prin accesarea și utilizarea site-ului nostru web,
        a serviciilor și aplicațiilor noastre, sunteți de acord cu prezentele Termeni și Condiții.
        Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați serviciile noastre.
      </p>

      <h3>2. Definiții</h3>
      <ul>
        <li><strong>„Servicii"</strong> – toate serviciile oferite de DevAgency, incluzând dar nelimitându-se la dezvoltare web, aplicații mobile, design UI/UX și consultanță IT</li>
        <li><strong>„Client"</strong> – orice persoană fizică sau juridică care utilizează serviciile noastre</li>
        <li><strong>„Platformă"</strong> – site-ul web, aplicațiile și toate mediile digitale ale DevAgency</li>
        <li><strong>„Conținut"</strong> – texte, imagini, cod, design și alte materiale furnizate prin platformă</li>
      </ul>

      <h3>3. Acceptarea Termenilor</h3>
      <p>Prin utilizarea serviciilor noastre, confirmați că:</p>
      <ul>
        <li>Aveți capacitate legală deplină de a încheia contracte</li>
        <li>Ați citit și înțeles acești termeni</li>
        <li>Acceptați să respectați legile aplicabile în România și UE</li>
        <li>Furnizați informații corecte și actuale</li>
      </ul>

      <h3>4. Servicii Oferite</h3>
      <p>DevAgency oferă următoarele servicii:</p>
      <ul>
        <li>Dezvoltare de aplicații web personalizate</li>
        <li>Dezvoltare de aplicații mobile (iOS, Android)</li>
        <li>Design UI/UX și prototipare</li>
        <li>Consultanță tehnică și strategică</li>
        <li>Mentenanță și suport tehnic</li>
      </ul>
      <p>Ne rezervăm dreptul de a modifica, suspenda sau întrerupe orice serviciu fără notificare prealabilă.</p>

      <h3>5. Procesul de Comandă și Contractare</h3>
      <ul>
        <li>Clientul trimite o cerere prin formularul de contact sau email</li>
        <li>DevAgency analizează cererea și oferă un devis în maxim 3 zile lucrătoare</li>
        <li>La acceptarea devisului, se încheie un contract specific de prestări servicii</li>
        <li>Contractul devine valabil la semnarea de ambele părți</li>
        <li>Livrarea se face conform termenelor stabilite în contract</li>
      </ul>

      <h3>6. Prețuri și Plăți</h3>
      <ul>
        <li>Toate prețurile sunt exprimate în RON sau EUR și includ TVA conform legislației române</li>
        <li>Prețurile pot varia în funcție de complexitatea proiectului</li>
        <li>Plata se efectuează conform graficului stabilit în contract (de obicei: avans 50%, rest la livrare)</li>
        <li>Metodele de plată acceptate: transfer bancar, card bancar</li>
        <li>Factura fiscală se emite conform Codului Fiscal din România</li>
        <li>Întârzierea la plată poate atrage penalități conform contractului</li>
      </ul>

      <h3>7. Proprietate Intelectuală</h3>
      <p>
        <strong>7.1 Drepturi asupra Codului</strong><br />
        După plata integrală, codul sursa și livrabilele devin proprietatea clientului,
        cu excepția componentelor reutilizabile și librăriilor open-source.
      </p>
      <p>
        <strong>7.2 Licențe</strong><br />
        DevAgency își rezervă dreptul de a utiliza cunoștințele și tehnicile dezvoltate
        în proiecte, fără a dezvălui informații confidențiale ale clientului.
      </p>
      <p>
        <strong>7.3 Proprietatea DevAgency</strong><br />
        Numele, logo-ul și materialele de marketing DevAgency rămân proprietatea exclusivă
        a companiei și sunt protejate de legile drepturilor de autor din România.
      </p>

      <h3>8. Confidențialitate</h3>
      <p>
        Ambele părți se angajează să păstreze confidențialitatea informațiilor primite în
        timpul colaborării. Pentru mai multe detalii, consultați Politica de Confidențialitate.
      </p>

      <h3>9. Obligațiile Clientului</h3>
      <ul>
        <li>Furnizarea la timp a materialelor și informațiilor necesare</li>
        <li>Comunicare clară a cerințelor și feedback prompt</li>
        <li>Respectarea termenelor de plată</li>
        <li>Utilizarea legală a serviciilor și produselor livrate</li>
        <li>Nedezvăluirea informațiilor confidențiale primite de la DevAgency</li>
      </ul>

      <h3>10. Obligațiile DevAgency</h3>
      <ul>
        <li>Livrarea serviciilor conform specificațiilor agreate</li>
        <li>Respectarea termenelor stabilite în contract</li>
        <li>Asigurarea calității și funcționalității soluțiilor</li>
        <li>Suport tehnic conform condițiilor contractului</li>
        <li>Protejarea datelor personale conform GDPR</li>
      </ul>

      <h3>11. Garanții și Responsabilități</h3>
      <p>
        <strong>11.1 Garanție</strong><br />
        DevAgency oferă o perioadă de garanție de 30 de zile pentru defecte de funcționare,
        începând de la data acceptării finale a proiectului.
      </p>
      <p>
        <strong>11.2 Limitări</strong><br />
        DevAgency nu este responsabilă pentru:
      </p>
      <ul>
        <li>Daune indirecte sau pierderi de profit</li>
        <li>Probleme cauzate de modificări neautorizate ale codului</li>
        <li>Indisponibilitatea serverelor terțe sau a serviciilor externe</li>
        <li>Utilizarea necorespunzătoare a produselor livrate</li>
      </ul>

      <h3>12. Forță Majoră</h3>
      <p>
        Niciuna dintre părți nu va fi responsabilă pentru neîndeplinirea obligațiilor
        contractuale din cauza evenimentelor de forță majoră (calamități naturale,
        războaie, pandemii, modificări legislative majore, etc.) conform Codului Civil român.
      </p>

      <h3>13. Rezilierea Contractului</h3>
      <ul>
        <li>Contractul poate fi reziliat de comun acord între părți</li>
        <li>Clientul poate rezilia cu notificare scrisă cu 15 zile înainte</li>
        <li>DevAgency poate rezilia în caz de neplată sau încălcare gravă a termenilor</li>
        <li>La reziliere, clientul datorează plata pentru serviciile prestate până la acel moment</li>
      </ul>

      <h3>14. Drept de Retragere</h3>
      <p>
        Conform OUG 34/2014, consumatorii (persoane fizice) au dreptul de retragere în
        termen de 14 zile de la încheierea contractului, cu excepția cazului în care
        serviciile au început să fie prestate cu acordul explicit al consumatorului.
      </p>

      <h3>15. Soluționarea Litigiilor</h3>
      <ul>
        <li>Părțile vor încerca rezolvarea amiabilă a oricăror dispute</li>
        <li>În caz de neînțelegere, litigiile se soluționează la instanța competentă din România</li>
        <li>Se aplică legislația română și directivele UE aplicabile</li>
        <li>Consumatorii pot apela la platforma SOL (soluționare online a litigiilor): ec.europa.eu/consumers/odr</li>
      </ul>

      <h3>16. Protecția Datelor cu Caracter Personal</h3>
      <p>
        Prelucrarea datelor personale se realizează conform Regulamentului (UE) 2016/679 (GDPR)
        și Legii 190/2018. Pentru mai multe informații, consultați Politica de Confidențialitate.
      </p>

      <h3>17. Modificări ale Termenilor</h3>
      <p>
        DevAgency își rezervă dreptul de a modifica acești termeni în orice moment.
        Modificările vor fi comunicate prin email sau pe site. Utilizarea continuă a
        serviciilor după modificări constituie acceptarea noilor termeni.
      </p>

      <h3>18. Dispoziții Generale</h3>
      <ul>
        <li>În cazul în care o clauză devine nulă, restul termenilor rămân valabili</li>
        <li>Acești termeni reprezintă acordul integral între părți</li>
        <li>Orice amendamente trebuie făcute în scris și semnate de ambele părți</li>
      </ul>

      <h3>19. Date de Contact</h3>
      <p>Pentru întrebări referitoare la acești termeni, ne puteți contacta la:</p>
      <ul>
        <li><strong>Email:</strong> andreipaiudev@gmail.com</li>
        <li><strong>Telefon:</strong> +44 7367 438 601</li>
      </ul>

      <p style={{ marginTop: '32px', fontSize: '0.875rem', color: '#6b8998' }}>
        Prin utilizarea serviciilor DevAgency, confirmați că ați citit, înțeles și acceptat
        acești Termeni și Condiții în integralitatea lor.
      </p>
    </>
  )
}

export default TermsAndConditions
