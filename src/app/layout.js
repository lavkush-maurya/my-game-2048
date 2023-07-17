import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "2048 Game Created by lavkush",
  description:
    "Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
