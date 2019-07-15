import { VNode } from "hyperapp";

// hyperapp typings are no good

export interface Component<Attributes = {}, State = {}, Actions = {}> {
  (attributes: Attributes, children: Array<VNode | string>): VNode<Attributes>;
}
