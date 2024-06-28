import { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";

export function useForm() {
  const { handleChange, handleSubmite, addContent, project, addSection } =
    useContext(ProjectContext);
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return { handleChange, handleSubmite, addContent, project, addSection };
}
