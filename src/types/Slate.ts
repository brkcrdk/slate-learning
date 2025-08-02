import type { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

type HeadingElement = {
  type: "main-title";
  align?: string;
  children: Descendant[];
};

type ParagraphElement = {
  type: "paragraph";
  children: Descendant[];
};

type CodeElement = {
  type: "code";
  children: Descendant[];
};

type CustomElementProps = HeadingElement | ParagraphElement | CodeElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElementProps;
  }
}
