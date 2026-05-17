import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], display: "swap" });

/* ── SEO Metadata ── */
export const metadata: Metadata = {
    title: "Aman Kumar Happy | Founder Mediokart | B.Tech CSE Bihar | IDE Bootcamp Winner 2026",
    description:
        "Aman Kumar Happy — student founder from Buxar, Bihar. Founder of Mediokart and builder of SAHAYAK, a WhatsApp health assistant for rural India. National Winner IDE Bootcamp 2026 (AICTE × MoE, NIT Patna). B.Tech CSE, GEC Buxar.",
    keywords: [
        "Aman Kumar Happy",
        "Aman Kumar Buxar",
        "Aman Happy Bihar",
        "Mediokart founder",
        "SAHAYAK WhatsApp health",
        "IDE Bootcamp 2026 winner",
        "Bihar student startup",
        "GEC Buxar entrepreneur",
        "amankumarhappy",
        "student founder India",
        "healthtech Bihar",
        "Aman Kumar GEC Buxar",
        "NexaForce Bihar",
        "AICTE startup winner",
        "WhatsApp health assistant India",
        "Aman Kumar Happy LinkedIn",
        "Who is Aman Kumar Happy",
        "Aman Kumar from Buxar Bihar",
        "IDE Bootcamp 2026 winner NIT Patna",
        "SAHAYAK WhatsApp health assistant",
        "BTech startup founder Bihar",
    ],
    authors: [{ name: "Aman Kumar Happy" }],
    creator: "Aman Kumar Happy",
    metadataBase: new URL("https://amankumarhappy.com"),
    alternates: {
        canonical: "https://amankumarhappy.com",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://amankumarhappy.com",
        title: "Aman Kumar Happy — Student Founder & Builder | Mediokart | Bihar",
        description:
            "Building healthcare tools for the India that the internet forgot. National Winner IDE Bootcamp 2026. WhatsApp health assistant for rural India. B.Tech CSE, GEC Buxar.",
        siteName: "Aman Kumar Happy Portfolio",
        images: [
            {
                url: "https://amankumarhappy.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Aman Kumar Happy — Student Founder Mediokart | Bihar",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Aman Kumar Happy | Founder Mediokart | Bihar",
        description:
            "Student founder from Buxar, Bihar. Building SAHAYAK — WhatsApp health assistant for rural India. National IDE Bootcamp 2026 winner.",
        images: ["https://amankumarhappy.com/og-image.jpg"],
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
    alternateName: ["Aman Kumar", "Happy Singh", "Aman Kumar Buxar", "amankumarhappy"],
    url: "https://amankumarhappy.com",
    image: "https://amankumarhappy.com/My photo.png",
    email: "amankumarhappy1@gmail.com",
    jobTitle: "Founder",
    worksFor: {
        "@type": "Organization",
        name: "Mediokart",
        url: "https://www.mediokart.in",
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Government Engineering College, Buxar",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Buxar",
        addressRegion: "Bihar",
        addressCountry: "IN",
    },
    sameAs: [
        "https://www.linkedin.com/in/amankumarhappy/",
        "https://github.com/amankumarhappy",
        "https://www.mediokart.in",
        "https://www.instagram.com/amankumarhappy1",
        "https://medium.com/@amankumarhappy",
        "https://x.com/AmanKumarHappy1",
        "https://youtube.com/amankumarhappy",
        "https://substack.com/@amankumarhappy",
        "https://dev.to/amankumarhappy",
        "https://producthunt.com/@amankumarhappy",
        "https://quora.com/profile/Aman-Kumar-Happy",
    ],
    description:
        "B.Tech CSE student at GEC Buxar and Founder of Mediokart. National Winner IDE Bootcamp 2026 (AICTE × Ministry of Education) at NIT Patna. Building SAHAYAK — WhatsApp-based health assistant for rural Bihar.",
    award: "National Winner – IDE Bootcamp 2026 Phase II, AICTE × Ministry of Education, NIT Patna",
};

/* ── Theme init script — prevents FOUC (flash of wrong theme) ── */
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('akh-theme');
    var manual = localStorage.getItem('akh-theme-manual') === 'true';
    var theme;
    if (stored && manual) {
      theme = stored;
    } else {
      var hour = new Date().getHours();
      theme = (hour >= 18 || hour < 6) ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('theme-' + theme);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('theme-dark');
  }
})();
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Anti-FOUC theme script — runs before CSS renders */}
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />

                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={clsx(inter.className, "antialiased")}>
                {children}
            </body>
        </html>
    );
}
