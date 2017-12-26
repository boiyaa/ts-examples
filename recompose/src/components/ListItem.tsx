import * as React from "react";

export interface IProps {
  children?: React.ReactNode;
}

export const ListItem = (props: IProps) => <li {...props} />;
