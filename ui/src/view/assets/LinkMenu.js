import React from "react";
import { Box } from "rebass";

import Theme from "./Theme";

const LinkMenu = props =>
  <Box 
    px={2}
    color={Theme.colors.grayOff}
    {...props}
    css={{
      "font-weight": "700",
      "cursor": "pointer",
      ":hover": {
        "color": Theme.colors.grayOn
      }
    }}
  />

export default LinkMenu;