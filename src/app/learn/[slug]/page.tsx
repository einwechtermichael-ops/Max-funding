import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/lib/config";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

const ARTICLES = [
  {
    slug: "how-does-a-merchant-cash-advance-work",
    title: "How Does a Merchant Cash Advance Work?",
    description: "A plain-language guide to MCA funding — how it works, who qualifies, what it costs, and when it makes sense for your business.",
    date: "2026-06-01",
    industry: "",
    body: `What is a merchant cash advance?\n\nA merchant cash advance (MCA) is a form of business funding where you receive a lump sum of capital upfront in exchange for a percentage of your future revenue. Unlike a traditional business loan, there is no fixed monthly payment, no collateral requirement, and approval is based primarily on how much your business makes — not your credit score.\n\nHow does repayment work?\n\nRepayment happens automatically. Each business day a fixed percentage of your revenue is debited from your business bank account — called the holdback rate, typically between 10% and 20% of daily deposits. Slower months mean smaller payments automatically.\n\nHow much can I get?\n\nMost MCA funders advance between 1x and 1.5x your average monthly gross revenue. Max Funding works with advances from $50,000 to $500,000.\n\nWho qualifies?\n\nQualification is based on three factors: your credit score (a baseline review), your monthly gross revenue, and your time in business. Industries Max Funding works with include construction, restaurants, retail, and trucking.\n\nHow fast is funding?\n\nJoel Carbajal has direct relationships with select high-reputation lenders — most clients are funded within 24 hours of approval. Some qualify for same-day funding.\n\nIs an MCA right for my business?\n\nAn MCA makes sense when speed matters. If your business needs capital quickly and you generate consistent monthly revenue, an MCA is worth exploring. Checking your options is free and will not affect your credit score.`,
  },
  {
    slug: "how-to-get-funding-for-your-restaurant",
    title: "How to Get Funding for Your Restaurant in 2026",
    description: "Restaurant owners have more funding options than ever — but the fastest path for most is a merchant cash advance.",
    date: "2026-06-01",
    industry: "Restaurants",
    body: `Why restaurants struggle to get traditional bank loans\n\nBanks love stable, predictable businesses. Restaurants are neither — high failure rates, thin margins, and seasonal cash flow make traditional lenders nervous. Even profitable restaurants routinely get turned down for bank loans because underwriters cannot get comfortable with the industry.\n\nThe fastest option: merchant cash advance\n\nA merchant cash advance is the most common and fastest funding solution for restaurants. MCA funders look at your monthly deposits, not your credit score. A restaurant doing $80,000 to $150,000 per month has a strong profile — regardless of personal credit history.\n\nMost restaurant clients at Max Funding are funded within 24 hours. Repayment is a percentage of daily deposits — slow days cost you less than busy ones. No collateral required.\n\nHow much can a restaurant get?\n\nMax Funding works with restaurant advances from $50,000 to $500,000 — typically 1x to 1.5x your average monthly gross revenue.\n\nWhat do you need to apply?\n\nLast 4 months of business bank statements and a completed application. No tax returns, no business plan, no collateral.\n\nWhat restaurants use funding for\n\nEquipment repairs and replacements, kitchen renovations, inventory for a busy season, covering payroll during a slow month, opening a second location, and marketing launches.\n\nHow to get started\n\nA direct conversation with Joel Carbajal. Joel works personally with every restaurant client — no call centers, no runaround. You will know where you stand the same day you reach out.`,
  },
  {
    slug: "merchant-cash-advance-for-construction-companies",
    title: "Merchant Cash Advance for Construction Companies",
    description: "Construction cash flow is brutal — draw gaps, material costs, and payroll do not wait. Here is how construction companies get fast funding without a bank.",
    date: "2026-06-01",
    industry: "Construction",
    body: `The construction cash flow problem\n\nEvery contractor knows the cycle: you win the job, mobilize the crew, purchase materials, and start work — all before you see a dime. Draw payments come weeks later, your supplier invoices are due now, and banks move too slowly to help.\n\nHow a merchant cash advance solves the draw gap\n\nA merchant cash advance gives your construction business a lump sum based on your monthly revenue — funded in as little as 24 hours. No collateral, no fixed payment, no waiting on a bank. Repayment is a percentage of daily deposits — slower months cost you less automatically.\n\nWhat construction companies use MCA funding for\n\nPayroll between draw payments, material purchases and supplier deposits, equipment repairs that cannot wait, mobilization costs on a new job, bonding and insurance on a large contract, and bridge capital while waiting on a GC payment.\n\nWho qualifies?\n\nQualification is based on credit score (baseline review), monthly gross revenue, and time in business. General contractors, specialty trades, and subcontractors all qualify. Max Funding works with advances from $50,000 to $500,000.\n\nHow fast is funding?\n\nJoel Carbajal's direct relationships with high-reputation lenders mean most construction clients are funded within 24 hours — the difference between keeping the job and losing it.\n\nHow to apply\n\nLast 4 months of business bank statements and a completed application. No tax returns, no business plan. Checking your options is free and will not affect your credit score.`,
  },
  {
    slug: "merchant-cash-advance-for-retail-businesses",
    title: "Merchant Cash Advance for Retail Businesses",
    description: "Retail is feast or famine. A merchant cash advance gives retail businesses fast access to $50K to $500K to stock up, expand, and compete.",
    date: "2026-06-01",
    industry: "Retail",
    body: `Why retail businesses need fast capital\n\nRetail runs on inventory — and inventory does not wait for bank approvals. Holiday stock needs ordering months in advance. A supplier deal expires in 48 hours. Retail opportunities move fast, and the businesses that capitalize are the ones with capital ready.\n\nHow a merchant cash advance works for retail\n\nA merchant cash advance provides your retail business with a lump sum from $50,000 to $500,000 — funded in as little as 24 hours. Repayment is a fixed percentage of daily deposits, so slower months naturally cost you less. No collateral, no fixed monthly bill.\n\nWhat retail businesses use MCA funding for\n\nHoliday and seasonal inventory purchases, opening a second or third location, store renovations and display upgrades, e-commerce expansion, bridging a slow season, and buying out closeout inventory.\n\nWho qualifies?\n\nAny retail business generating consistent monthly revenue is worth a conversation. Max Funding looks at your credit score, monthly gross revenue, and time in business. No retail sub-industry is excluded.\n\nHow to get started\n\nLast 4 months of business bank statements and a completed application. Joel Carbajal works personally with every retail client to find the right advance size before anything is signed. Checking your options is free and will not affect your credit score.`,
  },
];

