import { Outfit, Ovo, } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], weight: ["400","500","600","700"]
});
 
const ovo  = Ovo({ 
  subsets: ["latin"], weight: ["400",]
});


export const metadata = {
  title: "Ebenezer Igogo | Full-Stack & Mobile Developer",
  description: "Portfolio of Ebenezer Igogo, a self-taught full-stack and mobile developer in Calabar, Nigeria, building with React Native, Next.js, FastAPI, Supabase and Convex.", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme
        dark:text-white `}
      >
        {children}
      </body>     
    </html>
  );
}
