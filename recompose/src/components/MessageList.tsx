import * as React from "react";
import { Button } from "./Button";
import { List } from "./List";
import { ListItem } from "./ListItem";

export interface IArticle {
  id: number;
  title: string;
}

export interface IProps {
  messages: IArticle[];
}

// export interface IProps {
//   messages: string[];
// }

export const MessageList = ({ messages }: IProps) => (
  <List>
    {messages.map(message => (
      <ListItem>
        {message.title}
        <Button>Delete</Button>
      </ListItem>
    ))}
  </List>
);
