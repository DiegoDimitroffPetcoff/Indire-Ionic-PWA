import { Text, View, Image, Page } from "@react-pdf/renderer";
import { BudgetTable } from "./BudgetTable";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { RenderSections2 } from "./RenderSections2";

export const RenderSections = ({ sections, firtsSectionIndex }) => {
  return sections.map((section, sectionIndex) => (
    <View key={sectionIndex} style={styles.section}>
      {section.content.map((content, idx) => (
        <View key={idx}>
          <Text style={styles.sectionSubTitle}>
            {idx === 0
              ? firtsSectionIndex +
                1 +
                "." +
                (sectionIndex + 1) +
                "." +
                capitalizeFirstLetter(content.title)
              : capitalizeFirstLetter(content.title)}
          </Text>
          <Text style={styles.text}>{content.description}</Text>
        </View>
      ))}
      {section.img && <Image style={styles.mainImage} src={section.img} />}
      {section.budget && section.budget.length > 0 && (
        <>
          {" "}
          <Text style={styles.budget}>Custo Estimado:</Text>
         {section.budget.map((budget, indexBudget) => (
            <>
              <Text style={styles.budget} key={indexBudget}>
                •
                {budget.description.charAt(0).toUpperCase() +
                  budget.description.slice(1)}
                : {budget.amount} € (ver artigo
                {(budget.id = "#" + "counter" + "." + "index")}, capítulo 9
                ESTIMATIVA DE CUSTO)
              </Text>
              <BudgetTable budget={section.budget} />
            </>
          ))} 
        </>
      )}
      {section.sections && section.sections.length > 0 && (
        <RenderSections2
          sections={section.sections}
          firtsSectionIndex={firtsSectionIndex}
        />
      )}
    </View>
  ));
};
/*  */
