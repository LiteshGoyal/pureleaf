import Navbar from "@/components/navbar";
import "./globals.css";

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
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}