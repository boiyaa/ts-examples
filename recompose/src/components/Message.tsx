import * as React from "react";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

const messages = ["aaa", "bbb", "ccc", "ddd"];

export const Message = () => (
  <div>
    <MessageForm />
    <MessageList messages={messages} />
  </div>
);
