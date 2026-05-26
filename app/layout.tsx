import Navbar from "@/components/navbar";
import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: "PureLeaf Tea",
  description: "Pure by Nature, Perfect in Every Sip.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="rb2b" strategy="afterInteractive">
          {`
            !function(key){
              if(window.reb2b) return;
              window.reb2b = { loaded: true };

              var s = document.createElement("script");
              s.async = true;
              s.src =
                "https://ddw14m2hdecbv.cloudfront.net/b/" +
                key +
                "/" +
                key +
                ".js.gz";

              document
                .getElementsByTagName("script")[0]
                .parentNode.insertBefore(
                  s,
                  document.getElementsByTagName("script")[0]
                );
            }("DNXY8HDYD800");
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}