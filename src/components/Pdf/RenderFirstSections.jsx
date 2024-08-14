import { Text, View, Image, Page } from "@react-pdf/renderer";
import { BudgetTable } from "./BudgetTable";
import { styles } from "../../../public/styles";
import { RenderSections } from "./RenderSections";

export const RenderFirstSections = ({ sections ,moduleIndex}) => {
  return sections.map((section, firtsSectionIndex) => (
    <View key={firtsSectionIndex} style={styles.firtsSection}>
      <Text style={styles.sectionSubTitle}>
      # {moduleIndex + 1}.{firtsSectionIndex + 1}.{section.title}
      </Text>

      {section.sections && section.sections.length > 0 && (
        <RenderSections
          sections={section.sections}
          firtsSectionIndex={firtsSectionIndex}
        />
      )}
    </View>
  ));
};