function get(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = get(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/learn/${a.slug}` },
  };
}

function articleSchema(a: ReturnType<typeof get>) {
  if (!a) return {};
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    author: { "@type": "Person", name: "Joel Carbajal", url: `${SITE.url}/about` },
    publisher: { "@type": "Organization", name: "Max Funding", url: SITE.url },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = get(params.slug);
  if (!article) notFound();
  const sections = article.body.split("\n\n");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Learn", path: "/learn" }, { name: article.title, path: `/learn/${article.slug}` }])} />
      <JsonLd data={articleSchema(article)} />
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          {article.industry && <div className="eyebrow">{article.industry}</div>}
          <h1 className="serif" style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", maxWidth: "22ch" }}>{article.title}</h1>
          <p className="lead" style={{ fontSize: "1.1rem" }}>{article.description}</p>
          <div style={{ fontSize: ".85rem", color: "var(--sage)", marginTop: 8 }}>By Joel Carbajal · June 1, 2026</div>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          {sections.map((block, i) => {
            const isFirst = i === 0 || sections[i - 1] === "";
            if (i % 2 === 0) {
              return <h2 key={i} style={{ fontFamily: "var(--font-serif),serif", fontSize: "clamp(1.3rem,2.4vw,1.7rem)", fontWeight: 500, margin: "32px 0 12px", letterSpacing: "-.01em" }}>{block}</h2>;
            }
            return <p key={i} style={{ color: "var(--ink-soft)", marginBottom: 16, lineHeight: 1.75, fontSize: "1.04rem" }}>{block}</p>;
          })}
          <div style={{ marginTop: 48, padding: "32px", background: "var(--cream-2)", borderRadius: 18, borderLeft: "4px solid var(--bronze)" }}>
            <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.25rem", fontWeight: 600, marginBottom: 10 }}>Ready to get funded?</div>
            <p style={{ color: "var(--ink-soft)", marginBottom: 18 }}>$50K to $500K in as little as 24 hours. Checking your rate will not affect your credit score.</p>
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/learn" style={{ color: "var(--bronze)", fontWeight: 600 }}>Back to all guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
