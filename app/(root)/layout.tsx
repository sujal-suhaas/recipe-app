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
    </main>
  );
}
