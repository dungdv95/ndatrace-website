import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "./theme-provider";
import LayoutPage from "@/components/navs/layout-page";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ndatrace.vn"),
  title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
  description:
    "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
  openGraph: {
    title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
    description:
      "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
    images: [
      {
        url: `https://ndatrace.vn/images/thumbnail.jpg`,
        alt: "Hình ảnh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDATrace - Giải pháp Truy xuất Xác thực Nguồn gốc chuẩn Quốc gia",
    description:
      "Giải pháp Truy xuất toàn diện - Tích hợp nền tảng Dữ liệu Quốc gia. Minh bạch - An toàn - Chống giả mạo.",
    images: [
      {
        url: `https://ndatrace.vn/images/thumbnail.jpg`,
        alt: "Hình ảnh",
      },
    ],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  const { children } = props;

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <LayoutPage dictionary={dictionary}>{children}</LayoutPage>
          </Providers>
        </ThemeProvider>
        <Toaster richColors position="bottom-center" />
      </body>
      <GoogleAnalytics gaId="G-1P4BG00GV2" />
    </html>
  );
}
