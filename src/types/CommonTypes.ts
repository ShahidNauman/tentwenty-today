import type { ReactElement } from "react";

export type LayoutProps = {
  children: ReactElement;
};

export type HeaderProps = {
  onToggleDarkMode: () => void;
};
