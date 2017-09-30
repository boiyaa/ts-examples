import * as React from "react";
import { Button } from "./Button";
import { List } from "./List";
import { ListItem } from "./ListItem";

export interface IProps {
  messages: string[];
}

export const MessageList = ({ messages }: IProps) => (
  <List>
    {messages.map(message => (
      <ListItem>
        {message}
        <Button>Delete</Button>
      </ListItem>
    ))}
  </List>
);
