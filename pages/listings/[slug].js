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
  const whatsappNumberE164 = "523221812109";
  const contactEmail = "gerry@ronmorgan.net";
  const phoneNumber = "+52 (322) 181-2109";

  const whatsappLink = `https://wa.me/${whatsappNumberE164}?text=${encodeURIComponent(
    `Hi! I'm interested in ${listing.title} in ${listing.addressOrArea}. Can you share details and availability?`
  )}`;

  const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Inquiry: ${listing.title} (${listing.addressOrArea})`
  )}&body=${encodeURIComponent(
    `Hi,\n\nI'm interested in ${listing.title} in ${listing.addressOrArea}.\n\nMy timeline is:\nMy budget range is:\nI plan to use it for (personal / investment / both):\n\nPlease send details (price, HOA, taxes, showing options).\n\nThanks!`
  )}`;

  const contactPageLink = `https://contact.gerryray.net/?listing=${encodeURIComponent(
    listing.slug
  )}`;

  return (
    <>
      <Head>
        <title>
          {listing.title} | {listing.addressOrArea}
        </title>
        <meta name="description" content={listing.subtitle} />
        <meta property="og:title" content={`${listing.title} | ${listing.addressOrArea}`} />
        <meta property="og:description" content={listing.subtitle} />
        {listing.photos?.[0]?.src && (
          <meta property="og:image" content={listing.photos[0].src} />
        )}
      </Head>

      <main className="page">
        {/* HERO */}
        <header className="hero">
          <div className="heroText">
            <div className="badge">{listing.addressOrArea}</div>
            <h1>{listing.title}</h1>
            <p className="subtitle">{listing.subtitle}</p>

            <div className="priceRow">
              <div className="price">{listing.priceText}</div>
              <div className="ctaRow">
                <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn primary" href={mailtoLink}>
                  Email
                </a>
                <a className="btn primary" href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}>
                  Call
                </a>
              </div>
            </div>

            {/* FACTS */}
            <div className="facts">
              {listing.facts.map((f) => (
                <div key={f.label} className="fact">
                  <div className="factLabel">{f.label}</div>
                  <div className="factValue">{f.value}</div>
                </div>
              ))}
            </div>

            {listing.mlsLink && (
              <p className="mlsNote">
                Listed on the MLS.{" "}
                <a href={listing.mlsLink} target="_blank" rel="noreferrer">
                  View official MLS listing
                </a>
                .
              </p>
            )}
          </div>

          <div className="heroMedia">
            <img
              src={listing.photos?.[0]?.src || "/photos/placeholder.jpg"}
              alt={listing.photos?.[0]?.alt || "Property photo"}
            />
          </div>
        </header>

        {/* GALLERY */}
        <section className="section">
          <h2>Photo Gallery</h2>
          <div className="grid">
            {(listing.photos || []).slice(1).map((p) => (
              <div key={p.src} className="gridItem">
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </section>

        {/* DETAILS + CONTACT */}
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
            <h3>Quick Response</h3>

            <div className="altCtas">
              <a className="btn primary" href={contactPageLink} target="_blank" rel="noreferrer">
                Information about this property
              </a>
              <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
              <a className="btn primary" href={mailtoLink}>
                Email instead
              </a>
            </div>
          </div>
        </section>

        {/* MAP */}
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

        {/* FOOTER */}
        <footer className="footer">
          <div>
            <strong>Interested in this condo?</strong>
            <div className="footerCtas">
              <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn" href={mailtoLink}>
                Email
              </a>
              <a className="btn" href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}>
                Call
              </a>
            </div>
          </div>
          <div className="fineprint">
            © {new Date().getFullYear()} • {contactEmail}
          </div>
        </footer>

        {/* STYLES */}
        <style jsx>{`
          .page {
            max-width: 1100px;
            margin: 0 auto;
            padding: 22px 18px 60px;
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
            color: #0f172a;
          }

          .hero {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 22px;
          }

          h1 {
            font-size: 40px;
            margin-bottom: 10px;
          }

          .facts {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

          .fact {
            text-align: center;
            padding: 10px 12px;
            border-radius: 14px;
            background: #f0f5fa;
            border: 1px solid #e2e8f0;
          }

          .factLabel {
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .factValue {
            font-size: 14px;
            font-weight: 700;
          }

          @media (max-width: 900px) {
            .hero {
              grid-template-columns: 1fr;
            }

            h1 {
              font-size: 32px;
            }

            .facts {
              grid-template-columns: repeat(3, 1fr);
              gap: 8px;
            }

            .fact {
              padding: 8px;
            }

            .factLabel {
              font-size: 11px;
            }

            .factValue {
              font-size: 12px;
            }
          }

          @media (max-width: 520px) {
            .facts {
              grid-template-columns: repeat(3, 1fr);
              gap: 6px;
            }
          }
        `}</style>
      </main>
    </>
  );
}
