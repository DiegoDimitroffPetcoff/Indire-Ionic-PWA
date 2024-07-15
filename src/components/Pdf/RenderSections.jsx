import { Text, View, Image } from "@react-pdf/renderer";
import { BudgetTable } from "./BudgetTable";
import { styles  } from "./styles";


export const RenderSections = ({ sections }) =>
  sections.map((section, index) => (
    <View key={index} style={styles.section}>
      {/* ESTO NO VA, ES EL TITULO DEL TEMPLATE */}
     {/*  <Text style={styles.sectionSubTitle}>{section.name}</Text> */}
       {section.content.map((content, idx) => (
        <View key={idx}>
          <Text style={styles.sectionSubTitle}>{content.title}</Text>
          <Text style={styles.text}>{content.description}</Text>
        </View>
      ))}
      {section.img && <Image style={styles.mainImage} src={section.img} />}
      {section.budget && section.budget.length > 0 && (
        <BudgetTable budget={section.budget} />
      )} 
      {section.sections && section.sections.length > 0 && (
        <RenderSections sections={section.sections} />
      )}
    </View>
  ));
