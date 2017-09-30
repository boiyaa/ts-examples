import * as React from "react";

export interface IProps {
  children?: React.ReactNode;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export const Button = (props: IProps) => <button {...props} />;
