import React from "react";
import { List } from "@mui/material";
import SuggestionSection from "./SuggestionSection";

const SuggestionList = ({ suggestions }) => {
  if (!suggestions) return null;

  return (
    <List disablePadding>
      <SuggestionSection
        title="Tags"
        items={suggestions.tags}
        labelKey="tag"
      />

      <SuggestionSection
        title="Categories"
        items={suggestions.categories}
        labelKey="category"
      />
      <SuggestionSection
        title="Brands"
        items={suggestions.brands}
        labelKey="brandName"
      />

      <SuggestionSection
        title="Companies"
        items={suggestions.companies}
        labelKey="companyName"
      />

      <SuggestionSection
        title="Industries"
        items={suggestions.industries}
        labelKey="industry"
      />
    </List>
  );
};

export default SuggestionList;
