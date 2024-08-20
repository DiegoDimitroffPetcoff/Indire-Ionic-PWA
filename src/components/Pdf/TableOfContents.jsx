import { View, Link, Text, Page } from "@react-pdf/renderer";
import { styles } from "../../../public/styles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { Header } from "./Header";

export function TableOfContents({ dataIterated, data }) {
  function generateIndex(data) {
    let index = [];
    let currentPage = 1;
    let lastTemplate = null;
    data.forEach((item) => {
      if (lastTemplate !== item.idTemplate) {
     
        
        index.push({
          title: item.name ? item.name : item.title,
          idTemplate: item.idTemplate,
          page: currentPage,
        });
        currentPage += 1;
      }

      lastTemplate = item.idTemplate;
    });

    return index;
  }

  const indexList = generateIndex(dataIterated);

  return (
    <Page size="A4" style={styles.page}>
      <Header data={data} />
      <View style={styles.tableOfContents}>
        <Text style={styles.indexTitle}>ÍNDICE</Text>
        {indexList.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.indexItem}>
              {capitalizeFirstLetter(item.title)}
            </Text>
            <Link style={styles.indexPageNumber} src={`#${item.idTemplate}`}>
              <Text>{item.idTemplate}</Text>{" "}
            </Link>
          </View>
        ))}
      </View>
    </Page>
  );
}
