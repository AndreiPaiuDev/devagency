import { useLanguage } from '../contexts/LanguageContext'

function CookiesPolicy() {
  const { language } = useLanguage()

  if (language === 'en') {
    return (
      <>
        <p><strong>Last updated:</strong> February 16, 2026</p>

        <h3>1. What Are Cookies?</h3>
        <p>
          Cookies are small text files placed on your device (computer, tablet or smartphone)
          when you visit a website. They are widely used to make websites work more efficiently,
          to provide a better browsing experience, and to give website owners information about
          how their site is used.
        </p>
        <p>
          This Cookies Policy explains what cookies we use, why we use them, and how you can
          control them. It should be read alongside our Privacy Policy.
        </p>

        <h3>2. Legal Basis</h3>
        <p>
          We use cookies in accordance with:
        </p>
        <ul>
          <li>Regulation (EU) 2016/679 (GDPR) – Art. 6(1)(a) for consent-based cookies</li>
          <li>Directive 2002/58/EC (ePrivacy Directive) on electronic communications</li>
          <li>Applicable national implementing legislation</li>
        </ul>
        <p>
          Under GDPR, we only place non-essential cookies after you have given your explicit,
          informed and freely given consent. You may withdraw this consent at any time.
        </p>

        <h3>3. Types of Cookies We Use</h3>

        <p><strong>3.1 Strictly Necessary Cookies</strong></p>
        <p>
          These cookies are essential for the website to function properly. They enable core
          functionality such as security, network management and accessibility. You cannot
          opt out of these cookies as the website cannot function without them.
        </p>
        <ul>
          <li><strong>Session cookies:</strong> maintain your session while you browse the site</li>
          <li><strong>Security cookies:</strong> protect against cross-site request forgery (CSRF)</li>
          <li><strong>Cookie consent cookie:</strong> remembers your cookie preferences</li>
          <li><strong>Language preference:</strong> stores your selected language (EN/RO)</li>
        </ul>
        <p>Legal basis: Legitimate interest (Art. 6(1)(f) GDPR) – no consent required.</p>

        <p><strong>3.2 Performance & Analytics Cookies</strong></p>
        <p>
          These cookies collect information about how visitors use our website — for example,
          which pages are visited most often and whether error messages are received. All
          information is aggregated and therefore anonymous. These cookies help us improve
          how the website works.
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> tracks page views, session duration, traffic sources and user behaviour (anonymised IP)</li>
        </ul>
        <p>Legal basis: Consent (Art. 6(1)(a) GDPR) – only activated after your consent.</p>

        <p><strong>3.3 Functional Cookies</strong></p>
        <p>
          These cookies allow the website to remember choices you make (such as your language
          preference) and provide enhanced, more personal features. They may also be used to
          provide services you have requested, such as watching a video.
        </p>
        <ul>
          <li><strong>UI preferences:</strong> stores display settings you have selected</li>
        </ul>
        <p>Legal basis: Consent (Art. 6(1)(a) GDPR).</p>

        <p><strong>3.4 Marketing & Targeting Cookies</strong></p>
        <p>
          These cookies are used to deliver advertisements relevant to you and your interests.
          They are also used to limit the number of times you see an advertisement and to
          help measure the effectiveness of advertising campaigns.
        </p>
        <ul>
          <li><strong>Remarketing cookies:</strong> allow us to show targeted ads on third-party platforms</li>
          <li><strong>Social media pixels:</strong> track interactions with embedded content</li>
        </ul>
        <p>
          Legal basis: Consent (Art. 6(1)(a) GDPR) – only activated after your explicit consent.
          We do not use marketing cookies without your prior agreement.
        </p>

        <h3>4. Third-Party Cookies</h3>
        <p>
          Some cookies on our site are set by third-party services that appear on our pages.
          We do not control how these third parties use their cookies — please refer to their
          respective privacy policies:
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> policies.google.com/privacy</li>
          <li><strong>Google Fonts:</strong> policies.google.com/privacy</li>
        </ul>

        <h3>5. Cookie Duration</h3>
        <ul>
          <li><strong>Session cookies:</strong> deleted when you close your browser</li>
          <li><strong>Persistent cookies:</strong> remain for a fixed period (detailed in the table below)</li>
        </ul>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2a3f4f' }}>
              <th style={{ textAlign: 'left', padding: '8px', color: '#7eb3c8' }}>Cookie Name</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#7eb3c8' }}>Purpose</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#7eb3c8' }}>Duration</th>
              <th style={{ textAlign: 'left', padding: '8px', color: '#7eb3c8' }}>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #1a2f3f' }}>
              <td style={{ padding: '8px' }}>cookie_consent</td>
              <td style={{ padding: '8px' }}>Stores cookie preferences</td>
              <td style={{ padding: '8px' }}>12 months</td>
              <td style={{ padding: '8px' }}>Necessary</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #1a2f3f' }}>
              <td style={{ padding: '8px' }}>language</td>
              <td style={{ padding: '8px' }}>Stores language preference</td>
              <td style={{ padding: '8px' }}>12 months</td>
              <td style={{ padding: '8px' }}>Necessary</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #1a2f3f' }}>
              <td style={{ padding: '8px' }}>_ga</td>
              <td style={{ padding: '8px' }}>Google Analytics – distinguishes users</td>
              <td style={{ padding: '8px' }}>2 years</td>
              <td style={{ padding: '8px' }}>Analytics</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #1a2f3f' }}>
              <td style={{ padding: '8px' }}>_ga_*</td>
              <td style={{ padding: '8px' }}>Google Analytics – session state</td>
              <td style={{ padding: '8px' }}>2 years</td>
              <td style={{ padding: '8px' }}>Analytics</td>
            </tr>
          </tbody>
        </table>

        <h3>6. Your Rights and Cookie Choices</h3>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Accept all cookies</strong> – enables full website functionality and analytics</li>
          <li><strong>Accept essential cookies only</strong> – the website will still function but analytics and marketing features will be disabled</li>
          <li><strong>Withdraw consent at any time</strong> – you can change your preferences by clicking the "Cookie Settings" link in the footer</li>
        </ul>
        <p>
          You can also control cookies through your browser settings. Please note that restricting
          cookies may impact the functionality of our website. For guidance on managing cookies in
          popular browsers:
        </p>
        <ul>
          <li>Google Chrome: Settings → Privacy and security → Cookies</li>
          <li>Mozilla Firefox: Options → Privacy & Security → Cookies and Site Data</li>
          <li>Safari: Preferences → Privacy → Manage Website Data</li>
          <li>Microsoft Edge: Settings → Cookies and site permissions</li>
        </ul>

        <h3>7. Do Not Track</h3>
        <p>
          Some browsers include a "Do Not Track" (DNT) feature. Our website currently does not
          respond to DNT signals, but we respect your preferences set through our consent banner.
        </p>

        <h3>8. Changes to This Policy</h3>
        <p>
          We may update this Cookies Policy from time to time to reflect changes in technology,
          legislation or our data practices. We will notify you of significant changes by
          displaying a notice on our website. We encourage you to periodically review this page.
        </p>

        <h3>9. Contact Us</h3>
        <p>If you have any questions about our use of cookies, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> andreipaiudev@gmail.com</li>
          <li><strong>Phone:</strong> +44 7367 438 601</li>
          <li><strong>Email subject:</strong> "Cookies Policy Enquiry"</li>
        </ul>

        <p style={{ marginTop: '32px', fontSize: '0.875rem', color: '#6b8998' }}>
          By continuing to use our website after being shown the cookie banner, and selecting
          your preferences, you acknowledge that you have read and understood this Cookies Policy.
        </p>
      </>
    )
  }

  return (
    <>
      <p><strong>Data ultimei actualizări:</strong> 16 februarie 2026</p>

      <h3>1. Ce Sunt Cookie-urile?</h3>
      <p>
        Cookie-urile sunt fișiere text de mici dimensiuni plasate pe dispozitivul dumneavoastră
        (computer, tabletă sau smartphone) atunci când vizitați un site web. Sunt utilizate pe
        scară largă pentru a face site-urile web să funcționeze mai eficient, pentru a oferi o
        experiență de navigare mai bună și pentru a furniza proprietarilor de site-uri informații
        despre modul în care site-ul este utilizat.
      </p>
      <p>
        Această Politică de Cookie-uri explică ce cookie-uri utilizăm, de ce le folosim și cum
        le puteți controla. Trebuie citită împreună cu Politica noastră de Confidențialitate.
      </p>

      <h3>2. Baza Legală</h3>
      <p>Utilizăm cookie-uri în conformitate cu:</p>
      <ul>
        <li>Regulamentul (UE) 2016/679 (GDPR) – Art. 6(1)(a) pentru cookie-urile bazate pe consimțământ</li>
        <li>Directiva 2002/58/CE (Directiva ePrivacy) privind comunicațiile electronice</li>
        <li>Legislația națională de implementare aplicabilă</li>
      </ul>
      <p>
        În conformitate cu GDPR, plasăm cookie-uri non-esențiale doar după ce ați acordat
        consimțământul dumneavoastră explicit, informat și liber exprimat. Puteți retrage
        acest consimțământ în orice moment.
      </p>

      <h3>3. Tipuri de Cookie-uri pe care le Utilizăm</h3>

      <p><strong>3.1 Cookie-uri Strict Necesare</strong></p>
      <p>
        Aceste cookie-uri sunt esențiale pentru funcționarea corectă a site-ului web. Ele permit
        funcționalități de bază precum securitatea, gestionarea rețelei și accesibilitatea.
        Nu vă puteți dezabona de la aceste cookie-uri deoarece site-ul nu poate funcționa fără ele.
      </p>
      <ul>
        <li><strong>Cookie-uri de sesiune:</strong> mențin sesiunea dumneavoastră în timp ce navigați pe site</li>
        <li><strong>Cookie-uri de securitate:</strong> protecție împotriva atacurilor CSRF</li>
        <li><strong>Cookie consimțământ:</strong> reține preferințele dumneavoastră privind cookie-urile</li>
        <li><strong>Preferință limbă:</strong> stochează limba selectată (EN/RO)</li>
      </ul>
      <p>Baza legală: Interes legitim (Art. 6(1)(f) GDPR) – nu este necesar consimțământul.</p>

      <p><strong>3.2 Cookie-uri de Performanță și Analiză</strong></p>
      <p>
        Aceste cookie-uri colectează informații despre modul în care vizitatorii folosesc site-ul
        nostru – de exemplu, ce pagini sunt vizitate cel mai des și dacă se primesc mesaje de
        eroare. Toate informațiile sunt agregate și, prin urmare, anonime. Aceste cookie-uri ne
        ajută să îmbunătățim modul în care funcționează site-ul.
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> urmărește vizualizările de pagini, durata sesiunii, sursele de trafic și comportamentul utilizatorilor (IP anonimizat)</li>
      </ul>
      <p>Baza legală: Consimțământ (Art. 6(1)(a) GDPR) – activate doar după consimțământul dumneavoastră.</p>

      <p><strong>3.3 Cookie-uri Funcționale</strong></p>
      <p>
        Aceste cookie-uri permit site-ului să rețină alegerile pe care le faceți (cum ar fi
        preferința de limbă) și să ofere funcții îmbunătățite și mai personalizate.
      </p>
      <ul>
        <li><strong>Preferințe interfață:</strong> stochează setările de afișare pe care le-ați selectat</li>
      </ul>
      <p>Baza legală: Consimțământ (Art. 6(1)(a) GDPR).</p>

      <p><strong>3.4 Cookie-uri de Marketing și Targetare</strong></p>
      <p>
        Aceste cookie-uri sunt utilizate pentru a livra reclame relevante pentru dumneavoastră
        și interesele dumneavoastră. Sunt, de asemenea, utilizate pentru a limita numărul de
        ori în care vedeți o reclamă și pentru a ajuta la măsurarea eficienței campaniilor publicitare.
      </p>
      <ul>
        <li><strong>Cookie-uri de remarketing:</strong> ne permit să afișăm reclame țintite pe platforme terțe</li>
        <li><strong>Pixeli social media:</strong> urmăresc interacțiunile cu conținut integrat</li>
      </ul>
      <p>
        Baza legală: Consimțământ (Art. 6(1)(a) GDPR) – activate doar după consimțământul explicit.
        Nu utilizăm cookie-uri de marketing fără acordul dumneavoastră prealabil.
      </p>

      <h3>4. Cookie-uri Terțe Părți</h3>
      <p>
        Unele cookie-uri de pe site-ul nostru sunt setate de servicii terțe. Nu controlăm
        modul în care aceste terțe părți folosesc cookie-urile lor – vă rugăm să consultați
        politicile lor de confidențialitate:
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> policies.google.com/privacy</li>
        <li><strong>Google Fonts:</strong> policies.google.com/privacy</li>
      </ul>

      <h3>5. Durata Cookie-urilor</h3>
      <ul>
        <li><strong>Cookie-uri de sesiune:</strong> șterse când închideți browser-ul</li>
        <li><strong>Cookie-uri persistente:</strong> rămân pentru o perioadă fixă (detaliate în tabelul de mai jos)</li>
      </ul>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #2a3f4f' }}>
            <th style={{ textAlign: 'left', padding: '8px', color: '#7eb3c8' }}>Nume Cookie</th>
            <th style={{ textAlign: 'left', padding: '8px', color: '#7eb3c8' }}>Scop</th>
            <th style={{ textAlign: 'left', padding: '8px', color: '#7eb3c8' }}>Durată</th>
            <th style={{ textAlign: 'left', padding: '8px', color: '#7eb3c8' }}>Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #1a2f3f' }}>
            <td style={{ padding: '8px' }}>cookie_consent</td>
            <td style={{ padding: '8px' }}>Stochează preferințele cookie</td>
            <td style={{ padding: '8px' }}>12 luni</td>
            <td style={{ padding: '8px' }}>Necesar</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #1a2f3f' }}>
            <td style={{ padding: '8px' }}>language</td>
            <td style={{ padding: '8px' }}>Stochează preferința de limbă</td>
            <td style={{ padding: '8px' }}>12 luni</td>
            <td style={{ padding: '8px' }}>Necesar</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #1a2f3f' }}>
            <td style={{ padding: '8px' }}>_ga</td>
            <td style={{ padding: '8px' }}>Google Analytics – distinge utilizatorii</td>
            <td style={{ padding: '8px' }}>2 ani</td>
            <td style={{ padding: '8px' }}>Analiză</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #1a2f3f' }}>
            <td style={{ padding: '8px' }}>_ga_*</td>
            <td style={{ padding: '8px' }}>Google Analytics – stare sesiune</td>
            <td style={{ padding: '8px' }}>2 ani</td>
            <td style={{ padding: '8px' }}>Analiză</td>
          </tr>
        </tbody>
      </table>

      <h3>6. Drepturile Dumneavoastră și Alegerile privind Cookie-urile</h3>
      <p>Aveți dreptul să:</p>
      <ul>
        <li><strong>Acceptați toate cookie-urile</strong> – activează funcționalitatea completă a site-ului și analizele</li>
        <li><strong>Acceptați doar cookie-urile esențiale</strong> – site-ul va funcționa în continuare, dar funcțiile de analiză și marketing vor fi dezactivate</li>
        <li><strong>Retrageți consimțământul oricând</strong> – puteți schimba preferințele accesând linkul „Setări Cookie-uri" din footer</li>
      </ul>
      <p>
        Puteți controla cookie-urile și prin setările browser-ului. Rețineți că restricționarea
        cookie-urilor poate afecta funcționalitatea site-ului nostru. Ghid pentru gestionarea
        cookie-urilor în browserele populare:
      </p>
      <ul>
        <li>Google Chrome: Setări → Confidențialitate și securitate → Cookie-uri</li>
        <li>Mozilla Firefox: Opțiuni → Confidențialitate și securitate → Cookie-uri și date site</li>
        <li>Safari: Preferințe → Confidențialitate → Gestionare date site</li>
        <li>Microsoft Edge: Setări → Cookie-uri și permisiuni site</li>
      </ul>

      <h3>7. Do Not Track</h3>
      <p>
        Unele browsere includ o funcție „Do Not Track" (Nu urmări). Site-ul nostru nu răspunde
        în prezent la semnalele DNT, dar respectăm preferințele setate prin bannerul nostru
        de consimțământ.
      </p>

      <h3>8. Modificări ale Acestei Politici</h3>
      <p>
        Putem actualiza această Politică de Cookie-uri din când în când pentru a reflecta
        schimbările în tehnologie, legislație sau practicile noastre privind datele. Vă vom
        notifica cu privire la modificările semnificative prin afișarea unui anunț pe site.
        Vă încurajăm să revizuiți periodic această pagină.
      </p>

      <h3>9. Contactați-ne</h3>
      <p>Dacă aveți întrebări despre utilizarea cookie-urilor, vă rugăm să ne contactați:</p>
      <ul>
        <li><strong>Email:</strong> andreipaiudev@gmail.com</li>
        <li><strong>Telefon:</strong> +44 7367 438 601</li>
        <li><strong>Subiect email:</strong> „Politica Cookie-uri"</li>
      </ul>

      <p style={{ marginTop: '32px', fontSize: '0.875rem', color: '#6b8998' }}>
        Prin continuarea utilizării site-ului nostru după afișarea bannerului de cookie-uri
        și selectarea preferințelor dumneavoastră, confirmați că ați citit și înțeles această
        Politică de Cookie-uri.
      </p>
    </>
  )
}

export default CookiesPolicy
