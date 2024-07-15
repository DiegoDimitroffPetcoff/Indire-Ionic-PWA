import { Text, View, Image, Page } from "@react-pdf/renderer";
import { BudgetTable } from "./BudgetTable";
import { styles } from "./styles";
import { RenderSections } from "./RenderSections";

export const RenderFirstSections = ({ sections }) => {
  return sections.map((section, firtsSectionIndex) => (
    <View key={firtsSectionIndex} style={styles.firtsSection}>
      <Text style={styles.sectionSubTitle}>
        {firtsSectionIndex + 1}.{section.title}
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
