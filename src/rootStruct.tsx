export enum PathIcons {
  HOME = "/home",
  MONSTERS = "/monsters",
}

export enum PATHS {
  HOME = "/home",
  MONSTERS = "/monsters",
}

type RootItem = {
  id: string;
  name: string;
  path: PATHS;
  iconName: PathIcons;
};

export const RootStruct: RootItem[] = [
  {
    id: "home",
    name: "Home",
    path: PATHS.HOME,
    iconName: PathIcons.HOME,
  },
  {
    id: "monsters",
    name: "Monsters",
    path: PATHS.MONSTERS,
    iconName: PathIcons.MONSTERS,
  },
];
