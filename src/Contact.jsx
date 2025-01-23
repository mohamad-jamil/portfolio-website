import Header from "./Header";

export default function Contact() {
  return (
    <section className="bg-[#0d1213] flex flex-col items-center py-36 px-8">
      <div className="text-white font-mono text-4xl">Contact</div>
      <div className="w-20 h-1 bg-white mt-4"></div>
      <h4 className="text-white text-center font-mono pt-12 text-xl">
        Feel free to drop me an email at{" "}
        <a
          href="mailto:mohamadjamil411@gmail.com"
          className="underline underline-offset-4 hover:text-[#5ce546] hover:decoration-[#5ce546]"
        >
          mohamadjamil411@gmail.com
        </a>
        !
      </h4>
    </section>
  );
}
