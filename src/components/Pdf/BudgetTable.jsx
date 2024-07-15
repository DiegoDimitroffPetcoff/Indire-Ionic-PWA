import {  Text, View } from '@react-pdf/renderer';
import { styles  } from "./styles";

export const BudgetTable = ({ budget }) => (
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
      {budget.map((item, index) => (
        <View style={styles.tableRow} key={index}>
          <Text style={styles.tableCol}>#3.1.1.</Text>
          <Text style={styles.tableCol}>{item.description}</Text>        
          <Text style={styles.tableCol}>{item.amount}</Text>
          <Text style={styles.tableCol}>{item.qtd}</Text>
          <Text style={styles.tableCol}>{item.un}</Text>
          <Text style={styles.tableCol}>{item.uniteValue}</Text>
          <Text style={styles.tableCol}> TOTAL DE LA SECCION</Text>
        </View>
      ))}
    </View>
  );