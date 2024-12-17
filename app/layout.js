import { Geist, Geist_Mono, Merienda, Raleway, Roboto, Rye } from "next/font/google";
import "./globals.css";

const rale = Raleway({
  subsets:["latin"],
  weight:["100","200","300","400","500","700"],
  variable:"--font-rale"
})

const rye = Rye({
  subsets:["latin"],
  weight:["400"],
  variable:"--font-rye"
})


const robot = Roboto({
  subsets:['latin'],
  weight:['100','300','500'],
  variable:'--font-roboto',
})

const meri = Merienda({
  subsets:['latin'],
  weight:['300','400','500'],
  variable:'--font-meri',
})


export const metadata = {
  title: "Data Scientist | React Developer",
  description: "I just want to be a successful developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${rale.variable} ${robot.variable} ${meri.variable} ${rye.variable} ${meri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
