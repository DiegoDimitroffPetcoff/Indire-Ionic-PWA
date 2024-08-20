import { View, Text, Page } from "@react-pdf/renderer";
import { styles } from "../../../public/styles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export function TableOfContents({ dataIterated }) {
  function generateIndex(data) {
    let index = [];
    let currentPage = 1;
    data.forEach((item) => {
      index.push({
        title: item.title ? item.title : item.name,
        idTemplate: item.idTemplate,
        page: currentPage,
      });
      currentPage += 1;
    });

    return index;
  }

  const indexList = generateIndex(dataIterated);

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.tableOfContents}>
        <Text style={styles.indexTitle}>ÍNDICE</Text>
        {indexList.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.indexItem}>{capitalizeFirstLetter(item.title)}</Text>
            <Text style={styles.indexPageNumber}>{item.idTemplate}</Text>
          </View>
        ))}
      </View>
    </Page>
  );
}
