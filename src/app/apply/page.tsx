import type { Metadata } from "next";
import { ApplyForm } from "@/components/ApplyForm";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Check Your Rate — Get Pre-Qualified in Minutes",
  description: "Get pre-qualified for business funding in minutes. Soft pull — checking your rate won't affect your credit score. Working capital, equipment, SBA loans & more.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Apply", path: "/apply" }])} />
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Get pre-qualified</div>
          <h1 className="serif" style={{ maxWidth: "20ch", margin: "0 auto" }}>Check your rate in minutes.</h1>
          <p className="lead" style={{ margin: "20px auto 0" }}>No impact to your credit score. No obligation. Just an honest look at your options.</p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap"><ApplyForm /></div>
      </section>
    </>
  );
}
