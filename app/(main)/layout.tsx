import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
// import { Poppins } from 'next/font/google';
import { Montserrat } from 'next/font/google';


// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600'],
// });

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
});


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.className} flex flex-col min-h-screen`}>
      <Navbar className={montserrat.className} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}