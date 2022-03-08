export enum PathIcons {
  HOME = "/home",
  MONSTERS = "/monsters",
  EQUIPMENT = "/equipment",
  MAGIC = "/magic",
  SPELLS = "/spells",
  MAGIC_ITEMS = "/magic-item",
  MAGIC_SCHOOL = "/magic-schools",
}

export enum PATHS {
  HOME = "/home",
  MONSTERS = "/monsters",
  EQUIPMENT = "/equipment",
  MAGIC = "/magic",
  SPELLS = "/spells",
  MAGIC_ITEMS = "/magic-item",
  MAGIC_SCHOOL = "/magic-schools",
}

type RootItem = {
  id: string;
  name: string;
  path: PATHS;
  iconName: PathIcons;
  subItems: Omit<RootItem, "subItems">[];
};

export const RootStruct: RootItem[] = [
  {
    id: "home",
    name: "Home",
    path: PATHS.HOME,
    iconName: PathIcons.HOME,
    subItems: [],
  },
  {
    id: "monsters",
    name: "Monsters",
    path: PATHS.MONSTERS,
    iconName: PathIcons.MONSTERS,
    subItems: [],
  },
  {
    id: "equipments",
    name: "Equipments",
    path: PATHS.EQUIPMENT,
    iconName: PathIcons.EQUIPMENT,
    subItems: [],
  },
  {
    id: "magic",
    name: "Magic",
    path: PATHS.MAGIC,
    iconName: PathIcons.MAGIC,
    subItems: [
      {
        id: "spells",
        name: "Spells",
        path: PATHS.SPELLS,
        iconName: PathIcons.SPELLS,
      },
      {
        id: "magicItems",
        name: "Magic Items",
        path: PATHS.MAGIC_ITEMS,
        iconName: PathIcons.MAGIC_ITEMS,
      },
      {
        id: "magicschools",
        name: "Magic Schools",
        path: PATHS.MAGIC_SCHOOL,
        iconName: PathIcons.MAGIC_SCHOOL,
      },
    ],
  },
];
