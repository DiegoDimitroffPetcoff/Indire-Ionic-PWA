import {  Text, View } from '@react-pdf/renderer';
import { styles  } from "./styles";

export const BudgetTable = ({ budget }) => (
    <View style={styles.table}>
      <View style={[styles.tableRow, styles.tableHeader]}>
        <Text style={styles.tableCol}>Description</Text>
        <Text style={styles.tableCol}>Amount</Text>
        <Text style={styles.tableCol}>Unit</Text>
        <Text style={styles.tableCol}>Quantity</Text>
        <Text style={styles.tableCol}>Unit Value</Text>
        <Text style={styles.tableCol}>Total</Text>
      </View>
      {budget.map((item, index) => (
        <View style={styles.tableRow} key={index}>
          <Text style={styles.tableCol}>{item.description}</Text>
          <Text style={styles.tableCol}>{item.amount}</Text>
          <Text style={styles.tableCol}>{item.un}</Text>
          <Text style={styles.tableCol}>{item.qtd}</Text>
          <Text style={styles.tableCol}>{item.uniteValue}</Text>
          <Text style={styles.tableCol}>{item.amount}</Text>
        </View>
      ))}
    </View>
  );