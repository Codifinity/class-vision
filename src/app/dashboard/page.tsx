import * as React from 'react';

import Navbar from "../components/Navbar";
import RegisterModal from "../components/RegisterModal";
import WelcomeSection from "../components/WelcomeSection";

export default function Page() {

  return (
    <div className="w-full">
      <Navbar />
      {/* MODAL ZMIANY HASLA */}
      {<RegisterModal/>}
      <WelcomeSection />
    </div>
  );
}
