import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

// 1
import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";

// 2 - links the ApolloClient instance to GraphQL API
const httpLink = createHttpLink({
	uri: "http://localhost:4000",
});

// 3
const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

// 4
ReactDOM.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
// serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles/index.css";
// import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
