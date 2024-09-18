import { Auth } from "../auth/Auth";
import { pdf } from "@react-pdf/renderer";
import { PDF } from "../Pdf/PagesPDF/PDF";


const PostOneDrive = async (file, title, folder) => {
  try {
    const blob = await pdf(PDF(file)).toBlob();
    const accessToken = await Auth();
    var root = "https://graph.microsoft.com/v1.0/me/drive/root:";
    var path = `/${folder}/${title}.pdf:/content`;
    var url = root + encodeURIComponent(path);

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/pdf;charset=utf-8",
        "Accept-Language": "pt",
      },
      body: blob,
    });

    if (response.ok) {
      console.log("O arquivo foi enviado com sucesso.");
      return "O arquivo foi enviado com sucesso";
    } else {
      console.error(
        `Erro ao carregar o arquivo. Código de status: ${response.status}`
      );
      throw new Error(
        `Erro ao carregar o arquivo. Código de status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error en PostOneDrive:", error);
    throw new Error(error);
  }
};
export default PostOneDrive