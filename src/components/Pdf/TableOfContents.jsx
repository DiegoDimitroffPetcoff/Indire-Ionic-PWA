import { View, Text } from "@react-pdf/renderer";
import { styles } from "../../../public/styles";

export function TableOfContents({ allData }) {
  // Función para generar una lista del índice con los números de página
  function generateIndex(data) {
    let index = [];
    let currentPage = 1;

    data.forEach((item) => {
      // Genera el índice con el número de página para cada título
      if (item.title) {
        index.push({
          title: item.title,
          page: currentPage
        });
        currentPage += 1; // Incrementa la página para la próxima sección
      }
    });

    return index;
  }

  const indexList = generateIndex(allData);

  return (
    <View style={styles.tableOfContents}>
      <Text style={styles.indexTitle}>ÍNDICE</Text>
      {indexList.map((item, index) => (
        <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.indexItem}>{item.title}</Text>
          <Text style={styles.indexPageNumber}>{item.page}</Text>
        </View>
      ))}
    </View>
  );
}
