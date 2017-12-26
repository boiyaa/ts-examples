import * as React from "react";
import {
  branch,
  compose,
  lifecycle,
  renderComponent,
  withState
} from "recompose";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

// const withUserData = lifecycle({
//   state: { loading: true },
//   componentDidMount() {
//     fetch(
//       "https://sbcqwboajd.execute-api.ap-northeast-1.amazonaws.com/prod/articles"
//     ).then(articles => this.setState({ loading: false, articles }));
//   }
// });

// const Spinner = () => (
//   <div className="Spinner">
//     <div className="loader">Loading...</div>
//   </div>
// );

// const isLoading = ({ loading }: { loading: boolean }) => loading;

// const withSpinnerWhileLoading = branch(isLoading, renderComponent(Spinner));

// const enhance = compose(withUserData, withSpinnerWhileLoading);

// export interface IArticle {
//   id: number;
//   title: string;
// }

// export interface IProps {
//   messages: IArticle[];
// }

// // export const ConnectedMessageList = enhance(
// //   ({ messages }: { messages: IProps }) => <MessageList messages={messages} />
// // );
// export const ConnectedMessageList = enhance(
//   ({ messages }: { messages: IProps }) => <div>messages</div>
// );

const enhance = withState("counter", "setCounter", 0);
const Counter = enhance(({ counter, setCounter }) => (
  <div>
    Count: {counter}
    <button onClick={() => setCounter((n: number) => n + 1)}>Increment</button>
    <button onClick={() => setCounter((n: number) => n - 1)}>Decrement</button>
  </div>
));
