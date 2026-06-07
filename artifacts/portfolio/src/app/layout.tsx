import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], display: "swap" });

/* ── Viewport Configuration ── */
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
        { media: "(prefers-color-scheme: dark)", color: "#050505" },
    ],
};

/* ── SEO Metadata ── */
export const metadata: Metadata = {
    title: {
        default: "Aman Kumar Happy | Founder Mediokart | B.Tech CSE Bihar | IDE Bootcamp Winner 2026",
        template: "%s | Aman Kumar Happy",
    },
    description:
        "Aman Kumar Happy — student founder from Buxar, Bihar. Founder of Mediokart and builder of SAHAYAK, a WhatsApp health assistant for rural India. National Winner IDE Bootcamp 2026 (AICTE × MoE, NIT Patna). B.Tech CSE student at GEC Buxar. Open source contributor. Building healthcare tools for Bharat.",
    keywords: [
        // Primary name variations
        "Aman Kumar Happy",
        "Aman Kumar",
        "Aman Happy",
        "amankumarhappy",
        "Aman Kumar Buxar",
        "Aman Happy Bihar",
        "Aman Kumar Bihar",
        // Startup & Projects
        "Mediokart founder",
        "Mediokart",
        "SAHAYAK WhatsApp health",
        "SAHAYAK health assistant",
        "WhatsApp health bot India",
        "Elderly healthcare India",
        "Rural healthcare technology",
        "Healthtech Bihar",
        "Bihar startup founder",
        "Student startup India",
        // Education & Awards
        "IDE Bootcamp 2026 winner",
        "IDE Bootcamp winner NIT Patna",
        "AICTE startup winner",
        "AICTE MoE IDE Bootcamp",
        "GEC Buxar",
        "Government Engineering College Buxar",
        "B.Tech CSE Bihar",
        "B Tech CSE student Bihar",
        // Skills & Tech
        "Python developer Bihar",
        "Open source contributor India",
        "Waggle MCP contributor",
        "GSSoC 2026",
        "GirlScript Summer of Code",
        "Student developer India",
        // Search intent keywords
        "Who is Aman Kumar Happy",
        "Aman Kumar Happy LinkedIn",
        "Aman Kumar Happy portfolio",
        "Aman Kumar from Buxar Bihar",
        "Aman Kumar Happy GEC Buxar",
        "Aman Kumar Happy SAHAYAK",
        "Aman Kumar Happy Mediokart",
        // Location based
        "Buxar Bihar developer",
        "Bihar tech entrepreneur",
        "Bihar student founder",
        "Buxar engineering student",
        // Indian tech community
        "Indian student founder",
        "Young entrepreneur Bihar",
        "Healthtech founder India",
        "WhatsApp bot developer India",
    ],
    authors: [{ name: "Aman Kumar Happy", url: "https://amankumarhappy.com" }],
    creator: "Aman Kumar Happy",
    publisher: "Aman Kumar Happy",
    metadataBase: new URL("https://amankumarhappy.com"),
    alternates: {
        canonical: "https://amankumarhappy.com",
    },
    referrer: "origin-when-cross-origin",
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
    openGraph: {
        type: "profile",
        locale: "en_IN",
        url: "https://amankumarhappy.com",
        siteName: "Aman Kumar Happy Portfolio",
        title: "Aman Kumar Happy — Student Founder & Builder | Mediokart | Bihar",
        description:
            "Building healthcare tools for the India that the internet forgot. National Winner IDE Bootcamp 2026. Founder of Mediokart. Building SAHAYAK — WhatsApp health assistant for rural India. B.Tech CSE, GEC Buxar. Open source contributor.",
        firstName: "Aman Kumar",
        lastName: "Happy",
        username: "amankumarhappy",
        gender: "male",
        images: [
            {
                url: "https://amankumarhappy.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Aman Kumar Happy — Student Founder Mediokart | Bihar | IDE Bootcamp Winner 2026",
                type: "image/jpeg",
            },
            {
                url: "https://amankumarhappy.com/aman-healthtech-hero.png",
                width: 1920,
                height: 1080,
                alt: "Aman Kumar Happy building healthtech for rural India",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@AmanKumarHappy1",
        creator: "@AmanKumarHappy1",
        title: "Aman Kumar Happy | Founder Mediokart | IDE Bootcamp Winner 2026",
        description:
            "Student founder from Buxar, Bihar. Building SAHAYAK — WhatsApp health assistant for rural India. National IDE Bootcamp 2026 winner. Open source contributor.",
        images: [
            {
                url: "https://amankumarhappy.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Aman Kumar Happy — Student Founder | Bihar",
            },
        ],
    },
    category: "technology",
    classification: "Personal Portfolio",
    archives: "https://amankumarhappy.com",
    bookmarks: [
        "https://www.mediokart.in",
        "https://github.com/amankumarhappy",
        "https://www.linkedin.com/in/amankumarhappy/",
    ],
    other: {
        "profile:username": "amankumarhappy",
        "profile:first_name": "Aman Kumar",
        "profile:last_name": "Happy",
        "profile:gender": "male",
        "geo.region": "IN-BR",
        "geo.placename": "Buxar, Bihar",
        "geo.position": "25.58;84.13",
        "ICBM": "25.58, 84.13",
        "apple-mobile-web-app-title": "Aman Happy",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "mobile-web-app-capable": "yes",
        "format-detection": "telephone=no",
    },
};

/* ── JSON-LD Structured Data ── */
const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://amankumarhappy.com/#person",
    name: "Aman Kumar Happy",
    givenName: "Aman Kumar",
    familyName: "Happy",
    alternateName: [
        "Aman Kumar",
        "Aman Happy",
        "Aman Kumar Buxar",
        "amankumarhappy",
        "Aman Kumar Bihar",
    ],
    url: "https://amankumarhappy.com",
    image: {
        "@type": "ImageObject",
        url: "https://amankumarhappy.com/My photo.png",
        width: 800,
        height: 800,
        caption: "Aman Kumar Happy - Student Founder & Developer",
    },
    email: "amankumarhappy1@gmail.com",
    telephone: "+91-XXXXXXXXXX",
    jobTitle: "Student Founder",
    description: "B.Tech CSE student at GEC Buxar and Founder of Mediokart. National Winner IDE Bootcamp 2026 (AICTE × Ministry of Education) at NIT Patna. Building SAHAYAK — WhatsApp-based health assistant for rural Bihar. Open source contributor.",
    birthPlace: {
        "@type": "Place",
        name: "Buxar",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Buxar",
            addressRegion: "Bihar",
            addressCountry: "IN",
        },
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Buxar",
        addressRegion: "Bihar",
        addressCountry: "IN",
    },
    worksFor: {
        "@type": "Organization",
        "@id": "https://www.mediokart.in/#organization",
        name: "Mediokart",
        url: "https://www.mediokart.in",
        description: "Healthtech startup focused on building healthcare solutions for rural India",
        founder: {
            "@type": "Person",
            name: "Aman Kumar Happy",
        },
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        "@id": "https://gecbuxar.ac.in/#organization",
        name: "Government Engineering College, Buxar",
        url: "https://gecbuxar.ac.in",
    },
    knowsAbout: [
        "Python Programming",
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "C Programming",
        "Healthcare Technology",
        "WhatsApp API",
        "Open Source",
        "Startup Development",
        "Artificial Intelligence",
        "Machine Learning",
    ],
    award: [
        {
            "@type": "Award",
            name: "National Winner – IDE Bootcamp 2026 Phase II",
            description: "AICTE × Ministry of Education, NIT Patna. Winner among 40+ teams across India.",
            dateReceived: "2026",
        },
    ],
    sameAs: [
        "https://www.linkedin.com/in/amankumarhappy/",
        "https://github.com/amankumarhappy",
        "https://www.mediokart.in",
        "https://www.instagram.com/amankumarhappy1",
        "https://medium.com/@amankumarhappy",
        "https://x.com/AmanKumarHappy1",
        "https://youtube.com/@amankumarhappy",
        "https://substack.com/@amankumarhappy",
        "https://dev.to/amankumarhappy",
        "https://producthunt.com/@amankumarhappy",
        "https://quora.com/profile/Aman-Kumar-Happy",
    ],
    mainEntityOfPage: {
        "@type": "ProfilePage",
        "@id": "https://amankumarhappy.com",
    },
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://amankumarhappy.com/#website",
    url: "https://amankumarhappy.com",
    name: "Aman Kumar Happy Portfolio",
    description: "Personal portfolio of Aman Kumar Happy - Student Founder, Developer, and Open Source Contributor from Bihar, India",
    publisher: {
        "@type": "Person",
        "@id": "https://amankumarhappy.com/#person",
        name: "Aman Kumar Happy",
    },
    potentialAction: {
        "@type": "SearchAction",
        target: "https://www.google.com/search?q=Aman+Kumar+Happy",
        "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.mediokart.in/#organization",
    name: "Mediokart",
    alternateName: "Mediokart Healthtech",
    url: "https://www.mediokart.in",
    logo: {
        "@type": "ImageObject",
        url: "https://www.mediokart.in/logo.png",
    },
    description: "Healthtech startup building SAHAYAK - WhatsApp-based health assistant for elderly and rural users in India",
    founder: {
        "@type": "Person",
        "@id": "https://amankumarhappy.com/#person",
        name: "Aman Kumar Happy",
    },
    foundingDate: "2025",
    foundingLocation: {
        "@type": "Place",
        name: "Buxar, Bihar, India",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Buxar",
        addressRegion: "Bihar",
        addressCountry: "IN",
    },
    sameAs: [
        "https://www.mediokart.in",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "amankumarhappy1@gmail.com",
        availableLanguage: ["English", "Hindi"],
    },
};

const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SAHAYAK",
    applicationCategory: "HealthApplication",
    operatingSystem: "WhatsApp",
    description: "WhatsApp-based digital health companion for elderly and rural users in India. Provides first-aid guidance, medication reminders, and health tracking in Hindi and Bhojpuri.",
    author: {
        "@type": "Person",
        "@id": "https://amankumarhappy.com/#person",
        name: "Aman Kumar Happy",
    },
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
    },
    url: "https://github.com/amankumarhappy/sahayakbot",
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://amankumarhappy.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://amankumarhappy.com/#about",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Skills",
            item: "https://amankumarhappy.com/#skills",
        },
        {
            "@type": "ListItem",
            position: 4,
            name: "Projects",
            item: "https://amankumarhappy.com/#projects",
        },
        {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: "https://amankumarhappy.com/#contact",
        },
    ],
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

                {/* DNS Prefetch for external resources */}
                <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
                <link rel="dns-prefetch" href="https://www.linkedin.com" />
                <link rel="dns-prefetch" href="https://github.com" />

                {/* JSON-LD Structured Data - Person */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
                {/* JSON-LD Structured Data - Website */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                {/* JSON-LD Structured Data - Organization (Mediokart) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                {/* JSON-LD Structured Data - Project (SAHAYAK) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
                />
                {/* JSON-LD Structured Data - BreadcrumbList */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                />
            </head>
            <body className={clsx(inter.className, "antialiased")}>
                {children}
            </body>
        </html>
    );
}
