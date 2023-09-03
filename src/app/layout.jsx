import Image from "next/image";
import "./globals.css";
import "./login.css";
import logo from "../../public/logo.svg";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
