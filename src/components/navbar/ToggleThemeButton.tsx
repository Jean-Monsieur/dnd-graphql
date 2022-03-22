import { IconButton, PaletteMode, useTheme } from "@mui/material";
import React from "react";
import { ThemeMode } from "../../theme/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

type ToggleThemeButtonProps = {
  currentMode: PaletteMode;
  onThemeToggled: () => void;
};

const ToggleThemeButton = ({
  currentMode,
  onThemeToggled,
}: ToggleThemeButtonProps) => {
  const theme = useTheme();

  return (
    <>
      <IconButton sx={{ ml: 1 }} onClick={onThemeToggled} color="secondary">
        {theme.palette.mode === ThemeMode.DARK ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ToggleThemeButton;
