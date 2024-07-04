import { NextAuthProvider } from "./providers";
import Layout from "@/components/layout";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{height:"100%"}}>
      <body  style={{height:"100%"}}>
        <NextAuthProvider>
          <Layout>
          {children}
          </Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
