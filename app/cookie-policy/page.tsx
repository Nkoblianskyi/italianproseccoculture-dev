import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

function AutoDate() {
  const date = new Date()
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' }
  return <>{date.toLocaleDateString('it-IT', options)}</>
}

export const metadata = {
  title: 'Cookie Policy — Italian Prosecco Culture',
  description: 'Cookie Policy del sito italianproseccoculture.com',
}

export default function CookiePolicyPage() {
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
        <div className="bg-[var(--green-deep)] py-20 px-6 mt-0 pt-28">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-[var(--gold)] mb-3">Informativa</p>
            <h1 className="font-serif text-5xl font-light italic text-white">Cookie Policy</h1>
            <p className="font-sans text-xs text-white/50 mt-4 tracking-wide">
              Ultimo aggiornamento: {updated}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose prose-sm max-w-none font-sans text-foreground space-y-8">

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">1. Cosa sono i cookie</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente inviano al suo terminale
                (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti
                alla visita successiva. I cookie consentono a un sito di riconoscere il dispositivo dell&apos;utente
                e ricordare alcune informazioni sulle sue preferenze o azioni precedenti.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">2. Tipologie di cookie utilizzati</h2>

              <h3 className="font-serif text-lg text-[var(--green-mid)] font-medium mb-2 mt-4">Cookie tecnici necessari</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Questi cookie sono strettamente necessari per il funzionamento del sito e non possono essere
                disattivati nei nostri sistemi. Vengono solitamente impostati solo in risposta ad azioni
                da te effettuate che costituiscono una richiesta di servizi, come ad esempio l&apos;impostazione
                delle preferenze sui cookie stessi.
              </p>
              <div className="border border-border divide-y divide-border">
                {[
                  { nome: 'cookie-consent', scopo: 'Memorizza le preferenze relative ai cookie', durata: 'Sessione / 1 anno' },
                ].map((c) => (
                  <div key={c.nome} className="grid grid-cols-3 gap-4 px-4 py-3 text-xs">
                    <span className="font-medium text-foreground">{c.nome}</span>
                    <span className="text-muted-foreground">{c.scopo}</span>
                    <span className="text-muted-foreground">{c.durata}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-lg text-[var(--green-mid)] font-medium mb-2 mt-6">Cookie analitici (opzionali)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Se accettati dall&apos;utente, utilizziamo cookie analitici per raccogliere informazioni aggregate
                sull&apos;utilizzo del sito (pagine visitate, tempo di permanenza, dispositivo utilizzato).
                Questi dati ci aiutano a migliorare l&apos;esperienza degli utenti. Non raccogliamo dati personali
                identificabili tramite questi cookie.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">3. Gestione dei cookie</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Puoi modificare le tue preferenze sui cookie in qualsiasi momento tramite il banner presente
                sul sito. Inoltre, la maggior parte dei browser web permette di controllare i cookie tramite
                le impostazioni del browser stesso. Per ulteriori informazioni su come gestire i cookie,
                visita la sezione di aiuto del tuo browser.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Disabilitare i cookie potrebbe compromettere alcune funzionalita del sito.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">4. Cookie di terze parti</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Questo sito non utilizza cookie di terze parti a fini pubblicitari o di profilazione.
                Non sono presenti cookie di social network o pixel di tracciamento di terze parti.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-3">5. Contatti</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Per qualsiasi domanda relativa all&apos;utilizzo dei cookie su questo sito, puoi contattarci
                all&apos;indirizzo email:{' '}
                <span className="text-[var(--green-mid)] font-medium">info@italianproseccoculture.com</span>
              </p>
            </section>

            <div className="bg-[var(--parchment)] border border-border p-5 rounded">
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aggiornamento automatico:</strong> La data di aggiornamento
                di questa pagina si rinnova automaticamente. Ultimo aggiornamento: {updated}.
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
