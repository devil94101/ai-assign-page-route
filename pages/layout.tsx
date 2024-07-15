import { ReactNode } from "react";
import LayoutComp from "../components/common/layout/layout";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <LayoutComp>{children}</LayoutComp>;
}
