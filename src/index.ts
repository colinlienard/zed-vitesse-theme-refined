import fs from "node:fs";
import { getStyles } from "./styles";

const theme = {
  $schema: "https://zed.dev/schema/themes/v0.2.0.json",
  name: "Vitesse Theme Patched",
  author: "Colin Lienard",
  themes: [
    {
      name: "Vitesse Patched Dark Soft",
      appearance: "dark",
      style: getStyles(),
    },
  ],
};

fs.writeFileSync(
  "./themes/vitesse-theme-patched.json",
  JSON.stringify(theme, null, 2),
);
