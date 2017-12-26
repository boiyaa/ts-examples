import * as React from "react";

export interface IProps {
  children?: React.ReactNode;
}

export const List = (props: IProps) => <ul {...props} />;
