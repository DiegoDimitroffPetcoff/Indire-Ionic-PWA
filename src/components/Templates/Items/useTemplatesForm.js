import { validations } from "../validations";

export function useTemplatesForm(
  setName,
  setTitle,
  setDescription,
  name,
  title,
  description,
  content,
  isModule,
  isSubsection,
  setContent,
  setSubsectionTemplates,
) {
  function handleInputName(e) {
    const value = e.target.value;
    setName(value);
  }

  function handleInputTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleInputDescription(e) {
    const value = e.target.value;
    setDescription(value);
  }

  function handleCheck(e, setType) {
    const checked = e.detail.checked;
    setType(checked);
  }

  function handleSubmite(e) {
    e.preventDefault();
    let message = validations(
      e,
      name,
      content,
      isModule,
      isSubsection,
      setContent,
      setName,
      setDescription,
      setTitle,
      setSubsectionTemplates,
    );
    if (message) {
      alert(message);
    }
  }

  function addContentItem() {
    if (title && description) {
      setContent((preContent) => [...preContent, { title, description }]);
      setTitle("");
      setDescription("");
    } else {
      alert("Por favor, complete o título e a descrição antes de adicionar.");
    }
  }

  function deleteItem(id) {
    setContent((preContent) => {
      const contentFiltered = preContent.filter(
        (content, idContent) => idContent !== id
      );
      return contentFiltered;
    });
  }

  return {
    handleInputName,
    handleCheck,
    handleInputTitle,
    handleInputDescription,
    handleSubmite,
    addContentItem,
    deleteItem,
  };
}
