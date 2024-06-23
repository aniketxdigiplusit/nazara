import Navbar from "@/components/Navbar";
import { TypewriterEffectDemo } from "@/components/TypewriterText";
import Image from "next/image";
import financials from "../../public/images/financials.png"
import Financials from "@/components/Financials";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <TypewriterEffectDemo />
      <Financials />
    </div>
  );
}
