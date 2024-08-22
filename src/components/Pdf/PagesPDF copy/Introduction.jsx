import { Text, View, Image, Page } from "@react-pdf/renderer";
import { styles } from "../../../../public/styles";

export function Introduction({ data }) {
  const { introduction } = data[0];
  return (
    <Page size="A4" style={styles.page}>
      <View>
        {introduction ? (
          <View>
            <Image style={styles.logo} src="/INDIRE_LOGO.png" />
            <View style={styles.header}>
              <Text style={styles.mainTitle}>{introduction.title}</Text>
              <Text style={styles.text}>{introduction.address}</Text>

              {introduction.main_img_url ? (
                <Image style={styles.mainImg} src={introduction.main_img_url} />
              ) : (
                <Image
                  style={styles.mainImg}
                  src="/empty.png"
                  alt="No imagen Added"
                />
              )}
              <Text style={styles.sub_title}>{introduction.sub_title}</Text>

              <Text style={styles.contentProjectInformation}>
                {introduction.project_number +
                  "-" +
                  introduction.title +
                  "-V" +
                  introduction.version}
              </Text>
            </View>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
    </Page>
  );
}
