import type { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

export type MainTitleElement = {
  type: "main-title";
  align?: string;
  children: Descendant[];
};

export type ParagraphElement = {
  type: "paragraph";
  children: Descendant[];
};

export type CodeElement = {
  type: "code";
  children: Descendant[];
};

export type CustomElementProps =
  | MainTitleElement
  | ParagraphElement
  | CodeElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElementProps;
  }
}
