import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

/* ── SEO Metadata ── */
export const metadata: Metadata = {
    title: "Aman Kumar Happy | AI Developer & Mediokart Founder",
    description:
        "Aman Kumar Happy is a BTech CSE student, AI developer, and founder of Mediokart — building healthcare AI systems in India. Explore projects, skills, and innovations.",
    keywords: [
        "Aman Kumar Happy",
        "AI developer India",
        "Mediokart founder",
        "BTech CSE portfolio",
        "healthcare AI startup",
        "full stack developer India",
        "Aman Kumar developer",
        "Aman Kumar BTech CSE Buxar",
        "HealthTech Bihar",
    ],
    authors: [{ name: "Aman Kumar Happy" }],
    creator: "Aman Kumar Happy",
    metadataBase: new URL("https://amankumarhappy.vercel.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://amankumarhappy.vercel.app",
        title: "Aman Kumar Happy | AI Developer & Mediokart Founder",
        description:
            "BTech CSE student building AI systems for healthcare — Mediokart, AuraBox, Mediobot. Core Team — Salesforce Community Bihar.",
        siteName: "Aman Kumar Happy Portfolio",
        images: [
            {
                url: "/My photo.png",
                width: 1200,
                height: 630,
                alt: "Aman Kumar Happy — AI Developer & Mediokart Founder",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Aman Kumar Happy | AI Developer & Mediokart Founder",
        description:
            "BTech CSE student building AI systems for healthcare — Mediokart, AuraBox, Mediobot.",
        images: ["/My photo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aman Kumar Happy",
    url: "https://amankumarhappy.vercel.app",
    image: "https://amankumarhappy.vercel.app/My photo.png",
    sameAs: [
        "https://github.com/amankumarhappy",
        "https://linkedin.com/in/amankumarhappy",
        "https://medium.com/@amankumarhappy",
        "https://www.youtube.com/@amankumarhappy",
    ],
    jobTitle: "AI Developer & Startup Founder",
    description:
        "BTech CSE student at Government Engineering College Buxar, founder of Mediokart, Core Team Member at Salesforce Community Bihar.",
    worksFor: {
        "@type": "Organization",
        name: "Mediokart",
        description:
            "A healthcare platform bridging pharmacies and patients using AI and IoT.",
    },
    alumniOf: {
        "@type": "EducationalOrganization",
        name: "Government Engineering College, Buxar",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Buxar",
        addressRegion: "Bihar",
        addressCountry: "IN",
    },
    knowsAbout: [
        "Artificial Intelligence",
        "Healthcare Technology",
        "Web Development",
        "React",
        "Next.js",
        "Python",
        "IoT",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={clsx(inter.className, "bg-black text-white antialiased")}>
                {children}
            </body>
        </html>
    );
}
