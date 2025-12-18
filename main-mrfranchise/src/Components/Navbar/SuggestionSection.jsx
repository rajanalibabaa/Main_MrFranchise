import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";

const SuggestionSection = ({ title, items = [], labelKey,  }) => {
  if (!items.length) return null;

 
  return (
    <>
      <Typography
        variant="caption"
        sx={{ px: 2, pt: 1, fontWeight: 600 }}
      >
        {title}
      </Typography>

      {items.map((item, index) => (
        <ListItem
          key={`${title}-${index}`}
          button
        >
          {item.logo && (
            <ListItemAvatar>
              <Avatar src={item.logo} alt={item[labelKey]} />
            </ListItemAvatar>
          )}
          <ListItemText primary={item[labelKey]} />
        </ListItem>
      ))}

      <Divider />
    </>
  );
};

export default SuggestionSection;
