import React, { FC } from "react";

interface Props {
  path: string | string[];
  component: any;
  fallback: any;
  exact?: boolean;
  isAllow: (user: any) => boolean;
}

export const RestrictRoute = ({
  component: Component,
  fallback: Fallback,
  isAllow,
}: Props) => {
  const user: any = localStorage.getItem("isUser");
  return isAllow(JSON.parse(user)) ? <Component /> : <Fallback />;
};
