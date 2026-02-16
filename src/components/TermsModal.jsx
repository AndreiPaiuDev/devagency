import styles from './LegalModal.module.css'

function TermsModal() {
  return (
    <div className={styles.legal}>
      <section className={styles.section}>
        <p className={styles.intro}>
          Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
        </p>
        <p className={styles.text}>
          Prin accesarea și utilizarea site-ului DevAgency ("Serviciul"), acceptați să fiți 
          legat de acești Termeni și Condiții ("Termeni"). Vă rugăm să citiți cu atenție 
          acești Termeni înainte de a utiliza Serviciul nostru.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>1. Acceptarea Termenilor</h3>
        <p className={styles.text}>
          Prin accesarea și utilizarea acestui site web, acceptați să respectați acești 
          Termeni și Condiții, toate legile și reglementările aplicabile din România, 
          inclusiv Legea nr. 365/2002 privind comerțul electronic și Codul Civil român.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>2. Servicii Oferite</h3>
        <p className={styles.text}>
          DevAgency oferă servicii de dezvoltare software, inclusiv dar fără a se limita la:
        </p>
        <ul className={styles.list}>
          <li>Dezvoltare aplicații web și mobile</li>
          <li>Design UI/UX</li>
          <li>Consultanță IT</li>
          <li>Mentenanță și suport software</li>
        </ul>
        <p className={styles.text}>
          Toate serviciile sunt prestate în conformitate cu legislația română aplicabilă 
          și standardele industriei IT.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>3. Proprietate Intelectuală</h3>
        <p className={styles.text}>
          Conform Legii nr. 8/1996 privind dreptul de autor și drepturile conexe:
        </p>
        <ul className={styles.list}>
          <li>Toate drepturile de proprietate intelectuală asupra conținutului site-ului aparțin DevAgency</li>
          <li>Codul sursă, designul și materialele create pentru clienți sunt reglementate prin contracte individuale</li>
          <li>Utilizarea neautorizată a materialelor protejate constituie o încălcare a drepturilor de autor</li>
          <li>Drepturile de proprietate intelectuală asupra produsului final sunt transferate clientului conform contractului</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>4. Obligațiile Utilizatorului</h3>
        <p className={styles.text}>Utilizatorul se obligă:</p>
        <ul className={styles.list}>
          <li>Să furnizeze informații corecte și complete</li>
          <li>Să nu utilizeze Serviciul în scopuri ilegale sau neautorizate</li>
          <li>Să respecte drepturile de proprietate intelectuală</li>
          <li>Să nu transmită viruși sau cod malițios</li>
          <li>Să nu interfereze cu funcționarea normală a Serviciului</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>5. Contracte și Facturare</h3>
        <p className={styles.text}>
          Conform Legii nr. 227/2015 privind Codul Fiscal din România:
        </p>
        <ul className={styles.list}>
          <li>Toate serviciile sunt facturate conform legislației fiscale din România</li>
          <li>Facturile sunt emise în lei (RON) sau alte valute convenite</li>
          <li>TVA-ul este aplicat conform ratei în vigoare (19%)</li>
          <li>Termenii de plată sunt specificați în contractul individual</li>
          <li>Întârzierile la plată pot atrage penalități conform Codului Civil</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>6. Garantii și Răspundere</h3>
        <p className={styles.text}>
          Conform art. 1350 și următoarele din Codul Civil:
        </p>
        <ul className={styles.list}>
          <li>Serviciile sunt furnizate în conformitate cu standardele industriei</li>
          <li>DevAgency garantează livrarea serviciilor conform specificațiilor contractuale</li>
          <li>Nu garantăm funcționarea neîntreruptă sau fără erori a software-ului</li>
          <li>Răspunderea noastră este limitată la valoarea contractului</li>
          <li>Nu suntem răspunzători pentru daune indirecte sau pierderi de profit</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>7. Protecția Datelor Personale</h3>
        <p className={styles.text}>
          Conform Regulamentului (UE) 2016/679 (GDPR) și Legii nr. 190/2018:
        </p>
        <ul className={styles.list}>
          <li>Datele personale sunt prelucrate legal și transparent</li>
          <li>Utilizatorii au dreptul de acces, rectificare și ștergere a datelor</li>
          <li>Implementăm măsuri tehnice și organizatorice adecvate de securitate</li>
          <li>Pentru detalii complete, consultați Politica de Confidențialitate</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>8. Rezilierea Contractului</h3>
        <p className={styles.text}>
          Conform Codului Civil român:
        </p>
        <ul className={styles.list}>
          <li>Contractul poate fi reziliat de ambele părți cu respectarea termenelor de preaviz</li>
          <li>În caz de încălcare gravă, rezilierea poate fi imediată</li>
          <li>La reziliere, sunt datorate plățile pentru serviciile deja prestate</li>
          <li>Clauzele de confidențialitate rămân în vigoare după reziliere</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>9. Forță Majoră</h3>
        <p className={styles.text}>
          Conform art. 1351 din Codul Civil, DevAgency nu este răspunzătoare pentru 
          neîndeplinirea obligațiilor contractuale din cauza unor evenimente de forță majoră, 
          inclusiv dar fără a se limita la: dezastre naturale, războaie, atacuri cibernetice 
          la scară largă, reglementări guvernamentale sau alte evenimente în afara controlului nostru.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>10. Confidențialitate</h3>
        <p className={styles.text}>
          Ambele părți se obligă să păstreze confidențialitatea informațiilor primite în 
          cadrul colaborării, conform Legii nr. 677/2001 pentru protecția persoanelor cu 
          privire la prelucrarea datelor cu caracter personal și libera circulație a acestor date.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>11. Soluționarea Disputelor</h3>
        <p className={styles.text}>
          Conform Codului de Procedură Civilă din România:
        </p>
        <ul className={styles.list}>
          <li>Orice dispută va fi soluționată pe cale amiabilă în primă instanță</li>
          <li>În lipsa unei soluții amiabile, disputele vor fi soluționate de instanțele competente din România</li>
          <li>Se aplică legea română</li>
          <li>Consumatorii pot apela la mediatori autorizați ANPC</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>12. Dreptul la Informare al Consumatorului</h3>
        <p className={styles.text}>
          Conform Legii nr. 296/2004 privind Codul consumului:
        </p>
        <ul className={styles.list}>
          <li>Consumatorii au dreptul la informații complete despre servicii</li>
          <li>Drept de retragere din contract în termenele legale (conform art. 9-10)</li>
          <li>Drept de reclamație la ANPC în caz de nemulțumiri</li>
          <li>Acces la platforma SOL (soluționarea online a litigiilor)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>13. Modificări ale Termenilor</h3>
        <p className={styles.text}>
          DevAgency își rezervă dreptul de a modifica acești Termeni în orice moment. 
          Modificările vor fi comunicate prin publicarea noilor Termeni pe site. Continuarea 
          utilizării Serviciului după modificări constituie acceptarea noilor Termeni.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>14. Date de Contact</h3>
        <p className={styles.text}>
          Pentru întrebări referitoare la acești Termeni și Condiții, ne puteți contacta la:
        </p>
        <div className={styles.contact}>
          <p><strong>Email:</strong> andreipaiudev@gmail.com</p>
          <p><strong>Telefon:</strong> +44 7367 438 601</p>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>15. Dispoziții Finale</h3>
        <p className={styles.text}>
          Dacă vreo prevedere a acestor Termeni este considerată nulă sau inaplicabilă, 
          celelalte prevederi rămân în vigoare. Acești Termeni constituie întregul acord 
          între părți în ceea ce privește utilizarea Serviciului.
        </p>
      </section>

      <section className={styles.section}>
        <p className={styles.text}>
          <strong>Versiune:</strong> 1.0<br />
          <strong>Data intrării în vigoare:</strong> {new Date().toLocaleDateString('ro-RO')}
        </p>
      </section>
    </div>
  )
}

export default TermsModal
