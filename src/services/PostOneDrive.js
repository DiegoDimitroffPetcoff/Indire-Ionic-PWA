import { Auth } from "../auth/Auth";


const PostOneDrive = async (file, title) => {
  try {
    const accessToken = await Auth();
    var root = "https://graph.microsoft.com/v1.0/me/drive/root:";
    var path = `/Pruebas-Test/${title}.pdf:/content`;
    var url = root + encodeURIComponent(path);

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/pdf;charset=utf-8",
        "Accept-Language": "pt",
      },
      body: file,
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