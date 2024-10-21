import type { Metadata } from "next";
import "./globals.css";
import { Raleway, IBM_Plex_Serif } from "next/font/google";

export const metadata: Metadata = {
    title: "Horizon",
    description: "Horizon is a modern banking platform for everyone ",
    icons: {
        icon: "/icons/logo.svg",
    },
};
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ibm-plex-serif",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${raleway.variable} ${ibmPlexSerif.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
