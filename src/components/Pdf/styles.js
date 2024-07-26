import { StyleSheet } from "@react-pdf/renderer";
export function getDynamicStyles(index) {
  switch (index) {
    case 0:
      return styles.firstTemplate;
    case 1:
      return styles.secondTemplate;
    case 2:
      return styles.thirdTemplate;
    default:
      return {};
  }
}

// Create styles
export const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  module: {
    margin: 10,
    padding: 10,
/*     borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0", */
  },
  firtsSection: {
    marginBottom: 10,
    marginLeft: 10,
    color: "red",
  },
  section: {
    marginBottom: 10,
    marginLeft: 10,

    color: "green",
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  mainImage: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  mainImg: {
    width: "300px",
    display: "flex",
    alignSelf: "center",
    margin: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },

  /* header */
  logoHeader: {
    position: "absolute",
    width: "100px",
  },
  headerContent: {
    fontSize: 12,
    textAlign: "right",
    color: "grey",
    margin: "5px",
  },
  headerTitle: {
    fontSize: 13,
    textAlign: "right",
    fontWeight: "bold",
  },
  pageNumberHeader: {
    fontSize: 12,
    textAlign: "right",
    color: "grey",
  },
  /* header */

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    fontSize: 10,
  },
  tableCol: {
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    width: "100%",
    padding: 1,
    textAlign: "center",
  },
  tableHeader: {
    backgroundColor: "#d3d3d3",
    fontWeight: "bold",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },

  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  moduleTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "start",
    marginBottom: 10,
    textDecoration: "underline",
  },
  moduleText: {
    fontSize: 10,
    marginBottom: 4,
    textAlign: "justify",
    fontWeight: "thin",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "start",
    marginBottom: 10,
    textDecoration: "underline",
  },
  sectionSubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "start",
    marginBottom: 10,
    textDecoration: "underline",
  },

  firstTemplate: {
    fontWeight: "bold",
    margin: 0,
  },
  secondTemplate: {
    margin: 20,
    marginTop: 20,
  },
  thirdTemplate: {
    marginTop: 30,
  },
});
