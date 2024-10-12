import { Header } from "~/components/headers/header"

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="col-span-12">
      <Header />
      <main className="">

      </main>
    </div>
  );
}
