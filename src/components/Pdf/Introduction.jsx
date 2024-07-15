import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./styles";
export function Introduction({ data }) {
  const { introduction } = data[0];
  return (
    <View>
      {introduction ? (
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>{introduction.title}</Text>
            <Text style={styles.subTitle}>{introduction.sub_title}</Text>
            {introduction.main_img_url ? (
              <Image style={styles.mainImg} src={introduction.main_img_url} />
            ) : (
              <Image
                style={styles.mainImg}
                src="/empty.png"
                alt="No imagen Added"
              />
            )}

            <Text style={styles.text}>{introduction.address}</Text>
            <Text style={styles.text}>
              Project Number: {introduction.project_number}
            </Text>
            <Text style={styles.text}>Date: {introduction.date}</Text>
            <Text style={styles.text}>Version: {introduction.version}</Text>
          </View>

          {introduction.main_img_url ? (
            <Image style={styles.mainImage} src={introduction.main_img_url} />
          ) : (
            <Text></Text>
          )}
        </View>
      ) : (
        <Text></Text>

      )}
    </View>
  );
}
