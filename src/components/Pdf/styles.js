import { StyleSheet } from "@react-pdf/renderer";
export function getDynamicStyles(index) {
  switch (index) {
    case "module":
      return styles.module_title;
    case "firstSection":
      return styles.firstSection_title;
    case "section":
      return styles.section_title;
    case "subsection":
      return styles.subsection_title;

    case 0:
      return styles.module_title;
    case 1:
      return styles.firstSection_title;
    case 2:
      return styles.section_title;
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
   /*  padding: 10, */
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
  mainTitle: {
    marginTop: 50,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  sub_title: {
    marginTop: 0,
    padding: 0,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  contentProjectInformation: {
    fontSize: 20,
    marginTop: 200,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: "150px",
    padding: "10px",
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
  moduleName: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "left",
    marginTop: "10px",

    marginBottom: "5px",
    textDecoration: "underline",
  },
  moduleText: {
    fontSize: "12px",
    lineHeight: "1.6",
    textAlign: "justify",
    marginBottom: "15px",
    color: "#000000",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "start",
    /*   marginBottom: 10, */
    textDecoration: "underline",
  },
  sectionSubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "start",
    /*   marginBottom: 10, */
    textDecoration: "underline",
  },

  module_title: {
    fontSize: "12px",
    fontWeight: "bold",
    textAlign: "left",
  /*   marginTop: "20px", */
    marginBottom: "10px",
    textTransform: "uppercase",
    color: "#000000",
  },
  firstSection_title: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "10px",
    textTransform: "uppercase",
    color: "#000000",
  },
  section_title: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "left",
    /*   marginTop: "10px", */
    marginLeft: "10px",
/*     marginBottom: "5px", */
    textTransform: "uppercase",
    color: "#000000",
  },
  subsection_title: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "left",
    marginTop: "10px",
    marginLeft: "10px",
    marginBottom: "5px",
    textTransform: "uppercase",
    color: "#000000",
  },
});
