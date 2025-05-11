import Services from "@/components/Services";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import EmailSubscriptionPopup from "@/components/EmailSubscriptionPopup";
import GoodHands from "@/components/GoodHands";

export default function Page() {
  return (
    <div>
      <EmailSubscriptionPopup />
      <Hero />
      <GoodHands />
      <Services />
      <About />
      <RecentWork />
      <Contact />
    </div>
  );
}
