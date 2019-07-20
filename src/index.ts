import { app } from "hyperapp";
import { state } from "./state";
import { actions } from "./actions";
import { view } from "./view";
import "./index.postcss";
import "typeface-press-start-2p/index.css";

app(state, actions, view, document.body);
