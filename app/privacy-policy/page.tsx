import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata = {
  title: 'Privacy Policy — Italian Prosecco Culture',
  description: 'Privacy Policy del sito italianproseccoculture.com. Informativa sul trattamento dei dati personali ai sensi del GDPR.',
}

export default function PrivacyPolicyPage() {
  const updated = new Date().toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Header */}
        <div className="bg-[var(--green-deep)] py-20 px-6 pt-28">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-[var(--gold)] mb-3">Informativa GDPR</p>
            <h1 className="font-serif text-5xl font-light italic text-white">Privacy Policy</h1>
            <p className="font-sans text-xs text-white/50 mt-4 tracking-wide">
              Ultimo aggiornamento: {updated}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8 font-sans text-foreground">

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">1. Titolare del trattamento</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Il titolare del trattamento dei dati personali relativi al sito web{' '}
                <strong className="text-foreground">italianproseccoculture.com</strong> e raggiungibile
                all&apos;indirizzo email:{' '}
                <span className="text-[var(--green-mid)] font-medium">info@italianproseccoculture.com</span>
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">2. Dati raccolti e finalita</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Questo sito raccoglie dati personali esclusivamente nei seguenti casi:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Modulo di contatto',
                    desc: 'Quando compili il modulo di contatto, raccogliamo il tuo nome, indirizzo email e il contenuto del messaggio. Questi dati sono utilizzati esclusivamente per rispondere alla tua richiesta e non vengono ceduti a terzi.',
                  },
                  {
                    title: 'Dati di navigazione',
                    desc: 'I sistemi informatici e le procedure software che gestiscono il sito acquisiscono, nel corso del loro normale funzionamento, alcuni dati personali la cui trasmissione e implicita nell\'uso dei protocolli di comunicazione di internet (es. indirizzo IP, tipo di browser, pagine visitate).',
                  },
                  {
                    title: 'Cookie',
                    desc: 'Per informazioni dettagliate sui cookie utilizzati, consulta la nostra Cookie Policy.',
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-[var(--gold)]/50 pl-5">
                    <h3 className="font-serif text-base text-[var(--green-mid)] font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">3. Base giuridica del trattamento</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Il trattamento dei dati avviene sulla base del consenso dell&apos;interessato (art. 6, par. 1, lett. a del GDPR)
                e dell&apos;interesse legittimo del titolare a garantire il corretto funzionamento del sito (art. 6, par. 1, lett. f del GDPR).
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">4. Conservazione dei dati</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I dati raccolti tramite il modulo di contatto vengono conservati per il tempo strettamente necessario
                a evadere la richiesta e, successivamente, per un massimo di 12 mesi. I dati di navigazione
                non vengono conservati oltre i limiti tecnici necessari.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">5. Diritti dell&apos;interessato</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Ai sensi del GDPR (Regolamento UE 2016/679), hai il diritto di:
              </p>
              <ul className="space-y-2">
                {[
                  'Accedere ai dati personali che ti riguardano',
                  'Richiedere la rettifica di dati inesatti',
                  'Richiedere la cancellazione dei dati (diritto all\'oblio)',
                  'Richiedere la limitazione del trattamento',
                  'Opporti al trattamento dei dati',
                  'Richiedere la portabilita dei dati',
                  'Revocare il consenso in qualsiasi momento',
                ].map((right) => (
                  <li key={right} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-1.5" />
                    {right}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                Per esercitare i tuoi diritti, contattaci a:{' '}
                <span className="text-[var(--green-mid)] font-medium">info@italianproseccoculture.com</span>
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">6. Trasferimento dei dati</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I dati personali raccolti non vengono trasferiti a paesi terzi al di fuori dell&apos;Unione Europea.
                Non vengono ceduti a terzi per finalita di marketing.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">7. Modifiche alla presente informativa</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La presente informativa sulla privacy puo essere aggiornata periodicamente. La data indicata in cima
                a questa pagina si aggiorna automaticamente ad ogni modifica. Ti invitiamo a consultare questa pagina
                periodicamente per rimanere aggiornato.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">8. Autorita di controllo</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Se ritieni che il trattamento dei tuoi dati personali violi la normativa vigente, hai il diritto di
                proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).
              </p>
            </section>

            <div className="bg-[var(--parchment)] border border-border p-5">
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Nota:</strong> La data di aggiornamento di questa pagina
                si rinnova automaticamente. Ultimo aggiornamento: {updated}.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
