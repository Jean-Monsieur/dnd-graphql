import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Int or string */
  ActionCount: any;
  /** AreaOfEffectType ("SPHERE", "CUBE", "CYLINDER", "LINE", "CONE") or list of AreaOfEffectTypes */
  AreaOfEffectTypeFilter: any;
  /** Float, list of floats, or object with gte (>=), gt (>), lte (<=), and lt (<) properties for range of values */
  FloatFilter: any;
  /** Int, list of ints, or object with gte (>=), gt (>), lte (<=), and lt (<) properties for range of values */
  IntFilter: any;
  /** LanguageScript ("COMMON", "ELVISH", "DWARVISH", "INFERNAL", "DRACONIC", "CELESTIAL") or list of LanguageScripts */
  LanguageScriptFilter: any;
  /** MonsterSubtype ("ANY_RACE", "HUMAN", "DWARF", "ELF", "GOBLINOID", "MERFOLK", "SHAPECHANGER", "DEMON", "DEVIL", "ORC", "SAHUAGIN", "TITAN", "KOBOLD", "GNOLL", "GRIMLOCK", "LIZARDFOLK", "GNOME") or list of MonsterSubtypes */
  MonsterSubtypeFilter: any;
  /** MonsterTypes ("BEAST", "MONSTROSITY", "DRAGON", "HUMANOID", "UNDEAD", "FIEND", "CELESTIAL", "CONSTRUCT", "GIANT", "ELEMENTAL", "FEY", "ABERRATION", "OOZE", "SWARM", "PLANT") or list of MonsterTypes */
  MonsterTypeFilter: any;
  /** ProficiencyType ("WEAPONS", "ARTISANS_TOOLS", "SKILLS", "ARMOR", "MUSICAL_INSTRUMENTS", "SAVING_THROWS", "OTHER", "GAMING_SETS", "VEHICLES") or list of ProficiencyTypes */
  ProficiencyTypeFilter: any;
  /** Size ("TINY", "SMALL", "MEDIUM", "LARGE", "HUGE", "GARGANTUAN") or list of sizes */
  SizeFilter: any;
  /** SpellAttackType ("MELEE", "RANGED") or list of SpellAttackTypes */
  SpellAttackTypeFilter: any;
  /** String or list of strings */
  StringFilter: any;
};

export type AbilityBonus = {
  __typename?: 'AbilityBonus';
  ability_score: AbilityScore;
  bonus: Scalars['Int'];
};

export type AbilityBonusChoice = {
  __typename?: 'AbilityBonusChoice';
  choose: Scalars['Int'];
  from: AbilityBonusOptionSet;
  type: Scalars['String'];
};

export type AbilityBonusOption = {
  __typename?: 'AbilityBonusOption';
  ability_score: AbilityScore;
  bonus: Scalars['Int'];
  option_type: Scalars['String'];
};

export type AbilityBonusOptionSet = {
  __typename?: 'AbilityBonusOptionSet';
  option_set_type: Scalars['String'];
  options: Array<AbilityBonusOption>;
};

export type AbilityScore = {
  __typename?: 'AbilityScore';
  desc: Array<Scalars['String']>;
  full_name: Scalars['String'];
  index: Scalars['String'];
  name: Scalars['String'];
  skills: Array<Skill>;
};


export type AbilityScoreSkillsArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};

export type AbilityScorePrerequisite = {
  __typename?: 'AbilityScorePrerequisite';
  ability_score: AbilityScore;
  minimum_score: Scalars['Int'];
};

export type Action = {
  __typename?: 'Action';
  action_name: Scalars['String'];
  count: Scalars['ActionCount'];
  type: Scalars['String'];
};

export type ActionDamage = {
  __typename?: 'ActionDamage';
  choose?: Maybe<Scalars['Int']>;
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<DamageType>;
  dc?: Maybe<ActionDc>;
  from?: Maybe<DamageOptionSet>;
  type?: Maybe<Scalars['String']>;
};

export type ActionDc = {
  __typename?: 'ActionDc';
  success: DcSuccess;
  type: AbilityScore;
  value: Scalars['Int'];
};

