import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MainSubscribe() {
  return (
    <section className="relative my_container flex flex-col items-center justify-center">
      {/* floating icons */}
      <span className="hidden md:block absolute start-6 top-6 w-15 h-15">
        <Image
          src={"/images/sub1.svg"}
          alt={"sub1"}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
        />
      </span>
      <span className="hidden md:block absolute end-6 top-6 w-15 h-15">
        <Image
          src={"/images/sub2.svg"}
          alt={"sub2"}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
        />
      </span>

      <div className="max-w-2xl mx-auto w-full text-center">
        <h2 className="text-4xl font-semibold font-dm-sans">
          Subscribe To Our Newsletter
        </h2>

        <p className="mt-3 text-xl text-muted-foreground">
          Every couple of weeks we send out an update and a few things that have
          inspired us.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-3xl w-full flex-col items-center gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Write Your Mail Here..."
          className="h-15 rounded-xl px-5 border-main-2"
        />
        <Button
          size={"lg"}
          className="h-15 w-45 bg-main hover:bg-main/90 text-lg rounded-xl"
        >
          Subscribe
        </Button>
      </div>
    </section>
  );
}
