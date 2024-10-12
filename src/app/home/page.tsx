import { Button } from "~/components/ui/button";


export default function HomePage() {

  return (
    <div className="col-span-12 h-screen grid place-content-center gap-5">
      <h1 className="bg-red-400">hello world!. react started</h1>
      <p>hello</p>
      <button type="button" className="bg-green-600 rounded-xl text-white hover:shadow-xl p-2 ">
        hello
      </button>
      <Button type="button">
        Hello shadcn
      </Button>
    </div>
  );
}
