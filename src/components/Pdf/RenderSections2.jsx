import { Text, View, Image, Page } from "@react-pdf/renderer";
import { BudgetTable } from "./BudgetTable";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export const RenderSections2 = ({ sections, firtsSectionIndex }) => {
  function counter(idx, firtsSectionIndex, sectionIndex, content) {
    return idx === 0
      ? firtsSectionIndex +
          1 +
          "." +
          (sectionIndex + 1) +
          "." +
          (idx + 1) +
          "." +
          capitalizeFirstLetter(content.title)
      : capitalizeFirstLetter(content.title);
  }
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
                (idx + 1) +
                "." +
                capitalizeFirstLetter(content.title)
              : capitalizeFirstLetter(content.title)}
          </Text>
          <Text style={styles.text}>{content.description}</Text>
          {section.budget && section.budget.length > 0 && (
            <View>
              <Text style={styles.text}>Custo Estimado:</Text>
              {section.budget.map((budget, indexBudget) => (
                <Text style={styles.text} key={indexBudget}>
                  •
                  {budget.description.charAt(0).toUpperCase() +
                    budget.description.slice(1)}
                  : {budget.uniteValue} € (ver artigo
                  {counter(idx, firtsSectionIndex, sectionIndex, content)},
                  capítulo 9 Estimativa de custo)
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
      {section.img && <Image style={styles.mainImage} src={section.img} />}
      {/*       {section.budget && section.budget.length > 0 && (
        <BudgetTable budget={section.budget} />
      )} */}
      {/*       {section.sections && section.sections.length > 0 && (
        <RenderSections sections={section.sections} />
      )} */}
    </View>
  ));
};
