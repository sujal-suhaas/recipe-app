import NavBar from "@/components/NavBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <NavBar />
      <div className="bg-white">{children}</div>
    </main>
  );
}
