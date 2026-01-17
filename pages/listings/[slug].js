import Head from "next/head";
import { LISTINGS, getListing } from "../../lib/listings";

export async function getStaticPaths() {
  const paths = Object.keys(LISTINGS).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const listing = getListing(params.slug);
  return { props: { listing } };
}

export default function ListingPage({ listing }) {
  const whatsappNumberE164 = "15551234567"; // digits only, no "+"
  const contactEmail = "you@example.com";
  const phoneNumber = "+1 (555) 123-4567";

  const whatsappLink = `https://wa.me/${whatsappNumberE164}?text=${encodeURIComponent(
    `Hi! I'm interested in ${listing.title} in ${listing.addressOrArea}. Can you share details and availability?`
  )}`;

  const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Inquiry: ${listing.title} (${listing.addressOrArea})`
  )}&body=${encodeURIComponent(
    `Hi,\n\nI'm interested in ${listing.title} in ${listing.addressOrArea}.\n\nMy timeline is:\nMy budget range is:\nI plan to use it for (personal / investment / both):\n\nPlease send details (price, HOA, taxes, showing options).\n\nThanks!`
  )}`;

  return (
    <>
      <Head>
        <title>{listing.title} | {listing.addressOrArea}</title>
        <meta name="description" content={listing.subtitle} />
        <meta property="og:title" content={`${listing.title} | ${listing.addressOrArea}`} />
        <meta property="og:description" content={listing.subtitle} />
        {listing.photos?.[0]?.src ? (
          <meta property="og:image" content={listing.photos[0].src} />
        ) : null}
      </Head>

      <main className="page">
        <header className="hero">
          <div className="heroText">
            <div className="badge">Puerto Vallarta • {listing.addressOrArea}</div>
            <h1>{listing.title}</h1>
            <p className="subtitle">{listing.subtitle}</p>

            <div className="priceRow">
              <div className="price">{listing.priceText}</div>
              <div className="ctaRow">
                <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn" href={mailtoLink}>Email</a>
                <a className="btn" href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}>Call</a>
              </div>
            </div>

            <div className="facts">
              {listing.facts.map((f) => (
                <div key={f.label} className="fact">
                  <div className="factLabel">{f.label}</div>
                  <div className="factValue">{f.value}</div>
                </div>
              ))}
            </div>

            {listing.mlsLink ? (
              <p className="mlsNote">
                Listed on the MLS.{" "}
                <a href={listing.mlsLink} target="_blank" rel="noreferrer">
                  View official MLS listing
                </a>
                .
              </p>
            ) : null}
          </div>

          <div className="heroMedia">
            <div className="cover">
              <img
                src={listing.photos?.[0]?.src || "/photos/placeholder.jpg"}
                alt={listing.photos?.[0]?.alt || "Property photo"}
              />
            </div>
          </div>
        </header>

        <section className="section">
          <h2>Photo Gallery</h2>
          <div className="grid">
            {listing.photos.map((p) => (
              <div key={p.src} className="gridItem">
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </section>

        <section className="section twoCol">
          <div>
            <h2>Why this condo</h2>
            <ul className="bullets">
              {listing.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h2 style={{ marginTop: 28 }}>Location</h2>
            <p className="text">{listing.locationBlurb}</p>
          </div>

          <div className="card">
            <h3>Request details</h3>
            <p className="muted">Get price, HOA, taxes, and a video tour option. Quick response.</p>

            {/* Easy form handling: Formspree / Getform / Basin */}
            <form className="form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
              <label>
                Name
                <input name="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" required />
              </label>
              <label>
                Phone / WhatsApp (optional)
                <input name="phone" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  defaultValue={`I'm interested in ${listing.title} in ${listing.addressOrArea}. Please share details (price, HOA, taxes) and next steps.`}
                />
              </label>
              <input type="hidden" name="listing" value={listing.slug} />
              <button className="btn primary full" type="submit">
                Send inquiry
              </button>

              <div className="altCtas">
                <a className="btn full" href={whatsappLink} target="_blank" rel="noreferrer">
                  Message on WhatsApp
                </a>
                <a className="btn full" href={mailtoLink}>
                  Email instead
                </a>
              </div>
            </form>
          </div>
        </section>

        <section className="section">
          <h2>Map</h2>
          <div className="mapWrap">
            <iframe
              src={listing.googleMapsEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: 16 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
          </div>
        </section>

        <footer className="footer">
          <div>
            <strong>Interested in this condo?</strong>
            <div className="footerCtas">
              <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn" href={mailtoLink}>Email</a>
              <a className="btn" href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}>Call</a>
            </div>
          </div>
          <div className="fineprint">
            © {new Date().getFullYear()} • {contactEmail}
          </div>
        </footer>

        <style jsx>{`
          .page {
            max-width: 1100px;
            margin: 0 auto;
            padding: 22px 18px 60px;
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
            color: #0f172a;
          }
          .hero {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 22px;
            align-items: stretch;
            margin-top: 10px;
          }
          .badge {
            display: inline-block;
            font-size: 12px;
            letter-spacing: 0.02em;
            padding: 6px 10px;
            border-radius: 999px;
            background: #f1f5f9;
            color: #334155;
            margin-bottom: 10px;
          }
          h1 { font-size: 40px; line-height: 1.1; margin: 0 0 10px; }
          .subtitle { font-size: 16px; color: #334155; margin: 0 0 14px; }
          .priceRow {
            display: flex; justify-content: space-between; gap: 12px;
            align-items: center; flex-wrap: wrap; margin: 10px 0 14px;
          }
          .price {
            font-size: 18px; font-weight: 700; padding: 10px 12px;
            border-radius: 12px; background: #0f172a; color: white;
          }
          .ctaRow { display: flex; gap: 10px; flex-wrap: wrap; }
          .btn {
            display: inline-flex; align-items: center; justify-content: center;
            padding: 10px 14px; border-radius: 12px; border: 1px solid #e2e8f0;
            background: white; color: #0f172a; text-decoration: none;
            font-weight: 600; font-size: 14px;
          }
          .btn.primary { background: #2563eb; border-color: #2563eb; color: white; }
          .btn.full { width: 100%; }
          .facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 14px; }
          .fact { border: 1px solid #e2e8f0; background: #fff; border-radius: 14px; padding: 10px 12px; }
          .factLabel { font-size: 12px; color: #64748b; }
          .factValue { font-size: 14px; font-weight: 700; margin-top: 2px; }
          .mlsNote { margin-top: 12px; font-size: 13px; color: #475569; }
          .mlsNote a { color: #2563eb; text-decoration: none; font-weight: 600; }
          .heroMedia .cover {
            border-radius: 18px; overflow: hidden; border: 1px solid #e2e8f0;
            background: #f8fafc; min-height: 420px;
          }
          .heroMedia img { width: 100%; height: 100%; object-fit: cover; display: block; }
          .section { margin-top: 34px; }
          .section h2 { font-size: 22px; margin: 0 0 14px; }
          .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
          .gridItem img { width: 100%; height: 100%; object-fit: cover; border-radius: 14px; border: 1px solid #e2e8f0; }
          .twoCol { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 18px; align-items: start; }
          .bullets { padding-left: 18px; margin: 0; color: #334155; }
          .bullets li { margin: 8px 0; }
          .text { color: #334155; line-height: 1.55; }
          .card {
            border: 1px solid #e2e8f0; background: #fff; border-radius: 18px;
            padding: 16px; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
          }
          .card h3 { margin: 0 0 6px; font-size: 18px; }
          .muted { margin: 0 0 14px; color: #64748b; font-size: 14px; }
          .form { display: grid; gap: 10px; }
          label { display: grid; gap: 6px; font-size: 13px; font-weight: 600; color: #0f172a; }
          input, textarea {
            width: 100%; border: 1px solid #e2e8f0; border-radius: 12px;
            padding: 10px 12px; font-size: 14px; outline: none;
          }
          input:focus, textarea:focus {
            border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
          }
          .altCtas { display: grid; gap: 10px; margin-top: 10px; }
          .mapWrap { border: 1px solid #e2e8f0; border-radius: 18px; padding: 10px; background: #fff; }
          .footer {
            margin-top: 36px; padding-top: 18px; border-top: 1px solid #e2e8f0;
            display: flex; align-items: center; justify-content: space-between;
            gap: 14px; flex-wrap: wrap;
          }
          .footerCtas { display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap; }
          .fineprint { color: #64748b; font-size: 13px; }

          @media (max-width: 900px) {
            .hero { grid-template-columns: 1fr; }
            .heroMedia .cover { min-height: 320px; }
            h1 { font-size: 32px; }
            .facts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .twoCol { grid-template-columns: 1fr; }
          }
          @media (max-width: 520px) {
            .grid { grid-template-columns: 1fr; }
            .facts { grid-template-columns: 1fr; }
          }
        `}</style>
      </main>
    </>
  );
}