export type ActionOption = {
  __typename?: 'ActionOption';
  action_name: Scalars['String'];
  count: Scalars['ActionCount'];
  option_type: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type Alignment = {
  __typename?: 'Alignment';
  abbreviation: Scalars['String'];
  desc: Scalars['String'];
  index: Scalars['String'];
  name: Scalars['String'];
};

export type Ammunition = IEquipment & IEquipmentBase & IGear & {
  __typename?: 'Ammunition';
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  weight?: Maybe<Scalars['Float']>;
};

export type AreaOfEffect = {
  __typename?: 'AreaOfEffect';
  size: Scalars['Int'];
  type: AreaOfEffectType;
};

export type AreaOfEffectFilter = {
  size?: InputMaybe<Scalars['IntFilter']>;
  type?: InputMaybe<Scalars['AreaOfEffectTypeFilter']>;
};

export enum AreaOfEffectType {
  Cone = 'CONE',
  Cube = 'CUBE',
  Cylinder = 'CYLINDER',
  Line = 'LINE',
  Sphere = 'SPHERE'
}

export type Armor = IEquipment & IEquipmentBase & {
  __typename?: 'Armor';
  armor_category: EquipmentCategory;
  armor_class: ArmorClass;
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  stealth_disadvantage: Scalars['Boolean'];
  str_minimum: Scalars['Int'];
  weight?: Maybe<Scalars['Float']>;
};

export type ArmorClass = {
  __typename?: 'ArmorClass';
  base: Scalars['Int'];
  dex_bonus: Scalars['Boolean'];
  max_bonus?: Maybe<Scalars['Int']>;
};

export type Attack = {
  __typename?: 'Attack';
  damage?: Maybe<Array<Damage>>;
  dc: ActionDc;
  name: Scalars['String'];
};

export type Background = {
  __typename?: 'Background';
  bonds: StringChoice;
  feature: BackgroundFeature;
  flaws: StringChoice;
  ideals: IdealChoice;
  index: Scalars['String'];
  language_options: LanguageChoice;
  name: Scalars['String'];
  personality_traits: StringChoice;
  starting_equipment: Array<Quantity>;
  starting_equipment_options: Array<EquipmentCategoryChoice>;
  starting_proficiencies: Array<Proficiency>;
};


export type BackgroundStarting_EquipmentArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type BackgroundStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type BackgroundFeature = {
  __typename?: 'BackgroundFeature';
  desc: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type BarbarianSpecific = {
  __typename?: 'BarbarianSpecific';
  brutal_critical_dice: Scalars['Int'];
  rage_count: Scalars['Int'];
  rage_damage_bonus: Scalars['Int'];
};

export type BardSpecific = {
  __typename?: 'BardSpecific';
  bardic_inspiration_die: Scalars['Int'];
  magical_secrets_max_5: Scalars['Int'];
  magical_secrets_max_7: Scalars['Int'];
  magical_secrets_max_9: Scalars['Int'];
  song_of_rest_die: Scalars['Int'];
};

export type BreathChoice = {
  __typename?: 'BreathChoice';
  choose: Scalars['Int'];
  from: BreathOptionSet;
  type: Scalars['String'];
};

export type BreathOption = {
  __typename?: 'BreathOption';
  damage?: Maybe<Array<Damage>>;
  dc: ActionDc;
  name: Scalars['String'];
  option_type: Scalars['String'];
};

export type BreathOptionSet = {
  __typename?: 'BreathOptionSet';
  option_set_type: Scalars['String'];
  options: Array<BreathOption>;
};

export type BreathWeaponDamage = {
  __typename?: 'BreathWeaponDamage';
  damage_at_character_level: Array<DamageAtLevel>;
  damage_type: DamageType;
};

export type BreathWeaponDc = {
  __typename?: 'BreathWeaponDc';
  success: DcSuccess;
  type: AbilityScore;
};

export type BreathWeaponTrait = {
  __typename?: 'BreathWeaponTrait';
  area_of_effect: AreaOfEffect;
  damage: Array<BreathWeaponDamage>;
  dc: BreathWeaponDc;
  desc: Scalars['String'];
  name: Scalars['String'];
  usage: BreathWeaponUsage;
};

export type BreathWeaponUsage = {
  __typename?: 'BreathWeaponUsage';
  times: Scalars['Int'];
  type: UsageType;
};

export type Class = {
  __typename?: 'Class';
  class_levels: Array<Level>;
  hit_die: Scalars['Int'];
  index: Scalars['String'];
  multi_classing: Multiclassing;
  name: Scalars['String'];
  proficiencies: Array<Proficiency>;
  proficiency_choices: Array<ProficiencyChoice>;
  saving_throws: Array<AbilityScore>;
  spellcasting?: Maybe<ClassSpellcasting>;
  spells?: Maybe<Array<Spell>>;
  starting_equipment: Array<Quantity>;
  starting_equipment_options: Array<StartingEquipmentChoice>;
  subclasses: Array<Subclass>;
};


export type ClassProficienciesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type ClassSpellsArgs = {
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']>;
  casting_time?: InputMaybe<Scalars['StringFilter']>;
  concentration?: InputMaybe<Scalars['Boolean']>;
  damage_type?: InputMaybe<Scalars['StringFilter']>;
  dc_type?: InputMaybe<Scalars['StringFilter']>;
  level?: InputMaybe<Scalars['IntFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<SpellOrder>;
  range?: InputMaybe<Scalars['StringFilter']>;
  ritual?: InputMaybe<Scalars['Boolean']>;
  school?: InputMaybe<Scalars['StringFilter']>;
  skip?: InputMaybe<Scalars['Int']>;
  subclass?: InputMaybe<Scalars['StringFilter']>;
};


export type ClassSubclassesArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type ClassOrder = {
  by: ClassOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<ClassOrder>;
};

export enum ClassOrderBy {
  HitDie = 'HIT_DIE',
  Name = 'NAME'
}

export type ClassSpecific = BarbarianSpecific | BardSpecific | ClericSpecific | DruidSpecific | FighterSpecific | MonkSpecific | PaladinSpecific | RangerSpecific | RogueSpecific | SorcererSpecific | WarlockSpecific | WizardSpecific;

export type ClassSpellcasting = {
  __typename?: 'ClassSpellcasting';
  info: Array<SpellcastingInfo>;
  level: Scalars['Int'];
  spellcasting_ability: AbilityScore;
};

export type ClericSpecific = {
  __typename?: 'ClericSpecific';
  channel_divinity_charges: Scalars['Int'];
  destroy_undead_cr: Scalars['Float'];
};

export type Condition = {
  __typename?: 'Condition';
  desc: Array<Scalars['String']>;
  index: Scalars['String'];
  name: Scalars['String'];
};

export type Cost = {
  __typename?: 'Cost';
  quantity: Scalars['Int'];
  unit: Currency;
};

export type CountedReferenceOption = {
  __typename?: 'CountedReferenceOption';
  count: Scalars['Int'];
  of: IEquipment;
  option_type: Scalars['String'];
  prerequisites?: Maybe<Array<ProficiencyPrerequisite>>;
};

export enum Currency {
  Cp = 'CP',
  Gp = 'GP',
  Sp = 'SP'
}

export type Damage = {
  __typename?: 'Damage';
  damage_dice: Scalars['String'];
  damage_type: DamageType;
};

export type DamageAtLevel = {
  __typename?: 'DamageAtLevel';
  damage: Scalars['String'];
  level: Scalars['Int'];
};

export type DamageOption = {
  __typename?: 'DamageOption';
  damage_dice: Scalars['String'];
  damage_type: DamageType;
  notes?: Maybe<Scalars['String']>;
  option_type: Scalars['String'];
};

export type DamageOptionSet = {
  __typename?: 'DamageOptionSet';
  option_set_type: Scalars['String'];
  options: Array<DamageOption>;
};

export type DamageType = {
  __typename?: 'DamageType';
  desc: Array<Scalars['String']>;
  index: Scalars['String'];
  name: Scalars['String'];
};

export enum DcSuccess {
  Half = 'HALF',
  None = 'NONE',
  Other = 'OTHER'
}

export type DevotionSpecific = {
  __typename?: 'DevotionSpecific';
  aura_range: Scalars['Int'];
};

export type Dice = {
  __typename?: 'Dice';
  dice_count: Scalars['Int'];
  dice_value: Scalars['Int'];
};

export type DruidSpecific = {
  __typename?: 'DruidSpecific';
  wild_shape_fly: Scalars['Boolean'];
  wild_shape_max_cr: Scalars['Float'];
  wild_shape_swim: Scalars['Boolean'];
};

export type EquipmentCategory = {
  __typename?: 'EquipmentCategory';
  equipment: Array<IEquipmentBase>;
  index: Scalars['String'];
  name: Scalars['String'];
};


export type EquipmentCategoryEquipmentArgs = {
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<EquipmentCategoryOrder>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type EquipmentCategoryChoice = {
  __typename?: 'EquipmentCategoryChoice';
  choose: Scalars['Int'];
  from: EquipmentCategoryOptionSet;
  type: Scalars['String'];
};

export type EquipmentCategoryChoiceOption = {
  __typename?: 'EquipmentCategoryChoiceOption';
  choice: EquipmentCategoryChoice;
  option_type: Scalars['String'];
};

export type EquipmentCategoryOptionSet = {
  __typename?: 'EquipmentCategoryOptionSet';
  equipment_category: EquipmentCategory;
  option_set_type: Scalars['String'];
};

export type EquipmentCategoryOrder = {
  by: EquipmentCategoryOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<EquipmentCategoryOrder>;
};

export enum EquipmentCategoryOrderBy {
  Name = 'NAME',
  Weight = 'WEIGHT'
}

export type EquipmentMultipleItem = CountedReferenceOption | EquipmentCategoryChoiceOption;

export type EquipmentMultipleOption = {
  __typename?: 'EquipmentMultipleOption';
  items: Array<EquipmentMultipleItem>;
  option_type: Scalars['String'];
};

export type EquipmentOption = CountedReferenceOption | EquipmentCategoryChoiceOption | EquipmentMultipleOption;

export type EquipmentOptionSet = {
  __typename?: 'EquipmentOptionSet';
  option_set_type: Scalars['String'];
  options: Array<EquipmentOption>;
};

export type EquipmentOrder = {
  by: EquipmentOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<EquipmentOrder>;
};

export enum EquipmentOrderBy {
  EquipmentCategory = 'EQUIPMENT_CATEGORY',
  Name = 'NAME',
  Weight = 'WEIGHT'
}

export type ExpertiseChoice = {
  __typename?: 'ExpertiseChoice';
  choose: Scalars['Int'];
  from: ExpertiseOptionSet;
  type: Scalars['String'];
};

export type ExpertiseMultipleOption = {
  __typename?: 'ExpertiseMultipleOption';
  items: Array<ProficiencyOption>;
  option_type: Scalars['String'];
};

export type ExpertiseOption = ExpertiseMultipleOption | ProficiencyChoiceOption | ProficiencyReferenceOption;

export type ExpertiseOptionSet = {
  __typename?: 'ExpertiseOptionSet';
  option_set_type: Scalars['String'];
  options: Array<ExpertiseOption>;
};

export type Feat = {
  __typename?: 'Feat';
  desc: Array<Scalars['String']>;
  index: Scalars['String'];
  name: Scalars['String'];
  prerequisites: Array<AbilityScorePrerequisite>;
};

export type Feature = {
  __typename?: 'Feature';
  class: Class;
  desc: Array<Scalars['String']>;
  feature_specific?: Maybe<FeatureSpecific>;
  index: Scalars['String'];
  level: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Feature>;
  prerequisites: Array<FeaturePrerequisite>;
  reference?: Maybe<Scalars['String']>;
  subclass?: Maybe<Subclass>;
};

export type FeatureChoice = {
  __typename?: 'FeatureChoice';
  choose: Scalars['Int'];
  from: FeatureOptionSet;
  type: Scalars['String'];
};

export type FeatureOption = {
  __typename?: 'FeatureOption';
  item: Feature;
  option_type: Scalars['String'];
};

export type FeatureOptionSet = {
  __typename?: 'FeatureOptionSet';
  option_set_type: Scalars['String'];
  options: Array<FeatureOption>;
};

export type FeatureOrder = {
  by: FeatureOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<FeatureOrder>;
};

export enum FeatureOrderBy {
  Class = 'CLASS',
  Level = 'LEVEL',
  Name = 'NAME',
  Subclass = 'SUBCLASS'
}

export type FeaturePrerequisite = {
  __typename?: 'FeaturePrerequisite';
  feature?: Maybe<Feature>;
  level?: Maybe<Scalars['Int']>;
  spell?: Maybe<Spell>;
  type: Scalars['String'];
};

export type FeatureSpecific = {
  __typename?: 'FeatureSpecific';
  expertise_options?: Maybe<ExpertiseChoice>;
  invocations?: Maybe<Array<Feature>>;
  subfeature_options?: Maybe<FeatureChoice>;
};

export type FighterSpecific = {
  __typename?: 'FighterSpecific';
  action_surges: Scalars['Int'];
  extra_attacks: Scalars['Int'];
  indomitable_uses: Scalars['Int'];
};

export type Gear = IEquipment & IEquipmentBase & IGear & {
  __typename?: 'Gear';
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  weight?: Maybe<Scalars['Float']>;
};

export type HealingAtLevel = {
  __typename?: 'HealingAtLevel';
  healing: Scalars['String'];
  level: Scalars['Int'];
};

export type IEquipment = {
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  weight?: Maybe<Scalars['Float']>;
};

export type IEquipmentBase = {
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
};

export type IGear = {
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  weight?: Maybe<Scalars['Float']>;
};

export type IdealChoice = {
  __typename?: 'IdealChoice';
  choose: Scalars['Int'];
  from: IdealOptionSet;
  type: Scalars['String'];
};

export type IdealOption = {
  __typename?: 'IdealOption';
  alignments: Array<Alignment>;
  desc: Scalars['String'];
  option_type: Scalars['String'];
};

export type IdealOptionSet = {
  __typename?: 'IdealOptionSet';
  option_set_type: Scalars['String'];
  options: Array<IdealOption>;
};

export type Language = {
  __typename?: 'Language';
  desc?: Maybe<Scalars['String']>;
  index: Scalars['String'];
  name: Scalars['String'];
  script?: Maybe<LanguageScript>;
  type: LanguageType;
  typical_speakers: Array<Scalars['String']>;
};

export type LanguageChoice = {
  __typename?: 'LanguageChoice';
  choose: Scalars['Int'];
  from: LanguageOptionSet;
  type: Scalars['String'];
};

export type LanguageOption = {
  __typename?: 'LanguageOption';
  item: Language;
  option_type: Scalars['String'];
};

export type LanguageOptionSet = {
  __typename?: 'LanguageOptionSet';
  option_set_type: Scalars['String'];
  options: Array<LanguageOption>;
};

export type LanguageOrder = {
  by: LanguageOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<LanguageOrder>;
};

export enum LanguageOrderBy {
  Name = 'NAME',
  Script = 'SCRIPT',
  Type = 'TYPE'
}

export enum LanguageScript {
  Celestial = 'CELESTIAL',
  Common = 'COMMON',
  Draconic = 'DRACONIC',
  Dwarvish = 'DWARVISH',
  Elvish = 'ELVISH',
  Infernal = 'INFERNAL'
}

export enum LanguageType {
  Exotic = 'EXOTIC',
  Standard = 'STANDARD'
}

export type LegendaryAction = {
  __typename?: 'LegendaryAction';
  damage?: Maybe<Array<Damage>>;
  dc?: Maybe<ActionDc>;
  desc: Scalars['String'];
  name: Scalars['String'];
};

export type Level = {
  __typename?: 'Level';
  ability_score_bonuses?: Maybe<Scalars['Int']>;
  class: Class;
  class_specific?: Maybe<ClassSpecific>;
  features: Array<Feature>;
  index: Scalars['String'];
  level: Scalars['Int'];
  prof_bonus?: Maybe<Scalars['Int']>;
  spellcasting?: Maybe<LevelSpellcasting>;
  subclass?: Maybe<Subclass>;
  subclass_specific?: Maybe<SubclassSpecific>;
};


export type LevelFeaturesArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};

export type LevelOrder = {
  by: LevelOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<LevelOrder>;
};

export enum LevelOrderBy {
  AbilityScoreBonuses = 'ABILITY_SCORE_BONUSES',
  Class = 'CLASS',
  Level = 'LEVEL',
  ProfBonus = 'PROF_BONUS',
  Subclass = 'SUBCLASS'
}

export type LevelSpellcasting = {
  __typename?: 'LevelSpellcasting';
  cantrips_known?: Maybe<Scalars['Int']>;
  spell_slots_level_1?: Maybe<Scalars['Int']>;
  spell_slots_level_2?: Maybe<Scalars['Int']>;
  spell_slots_level_3?: Maybe<Scalars['Int']>;
  spell_slots_level_4?: Maybe<Scalars['Int']>;
  spell_slots_level_5?: Maybe<Scalars['Int']>;
  spell_slots_level_6?: Maybe<Scalars['Int']>;
  spell_slots_level_7?: Maybe<Scalars['Int']>;
  spell_slots_level_8?: Maybe<Scalars['Int']>;
  spell_slots_level_9?: Maybe<Scalars['Int']>;
  spells_known?: Maybe<Scalars['Int']>;
};

export type LoreSpecific = {
  __typename?: 'LoreSpecific';
  additional_magical_secrets_max_lvl: Scalars['Int'];
};

export type MagicItem = IEquipmentBase & {
  __typename?: 'MagicItem';
  desc: Array<Scalars['String']>;
  equipment_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  rarity: MagicItemRarity;
};

export type MagicItemOrder = {
  by: MagicItemOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<MagicItemOrder>;
};

export enum MagicItemOrderBy {
  EquipmentCategory = 'EQUIPMENT_CATEGORY',
  Name = 'NAME'
}

export enum MagicItemRarity {
  Artifact = 'ARTIFACT',
  Common = 'COMMON',
  Legendary = 'LEGENDARY',
  Rare = 'RARE',
  Uncommon = 'UNCOMMON',
  Varies = 'VARIES',
  VeryRare = 'VERY_RARE'
}

export type MagicSchool = {
  __typename?: 'MagicSchool';
  desc: Scalars['String'];
  index: Scalars['String'];
  name: Scalars['String'];
  spells: Array<Spell>;
};


export type MagicSchoolSpellsArgs = {
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']>;
  casting_time?: InputMaybe<Scalars['StringFilter']>;
  class?: InputMaybe<Scalars['StringFilter']>;
  concentration?: InputMaybe<Scalars['Boolean']>;
  damage_type?: InputMaybe<Scalars['StringFilter']>;
  dc_type?: InputMaybe<Scalars['StringFilter']>;
  level?: InputMaybe<Scalars['IntFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<SpellOrder>;
  range?: InputMaybe<Scalars['StringFilter']>;
  ritual?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  subclass?: InputMaybe<Scalars['StringFilter']>;
};

export type MonkSpecific = {
  __typename?: 'MonkSpecific';
  ki_points: Scalars['Int'];
  martial_arts: Dice;
  unarmored_movement: Scalars['Int'];
};

export type Monster = {
  __typename?: 'Monster';
  actions?: Maybe<Array<MonsterAction>>;
  alignment: Scalars['String'];
  armor_class?: Maybe<Array<Maybe<MonsterArmorClass>>>;
  challenge_rating: Scalars['Float'];
  charisma: Scalars['Int'];
  condition_immunities: Array<Condition>;
  constitution: Scalars['Int'];
  damage_immunities: Array<Scalars['String']>;
  damage_resistances: Array<Scalars['String']>;
  damage_vulnerabilities: Array<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  dexterity: Scalars['Int'];
  forms?: Maybe<Array<Monster>>;
  hit_dice: Scalars['String'];
  hit_points: Scalars['Int'];
  hit_points_roll: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  index: Scalars['String'];
  intelligence: Scalars['Int'];
  languages: Scalars['String'];
  legendary_actions?: Maybe<Array<LegendaryAction>>;
  name: Scalars['String'];
  proficiencies: Array<MonsterProficiency>;
  reactions?: Maybe<Array<Reaction>>;
  senses: Senses;
  size: Size;
  special_abilities?: Maybe<Array<SpecialAbility>>;
  speed: MonsterSpeed;
  strength: Scalars['Int'];
  subtype?: Maybe<MonsterSubtype>;
  type: MonsterType;
  wisdom: Scalars['Int'];
  xp: Scalars['Int'];
};

export type MonsterAction = {
  __typename?: 'MonsterAction';
  action_options?: Maybe<MonsterActionChoice>;
  actions?: Maybe<Array<Action>>;
  attack_bonus?: Maybe<Scalars['Int']>;
  attacks?: Maybe<Array<Attack>>;
  damage?: Maybe<Array<ActionDamage>>;
  dc?: Maybe<ActionDc>;
  desc: Scalars['String'];
  multiattack_type?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  options?: Maybe<BreathChoice>;
  usage?: Maybe<Usage>;
};

export type MonsterActionChoice = {
  __typename?: 'MonsterActionChoice';
  choose: Scalars['Int'];
  from: MonsterActionOptionSet;
  type: Scalars['String'];
};

export type MonsterActionOption = ActionOption | MultipleActionOption;

export type MonsterActionOptionSet = {
  __typename?: 'MonsterActionOptionSet';
  option_set_type: Scalars['String'];
  options: Array<MonsterActionOption>;
};

export type MonsterArmorClass = {
  __typename?: 'MonsterArmorClass';
  armor?: Maybe<Array<Maybe<Armor>>>;
  condition?: Maybe<Condition>;
  desc?: Maybe<Scalars['String']>;
  spell?: Maybe<Spell>;
  type: MonsterArmorClassType;
  value: Scalars['Int'];
};

export enum MonsterArmorClassType {
  Armor = 'armor',
  Condition = 'condition',
  Dex = 'dex',
  Natural = 'natural',
  Spell = 'spell'
}

export type MonsterOrder = {
  by: MonsterOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<MonsterOrder>;
};

export enum MonsterOrderBy {
  ArmorClass = 'ARMOR_CLASS',
  ChallengeRating = 'CHALLENGE_RATING',
  Charisma = 'CHARISMA',
  Constitution = 'CONSTITUTION',
  Dexterity = 'DEXTERITY',
  Intelligence = 'INTELLIGENCE',
  Name = 'NAME',
  Size = 'SIZE',
  Strength = 'STRENGTH',
  Subtype = 'SUBTYPE',
  Type = 'TYPE',
  Wisdom = 'WISDOM',
  Xp = 'XP'
}

export type MonsterProficiency = {
  __typename?: 'MonsterProficiency';
  proficiency: Proficiency;
  value: Scalars['Int'];
};

export type MonsterSpeed = {
  __typename?: 'MonsterSpeed';
  burrow?: Maybe<Scalars['String']>;
  climb?: Maybe<Scalars['String']>;
  fly?: Maybe<Scalars['String']>;
  hover?: Maybe<Scalars['Boolean']>;
  swim?: Maybe<Scalars['String']>;
  walk?: Maybe<Scalars['String']>;
};

export type MonsterSpell = {
  __typename?: 'MonsterSpell';
  spell: Spell;
  usage?: Maybe<Usage>;
};

export type MonsterSpellSlot = {
  __typename?: 'MonsterSpellSlot';
  level: Scalars['Int'];
  slots: Scalars['Int'];
};

export type MonsterSpellcasting = {
  __typename?: 'MonsterSpellcasting';
  ability: AbilityScore;
  components_required?: Maybe<Array<SpellComponent>>;
  dc?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  modifier?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
  slots?: Maybe<Array<MonsterSpellSlot>>;
  spells: Array<MonsterSpell>;
};

export enum MonsterSubtype {
  AnyRace = 'ANY_RACE',
  Demon = 'DEMON',
  Devil = 'DEVIL',
  Dwarf = 'DWARF',
  Elf = 'ELF',
  Gnoll = 'GNOLL',
  Gnome = 'GNOME',
  Goblinoid = 'GOBLINOID',
  Grimlock = 'GRIMLOCK',
  Human = 'HUMAN',
  Kobold = 'KOBOLD',
  Lizardfolk = 'LIZARDFOLK',
  Merfolk = 'MERFOLK',
  Orc = 'ORC',
  Sahuagin = 'SAHUAGIN',
  Shapechanger = 'SHAPECHANGER',
  Titan = 'TITAN'
}

export enum MonsterType {
  Aberration = 'ABERRATION',
  Beast = 'BEAST',
  Celestial = 'CELESTIAL',
  Construct = 'CONSTRUCT',
  Dragon = 'DRAGON',
  Elemental = 'ELEMENTAL',
  Fey = 'FEY',
  Fiend = 'FIEND',
  Giant = 'GIANT',
  Humanoid = 'HUMANOID',
  Monstrosity = 'MONSTROSITY',
  Ooze = 'OOZE',
  Plant = 'PLANT',
  Swarm = 'SWARM',
  Undead = 'UNDEAD'
}

export type Multiclassing = {
  __typename?: 'Multiclassing';
  prerequisite_options?: Maybe<PrerequisiteChoice>;
  prerequisites?: Maybe<Array<AbilityScorePrerequisite>>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<Array<ProficiencyChoice>>;
};

export type MultipleActionOption = {
  __typename?: 'MultipleActionOption';
  items: Array<ActionOption>;
  option_type: Scalars['String'];
};

export enum OrderByDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type Pack = IEquipment & IEquipmentBase & IGear & {
  __typename?: 'Pack';
  contents: Array<PackQuantity>;
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  weight?: Maybe<Scalars['Float']>;
};

export type PackQuantity = {
  __typename?: 'PackQuantity';
  item: IEquipment;
  quantity: Scalars['Int'];
};

export type PaladinSpecific = {
  __typename?: 'PaladinSpecific';
  aura_range: Scalars['Int'];
};

export type PrerequisiteChoice = {
  __typename?: 'PrerequisiteChoice';
  choose: Scalars['Int'];
  from: PrerequisiteOptionSet;
  type: Scalars['String'];
};

export type PrerequisiteOption = {
  __typename?: 'PrerequisiteOption';
  ability_score: AbilityScore;
  minimum_score: Scalars['Int'];
  option_type: Scalars['String'];
};

export type PrerequisiteOptionSet = {
  __typename?: 'PrerequisiteOptionSet';
  option_set_type: Scalars['String'];
  options: Array<PrerequisiteOption>;
};

export type Proficiency = {
  __typename?: 'Proficiency';
  classes: Array<Class>;
  index: Scalars['String'];
  name: Scalars['String'];
  races: Array<ProficiencyRace>;
  reference: ProficiencyReference;
  type: ProficiencyType;
};


export type ProficiencyClassesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type ProficiencyRacesArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type ProficiencyChoice = {
  __typename?: 'ProficiencyChoice';
  choose: Scalars['Int'];
  desc?: Maybe<Scalars['String']>;
  from: ProficiencyOptionSet;
  type: Scalars['String'];
};

export type ProficiencyChoiceOption = {
  __typename?: 'ProficiencyChoiceOption';
  choice: ProficiencyChoice;
  option_type: Scalars['String'];
};

export type ProficiencyOption = ProficiencyChoiceOption | ProficiencyReferenceOption;

export type ProficiencyOptionSet = {
  __typename?: 'ProficiencyOptionSet';
  option_set_type: Scalars['String'];
  options: Array<ProficiencyOption>;
};

export type ProficiencyOrder = {
  by: ProficiencyOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<ProficiencyOrder>;
};

export enum ProficiencyOrderBy {
  Name = 'NAME',
  Type = 'TYPE'
}

export type ProficiencyPrerequisite = {
  __typename?: 'ProficiencyPrerequisite';
  proficiency: Proficiency;
  type: Scalars['String'];
};

export type ProficiencyRace = {
  ability_bonuses: Array<AbilityBonus>;
  index: Scalars['String'];
  name: Scalars['String'];
};

export type ProficiencyReference = AbilityScore | Ammunition | Armor | EquipmentCategory | Gear | Pack | Skill | Tool | Vehicle | Weapon;

export type ProficiencyReferenceOption = {
  __typename?: 'ProficiencyReferenceOption';
  item: Proficiency;
  option_type: Scalars['String'];
};

export enum ProficiencyType {
  Armor = 'ARMOR',
  ArtisansTools = 'ARTISANS_TOOLS',
  GamingSets = 'GAMING_SETS',
  MusicalInstruments = 'MUSICAL_INSTRUMENTS',
  Other = 'OTHER',
  SavingThrows = 'SAVING_THROWS',
  Skills = 'SKILLS',
  Vehicles = 'VEHICLES',
  Weapons = 'WEAPONS'
}

export type Quantity = {
  __typename?: 'Quantity';
  equipment: IEquipment;
  quantity: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  abilityScore?: Maybe<AbilityScore>;
  abilityScores?: Maybe<Array<AbilityScore>>;
  alignment?: Maybe<Alignment>;
  alignments?: Maybe<Array<Alignment>>;
  background?: Maybe<Background>;
  backgrounds: Array<Background>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  condition?: Maybe<Condition>;
  conditions?: Maybe<Array<Condition>>;
  damageType?: Maybe<DamageType>;
  damageTypes?: Maybe<Array<DamageType>>;
  equipment?: Maybe<IEquipment>;
  equipmentCategories?: Maybe<Array<EquipmentCategory>>;
  equipmentCategory?: Maybe<EquipmentCategory>;
  equipments?: Maybe<Array<IEquipment>>;
  feat?: Maybe<Feat>;
  feats?: Maybe<Array<Feat>>;
  feature?: Maybe<Feature>;
  features?: Maybe<Array<Feature>>;
  language?: Maybe<Language>;
  languages?: Maybe<Array<Language>>;
  level?: Maybe<Level>;
  levels?: Maybe<Array<Level>>;
  magicItem?: Maybe<MagicItem>;
  magicItems?: Maybe<Array<MagicItem>>;
  magicSchool?: Maybe<MagicSchool>;
  magicSchools?: Maybe<Array<MagicSchool>>;
  monster?: Maybe<Monster>;
  monsters?: Maybe<Array<Monster>>;
  proficiencies?: Maybe<Array<Proficiency>>;
  proficiency?: Maybe<Proficiency>;
  race?: Maybe<Race>;
  races: Array<Race>;
  rule?: Maybe<Rule>;
  ruleSection?: Maybe<RuleSection>;
  ruleSections?: Maybe<Array<RuleSection>>;
  rules?: Maybe<Array<Maybe<Rule>>>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Skill>>;
  spell?: Maybe<Spell>;
  spells?: Maybe<Array<Spell>>;
  subclass?: Maybe<Subclass>;
  subclasses: Array<Subclass>;
  subrace?: Maybe<Subrace>;
  subraces: Array<Subrace>;
  trait?: Maybe<Trait>;
  traits?: Maybe<Array<Trait>>;
  weaponProperties?: Maybe<Array<Maybe<WeaponProperty>>>;
  weaponProperty?: Maybe<WeaponProperty>;
};


export type QueryAbilityScoreArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryAbilityScoresArgs = {
  full_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryAlignmentArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryAlignmentsArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryBackgroundArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryBackgroundsArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryClassArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryClassesArgs = {
  hit_die?: InputMaybe<Scalars['IntFilter']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<ClassOrder>;
};


export type QueryConditionArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryConditionsArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryDamageTypeArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryDamageTypesArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryEquipmentArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryEquipmentCategoriesArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryEquipmentCategoryArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryEquipmentsArgs = {
  equipment_category?: InputMaybe<Scalars['StringFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<EquipmentOrder>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryFeatArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryFeatsArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryFeatureArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryFeaturesArgs = {
  class?: InputMaybe<Scalars['StringFilter']>;
  level?: InputMaybe<Scalars['IntFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<FeatureOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  subclass?: InputMaybe<Scalars['StringFilter']>;
};


export type QueryLanguageArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryLanguagesArgs = {
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<LanguageOrder>;
  script?: InputMaybe<Scalars['LanguageScriptFilter']>;
  type?: InputMaybe<LanguageType>;
};


export type QueryLevelArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryLevelsArgs = {
  ability_score_bonuses?: InputMaybe<Scalars['IntFilter']>;
  class?: InputMaybe<Scalars['StringFilter']>;
  level?: InputMaybe<Scalars['IntFilter']>;
  limit?: Scalars['Int'];
  order?: InputMaybe<LevelOrder>;
  prof_bonus?: InputMaybe<Scalars['IntFilter']>;
  skip?: InputMaybe<Scalars['Int']>;
  subclass?: InputMaybe<Scalars['StringFilter']>;
};


export type QueryMagicItemArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryMagicItemsArgs = {
  equipment_category?: InputMaybe<Scalars['StringFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<MagicItemOrder>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryMagicSchoolArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryMagicSchoolsArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryMonsterArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryMonstersArgs = {
  armor_class?: InputMaybe<Scalars['IntFilter']>;
  challenge_rating?: InputMaybe<Scalars['FloatFilter']>;
  charisma?: InputMaybe<Scalars['IntFilter']>;
  constitution?: InputMaybe<Scalars['IntFilter']>;
  damage_immunity?: InputMaybe<Scalars['StringFilter']>;
  damage_resistance?: InputMaybe<Scalars['StringFilter']>;
  damage_vulnerability?: InputMaybe<Scalars['StringFilter']>;
  dexterity?: InputMaybe<Scalars['IntFilter']>;
  intelligence?: InputMaybe<Scalars['IntFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<MonsterOrder>;
  size?: InputMaybe<Scalars['SizeFilter']>;
  skip?: InputMaybe<Scalars['Int']>;
  strength?: InputMaybe<Scalars['IntFilter']>;
  subtype?: InputMaybe<Scalars['MonsterSubtypeFilter']>;
  type?: InputMaybe<Scalars['MonsterTypeFilter']>;
  wisdom?: InputMaybe<Scalars['IntFilter']>;
  xp?: InputMaybe<Scalars['IntFilter']>;
};


export type QueryProficienciesArgs = {
  class?: InputMaybe<Scalars['StringFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<ProficiencyOrder>;
  race?: InputMaybe<Scalars['StringFilter']>;
  skip?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['ProficiencyTypeFilter']>;
};


export type QueryProficiencyArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryRaceArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryRacesArgs = {
  ability_bonus?: InputMaybe<Scalars['StringFilter']>;
  language?: InputMaybe<Scalars['StringFilter']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<RaceOrder>;
  size?: InputMaybe<Scalars['SizeFilter']>;
  speed?: InputMaybe<Scalars['IntFilter']>;
};


export type QueryRuleArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryRuleSectionArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryRuleSectionsArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryRulesArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QuerySkillArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QuerySkillsArgs = {
  ability_score?: InputMaybe<Scalars['StringFilter']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<SkillOrder>;
};


export type QuerySpellArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QuerySpellsArgs = {
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']>;
  casting_time?: InputMaybe<Scalars['StringFilter']>;
  class?: InputMaybe<Scalars['StringFilter']>;
  concentration?: InputMaybe<Scalars['Boolean']>;
  damage_type?: InputMaybe<Scalars['StringFilter']>;
  dc_type?: InputMaybe<Scalars['StringFilter']>;
  level?: InputMaybe<Scalars['IntFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<SpellOrder>;
  range?: InputMaybe<Scalars['StringFilter']>;
  ritual?: InputMaybe<Scalars['Boolean']>;
  school?: InputMaybe<Scalars['StringFilter']>;
  skip?: InputMaybe<Scalars['Int']>;
  subclass?: InputMaybe<Scalars['StringFilter']>;
};


export type QuerySubclassArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QuerySubclassesArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QuerySubraceArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QuerySubracesArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryTraitArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryTraitsArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryWeaponPropertiesArgs = {
  name?: InputMaybe<Scalars['String']>;
  order_direction?: InputMaybe<OrderByDirection>;
};


export type QueryWeaponPropertyArgs = {
  index?: InputMaybe<Scalars['String']>;
};

export type Race = ProficiencyRace & {
  __typename?: 'Race';
  ability_bonus_options?: Maybe<AbilityBonusChoice>;
  ability_bonuses: Array<AbilityBonus>;
  age: Scalars['String'];
  alignment: Scalars['String'];
  index: Scalars['String'];
  language_desc: Scalars['String'];
  language_options?: Maybe<LanguageChoice>;
  languages: Array<Language>;
  name: Scalars['String'];
  size: Size;
  size_description: Scalars['String'];
  speed: Scalars['Int'];
  starting_proficiencies: Array<Proficiency>;
  starting_proficiency_options?: Maybe<ProficiencyChoice>;
  subraces: Array<Subrace>;
  traits: Array<Trait>;
};


export type RaceLanguagesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type RaceStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type RaceSubracesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type RaceTraitsArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type RaceOrder = {
  by: RaceOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<RaceOrder>;
};

export enum RaceOrderBy {
  Name = 'NAME',
  Size = 'SIZE',
  Speed = 'SPEED'
}

export type Range = {
  __typename?: 'Range';
  long?: Maybe<Scalars['Int']>;
  normal: Scalars['Int'];
};

export type RangerSpecific = {
  __typename?: 'RangerSpecific';
  favored_enemies: Scalars['Int'];
  favored_terrain: Scalars['Int'];
};

export type Reaction = {
  __typename?: 'Reaction';
  dc?: Maybe<ActionDc>;
  desc: Scalars['String'];
  name: Scalars['String'];
};

export enum RestType {
  Long = 'LONG',
  Short = 'SHORT'
}

export type RogueSpecific = {
  __typename?: 'RogueSpecific';
  sneak_attack: Dice;
};

export type Rule = {
  __typename?: 'Rule';
  desc: Scalars['String'];
  index: Scalars['String'];
  name: Scalars['String'];
  subsections: Array<RuleSection>;
};


export type RuleSubsectionsArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type RuleSection = {
  __typename?: 'RuleSection';
  desc: Scalars['String'];
  index: Scalars['String'];
  name: Scalars['String'];
};

export type Senses = {
  __typename?: 'Senses';
  blindsight?: Maybe<Scalars['String']>;
  darkvision?: Maybe<Scalars['String']>;
  passive_perception: Scalars['Int'];
  tremorsense?: Maybe<Scalars['String']>;
  truesight?: Maybe<Scalars['String']>;
};

export enum Size {
  Gargantuan = 'GARGANTUAN',
  Huge = 'HUGE',
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL',
  Tiny = 'TINY'
}

export type Skill = {
  __typename?: 'Skill';
  ability_score: AbilityScore;
  desc: Array<Scalars['String']>;
  index: Scalars['String'];
  name: Scalars['String'];
};

export type SkillOrder = {
  by: SkillOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<SkillOrder>;
};

export enum SkillOrderBy {
  AbilityScore = 'ABILITY_SCORE',
  Name = 'NAME'
}

export type SorcererSpecific = {
  __typename?: 'SorcererSpecific';
  creating_spell_slots: Array<SpellSlotCreation>;
  metamagic_known: Scalars['Int'];
  sorcery_points: Scalars['Int'];
};

export type SpecialAbility = {
  __typename?: 'SpecialAbility';
  damage?: Maybe<Array<Damage>>;
  dc?: Maybe<ActionDc>;
  desc: Scalars['String'];
  name: Scalars['String'];
  spellcasting?: Maybe<MonsterSpellcasting>;
  usage?: Maybe<Usage>;
};

export type Speed = {
  __typename?: 'Speed';
  quantity: Scalars['Float'];
  unit: Scalars['String'];
};

export type Spell = {
  __typename?: 'Spell';
  area_of_effect?: Maybe<AreaOfEffect>;
  attack_type?: Maybe<SpellAttackType>;
  casting_time: Scalars['String'];
  classes: Array<Class>;
  components?: Maybe<Array<Maybe<SpellComponent>>>;
  concentration: Scalars['Boolean'];
  damage?: Maybe<SpellDamage>;
  dc?: Maybe<SpellDc>;
  desc: Array<Scalars['String']>;
  duration: Scalars['String'];
  heal_at_slot_level?: Maybe<Array<HealingAtLevel>>;
  higher_level?: Maybe<Array<Scalars['String']>>;
  index: Scalars['String'];
  level: Scalars['Int'];
  material?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  range: Scalars['String'];
  ritual: Scalars['Boolean'];
  school: MagicSchool;
  subclasses: Array<Subclass>;
};


export type SpellClassesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type SpellSubclassesArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export enum SpellAttackType {
  Melee = 'MELEE',
  Ranged = 'RANGED'
}

export type SpellChoice = {
  __typename?: 'SpellChoice';
  choose: Scalars['Int'];
  from: SpellOptionSet;
  type: Scalars['String'];
};

export enum SpellComponent {
  M = 'M',
  S = 'S',
  V = 'V'
}

export type SpellDamage = {
  __typename?: 'SpellDamage';
  damage_at_character_level?: Maybe<Array<DamageAtLevel>>;
  damage_at_slot_level?: Maybe<Array<DamageAtLevel>>;
  damage_type?: Maybe<DamageType>;
};

export type SpellDc = {
  __typename?: 'SpellDc';
  desc?: Maybe<Scalars['String']>;
  success: DcSuccess;
  type: AbilityScore;
};

export type SpellOption = {
  __typename?: 'SpellOption';
  item: Spell;
  option_type: Scalars['String'];
};

export type SpellOptionSet = {
  __typename?: 'SpellOptionSet';
  option_set_type: Scalars['String'];
  options: Array<SpellOption>;
};

export type SpellOrder = {
  by: SpellOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<SpellOrder>;
};

export enum SpellOrderBy {
  AreaOfEffectSize = 'AREA_OF_EFFECT_SIZE',
  Concentration = 'CONCENTRATION',
  Level = 'LEVEL',
  Name = 'NAME',
  Ritual = 'RITUAL',
  School = 'SCHOOL'
}

export type SpellPrerequisite = Feature | Level;

export type SpellSlotCreation = {
  __typename?: 'SpellSlotCreation';
  sorcery_point_cost: Scalars['Int'];
  spell_slot_level: Scalars['Int'];
};

export type SpellWithPrerequisite = {
  __typename?: 'SpellWithPrerequisite';
  prerequisites: Array<Maybe<SpellPrerequisite>>;
  spell: Spell;
};

export type SpellcastingInfo = {
  __typename?: 'SpellcastingInfo';
  desc: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type StartingEquipmentChoice = {
  __typename?: 'StartingEquipmentChoice';
  choose: Scalars['Int'];
  desc: Scalars['String'];
  from: StartingEquipmentOptionSet;
  type: Scalars['String'];
};

export type StartingEquipmentOptionSet = EquipmentCategoryOptionSet | EquipmentOptionSet;

export type StringChoice = {
  __typename?: 'StringChoice';
  choose: Scalars['Int'];
  from: StringOptionSet;
  type: Scalars['String'];
};

export type StringOption = {
  __typename?: 'StringOption';
  option_type: Scalars['String'];
  string: Scalars['String'];
};

export type StringOptionSet = {
  __typename?: 'StringOptionSet';
  option_set_type: Scalars['String'];
  options: Array<StringOption>;
};

export type Subclass = {
  __typename?: 'Subclass';
  class: Class;
  desc: Array<Scalars['String']>;
  index: Scalars['String'];
  name: Scalars['String'];
  spells?: Maybe<Array<SpellWithPrerequisite>>;
  subclass_flavor: Scalars['String'];
  subclass_levels: Array<Maybe<Level>>;
};


export type SubclassSpellsArgs = {
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']>;
  casting_time?: InputMaybe<Scalars['StringFilter']>;
  class?: InputMaybe<Scalars['StringFilter']>;
  concentration?: InputMaybe<Scalars['Boolean']>;
  damage_type?: InputMaybe<Scalars['StringFilter']>;
  dc_type?: InputMaybe<Scalars['StringFilter']>;
  level?: InputMaybe<Scalars['IntFilter']>;
  limit?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<SpellOrder>;
  range?: InputMaybe<Scalars['StringFilter']>;
  ritual?: InputMaybe<Scalars['Boolean']>;
  school?: InputMaybe<Scalars['StringFilter']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SubclassSpecific = DevotionSpecific | LoreSpecific;

export type Subrace = ProficiencyRace & {
  __typename?: 'Subrace';
  ability_bonuses: Array<AbilityBonus>;
  desc: Scalars['String'];
  index: Scalars['String'];
  language_options?: Maybe<LanguageChoice>;
  name: Scalars['String'];
  race: Race;
  racial_traits: Array<Trait>;
  starting_proficiencies: Array<Proficiency>;
};


export type SubraceRacial_TraitsArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type SubraceStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type Tool = IEquipment & IEquipmentBase & {
  __typename?: 'Tool';
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  tool_category: EquipmentCategory;
  weight?: Maybe<Scalars['Float']>;
};

export type Trait = {
  __typename?: 'Trait';
  desc: Array<Scalars['String']>;
  index: Scalars['String'];
  language_options?: Maybe<LanguageChoice>;
  name: Scalars['String'];
  parent?: Maybe<Trait>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<ProficiencyChoice>;
  races: Array<Maybe<Race>>;
  subraces: Array<Subrace>;
  trait_specific?: Maybe<TraitSpecific>;
};


export type TraitProficienciesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type TraitRacesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type TraitSubracesArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type TraitChoice = {
  __typename?: 'TraitChoice';
  choose: Scalars['Int'];
  from: TraitOptionSet;
  type: Scalars['String'];
};

export type TraitOption = {
  __typename?: 'TraitOption';
  item: Trait;
  option_type: Scalars['String'];
};

export type TraitOptionSet = {
  __typename?: 'TraitOptionSet';
  option_set_type: Scalars['String'];
  options: Array<TraitOption>;
};

export type TraitSpecific = {
  __typename?: 'TraitSpecific';
  breath_weapon?: Maybe<BreathWeaponTrait>;
  damage_type?: Maybe<DamageType>;
  spell_options?: Maybe<SpellChoice>;
  subtrait_options?: Maybe<TraitChoice>;
};

export type Usage = {
  __typename?: 'Usage';
  dice?: Maybe<Scalars['String']>;
  min_value?: Maybe<Scalars['Int']>;
  rest_types?: Maybe<Array<RestType>>;
  times?: Maybe<Scalars['Int']>;
  type: UsageType;
};

export enum UsageType {
  AtWill = 'AT_WILL',
  PerDay = 'PER_DAY',
  PerRest = 'PER_REST',
  RechargeAfterRest = 'RECHARGE_AFTER_REST',
  RechargeOnRoll = 'RECHARGE_ON_ROLL'
}

export type Vehicle = IEquipment & IEquipmentBase & {
  __typename?: 'Vehicle';
  capacity?: Maybe<Scalars['String']>;
  cost: Cost;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  speed?: Maybe<Speed>;
  vehicle_category: EquipmentCategory;
  weight?: Maybe<Scalars['Float']>;
};

export type WarlockSpecific = {
  __typename?: 'WarlockSpecific';
  invocations_known: Scalars['Int'];
  mystic_arcanum_level_6: Scalars['Int'];
  mystic_arcanum_level_7: Scalars['Int'];
  mystic_arcanum_level_8: Scalars['Int'];
  mystic_arcanum_level_9: Scalars['Int'];
};

export type Weapon = IEquipment & IEquipmentBase & {
  __typename?: 'Weapon';
  category_range: EquipmentCategory;
  cost: Cost;
  damage?: Maybe<Damage>;
  desc?: Maybe<Array<Scalars['String']>>;
  equipment_category: EquipmentCategory;
  index: Scalars['String'];
  name: Scalars['String'];
  properties: Array<WeaponProperty>;
  range: Range;
  special?: Maybe<Array<Scalars['String']>>;
  throw_range?: Maybe<Range>;
  two_handed_damage?: Maybe<Damage>;
  weapon_category: EquipmentCategory;
  weapon_range: WeaponRange;
  weight?: Maybe<Scalars['Float']>;
};


export type WeaponPropertiesArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type WeaponProperty = {
  __typename?: 'WeaponProperty';
  desc: Array<Scalars['String']>;
  index: Scalars['String'];
  name: Scalars['String'];
};

export enum WeaponRange {
  Melee = 'MELEE',
  Ranged = 'RANGED'
}

export type WizardSpecific = {
  __typename?: 'WizardSpecific';
  arcane_recovery_levels: Scalars['Int'];
};

export type GetEquipmentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEquipmentQuery = { __typename?: 'Query', equipment?: { __typename?: 'Ammunition', index: string, name: string, desc?: Array<string> | null, weight?: number | null, cost: { __typename?: 'Cost', quantity: number, unit: Currency }, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string, equipment: Array<{ __typename?: 'Ammunition', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Armor', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Gear', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'MagicItem', desc: Array<string>, index: string, name: string } | { __typename?: 'Pack', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Tool', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Vehicle', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Weapon', desc?: Array<string> | null, index: string, name: string }> } } | { __typename?: 'Armor', index: string, name: string, desc?: Array<string> | null, weight?: number | null, cost: { __typename?: 'Cost', quantity: number, unit: Currency }, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string, equipment: Array<{ __typename?: 'Ammunition', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Armor', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Gear', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'MagicItem', desc: Array<string>, index: string, name: string } | { __typename?: 'Pack', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Tool', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Vehicle', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Weapon', desc?: Array<string> | null, index: string, name: string }> } } | { __typename?: 'Gear', index: string, name: string, desc?: Array<string> | null, weight?: number | null, cost: { __typename?: 'Cost', quantity: number, unit: Currency }, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string, equipment: Array<{ __typename?: 'Ammunition', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Armor', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Gear', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'MagicItem', desc: Array<string>, index: string, name: string } | { __typename?: 'Pack', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Tool', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Vehicle', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Weapon', desc?: Array<string> | null, index: string, name: string }> } } | { __typename?: 'Pack', index: string, name: string, desc?: Array<string> | null, weight?: number | null, cost: { __typename?: 'Cost', quantity: number, unit: Currency }, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string, equipment: Array<{ __typename?: 'Ammunition', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Armor', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Gear', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'MagicItem', desc: Array<string>, index: string, name: string } | { __typename?: 'Pack', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Tool', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Vehicle', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Weapon', desc?: Array<string> | null, index: string, name: string }> } } | { __typename?: 'Tool', index: string, name: string, desc?: Array<string> | null, weight?: number | null, cost: { __typename?: 'Cost', quantity: number, unit: Currency }, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string, equipment: Array<{ __typename?: 'Ammunition', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Armor', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Gear', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'MagicItem', desc: Array<string>, index: string, name: string } | { __typename?: 'Pack', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Tool', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Vehicle', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Weapon', desc?: Array<string> | null, index: string, name: string }> } } | { __typename?: 'Vehicle', index: string, name: string, desc?: Array<string> | null, weight?: number | null, cost: { __typename?: 'Cost', quantity: number, unit: Currency }, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string, equipment: Array<{ __typename?: 'Ammunition', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Armor', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Gear', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'MagicItem', desc: Array<string>, index: string, name: string } | { __typename?: 'Pack', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Tool', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Vehicle', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Weapon', desc?: Array<string> | null, index: string, name: string }> } } | { __typename?: 'Weapon', index: string, name: string, desc?: Array<string> | null, weight?: number | null, cost: { __typename?: 'Cost', quantity: number, unit: Currency }, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string, equipment: Array<{ __typename?: 'Ammunition', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Armor', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Gear', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'MagicItem', desc: Array<string>, index: string, name: string } | { __typename?: 'Pack', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Tool', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Vehicle', desc?: Array<string> | null, index: string, name: string } | { __typename?: 'Weapon', desc?: Array<string> | null, index: string, name: string }> } } | null };

export type GetEquipmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEquipmentsQuery = { __typename?: 'Query', equipments?: Array<{ __typename: 'Ammunition', index: string, weight?: number | null, name: string, desc?: Array<string> | null, cost: { __typename: 'Cost', quantity: number, unit: Currency } } | { __typename: 'Armor', index: string, weight?: number | null, name: string, desc?: Array<string> | null, cost: { __typename: 'Cost', quantity: number, unit: Currency } } | { __typename: 'Gear', index: string, weight?: number | null, name: string, desc?: Array<string> | null, cost: { __typename: 'Cost', quantity: number, unit: Currency } } | { __typename: 'Pack', index: string, weight?: number | null, name: string, desc?: Array<string> | null, cost: { __typename: 'Cost', quantity: number, unit: Currency } } | { __typename: 'Tool', index: string, weight?: number | null, name: string, desc?: Array<string> | null, cost: { __typename: 'Cost', quantity: number, unit: Currency } } | { __typename: 'Vehicle', index: string, weight?: number | null, name: string, desc?: Array<string> | null, cost: { __typename: 'Cost', quantity: number, unit: Currency } } | { __typename: 'Weapon', index: string, weight?: number | null, name: string, desc?: Array<string> | null, cost: { __typename: 'Cost', quantity: number, unit: Currency } }> | null };

export type GetMagicalItemQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMagicalItemQuery = { __typename?: 'Query', magicItem?: { __typename?: 'MagicItem', name: string, index: string, desc: Array<string>, rarity: MagicItemRarity, equipment_category: { __typename?: 'EquipmentCategory', index: string, name: string } } | null };

export type GetMagicalItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMagicalItemsQuery = { __typename?: 'Query', magicItems?: Array<{ __typename?: 'MagicItem', index: string, name: string, equipment_category: { __typename?: 'EquipmentCategory', name: string, index: string } }> | null };

export type GetMonstersListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonstersListQuery = { __typename?: 'Query', monsters?: Array<{ __typename: 'Monster', name: string, challenge_rating: number, hit_dice: string, hit_points: number, type: MonsterType, xp: number, charisma: number, constitution: number, dexterity: number, strength: number, wisdom: number, intelligence: number, damage_immunities: Array<string>, damage_resistances: Array<string>, speed: { __typename?: 'MonsterSpeed', burrow?: string | null, climb?: string | null, fly?: string | null, hover?: boolean | null, swim?: string | null, walk?: string | null }, special_abilities?: Array<{ __typename?: 'SpecialAbility', desc: string, name: string }> | null, armor_class?: Array<{ __typename?: 'MonsterArmorClass', value: number, desc?: string | null } | null> | null }> | null };

export type GetSpellQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpellQuery = { __typename?: 'Query', spell?: { __typename?: 'Spell', index: string, level: number, name: string, ritual: boolean, range: string, higher_level?: Array<string> | null, duration: string, desc: Array<string>, concentration: boolean, components?: Array<SpellComponent | null> | null, casting_time: string, attack_type?: SpellAttackType | null, material?: string | null, school: { __typename?: 'MagicSchool', name: string, index: string, desc: string }, subclasses: Array<{ __typename?: 'Subclass', name: string, index: string }>, dc?: { __typename?: 'SpellDc', desc?: string | null } | null, classes: Array<{ __typename?: 'Class', name: string, index: string }>, area_of_effect?: { __typename?: 'AreaOfEffect', type: AreaOfEffectType, size: number } | null, damage?: { __typename?: 'SpellDamage', damage_type?: { __typename?: 'DamageType', name: string, index: string } | null } | null } | null };

export type GetSpellsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpellsQuery = { __typename?: 'Query', spells?: Array<{ __typename: 'Spell', index: string, level: number, name: string, duration: string, school: { __typename: 'MagicSchool', name: string, index: string }, classes: Array<{ __typename: 'Class', index: string, name: string }>, subclasses: Array<{ __typename?: 'Subclass', index: string, name: string }> }> | null };


export const GetEquipmentDocument = gql`
    query getEquipment {
  equipment {
    index
    name
    cost {
      quantity
      unit
    }
    desc
    equipment_category {
      index
      name
    }
    equipment_category {
      equipment {
        desc
        index
        name
      }
      index
      name
    }
    weight
  }
}
    `;

/**
 * __useGetEquipmentQuery__
 *
 * To run a query within a React component, call `useGetEquipmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEquipmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEquipmentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEquipmentQuery(baseOptions?: Apollo.QueryHookOptions<GetEquipmentQuery, GetEquipmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEquipmentQuery, GetEquipmentQueryVariables>(GetEquipmentDocument, options);
      }
export function useGetEquipmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEquipmentQuery, GetEquipmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEquipmentQuery, GetEquipmentQueryVariables>(GetEquipmentDocument, options);
        }
export type GetEquipmentQueryHookResult = ReturnType<typeof useGetEquipmentQuery>;
export type GetEquipmentLazyQueryHookResult = ReturnType<typeof useGetEquipmentLazyQuery>;
export type GetEquipmentQueryResult = Apollo.QueryResult<GetEquipmentQuery, GetEquipmentQueryVariables>;
export const GetEquipmentsDocument = gql`
    query getEquipments {
  equipments(limit: 1000) {
    __typename
    index
    weight
    name
    desc
    cost {
      quantity
      unit
      __typename
    }
  }
}
    `;

/**
 * __useGetEquipmentsQuery__
 *
 * To run a query within a React component, call `useGetEquipmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEquipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEquipmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEquipmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetEquipmentsQuery, GetEquipmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEquipmentsQuery, GetEquipmentsQueryVariables>(GetEquipmentsDocument, options);
      }
export function useGetEquipmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEquipmentsQuery, GetEquipmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEquipmentsQuery, GetEquipmentsQueryVariables>(GetEquipmentsDocument, options);
        }
export type GetEquipmentsQueryHookResult = ReturnType<typeof useGetEquipmentsQuery>;
export type GetEquipmentsLazyQueryHookResult = ReturnType<typeof useGetEquipmentsLazyQuery>;
export type GetEquipmentsQueryResult = Apollo.QueryResult<GetEquipmentsQuery, GetEquipmentsQueryVariables>;
export const GetMagicalItemDocument = gql`
    query getMagicalItem {
  magicItem {
    name
    index
    equipment_category {
      index
      name
    }
    desc
    rarity
  }
}
    `;

/**
 * __useGetMagicalItemQuery__
 *
 * To run a query within a React component, call `useGetMagicalItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMagicalItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMagicalItemQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMagicalItemQuery(baseOptions?: Apollo.QueryHookOptions<GetMagicalItemQuery, GetMagicalItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMagicalItemQuery, GetMagicalItemQueryVariables>(GetMagicalItemDocument, options);
      }
export function useGetMagicalItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMagicalItemQuery, GetMagicalItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMagicalItemQuery, GetMagicalItemQueryVariables>(GetMagicalItemDocument, options);
        }
export type GetMagicalItemQueryHookResult = ReturnType<typeof useGetMagicalItemQuery>;
export type GetMagicalItemLazyQueryHookResult = ReturnType<typeof useGetMagicalItemLazyQuery>;
export type GetMagicalItemQueryResult = Apollo.QueryResult<GetMagicalItemQuery, GetMagicalItemQueryVariables>;
export const GetMagicalItemsDocument = gql`
    query getMagicalItems {
  magicItems(limit: 1000) {
    index
    name
    equipment_category {
      name
      index
    }
  }
}
    `;

/**
 * __useGetMagicalItemsQuery__
 *
 * To run a query within a React component, call `useGetMagicalItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMagicalItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMagicalItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMagicalItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetMagicalItemsQuery, GetMagicalItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMagicalItemsQuery, GetMagicalItemsQueryVariables>(GetMagicalItemsDocument, options);
      }
export function useGetMagicalItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMagicalItemsQuery, GetMagicalItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMagicalItemsQuery, GetMagicalItemsQueryVariables>(GetMagicalItemsDocument, options);
        }
export type GetMagicalItemsQueryHookResult = ReturnType<typeof useGetMagicalItemsQuery>;
export type GetMagicalItemsLazyQueryHookResult = ReturnType<typeof useGetMagicalItemsLazyQuery>;
export type GetMagicalItemsQueryResult = Apollo.QueryResult<GetMagicalItemsQuery, GetMagicalItemsQueryVariables>;
export const GetMonstersListDocument = gql`
    query GetMonstersList {
  monsters(limit: 1000) {
    __typename
    name
    challenge_rating
    hit_dice
    hit_points
    type
    speed {
      burrow
      climb
      fly
      hover
      swim
      walk
    }
    special_abilities {
      desc
      name
    }
    xp
    armor_class {
      value
      desc
    }
    charisma
    constitution
    dexterity
    strength
    wisdom
    intelligence
    damage_immunities
    damage_resistances
  }
}
    `;

/**
 * __useGetMonstersListQuery__
 *
 * To run a query within a React component, call `useGetMonstersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMonstersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMonstersListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMonstersListQuery(baseOptions?: Apollo.QueryHookOptions<GetMonstersListQuery, GetMonstersListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMonstersListQuery, GetMonstersListQueryVariables>(GetMonstersListDocument, options);
      }
export function useGetMonstersListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMonstersListQuery, GetMonstersListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMonstersListQuery, GetMonstersListQueryVariables>(GetMonstersListDocument, options);
        }
export type GetMonstersListQueryHookResult = ReturnType<typeof useGetMonstersListQuery>;
export type GetMonstersListLazyQueryHookResult = ReturnType<typeof useGetMonstersListLazyQuery>;
export type GetMonstersListQueryResult = Apollo.QueryResult<GetMonstersListQuery, GetMonstersListQueryVariables>;
export const GetSpellDocument = gql`
    query getSpell {
  spell {
    index
    level
    name
    ritual
    school {
      name
      index
      desc
    }
    subclasses {
      name
      index
    }
    range
    higher_level
    duration
    desc
    dc {
      desc
    }
    concentration
    components
    classes {
      name
      index
    }
    casting_time
    attack_type
    area_of_effect {
      type
      size
    }
    damage {
      damage_type {
        name
        index
      }
    }
    material
  }
}
    `;

/**
 * __useGetSpellQuery__
 *
 * To run a query within a React component, call `useGetSpellQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpellQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpellQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpellQuery(baseOptions?: Apollo.QueryHookOptions<GetSpellQuery, GetSpellQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpellQuery, GetSpellQueryVariables>(GetSpellDocument, options);
      }
export function useGetSpellLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpellQuery, GetSpellQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpellQuery, GetSpellQueryVariables>(GetSpellDocument, options);
        }
export type GetSpellQueryHookResult = ReturnType<typeof useGetSpellQuery>;
export type GetSpellLazyQueryHookResult = ReturnType<typeof useGetSpellLazyQuery>;
export type GetSpellQueryResult = Apollo.QueryResult<GetSpellQuery, GetSpellQueryVariables>;
export const GetSpellsDocument = gql`
    query getSpells {
  spells(limit: 1000) {
    __typename
    index
    level
    name
    school {
      name
      index
      __typename
    }
    classes {
      index
      name
      __typename
    }
    subclasses {
      index
      name
    }
    duration
  }
}
    `;

/**
 * __useGetSpellsQuery__
 *
 * To run a query within a React component, call `useGetSpellsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpellsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpellsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpellsQuery(baseOptions?: Apollo.QueryHookOptions<GetSpellsQuery, GetSpellsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpellsQuery, GetSpellsQueryVariables>(GetSpellsDocument, options);
      }
export function useGetSpellsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpellsQuery, GetSpellsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpellsQuery, GetSpellsQueryVariables>(GetSpellsDocument, options);
        }
export type GetSpellsQueryHookResult = ReturnType<typeof useGetSpellsQuery>;
export type GetSpellsLazyQueryHookResult = ReturnType<typeof useGetSpellsLazyQuery>;
export type GetSpellsQueryResult = Apollo.QueryResult<GetSpellsQuery, GetSpellsQueryVariables>;