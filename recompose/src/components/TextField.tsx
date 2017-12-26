import * as React from "react";

export interface IProps {
  defaultValue?: string;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const TextField = (props: IProps) => <input type="text" {...props} />;
