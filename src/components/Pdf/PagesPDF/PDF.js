import React from "react";
import { Page, Document, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../../../../public/styles";
import { Introduction } from "./Introduction";
import { Iterator } from "../../../utils/Iterator";
import { Modules } from "./Modules.js";

export const PDF = (data) => {
  // Verifica si 'data' existe y tiene contenido antes de intentar acceder a 'data[0]'
  if (!data || !data[0]) {
    // Si los datos aún no están disponibles, puedes devolver un componente vacío o un mensaje de carga
    return React.createElement(
      Document,
      null,
      React.createElement(Page, { size: "A4", style: styles.page })
    );
  }

  // Si los datos están disponibles, procedemos con la desestructuración y renderizado
  const { introduction } = data[0];
  let dataIterated;
  if (data[1] && data[1].modules) {
    dataIterated = Iterator(data[1].modules);
  } else {
    dataIterated = [];
  }
  return React.createElement(
    Document,
    null,
    React.createElement(Introduction, { introduction }),
    React.createElement(Modules, { data, dataIterated })
  );
};
