import { useLanguage } from '../contexts/LanguageContext'

function PrivacyPolicy() {
  const { language } = useLanguage()

  if (language === 'en') {
    return (
      <>
        <p><strong>Last updated:</strong> February 16, 2026</p>

        <h3>1. Introduction</h3>
        <p>
          DevAgency ("we", "our" or "the company") respects your right to privacy and protects
          the personal data of users in accordance with Regulation (EU) 2016/679 (GDPR) and
          applicable national legislation.
        </p>
        <p>
          This policy explains what data we collect, how we use it, who we share it with and
          what your rights are.
        </p>

        <h3>2. Identity of the Controller</h3>
        <ul>
          <li><strong>Data Controller:</strong> DevAgency</li>
          <li><strong>Email:</strong> andreipaiudev@gmail.com</li>
          <li><strong>Phone:</strong> +44 7367 438 601</li>
        </ul>

        <h3>3. Personal Data We Collect</h3>
        <p><strong>3.1 Data you provide directly:</strong></p>
        <ul>
          <li><strong>Contact data:</strong> name, surname, email, phone number</li>
          <li><strong>Identification data:</strong> company name, tax ID (for legal entities)</li>
          <li><strong>Financial data:</strong> billing information, bank details</li>
          <li><strong>Communication data:</strong> messages and requests sent via forms or email</li>
          <li><strong>Project data:</strong> technical requirements, preferences, feedback</li>
        </ul>
        <p><strong>3.2 Automatically collected data:</strong></p>
        <ul>
          <li><strong>Technical data:</strong> IP address, browser type, operating system</li>
          <li><strong>Usage data:</strong> pages visited, visit duration, traffic source</li>
          <li><strong>Cookies:</strong> as per our Cookies Policy</li>
        </ul>

        <h3>4. Purposes of Processing</h3>
        <p>We process your personal data for the following legal purposes:</p>
        <ul>
          <li><strong>Performance of contract (Art. 6(1)(b) GDPR):</strong>
            <ul>
              <li>Processing requests and quotes</li>
              <li>Provision of contracted services</li>
              <li>Communication regarding projects</li>
              <li>Invoicing and payments</li>
            </ul>
          </li>
          <li><strong>Legal obligations (Art. 6(1)(c) GDPR):</strong>
            <ul>
              <li>Issuing tax invoices</li>
              <li>Accounting archiving (10 years per tax regulations)</li>
              <li>Reporting to tax authorities</li>
            </ul>
          </li>
          <li><strong>Legitimate interests (Art. 6(1)(f) GDPR):</strong>
            <ul>
              <li>Improving our services</li>
              <li>Usage analytics and statistics</li>
              <li>Fraud protection</li>
              <li>Direct marketing (with opt-out option)</li>
            </ul>
          </li>
          <li><strong>Consent (Art. 6(1)(a) GDPR):</strong>
            <ul>
              <li>Newsletter and promotional communications</li>
              <li>Non-essential cookies</li>
            </ul>
          </li>
        </ul>

        <h3>5. How We Protect Your Data</h3>
        <p>We have implemented appropriate technical and organisational security measures:</p>
        <ul>
          <li>SSL/TLS encryption for data transmission</li>
          <li>Secure servers with firewall protection</li>
          <li>Restricted data access to authorised personnel only</li>
          <li>Regular encrypted backups</li>
          <li>Continuous monitoring for security threats</li>
          <li>Strict password and authentication policies</li>
          <li>Periodic security audits</li>
        </ul>

        <h3>6. Who We Share Your Data With</h3>
        <p>Your data may be shared with the following recipients:</p>
        <ul>
          <li><strong>IT service providers:</strong> hosting, email, cloud storage (under processing agreements)</li>
          <li><strong>Payment processors:</strong> for financial transactions</li>
          <li><strong>Technical consultants:</strong> only when necessary for the project (under NDA)</li>
          <li><strong>Tax authorities:</strong> as required by law</li>
          <li><strong>Judicial authorities:</strong> upon lawful request</li>
        </ul>
        <p>We do not sell or rent your personal data to third parties.</p>

        <h3>7. International Data Transfers</h3>
        <p>If we use cloud services outside the EU, we ensure that:</p>
        <ul>
          <li>The transfer is to countries with an EU adequacy decision, OR</li>
          <li>Standard contractual clauses approved by the European Commission are in place, OR</li>
          <li>The provider holds an equivalent certification</li>
        </ul>

        <h3>8. Data Retention Periods</h3>
        <ul>
          <li><strong>Contractual data:</strong> duration of contract + 10 years (accounting and tax obligations)</li>
          <li><strong>Unaccepted quotes:</strong> 3 years</li>
          <li><strong>Communication data:</strong> 2 years from last contact</li>
          <li><strong>Marketing data:</strong> until consent is withdrawn</li>
          <li><strong>Technical data (logs):</strong> maximum 12 months</li>
        </ul>
        <p>After the retention periods expire, data is permanently deleted or anonymised.</p>

        <h3>9. Your Rights under GDPR</h3>
        <p>You have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Right of access (Art. 15):</strong> to obtain a copy of the data we process</li>
          <li><strong>Right to rectification (Art. 16):</strong> to correct inaccurate data</li>
          <li><strong>Right to erasure (Art. 17):</strong> "right to be forgotten" (with legal exceptions)</li>
          <li><strong>Right to restriction (Art. 18):</strong> to limit processing</li>
          <li><strong>Right to data portability (Art. 20):</strong> to receive your data in a structured format</li>
          <li><strong>Right to object (Art. 21):</strong> to object to processing for marketing purposes</li>
          <li><strong>Right to withdraw consent:</strong> at any time</li>
          <li><strong>Right to lodge a complaint:</strong> with the competent supervisory authority</li>
        </ul>
        <p>
          To exercise your rights, contact us at: andreipaiudev@gmail.com<br />
          We will respond within 30 days.
        </p>

        <h3>10. Cookies Policy</h3>
        <p>
          <strong>10.1 What are cookies?</strong><br />
          Cookies are small files stored on your device to improve your browsing experience.
        </p>
        <p><strong>10.2 Types of cookies we use:</strong></p>
        <ul>
          <li><strong>Essential cookies:</strong> necessary for the website to function (session, security)</li>
          <li><strong>Performance cookies:</strong> traffic analysis, statistics (e.g. Google Analytics)</li>
          <li><strong>Functional cookies:</strong> user preferences, language</li>
          <li><strong>Marketing cookies:</strong> personalised advertising (with consent)</li>
        </ul>
        <p>
          <strong>10.3 Managing cookies:</strong><br />
          You can accept, refuse or delete cookies through your browser settings.
          Disabling essential cookies may affect website functionality.
        </p>

        <h3>11. Marketing and Newsletter</h3>
        <p>If you subscribed to our newsletter:</p>
        <ul>
          <li>We will send information about new services, offers and relevant content</li>
          <li>You may unsubscribe at any time via the "Unsubscribe" link in the email</li>
          <li>We will not send spam and respect a reasonable communication frequency</li>
          <li>Data will be used for marketing purposes only and will not be sold</li>
        </ul>

        <h3>12. Minors</h3>
        <p>
          Our services are not intended for persons under the age of 16. We do not knowingly
          collect data from minors. If you discover that a minor has provided personal data,
          please contact us immediately.
        </p>

        <h3>13. Changes to This Policy</h3>
        <p>
          We reserve the right to update this policy to reflect legislative or practice changes.
          Significant changes will be communicated by email or website notification.
          The date of the last update is displayed at the top of this document.
        </p>

        <h3>14. Security Breaches</h3>
        <p>
          In the event of a personal data breach posing a risk to your rights, we will notify
          you within 72 hours in accordance with GDPR and will report to the supervisory authority.
        </p>

        <h3>15. Supervisory Authority</h3>
        <p>
          You have the right to lodge a complaint with the supervisory authority in your country.
          In Romania, the competent authority is:
        </p>
        <ul>
          <li><strong>ANSPDCP</strong> (National Supervisory Authority for Personal Data Processing)</li>
          <li><strong>Address:</strong> B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, Bucharest</li>
          <li><strong>Phone:</strong> +40 318 059 211</li>
          <li><strong>Email:</strong> anspdcp@dataprotection.ro</li>
          <li><strong>Website:</strong> www.dataprotection.ro</li>
        </ul>

        <h3>16. Legal Bases</h3>
        <p>This policy is compliant with:</p>
        <ul>
          <li>Regulation (EU) 2016/679 (GDPR)</li>
          <li>Applicable national implementation legislation</li>
          <li>Directive 2002/58/EC on privacy and electronic communications</li>
        </ul>

        <h3>17. Data Protection Contact</h3>
        <p>For questions or requests related to personal data, contact us at:</p>
        <ul>
          <li><strong>Email:</strong> andreipaiudev@gmail.com</li>
          <li><strong>Phone:</strong> +44 7367 438 601</li>
          <li><strong>Email subject:</strong> "Personal Data Protection - GDPR"</li>
        </ul>

        <p style={{ marginTop: '32px', fontSize: '0.875rem', color: '#6b8998' }}>
          By using DevAgency's services, you confirm that you have read and understood this
          Privacy Policy and consent to the processing of data as described herein.
        </p>
      </>
    )
  }

  return (
    <>
      <p><strong>Data ultimei actualizări:</strong> 16 februarie 2026</p>

      <h3>1. Introducere</h3>
      <p>
        DevAgency („noi", „nostru" sau „compania") respectă dreptul la confidențialitate
        și protejează datele personale ale utilizatorilor conform Regulamentului (UE) 2016/679
        privind protecția datelor (GDPR), Legii nr. 190/2018 și Legii nr. 677/2001 pentru
        protecția persoanelor cu privire la prelucrarea datelor cu caracter personal și
        libera circulație a acestor date.
      </p>
      <p>
        Această politică explică ce date colectăm, cum le folosim, cui le dezvăluim și
        care sunt drepturile dumneavoastră.
      </p>

      <h3>2. Date de Identificare</h3>
      <ul>
        <li><strong>Operator de date:</strong> DevAgency</li>
        <li><strong>Email:</strong> andreipaiudev@gmail.com</li>
        <li><strong>Telefon:</strong> +44 7367 438 601</li>
      </ul>

      <h3>3. Ce Date Personale Colectăm</h3>
      <p><strong>3.1 Date furnizate direct de dumneavoastră:</strong></p>
      <ul>
        <li><strong>Date de contact:</strong> nume, prenume, email, telefon</li>
        <li><strong>Date de identificare:</strong> denumire companie, CUI/CIF (pentru persoane juridice)</li>
        <li><strong>Date financiare:</strong> informații de facturare, date bancare</li>
        <li><strong>Date de comunicare:</strong> mesajele și cererile trimise prin formulare sau email</li>
        <li><strong>Date proiect:</strong> cerințe tehnice, preferințe, feedback</li>
      </ul>
      <p><strong>3.2 Date colectate automat:</strong></p>
      <ul>
        <li><strong>Date tehnice:</strong> adresă IP, tip browser, sistem de operare</li>
        <li><strong>Date de utilizare:</strong> pagini vizitate, durata vizitei, sursa de trafic</li>
        <li><strong>Cookie-uri:</strong> conform politicii noastre de cookie-uri</li>
      </ul>

      <h3>4. Scopul Prelucrării Datelor</h3>
      <p>Prelucrăm datele dumneavoastră personale pentru următoarele scopuri legale:</p>
      <ul>
        <li><strong>Executarea contractului (Art. 6(1)(b) GDPR):</strong>
          <ul>
            <li>Procesarea cererilor și ofertelor</li>
            <li>Prestarea serviciilor contractate</li>
            <li>Comunicare în legătură cu proiectele</li>
            <li>Facturare și plăți</li>
          </ul>
        </li>
        <li><strong>Obligații legale (Art. 6(1)(c) GDPR):</strong>
          <ul>
            <li>Emiterea facturilor fiscale</li>
            <li>Arhivare contabilă (10 ani conform Codului Fiscal)</li>
            <li>Raportare către autoritățile fiscale</li>
          </ul>
        </li>
        <li><strong>Interese legitime (Art. 6(1)(f) GDPR):</strong>
          <ul>
            <li>Îmbunătățirea serviciilor noastre</li>
            <li>Analiza și statistici de utilizare</li>
            <li>Protecția împotriva fraudelor</li>
            <li>Marketing direct (cu posibilitatea de opt-out)</li>
          </ul>
        </li>
        <li><strong>Consimțământ (Art. 6(1)(a) GDPR):</strong>
          <ul>
            <li>Newsletter și comunicări promoționale</li>
            <li>Cookie-uri non-esențiale</li>
          </ul>
        </li>
      </ul>

      <h3>5. Cum Protejăm Datele Dumneavoastră</h3>
      <p>Am implementat măsuri tehnice și organizatorice de securitate:</p>
      <ul>
        <li>Criptare SSL/TLS pentru transmiterea datelor</li>
        <li>Servere securizate cu protecție firewall</li>
        <li>Acces restricționat la date doar pentru personal autorizat</li>
        <li>Backup-uri regulate și criptate</li>
        <li>Monitorizare continuă pentru amenințări de securitate</li>
        <li>Politici stricte de parolă și autentificare</li>
        <li>Audituri periodice de securitate</li>
      </ul>

      <h3>6. Cui Dezvăluim Datele</h3>
      <p>Datele dumneavoastră pot fi dezvăluite următorilor destinatari:</p>
      <ul>
        <li><strong>Furnizori de servicii IT:</strong> hosting, email, cloud storage (cu contracte de prelucrare)</li>
        <li><strong>Procesatori de plăți:</strong> pentru tranzacții financiare</li>
        <li><strong>Consultanți tehnici:</strong> doar când e necesar pentru proiect (cu NDA)</li>
        <li><strong>Autoritățile fiscale:</strong> conform obligațiilor legale (ANAF)</li>
        <li><strong>Autorități judiciare:</strong> la cerere legală</li>
      </ul>
      <p>Nu vindem și nu închiriem datele dumneavoastră personale terților.</p>

      <h3>7. Transfer Internațional de Date</h3>
      <p>În cazul în care utilizăm servicii cloud în afara UE, ne asigurăm că:</p>
      <ul>
        <li>Transferul se face către țări cu decizie de adecvare UE, SAU</li>
        <li>Există clauze contractuale standard aprobate de Comisia Europeană, SAU</li>
        <li>Furnizorul este certificat sau echivalent</li>
      </ul>

      <h3>8. Durata de Stocare a Datelor</h3>
      <ul>
        <li><strong>Date contractuale:</strong> pe durata contractului + 10 ani (obligații contabile și fiscale)</li>
        <li><strong>Oferte neacceptate:</strong> 3 ani</li>
        <li><strong>Date de comunicare:</strong> 2 ani de la ultimul contact</li>
        <li><strong>Date de marketing:</strong> până la retragerea consimțământului</li>
        <li><strong>Date tehnice (loguri):</strong> maxim 12 luni</li>
      </ul>
      <p>După expirarea perioadelor, datele sunt șterse sau anonimizate definitiv.</p>

      <h3>9. Drepturile Dumneavoastră conform GDPR</h3>
      <p>Aveți următoarele drepturi privind datele personale:</p>
      <ul>
        <li><strong>Dreptul de acces (Art. 15):</strong> să obțineți o copie a datelor prelucrate</li>
        <li><strong>Dreptul la rectificare (Art. 16):</strong> să corectați date incorecte</li>
        <li><strong>Dreptul la ștergere (Art. 17):</strong> „dreptul de a fi uitat" (cu excepții legale)</li>
        <li><strong>Dreptul la restricționare (Art. 18):</strong> să limitați prelucrarea</li>
        <li><strong>Dreptul la portabilitate (Art. 20):</strong> să obțineți datele în format structurat</li>
        <li><strong>Dreptul la opoziție (Art. 21):</strong> să vă opuneți prelucrării pentru marketing</li>
        <li><strong>Dreptul de a vă retrage consimțământul:</strong> în orice moment</li>
        <li><strong>Dreptul de a depune plângere:</strong> la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</li>
      </ul>
      <p>
        Pentru exercitarea drepturilor, contactați-ne la: andreipaiudev@gmail.com<br />
        Vom răspunde în termen de 30 de zile.
      </p>

      <h3>10. Politica de Cookie-uri</h3>
      <p>
        <strong>10.1 Ce sunt cookie-urile?</strong><br />
        Cookie-urile sunt fișiere mici stocate pe dispozitivul dumneavoastră pentru
        îmbunătățirea experienței de navigare.
      </p>
      <p><strong>10.2 Tipuri de cookie-uri utilizate:</strong></p>
      <ul>
        <li><strong>Cookie-uri esențiale:</strong> necesare pentru funcționarea site-ului (sesiune, securitate)</li>
        <li><strong>Cookie-uri de performanță:</strong> analiză trafic, statistici (Google Analytics)</li>
        <li><strong>Cookie-uri funcționale:</strong> preferințe utilizator, limba</li>
        <li><strong>Cookie-uri de marketing:</strong> publicitate personalizată (cu consimțământ)</li>
      </ul>
      <p>
        <strong>10.3 Gestionarea cookie-urilor:</strong><br />
        Puteți accepta, refuza sau șterge cookie-urile prin setările browser-ului.
        Dezactivarea cookie-urilor esențiale poate afecta funcționalitatea site-ului.
      </p>

      <h3>11. Marketing și Newsletter</h3>
      <p>Dacă v-ați abonat la newsletter-ul nostru:</p>
      <ul>
        <li>Vom trimite informații despre servicii noi, oferte și conținut relevant</li>
        <li>Puteți renunța oricând prin link-ul „Dezabonare" din email</li>
        <li>Nu vom trimite spam și respectăm frecvența rezonabilă de comunicare</li>
        <li>Datele vor fi folosite doar pentru scopuri de marketing, nu vor fi vândute</li>
      </ul>

      <h3>12. Minori</h3>
      <p>
        Serviciile noastre nu sunt destinate persoanelor sub 16 ani. Nu colectăm cu
        bună știință date de la minori. Dacă descoperiți că un minor a furnizat date
        personale, vă rugăm să ne contactați imediat.
      </p>

      <h3>13. Modificări ale Politicii</h3>
      <p>
        Ne rezervăm dreptul de a actualiza această politică pentru a reflecta schimbările
        legislative sau de practică. Modificările importante vor fi comunicate prin email
        sau notificare pe site. Data ultimei actualizări este afișată la începutul documentului.
      </p>

      <h3>14. Încălcări de Securitate</h3>
      <p>
        În cazul unei încălcări de date personale care prezintă risc pentru drepturile
        dumneavoastră, vă vom notifica în termen de 72 de ore conform GDPR și vom anunța
        ANSPDCP.
      </p>

      <h3>15. Autoritatea de Supraveghere</h3>
      <p>Autoritatea competentă în România pentru protecția datelor este:</p>
      <ul>
        <li><strong>ANSPDCP</strong> (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal)</li>
        <li><strong>Adresa:</strong> B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București</li>
        <li><strong>Telefon:</strong> +40 318 059 211</li>
        <li><strong>Email:</strong> anspdcp@dataprotection.ro</li>
        <li><strong>Website:</strong> www.dataprotection.ro</li>
      </ul>

      <h3>16. Baze Legale</h3>
      <p>Această politică este conformă cu:</p>
      <ul>
        <li>Regulamentul (UE) 2016/679 (GDPR)</li>
        <li>Legea nr. 190/2018 privind măsuri de punere în aplicare a GDPR</li>
        <li>Legea nr. 677/2001 pentru protecția persoanelor cu privire la prelucrarea datelor cu caracter personal</li>
        <li>Directiva 2002/58/CE privind viața privată și comunicările electronice</li>
        <li>OUG 34/2014 privind drepturile consumatorilor</li>
      </ul>

      <h3>17. Contact pentru Protecția Datelor</h3>
      <p>Pentru întrebări sau cereri legate de datele personale, ne puteți contacta:</p>
      <ul>
        <li><strong>Email:</strong> andreipaiudev@gmail.com</li>
        <li><strong>Telefon:</strong> +44 7367 438 601</li>
        <li><strong>Subiect email:</strong> „Protecția Datelor Personale - GDPR"</li>
      </ul>

      <p style={{ marginTop: '32px', fontSize: '0.875rem', color: '#6b8998' }}>
        Prin utilizarea serviciilor DevAgency, confirmați că ați citit și înțeles această
        Politică de Confidențialitate și consimțiți la prelucrarea datelor conform
        termenilor prezentați.
      </p>
    </>
  )
}

export default PrivacyPolicy
