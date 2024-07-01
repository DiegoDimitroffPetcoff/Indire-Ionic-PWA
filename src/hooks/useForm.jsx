import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export function useForm() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
}
