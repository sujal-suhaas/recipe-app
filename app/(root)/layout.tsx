import NavBar from "@/components/NavBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <NavBar type="Home" />
      <div className="relative bg-white">{children}</div>
      <footer className="flex justify-center items-center w-full h-20 bg-[#EE6C23]">
        <div className="font-sofiaPro text-[#FFECE3]">
          Made by - <a href="https://github.com/sujal-suhaas" target="_blank" className="hover:underline">Sujal Suhaas</a>
        </div>
      </footer>
    </main>
  );
}
