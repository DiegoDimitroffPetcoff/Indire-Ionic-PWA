import { Text, View, Image, Page } from "@react-pdf/renderer";
import { styles } from "../../../../public/styles";

export function Header({ data }) {
  const { introduction } = data[0];

  return (
    <View fixed>
      <Text style={styles.headerContent}>
        {introduction.project_number +
          "_" +
          introduction.title +
          "_V" +
          introduction.version}
      </Text>
      <Image style={styles.logoHeader} src="/INDIRE_LOGO.png" />
      <Text style={styles.headerTitle}>{introduction.title}</Text>
      <Text style={styles.headerContent}>{introduction.address}</Text>
      <Text
        style={styles.pageNumberHeader}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <Text style={styles.headerContent}>
        ---------------------------------------------------------------------------------------------------
      </Text>
    </View>
  );
}
