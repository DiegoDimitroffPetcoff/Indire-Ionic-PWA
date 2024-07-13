import { StyleSheet } from "@react-pdf/renderer";

// Create styles
export const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  section: {
    marginBottom: 10,
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
    fontSize: 14,
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
  },
  tableCol: {
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    width: "14%",
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
  moduleTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  moduleText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "justify",
  },
});
