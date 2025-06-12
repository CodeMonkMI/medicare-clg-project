import React, { PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
