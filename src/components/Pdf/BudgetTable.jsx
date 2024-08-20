import { Text, View, Page } from "@react-pdf/renderer";
import { styles } from "../../../public/styles";
let cont = 0;
export const BudgetTable = ({ dataIterated }) => {
  if (dataIterated.length !== 0) {
    return (
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>ARTIGO</Text>
            <Text style={styles.tableCol}>DESIGNACAO</Text>
            <Text style={styles.tableCol}>Un.</Text>
            <Text style={styles.tableCol}>Qtd.</Text>
            <Text style={styles.tableCol}>CUSTO UNITARIO</Text>
            <Text style={styles.tableCol}>CUSTO PARCIAL</Text>
            <Text style={styles.tableCol}>CUSTO TOTAL</Text>
          </View>
          {dataIterated.map((item, index) =>
            item.budget.map((budget, budgetIndex) => (
              <View style={styles.tableRow} key={`${index}-${budgetIndex}`}>
                <Text style={styles.tableCol}>{item.idTemplate}</Text>
                <Text style={styles.tableCol}>{budget.description}</Text>
                <Text style={styles.tableCol}>{budget.amount}</Text>
                <Text style={styles.tableCol}>{budget.qtd}</Text>
                <Text style={styles.tableCol}>{budget.un}</Text>
                <Text style={styles.tableCol}>{budget.uniteValue}</Text>
                <Text style={styles.tableCol}> TOTAL DE LA SECCION</Text>
              </View>
            ))
          )}
        </View>
      </Page>
    );
  }
  return null;
};
