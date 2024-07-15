import { Text, View, Image, Page } from "@react-pdf/renderer";
import { BudgetTable } from "./BudgetTable";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export const RenderSections2 = ({ sections, firtsSectionIndex }) => {
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
