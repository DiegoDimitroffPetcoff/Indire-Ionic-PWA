import { StyleSheet } from "@react-pdf/renderer";

export function getDynamicStyles(index) {
  switch (index) {
    case 1:
      return styles.firstTemplate;
    case 2:
      return styles.secondTemplate;
    case 3:
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
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  sub_title: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  contentProjectInformation: {
    fontSize: 10,
    marginTop: 100,
    fontWeight: "bold",
    textAlign: "center",
  },
  superscript: {
    fontSize: 8,
    verticalAlign: "super",
    marginLeft: 2,
  },
  mainImage: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  mainImg: {
    width: "300px",
    maxHeight: "300px",
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
    margin: 0, // Asegúrate de que no haya margen
  },
  tableCol: {
    fontSize:14,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderBottomWidth: 0,
    height: "100%",
    width: "100%",
    padding: 1,
    textAlign: "center",
  },
  lastTableCol: {
    fontSize:14,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    height: "100%",
    borderTopWidth: 0,
    borderBottomWidth: 1,
    width: "100%",
    padding: 1,
    textAlign: "center",
  },

  tableColSpace: {
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    width: "100%",
    padding: 5,
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
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "start",
    textDecoration: "underline",
  },
  moduleText: {
    fontSize: 10,
    textAlign: "justify",
    fontWeight: "thin",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "start",
    textDecoration: "underline",
  },
  sectionSubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "start",
    textDecoration: "underline",
  },

  firstTemplate: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },
  secondTemplate: {
    fontWeight: "heavy",
    fontSize: 13,
  },
  indexPageNumber: {
    alignSelf: "flex-start",
    textDecoration: "none",
  },
});
