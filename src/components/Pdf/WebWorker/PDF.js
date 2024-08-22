import React from "react";
import { Page, Document, Text } from "@react-pdf/renderer";

export const PDF = (props) =>
  React.createElement(
    Document,
    {
      title: props.title,
      author: props.author,
      subject: props.description,
    },
    React.createElement(
      Page,
      null,
      React.createElement(Text, null, "Hello, World!")
    )
  );
