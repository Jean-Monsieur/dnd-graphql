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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: any;
};

export type AbilityScore = {
  __typename?: 'AbilityScore';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  full_name?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills: Array<Skill>;
  url?: Maybe<Scalars['String']>;
};


export type AbilityScoreSkillsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManySkillInput>;
};

export type AbilityScoreSkills = {
  __typename?: 'AbilityScoreSkills';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AbilityScoreSkillsInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Alignment = {
  __typename?: 'Alignment';
  _id: Scalars['String'];
  abbreviation?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Background = {
  __typename?: 'Background';
  _id: Scalars['String'];
  bonds?: Maybe<BackgroundPersonality_Traits>;
  feature?: Maybe<BackgroundFeature>;
  flaws?: Maybe<BackgroundPersonality_Traits>;
  ideals?: Maybe<BackgroundIdeals>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<BackgroundLanguage_Options>;
  name?: Maybe<Scalars['String']>;
  personality_traits?: Maybe<BackgroundPersonality_Traits>;
  starting_equipment?: Maybe<Array<Maybe<BackgroundStarting_Equipment>>>;
  starting_equipment_options?: Maybe<Array<Maybe<BackgroundStarting_Equipment_Options>>>;
  starting_proficiencies: Array<Proficiency>;
  url?: Maybe<Scalars['String']>;
};


export type BackgroundStarting_ProficienciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyProficiencyInput>;
};

export type BackgroundFeature = {
  __typename?: 'BackgroundFeature';
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type BackgroundIdeals = {
  __typename?: 'BackgroundIdeals';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundIdealsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundIdealsFrom = {
  __typename?: 'BackgroundIdealsFrom';
  alignments?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  desc?: Maybe<Scalars['String']>;
};

export type BackgroundLanguage_Options = {
  __typename?: 'BackgroundLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundPersonality_Traits = {
  __typename?: 'BackgroundPersonality_traits';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment = {
  __typename?: 'BackgroundStarting_equipment';
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars['Float']>;
};

export type BackgroundStarting_Equipment_Options = {
  __typename?: 'BackgroundStarting_equipment_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment_OptionsFrom = {
  __typename?: 'BackgroundStarting_equipment_optionsFrom';
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars['Float']>;
};

export type Class = {
  __typename?: 'Class';
  _id: Scalars['String'];
  class_levels: Array<Level>;
  hit_die?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  multi_classing?: Maybe<ClassMulti_Classing>;
  name?: Maybe<Scalars['String']>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<Array<Maybe<ClassMulti_ClassingProficiency_Choices>>>;
  saving_throws?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  spellcasting?: Maybe<ClassSpellcasting>;
  spells: Array<Spell>;
  starting_equipment?: Maybe<Array<Maybe<ClassStarting_Equipment>>>;
  starting_equipment_options?: Maybe<Array<Maybe<ClassStarting_Equipment_Options>>>;
  subclasses?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars['String']>;
};


export type ClassClass_LevelsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyLevelInput>;
};


export type ClassProficienciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyProficiencyInput>;
};


export type ClassSpellsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManySpellInput>;
};

export type ClassMulti_Classing = {
  __typename?: 'ClassMulti_classing';
  prerequisite_options?: Maybe<ClassMulti_ClassingPrerequisite_Options>;
  prerequisites?: Maybe<Array<Maybe<ClassMulti_ClassingPrerequisites>>>;
  proficiencies?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  proficiency_choices?: Maybe<Array<Maybe<ClassMulti_ClassingProficiency_Choices>>>;
};

export type ClassMulti_ClassingPrerequisite_Options = {
  __typename?: 'ClassMulti_classingPrerequisite_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassMulti_ClassingPrerequisites>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingPrerequisites = {
  __typename?: 'ClassMulti_classingPrerequisites';
  ability_score?: Maybe<AbilityScoreSkills>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type ClassMulti_ClassingProficiency_Choices = {
  __typename?: 'ClassMulti_classingProficiency_choices';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassSpellcasting = {
  __typename?: 'ClassSpellcasting';
  info?: Maybe<Array<Maybe<ClassSpellcastingInfo>>>;
  level?: Maybe<Scalars['Float']>;
  spellcasting_ability?: Maybe<AbilityScoreSkills>;
};

export type ClassSpellcastingInfo = {
  __typename?: 'ClassSpellcastingInfo';
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment = {
  __typename?: 'ClassStarting_equipment';
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ClassStarting_Equipment_Options = {
  __typename?: 'ClassStarting_equipment_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment_OptionsFrom = {
  __typename?: 'ClassStarting_equipment_optionsFrom';
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars['Float']>;
};

export type Condition = {
  __typename?: 'Condition';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DamageType = {
  __typename?: 'DamageType';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Equipment = {
  __typename?: 'Equipment';
  _id: Scalars['String'];
  armor_category?: Maybe<Scalars['String']>;
  armor_class?: Maybe<EquipmentArmor_Class>;
  capacity?: Maybe<Scalars['String']>;
  category_range?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<EquipmentContents>>>;
  cost?: Maybe<EquipmentCost>;
  damage?: Maybe<EquipmentDamage>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<AbilityScoreSkills>;
  gear_category?: Maybe<AbilityScoreSkills>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties: Array<WeaponProperty>;
  quantity?: Maybe<Scalars['Float']>;
  range?: Maybe<EquipmentRange>;
  special?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed?: Maybe<EquipmentSpeed>;
  stealth_disadvantage?: Maybe<Scalars['Boolean']>;
  str_minimum?: Maybe<Scalars['Float']>;
  throw_range?: Maybe<EquipmentThrow_Range>;
  tool_category?: Maybe<Scalars['String']>;
  two_handed_damage?: Maybe<EquipmentTwo_Handed_Damage>;
  url?: Maybe<Scalars['String']>;
  vehicle_category?: Maybe<Scalars['String']>;
  weapon_category?: Maybe<Scalars['String']>;
  weapon_range?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};


export type EquipmentPropertiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyWeaponPropertyInput>;
};

export type EquipmentArmor_Class = {
  __typename?: 'EquipmentArmor_class';
  base?: Maybe<Scalars['Float']>;
  dex_bonus?: Maybe<Scalars['Boolean']>;
  max_bonus?: Maybe<Scalars['Float']>;
};

export type EquipmentCategory = {
  __typename?: 'EquipmentCategory';
  _id: Scalars['String'];
  equipment: Array<Equipment>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type EquipmentCategoryEquipmentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyEquipmentInput>;
};

export type EquipmentContents = {
  __typename?: 'EquipmentContents';
  item?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars['Float']>;
};

export type EquipmentCost = {
  __typename?: 'EquipmentCost';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EquipmentDamage = {
  __typename?: 'EquipmentDamage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type EquipmentRange = {
  __typename?: 'EquipmentRange';
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type EquipmentSpeed = {
  __typename?: 'EquipmentSpeed';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EquipmentThrow_Range = {
  __typename?: 'EquipmentThrow_range';
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type EquipmentTwo_Handed_Damage = {
  __typename?: 'EquipmentTwo_handed_damage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type Feat = {
  __typename?: 'Feat';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prerequisites?: Maybe<Array<Maybe<FeatPrerequisites>>>;
  url?: Maybe<Scalars['String']>;
};

export type FeatPrerequisites = {
  __typename?: 'FeatPrerequisites';
  ability_score?: Maybe<AbilityScoreSkills>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type Feature = {
  __typename?: 'Feature';
  _id: Scalars['String'];
  choice?: Maybe<FeatureChoice>;
  class?: Maybe<Class>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  feature_specific?: Maybe<FeatureFeature_Specific>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<AbilityScoreSkills>;
  prerequisites?: Maybe<Array<Maybe<FeaturePrerequisites>>>;
  reference?: Maybe<Scalars['String']>;
  subclass?: Maybe<Subclass>;
  url?: Maybe<Scalars['String']>;
};


export type FeatureClassArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneClassInput>;
};


export type FeatureSubclassArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneSubclassInput>;
};

export type FeatureChoice = {
  __typename?: 'FeatureChoice';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureFeature_Specific = {
  __typename?: 'FeatureFeature_specific';
  expertise_options?: Maybe<FeatureChoice>;
  subfeature_options?: Maybe<FeatureChoice>;
};

export type FeaturePrerequisites = {
  __typename?: 'FeaturePrerequisites';
  level?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyAbilityScoreDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAbilityScoreFull_NameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAbilityScoreIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAbilityScoreInput = {
  AND?: InputMaybe<Array<FilterFindManyAbilityScoreInput>>;
  OR?: InputMaybe<Array<FilterFindManyAbilityScoreInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyAbilityScoreOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  full_name?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyAbilityScoreNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAbilityScoreOperatorsInput = {
  _id?: InputMaybe<FilterFindManyAbilityScore_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyAbilityScoreDescOperatorsInput>;
  full_name?: InputMaybe<FilterFindManyAbilityScoreFull_NameOperatorsInput>;
  index?: InputMaybe<FilterFindManyAbilityScoreIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyAbilityScoreNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyAbilityScoreUrlOperatorsInput>;
};

export type FilterFindManyAbilityScoreSkillsInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyAbilityScoreUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAbilityScore_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignmentAbbreviationOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignmentDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignmentIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignmentInput = {
  AND?: InputMaybe<Array<FilterFindManyAlignmentInput>>;
  OR?: InputMaybe<Array<FilterFindManyAlignmentInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyAlignmentOperatorsInput>;
  abbreviation?: InputMaybe<Scalars['String']>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyAlignmentNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAlignmentOperatorsInput = {
  _id?: InputMaybe<FilterFindManyAlignment_IdOperatorsInput>;
  abbreviation?: InputMaybe<FilterFindManyAlignmentAbbreviationOperatorsInput>;
  desc?: InputMaybe<FilterFindManyAlignmentDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyAlignmentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyAlignmentNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyAlignmentUrlOperatorsInput>;
};

export type FilterFindManyAlignmentUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundFeatureInput = {
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsFromInput = {
  alignments?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  desc?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundIdealsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundInput = {
  AND?: InputMaybe<Array<FilterFindManyBackgroundInput>>;
  OR?: InputMaybe<Array<FilterFindManyBackgroundInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyBackgroundOperatorsInput>;
  bonds?: InputMaybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  feature?: InputMaybe<FilterFindManyBackgroundFeatureInput>;
  flaws?: InputMaybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  ideals?: InputMaybe<FilterFindManyBackgroundIdealsInput>;
  index?: InputMaybe<Scalars['String']>;
  language_options?: InputMaybe<FilterFindManyBackgroundLanguage_OptionsInput>;
  name?: InputMaybe<Scalars['String']>;
  personality_traits?: InputMaybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  starting_equipment?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundStarting_EquipmentInput>>>;
  starting_equipment_options?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundStarting_Equipment_OptionsInput>>>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyBackgroundOperatorsInput = {
  _id?: InputMaybe<FilterFindManyBackground_IdOperatorsInput>;
  index?: InputMaybe<FilterFindManyBackgroundIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyBackgroundNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyBackgroundUrlOperatorsInput>;
};

export type FilterFindManyBackgroundPersonality_TraitsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_EquipmentInput = {
  equipment?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundStarting_Equipment_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackground_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassClass_LevelsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassHit_DieOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyClassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassInput = {
  AND?: InputMaybe<Array<FilterFindManyClassInput>>;
  OR?: InputMaybe<Array<FilterFindManyClassInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyClassOperatorsInput>;
  class_levels?: InputMaybe<Scalars['String']>;
  hit_die?: InputMaybe<Scalars['Float']>;
  index?: InputMaybe<Scalars['String']>;
  multi_classing?: InputMaybe<FilterFindManyClassMulti_ClassingInput>;
  name?: InputMaybe<Scalars['String']>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  proficiency_choices?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingProficiency_ChoicesInput>>>;
  saving_throws?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  spellcasting?: InputMaybe<FilterFindManyClassSpellcastingInput>;
  spells?: InputMaybe<Scalars['String']>;
  starting_equipment?: InputMaybe<Array<InputMaybe<FilterFindManyClassStarting_EquipmentInput>>>;
  starting_equipment_options?: InputMaybe<Array<InputMaybe<FilterFindManyClassStarting_Equipment_OptionsInput>>>;
  subclasses?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingInput = {
  prerequisite_options?: InputMaybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsInput>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingPrerequisitesInput>>>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  proficiency_choices?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingProficiency_ChoicesInput>>>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingPrerequisitesInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisitesInput = {
  ability_score?: InputMaybe<AbilityScoreSkillsInput>;
  minimum_score?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyClassMulti_ClassingProficiency_ChoicesInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<AbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyClassOperatorsInput = {
  _id?: InputMaybe<FilterFindManyClass_IdOperatorsInput>;
  class_levels?: InputMaybe<FilterFindManyClassClass_LevelsOperatorsInput>;
  hit_die?: InputMaybe<FilterFindManyClassHit_DieOperatorsInput>;
  index?: InputMaybe<FilterFindManyClassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyClassNameOperatorsInput>;
  spells?: InputMaybe<FilterFindManyClassSpellsOperatorsInput>;
  url?: InputMaybe<FilterFindManyClassUrlOperatorsInput>;
};

export type FilterFindManyClassSpellcastingInfoInput = {
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassSpellcastingInput = {
  info?: InputMaybe<Array<InputMaybe<FilterFindManyClassSpellcastingInfoInput>>>;
  level?: InputMaybe<Scalars['Float']>;
  spellcasting_ability?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManyClassSpellsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassStarting_EquipmentInput = {
  equipment?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsFromInput = {
  equipment?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyClassStarting_Equipment_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClass_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyConditionDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyConditionIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyConditionInput = {
  AND?: InputMaybe<Array<FilterFindManyConditionInput>>;
  OR?: InputMaybe<Array<FilterFindManyConditionInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyConditionOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyConditionNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyConditionOperatorsInput = {
  _id?: InputMaybe<FilterFindManyCondition_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyConditionDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyConditionIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyConditionNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyConditionUrlOperatorsInput>;
};

export type FilterFindManyConditionUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyCondition_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyDamageTypeDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyDamageTypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyDamageTypeInput = {
  AND?: InputMaybe<Array<FilterFindManyDamageTypeInput>>;
  OR?: InputMaybe<Array<FilterFindManyDamageTypeInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyDamageTypeOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyDamageTypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyDamageTypeOperatorsInput = {
  _id?: InputMaybe<FilterFindManyDamageType_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyDamageTypeDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyDamageTypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyDamageTypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyDamageTypeUrlOperatorsInput>;
};

export type FilterFindManyDamageTypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyDamageType_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentArmor_CategoryOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentArmor_ClassInput = {
  base?: InputMaybe<Scalars['Float']>;
  dex_bonus?: InputMaybe<Scalars['Boolean']>;
  max_bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentCapacityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentCategoryIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentCategoryInput = {
  AND?: InputMaybe<Array<FilterFindManyEquipmentCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindManyEquipmentCategoryInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyEquipmentCategoryOperatorsInput>;
  equipment?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCategoryNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEquipmentCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindManyEquipmentCategory_IdOperatorsInput>;
  index?: InputMaybe<FilterFindManyEquipmentCategoryIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyEquipmentCategoryNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyEquipmentCategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentCategoryUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentCategory_RangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentContentsInput = {
  item?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentCostInput = {
  quantity?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentDamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManyEquipmentDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentInput = {
  AND?: InputMaybe<Array<FilterFindManyEquipmentInput>>;
  OR?: InputMaybe<Array<FilterFindManyEquipmentInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyEquipmentOperatorsInput>;
  armor_category?: InputMaybe<Scalars['String']>;
  armor_class?: InputMaybe<FilterFindManyEquipmentArmor_ClassInput>;
  capacity?: InputMaybe<Scalars['String']>;
  category_range?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Array<InputMaybe<FilterFindManyEquipmentContentsInput>>>;
  cost?: InputMaybe<FilterFindManyEquipmentCostInput>;
  damage?: InputMaybe<FilterFindManyEquipmentDamageInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equipment_category?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  gear_category?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  quantity?: InputMaybe<Scalars['Float']>;
  range?: InputMaybe<FilterFindManyEquipmentRangeInput>;
  special?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  speed?: InputMaybe<FilterFindManyEquipmentSpeedInput>;
  stealth_disadvantage?: InputMaybe<Scalars['Boolean']>;
  str_minimum?: InputMaybe<Scalars['Float']>;
  throw_range?: InputMaybe<FilterFindManyEquipmentThrow_RangeInput>;
  tool_category?: InputMaybe<Scalars['String']>;
  two_handed_damage?: InputMaybe<FilterFindManyEquipmentTwo_Handed_DamageInput>;
  url?: InputMaybe<Scalars['String']>;
  vehicle_category?: InputMaybe<Scalars['String']>;
  weapon_category?: InputMaybe<Scalars['String']>;
  weapon_range?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEquipmentOperatorsInput = {
  _id?: InputMaybe<FilterFindManyEquipment_IdOperatorsInput>;
  armor_category?: InputMaybe<FilterFindManyEquipmentArmor_CategoryOperatorsInput>;
  capacity?: InputMaybe<FilterFindManyEquipmentCapacityOperatorsInput>;
  category_range?: InputMaybe<FilterFindManyEquipmentCategory_RangeOperatorsInput>;
  desc?: InputMaybe<FilterFindManyEquipmentDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyEquipmentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyEquipmentNameOperatorsInput>;
  quantity?: InputMaybe<FilterFindManyEquipmentQuantityOperatorsInput>;
  special?: InputMaybe<FilterFindManyEquipmentSpecialOperatorsInput>;
  stealth_disadvantage?: InputMaybe<FilterFindManyEquipmentStealth_DisadvantageOperatorsInput>;
  str_minimum?: InputMaybe<FilterFindManyEquipmentStr_MinimumOperatorsInput>;
  tool_category?: InputMaybe<FilterFindManyEquipmentTool_CategoryOperatorsInput>;
  url?: InputMaybe<FilterFindManyEquipmentUrlOperatorsInput>;
  vehicle_category?: InputMaybe<FilterFindManyEquipmentVehicle_CategoryOperatorsInput>;
  weapon_category?: InputMaybe<FilterFindManyEquipmentWeapon_CategoryOperatorsInput>;
  weapon_range?: InputMaybe<FilterFindManyEquipmentWeapon_RangeOperatorsInput>;
  weight?: InputMaybe<FilterFindManyEquipmentWeightOperatorsInput>;
};

export type FilterFindManyEquipmentQuantityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentRangeInput = {
  long?: InputMaybe<Scalars['Float']>;
  normal?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentSpecialOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentSpeedInput = {
  quantity?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentStealth_DisadvantageOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindManyEquipmentStr_MinimumOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentThrow_RangeInput = {
  long?: InputMaybe<Scalars['Float']>;
  normal?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentTool_CategoryOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManyEquipmentUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentVehicle_CategoryOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentWeapon_CategoryOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentWeapon_RangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentWeightOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatInput = {
  AND?: InputMaybe<Array<FilterFindManyFeatInput>>;
  OR?: InputMaybe<Array<FilterFindManyFeatInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyFeatOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindManyFeatPrerequisitesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFeatOperatorsInput = {
  _id?: InputMaybe<FilterFindManyFeat_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyFeatDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyFeatIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyFeatNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyFeatUrlOperatorsInput>;
};

export type FilterFindManyFeatPrerequisitesInput = {
  ability_score?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  minimum_score?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyFeatUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeat_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureChoiceInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<AbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureFeature_SpecificInput = {
  expertise_options?: InputMaybe<FilterFindManyFeatureChoiceInput>;
  subfeature_options?: InputMaybe<FilterFindManyFeatureChoiceInput>;
};

export type FilterFindManyFeatureIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureInput = {
  AND?: InputMaybe<Array<FilterFindManyFeatureInput>>;
  OR?: InputMaybe<Array<FilterFindManyFeatureInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyFeatureOperatorsInput>;
  choice?: InputMaybe<FilterFindManyFeatureChoiceInput>;
  class?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feature_specific?: InputMaybe<FilterFindManyFeatureFeature_SpecificInput>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindManyFeaturePrerequisitesInput>>>;
  reference?: InputMaybe<Scalars['String']>;
  subclass?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureLevelOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyFeatureNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFeatureOperatorsInput = {
  _id?: InputMaybe<FilterFindManyFeature_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyFeatureDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyFeatureIndexOperatorsInput>;
  level?: InputMaybe<FilterFindManyFeatureLevelOperatorsInput>;
  name?: InputMaybe<FilterFindManyFeatureNameOperatorsInput>;
  reference?: InputMaybe<FilterFindManyFeatureReferenceOperatorsInput>;
  url?: InputMaybe<FilterFindManyFeatureUrlOperatorsInput>;
};

export type FilterFindManyFeaturePrerequisitesInput = {
  level?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureReferenceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeature_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageInput = {
  AND?: InputMaybe<Array<FilterFindManyLanguageInput>>;
  OR?: InputMaybe<Array<FilterFindManyLanguageInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyLanguageOperatorsInput>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  script?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  typical_speakers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyLanguageNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLanguageOperatorsInput = {
  _id?: InputMaybe<FilterFindManyLanguage_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyLanguageDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyLanguageIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyLanguageNameOperatorsInput>;
  script?: InputMaybe<FilterFindManyLanguageScriptOperatorsInput>;
  type?: InputMaybe<FilterFindManyLanguageTypeOperatorsInput>;
  typical_speakers?: InputMaybe<FilterFindManyLanguageTypical_SpeakersOperatorsInput>;
  url?: InputMaybe<FilterFindManyLanguageUrlOperatorsInput>;
};

export type FilterFindManyLanguageScriptOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageTypical_SpeakersOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguage_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelAbility_Score_BonusesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificCreating_Spell_SlotsInput = {
  sorcery_point_cost?: InputMaybe<Scalars['Float']>;
  spell_slot_level?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificInput = {
  action_surges?: InputMaybe<Scalars['Float']>;
  arcane_recovery_levels?: InputMaybe<Scalars['Float']>;
  aura_range?: InputMaybe<Scalars['Float']>;
  bardic_inspiration_die?: InputMaybe<Scalars['Float']>;
  brutal_critical_dice?: InputMaybe<Scalars['Float']>;
  channel_divinity_charges?: InputMaybe<Scalars['Float']>;
  creating_spell_slots?: InputMaybe<Array<InputMaybe<FilterFindManyLevelClass_SpecificCreating_Spell_SlotsInput>>>;
  destroy_undead_cr?: InputMaybe<Scalars['Float']>;
  extra_attacks?: InputMaybe<Scalars['Float']>;
  favored_enemies?: InputMaybe<Scalars['Float']>;
  favored_terrain?: InputMaybe<Scalars['Float']>;
  indomitable_uses?: InputMaybe<Scalars['Float']>;
  invocations_known?: InputMaybe<Scalars['Float']>;
  ki_points?: InputMaybe<Scalars['Float']>;
  magical_secrets_max_5?: InputMaybe<Scalars['Float']>;
  magical_secrets_max_7?: InputMaybe<Scalars['Float']>;
  magical_secrets_max_9?: InputMaybe<Scalars['Float']>;
  martial_arts?: InputMaybe<FilterFindManyLevelClass_SpecificMartial_ArtsInput>;
  metamagic_known?: InputMaybe<Scalars['Float']>;
  mystic_arcanum_level_6?: InputMaybe<Scalars['Float']>;
  mystic_arcanum_level_7?: InputMaybe<Scalars['Float']>;
  mystic_arcanum_level_8?: InputMaybe<Scalars['Float']>;
  mystic_arcanum_level_9?: InputMaybe<Scalars['Float']>;
  rage_count?: InputMaybe<Scalars['Float']>;
  rage_damage_bonus?: InputMaybe<Scalars['Float']>;
  sneak_attack?: InputMaybe<FilterFindManyLevelClass_SpecificSneak_AttackInput>;
  song_of_rest_die?: InputMaybe<Scalars['Float']>;
  sorcery_points?: InputMaybe<Scalars['Float']>;
  unarmored_movement?: InputMaybe<Scalars['Float']>;
  wild_shape_fly?: InputMaybe<Scalars['Boolean']>;
  wild_shape_max_cr?: InputMaybe<Scalars['Float']>;
  wild_shape_swim?: InputMaybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: InputMaybe<Scalars['Float']>;
  dice_value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackInput = {
  dice_count?: InputMaybe<Scalars['Float']>;
  dice_value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelInput = {
  AND?: InputMaybe<Array<FilterFindManyLevelInput>>;
  OR?: InputMaybe<Array<FilterFindManyLevelInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyLevelOperatorsInput>;
  ability_score_bonuses?: InputMaybe<Scalars['Float']>;
  class?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  class_specific?: InputMaybe<FilterFindManyLevelClass_SpecificInput>;
  features?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  prof_bonus?: InputMaybe<Scalars['Float']>;
  spellcasting?: InputMaybe<FilterFindManyLevelSpellcastingInput>;
  subclass?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  subclass_specific?: InputMaybe<FilterFindManyLevelSubclass_SpecificInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyLevelLevelOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLevelOperatorsInput = {
  _id?: InputMaybe<FilterFindManyLevel_IdOperatorsInput>;
  ability_score_bonuses?: InputMaybe<FilterFindManyLevelAbility_Score_BonusesOperatorsInput>;
  index?: InputMaybe<FilterFindManyLevelIndexOperatorsInput>;
  level?: InputMaybe<FilterFindManyLevelLevelOperatorsInput>;
  prof_bonus?: InputMaybe<FilterFindManyLevelProf_BonusOperatorsInput>;
  url?: InputMaybe<FilterFindManyLevelUrlOperatorsInput>;
};

export type FilterFindManyLevelProf_BonusOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingInput = {
  cantrips_known?: InputMaybe<Scalars['Float']>;
  spell_slots_level_1?: InputMaybe<Scalars['Float']>;
  spell_slots_level_2?: InputMaybe<Scalars['Float']>;
  spell_slots_level_3?: InputMaybe<Scalars['Float']>;
  spell_slots_level_4?: InputMaybe<Scalars['Float']>;
  spell_slots_level_5?: InputMaybe<Scalars['Float']>;
  spell_slots_level_6?: InputMaybe<Scalars['Float']>;
  spell_slots_level_7?: InputMaybe<Scalars['Float']>;
  spell_slots_level_8?: InputMaybe<Scalars['Float']>;
  spell_slots_level_9?: InputMaybe<Scalars['Float']>;
  spells_known?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: InputMaybe<Scalars['Float']>;
  aura_range?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevel_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemInput = {
  AND?: InputMaybe<Array<FilterFindManyMagicItemInput>>;
  OR?: InputMaybe<Array<FilterFindManyMagicItemInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyMagicItemOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equipment_category?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMagicItemNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMagicItemOperatorsInput = {
  _id?: InputMaybe<FilterFindManyMagicItem_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyMagicItemDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyMagicItemIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyMagicItemNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyMagicItemUrlOperatorsInput>;
};

export type FilterFindManyMagicItemUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItem_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicSchoolDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicSchoolIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicSchoolInput = {
  AND?: InputMaybe<Array<FilterFindManyMagicSchoolInput>>;
  OR?: InputMaybe<Array<FilterFindManyMagicSchoolInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyMagicSchoolOperatorsInput>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMagicSchoolNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMagicSchoolOperatorsInput = {
  _id?: InputMaybe<FilterFindManyMagicSchool_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyMagicSchoolDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyMagicSchoolIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyMagicSchoolNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyMagicSchoolUrlOperatorsInput>;
};

export type FilterFindManyMagicSchoolUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicSchool_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterActionsAttack_OptionsFromInput = {
  damage?: InputMaybe<Array<InputMaybe<MonsterActionsDamageInput>>>;
  dc?: InputMaybe<MonsterActionsDcInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterActionsAttack_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterActionsAttack_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterActionsDamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<AbilityScoreSkillsInput>;
};

export type FilterFindManyMonsterActionsDcInput = {
  dc_type?: InputMaybe<AbilityScoreSkillsInput>;
  dc_value?: InputMaybe<Scalars['Float']>;
  success_type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterActionsInput = {
  attack_bonus?: InputMaybe<Scalars['Float']>;
  attack_options?: InputMaybe<FilterFindManyMonsterActionsAttack_OptionsInput>;
  attacks?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterActionsAttack_OptionsFromInput>>>;
  damage?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterActionsDamageInput>>>;
  dc?: InputMaybe<FilterFindManyMonsterActionsDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<FilterFindManyMonsterActionsOptionsInput>;
  usage?: InputMaybe<FilterFindManyMonsterActionsUsageInput>;
};

export type FilterFindManyMonsterActionsOptionsFromInput = {
  count?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterActionsOptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterActionsOptionsFromInput>>>;
};

export type FilterFindManyMonsterActionsUsageInput = {
  dice?: InputMaybe<Scalars['String']>;
  min_value?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterAlignmentOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterArmor_ClassOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterChallenge_RatingOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterCharismaOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterConstitutionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterDamage_ImmunitiesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterDamage_ResistancesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterDamage_VulnerabilitiesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterDexterityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterHit_DiceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterHit_PointsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterInput = {
  AND?: InputMaybe<Array<FilterFindManyMonsterInput>>;
  OR?: InputMaybe<Array<FilterFindManyMonsterInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyMonsterOperatorsInput>;
  actions?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterActionsInput>>>;
  alignment?: InputMaybe<Scalars['String']>;
  armor_class?: InputMaybe<Scalars['Float']>;
  challenge_rating?: InputMaybe<Scalars['Float']>;
  charisma?: InputMaybe<Scalars['Float']>;
  condition_immunities?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  constitution?: InputMaybe<Scalars['Float']>;
  damage_immunities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_resistances?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_vulnerabilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dexterity?: InputMaybe<Scalars['Float']>;
  forms?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  hit_dice?: InputMaybe<Scalars['String']>;
  hit_points?: InputMaybe<Scalars['Float']>;
  index?: InputMaybe<Scalars['String']>;
  intelligence?: InputMaybe<Scalars['Float']>;
  languages?: InputMaybe<Scalars['String']>;
  legendary_actions?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterLegendary_ActionsInput>>>;
  name?: InputMaybe<Scalars['String']>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterProficienciesInput>>>;
  reactions?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterReactionsInput>>>;
  senses?: InputMaybe<FilterFindManyMonsterSensesInput>;
  size?: InputMaybe<Scalars['String']>;
  special_abilities?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterSpecial_AbilitiesInput>>>;
  speed?: InputMaybe<FilterFindManyMonsterSpeedInput>;
  strength?: InputMaybe<Scalars['Float']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  wisdom?: InputMaybe<Scalars['Float']>;
  xp?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyMonsterIntelligenceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterLanguagesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterLegendary_ActionsInput = {
  attack_bonus?: InputMaybe<Scalars['Float']>;
  damage?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterActionsDamageInput>>>;
  dc?: InputMaybe<FilterFindManyMonsterActionsDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMonsterOperatorsInput = {
  _id?: InputMaybe<FilterFindManyMonster_IdOperatorsInput>;
  alignment?: InputMaybe<FilterFindManyMonsterAlignmentOperatorsInput>;
  armor_class?: InputMaybe<FilterFindManyMonsterArmor_ClassOperatorsInput>;
  challenge_rating?: InputMaybe<FilterFindManyMonsterChallenge_RatingOperatorsInput>;
  charisma?: InputMaybe<FilterFindManyMonsterCharismaOperatorsInput>;
  constitution?: InputMaybe<FilterFindManyMonsterConstitutionOperatorsInput>;
  damage_immunities?: InputMaybe<FilterFindManyMonsterDamage_ImmunitiesOperatorsInput>;
  damage_resistances?: InputMaybe<FilterFindManyMonsterDamage_ResistancesOperatorsInput>;
  damage_vulnerabilities?: InputMaybe<FilterFindManyMonsterDamage_VulnerabilitiesOperatorsInput>;
  dexterity?: InputMaybe<FilterFindManyMonsterDexterityOperatorsInput>;
  hit_dice?: InputMaybe<FilterFindManyMonsterHit_DiceOperatorsInput>;
  hit_points?: InputMaybe<FilterFindManyMonsterHit_PointsOperatorsInput>;
  index?: InputMaybe<FilterFindManyMonsterIndexOperatorsInput>;
  intelligence?: InputMaybe<FilterFindManyMonsterIntelligenceOperatorsInput>;
  languages?: InputMaybe<FilterFindManyMonsterLanguagesOperatorsInput>;
  name?: InputMaybe<FilterFindManyMonsterNameOperatorsInput>;
  size?: InputMaybe<FilterFindManyMonsterSizeOperatorsInput>;
  strength?: InputMaybe<FilterFindManyMonsterStrengthOperatorsInput>;
  subtype?: InputMaybe<FilterFindManyMonsterSubtypeOperatorsInput>;
  type?: InputMaybe<FilterFindManyMonsterTypeOperatorsInput>;
  url?: InputMaybe<FilterFindManyMonsterUrlOperatorsInput>;
  wisdom?: InputMaybe<FilterFindManyMonsterWisdomOperatorsInput>;
  xp?: InputMaybe<FilterFindManyMonsterXpOperatorsInput>;
};

export type FilterFindManyMonsterProficienciesInput = {
  proficiency?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyMonsterReactionsInput = {
  dc?: InputMaybe<FilterFindManyMonsterActionsDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterSensesInput = {
  blindsight?: InputMaybe<Scalars['String']>;
  darkvision?: InputMaybe<Scalars['String']>;
  passive_perception?: InputMaybe<Scalars['Float']>;
  tremorsense?: InputMaybe<Scalars['String']>;
  truesight?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterSizeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpecial_AbilitiesInput = {
  attack_bonus?: InputMaybe<Scalars['Float']>;
  damage?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterActionsDamageInput>>>;
  dc?: InputMaybe<FilterFindManyMonsterActionsDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  spellcasting?: InputMaybe<FilterFindManyMonsterSpecial_AbilitiesSpellcastingInput>;
  usage?: InputMaybe<FilterFindManyMonsterSpecial_AbilitiesSpellcastingSpellsUsageInput>;
};

export type FilterFindManyMonsterSpecial_AbilitiesSpellcastingInput = {
  ability?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  components_required?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dc?: InputMaybe<Scalars['Float']>;
  level?: InputMaybe<Scalars['Float']>;
  modifier?: InputMaybe<Scalars['Float']>;
  school?: InputMaybe<Scalars['String']>;
  slots?: InputMaybe<Scalars['JSON']>;
  spells?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterSpecial_AbilitiesSpellcastingSpellsInput>>>;
};

export type FilterFindManyMonsterSpecial_AbilitiesSpellcastingSpellsInput = {
  level?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<FilterFindManyMonsterSpecial_AbilitiesSpellcastingSpellsUsageInput>;
};

export type FilterFindManyMonsterSpecial_AbilitiesSpellcastingSpellsUsageInput = {
  rest_types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  times?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterSpeedInput = {
  burrow?: InputMaybe<Scalars['String']>;
  climb?: InputMaybe<Scalars['String']>;
  fly?: InputMaybe<Scalars['String']>;
  hover?: InputMaybe<Scalars['Boolean']>;
  swim?: InputMaybe<Scalars['String']>;
  walk?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterStrengthOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterSubtypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterWisdomOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterXpOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonster_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyProficiencyIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyProficiencyInput = {
  AND?: InputMaybe<Array<FilterFindManyProficiencyInput>>;
  OR?: InputMaybe<Array<FilterFindManyProficiencyInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyProficiencyOperatorsInput>;
  classes?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  races?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  reference?: InputMaybe<FilterFindManyProficiencyReferenceInput>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyProficiencyNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyProficiencyOperatorsInput = {
  _id?: InputMaybe<FilterFindManyProficiency_IdOperatorsInput>;
  index?: InputMaybe<FilterFindManyProficiencyIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyProficiencyNameOperatorsInput>;
  type?: InputMaybe<FilterFindManyProficiencyTypeOperatorsInput>;
  url?: InputMaybe<FilterFindManyProficiencyUrlOperatorsInput>;
};

export type FilterFindManyProficiencyReferenceInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyProficiencyTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyProficiencyUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyProficiency_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsFromInput = {
  ability_score?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyRaceAbility_Bonus_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_BonusesInput = {
  ability_score?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyRaceAgeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceAlignmentOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceInput = {
  AND?: InputMaybe<Array<FilterFindManyRaceInput>>;
  OR?: InputMaybe<Array<FilterFindManyRaceInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyRaceOperatorsInput>;
  ability_bonus_options?: InputMaybe<FilterFindManyRaceAbility_Bonus_OptionsInput>;
  ability_bonuses?: InputMaybe<Array<InputMaybe<FilterFindManyRaceAbility_BonusesInput>>>;
  age?: InputMaybe<Scalars['String']>;
  alignment?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  language_desc?: InputMaybe<Scalars['String']>;
  language_options?: InputMaybe<FilterFindManyRaceLanguage_OptionsInput>;
  languages?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  size_description?: InputMaybe<Scalars['String']>;
  speed?: InputMaybe<Scalars['Float']>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  starting_proficiency_options?: InputMaybe<FilterFindManyRaceStarting_Proficiency_OptionsInput>;
  subraces?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  traits?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceLanguage_DescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRaceOperatorsInput = {
  _id?: InputMaybe<FilterFindManyRace_IdOperatorsInput>;
  age?: InputMaybe<FilterFindManyRaceAgeOperatorsInput>;
  alignment?: InputMaybe<FilterFindManyRaceAlignmentOperatorsInput>;
  index?: InputMaybe<FilterFindManyRaceIndexOperatorsInput>;
  language_desc?: InputMaybe<FilterFindManyRaceLanguage_DescOperatorsInput>;
  name?: InputMaybe<FilterFindManyRaceNameOperatorsInput>;
  size?: InputMaybe<FilterFindManyRaceSizeOperatorsInput>;
  size_description?: InputMaybe<FilterFindManyRaceSize_DescriptionOperatorsInput>;
  speed?: InputMaybe<FilterFindManyRaceSpeedOperatorsInput>;
  url?: InputMaybe<FilterFindManyRaceUrlOperatorsInput>;
};

export type FilterFindManyRaceSizeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceSize_DescriptionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceSpeedOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRace_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleInput = {
  AND?: InputMaybe<Array<FilterFindManyRuleInput>>;
  OR?: InputMaybe<Array<FilterFindManyRuleInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyRuleOperatorsInput>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  subsections?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRuleNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRuleOperatorsInput = {
  _id?: InputMaybe<FilterFindManyRule_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyRuleDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyRuleIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyRuleNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyRuleUrlOperatorsInput>;
};

export type FilterFindManyRuleSectionDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleSectionIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleSectionInput = {
  AND?: InputMaybe<Array<FilterFindManyRuleSectionInput>>;
  OR?: InputMaybe<Array<FilterFindManyRuleSectionInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyRuleSectionOperatorsInput>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRuleSectionNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRuleSectionOperatorsInput = {
  _id?: InputMaybe<FilterFindManyRuleSection_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyRuleSectionDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyRuleSectionIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyRuleSectionNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyRuleSectionUrlOperatorsInput>;
};

export type FilterFindManyRuleSectionUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleSection_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRule_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillInput = {
  AND?: InputMaybe<Array<FilterFindManySkillInput>>;
  OR?: InputMaybe<Array<FilterFindManySkillInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySkillOperatorsInput>;
  ability_score?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySkillNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySkillOperatorsInput = {
  _id?: InputMaybe<FilterFindManySkill_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManySkillDescOperatorsInput>;
  index?: InputMaybe<FilterFindManySkillIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManySkillNameOperatorsInput>;
  url?: InputMaybe<FilterFindManySkillUrlOperatorsInput>;
};

export type FilterFindManySkillUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkill_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellArea_Of_EffectInput = {
  size?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpellAttack_TypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellCasting_TimeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellComponentsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellConcentrationOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindManySpellDamageInput = {
  damage_at_character_level?: InputMaybe<Scalars['JSON']>;
  damage_at_slot_level?: InputMaybe<Scalars['JSON']>;
  damage_type?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManySpellDcInput = {
  dc_success?: InputMaybe<Scalars['String']>;
  dc_type?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  desc?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpellDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellDurationOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellHigher_LevelOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellInput = {
  AND?: InputMaybe<Array<FilterFindManySpellInput>>;
  OR?: InputMaybe<Array<FilterFindManySpellInput>>;
  _id?: InputMaybe<FilterFindManySpell_IdInput>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySpellOperatorsInput>;
  area_of_effect?: InputMaybe<FilterFindManySpellArea_Of_EffectInput>;
  attack_type?: InputMaybe<Scalars['String']>;
  casting_time?: InputMaybe<Scalars['String']>;
  classes?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  components?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concentration?: InputMaybe<Scalars['Boolean']>;
  damage?: InputMaybe<FilterFindManySpellDamageInput>;
  dc?: InputMaybe<FilterFindManySpellDcInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  duration?: InputMaybe<Scalars['String']>;
  heal_at_slot_level?: InputMaybe<Scalars['JSON']>;
  higher_level?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  material?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  range?: InputMaybe<Scalars['String']>;
  ritual?: InputMaybe<Scalars['Boolean']>;
  school?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  subclasses?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpellMaterialOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySpellOperatorsInput = {
  _id?: InputMaybe<FilterFindManySpell_IdOperatorsInput>;
  attack_type?: InputMaybe<FilterFindManySpellAttack_TypeOperatorsInput>;
  casting_time?: InputMaybe<FilterFindManySpellCasting_TimeOperatorsInput>;
  components?: InputMaybe<FilterFindManySpellComponentsOperatorsInput>;
  concentration?: InputMaybe<FilterFindManySpellConcentrationOperatorsInput>;
  desc?: InputMaybe<FilterFindManySpellDescOperatorsInput>;
  duration?: InputMaybe<FilterFindManySpellDurationOperatorsInput>;
  higher_level?: InputMaybe<FilterFindManySpellHigher_LevelOperatorsInput>;
  index?: InputMaybe<FilterFindManySpellIndexOperatorsInput>;
  material?: InputMaybe<FilterFindManySpellMaterialOperatorsInput>;
  name?: InputMaybe<FilterFindManySpellNameOperatorsInput>;
  range?: InputMaybe<FilterFindManySpellRangeOperatorsInput>;
  ritual?: InputMaybe<FilterFindManySpellRitualOperatorsInput>;
  url?: InputMaybe<FilterFindManySpellUrlOperatorsInput>;
};

export type FilterFindManySpellRangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellRitualOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindManySpellUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpell_IdInput = {
  select?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpell_IdOperatorsInput = {
  type?: InputMaybe<FilterFindManySpell_IdTypeOperatorsInput>;
};

export type FilterFindManySpell_IdTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassInput = {
  AND?: InputMaybe<Array<FilterFindManySubclassInput>>;
  OR?: InputMaybe<Array<FilterFindManySubclassInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySubclassOperatorsInput>;
  class?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  spells?: InputMaybe<Array<InputMaybe<FilterFindManySubclassSpellsInput>>>;
  subclass_flavor?: InputMaybe<Scalars['String']>;
  subclass_levels?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubclassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySubclassOperatorsInput = {
  _id?: InputMaybe<FilterFindManySubclass_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManySubclassDescOperatorsInput>;
  index?: InputMaybe<FilterFindManySubclassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManySubclassNameOperatorsInput>;
  subclass_flavor?: InputMaybe<FilterFindManySubclassSubclass_FlavorOperatorsInput>;
  subclass_levels?: InputMaybe<FilterFindManySubclassSubclass_LevelsOperatorsInput>;
  url?: InputMaybe<FilterFindManySubclassUrlOperatorsInput>;
};

export type FilterFindManySubclassSpellsInput = {
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindManySubclassSpellsPrerequisitesInput>>>;
  spell?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManySubclassSpellsPrerequisitesInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubclassSubclass_FlavorOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassSubclass_LevelsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclass_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceAbility_BonusesInput = {
  ability_score?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManySubraceDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceInput = {
  AND?: InputMaybe<Array<FilterFindManySubraceInput>>;
  OR?: InputMaybe<Array<FilterFindManySubraceInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySubraceOperatorsInput>;
  ability_bonuses?: InputMaybe<Array<InputMaybe<FilterFindManySubraceAbility_BonusesInput>>>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  language_options?: InputMaybe<FilterFindManySubraceLanguage_OptionsInput>;
  name?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  racial_traits?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubraceLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubraceNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySubraceOperatorsInput = {
  _id?: InputMaybe<FilterFindManySubrace_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManySubraceDescOperatorsInput>;
  index?: InputMaybe<FilterFindManySubraceIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManySubraceNameOperatorsInput>;
  url?: InputMaybe<FilterFindManySubraceUrlOperatorsInput>;
};

export type FilterFindManySubraceUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubrace_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitInput = {
  AND?: InputMaybe<Array<FilterFindManyTraitInput>>;
  OR?: InputMaybe<Array<FilterFindManyTraitInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyTraitOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyTraitProficienciesInput>>>;
  proficiency_choices?: InputMaybe<FilterFindManyTraitProficiency_ChoicesInput>;
  races?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  subraces?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  trait_specific?: InputMaybe<FilterFindManyTraitTrait_SpecificInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTraitOperatorsInput = {
  _id?: InputMaybe<FilterFindManyTrait_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyTraitDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyTraitIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyTraitNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyTraitUrlOperatorsInput>;
};

export type FilterFindManyTraitProficienciesInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitProficiency_ChoicesInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDamageInput = {
  damage_at_character_level?: InputMaybe<Scalars['JSON']>;
  damage_type?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcInput = {
  dc_type?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  success_type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponInput = {
  damage?: InputMaybe<Array<InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDamageInput>>>;
  dc?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageInput = {
  times?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificInput = {
  breath_weapon?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponInput>;
  damage_type?: InputMaybe<FilterFindManyAbilityScoreSkillsInput>;
  spell_options?: InputMaybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput>;
  subtrait_options?: InputMaybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<AbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTrait_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyWeaponPropertyDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyWeaponPropertyIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyWeaponPropertyInput = {
  AND?: InputMaybe<Array<FilterFindManyWeaponPropertyInput>>;
  OR?: InputMaybe<Array<FilterFindManyWeaponPropertyInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyWeaponPropertyOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyWeaponPropertyNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyWeaponPropertyOperatorsInput = {
  _id?: InputMaybe<FilterFindManyWeaponProperty_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindManyWeaponPropertyDescOperatorsInput>;
  index?: InputMaybe<FilterFindManyWeaponPropertyIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyWeaponPropertyNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyWeaponPropertyUrlOperatorsInput>;
};

export type FilterFindManyWeaponPropertyUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyWeaponProperty_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScoreDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScoreFull_NameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScoreIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScoreInput = {
  AND?: InputMaybe<Array<FilterFindOneAbilityScoreInput>>;
  OR?: InputMaybe<Array<FilterFindOneAbilityScoreInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneAbilityScoreOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  full_name?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneAbilityScoreNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAbilityScoreOperatorsInput = {
  _id?: InputMaybe<FilterFindOneAbilityScore_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneAbilityScoreDescOperatorsInput>;
  full_name?: InputMaybe<FilterFindOneAbilityScoreFull_NameOperatorsInput>;
  index?: InputMaybe<FilterFindOneAbilityScoreIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneAbilityScoreNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneAbilityScoreUrlOperatorsInput>;
};

export type FilterFindOneAbilityScoreSkillsInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneAbilityScoreUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScore_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignmentAbbreviationOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignmentDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignmentIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignmentInput = {
  AND?: InputMaybe<Array<FilterFindOneAlignmentInput>>;
  OR?: InputMaybe<Array<FilterFindOneAlignmentInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneAlignmentOperatorsInput>;
  abbreviation?: InputMaybe<Scalars['String']>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneAlignmentNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAlignmentOperatorsInput = {
  _id?: InputMaybe<FilterFindOneAlignment_IdOperatorsInput>;
  abbreviation?: InputMaybe<FilterFindOneAlignmentAbbreviationOperatorsInput>;
  desc?: InputMaybe<FilterFindOneAlignmentDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneAlignmentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneAlignmentNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneAlignmentUrlOperatorsInput>;
};

export type FilterFindOneAlignmentUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundFeatureInput = {
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsFromInput = {
  alignments?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  desc?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundIdealsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundInput = {
  AND?: InputMaybe<Array<FilterFindOneBackgroundInput>>;
  OR?: InputMaybe<Array<FilterFindOneBackgroundInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneBackgroundOperatorsInput>;
  bonds?: InputMaybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  feature?: InputMaybe<FilterFindOneBackgroundFeatureInput>;
  flaws?: InputMaybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  ideals?: InputMaybe<FilterFindOneBackgroundIdealsInput>;
  index?: InputMaybe<Scalars['String']>;
  language_options?: InputMaybe<FilterFindOneBackgroundLanguage_OptionsInput>;
  name?: InputMaybe<Scalars['String']>;
  personality_traits?: InputMaybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  starting_equipment?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundStarting_EquipmentInput>>>;
  starting_equipment_options?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundStarting_Equipment_OptionsInput>>>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneBackgroundOperatorsInput = {
  _id?: InputMaybe<FilterFindOneBackground_IdOperatorsInput>;
  index?: InputMaybe<FilterFindOneBackgroundIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneBackgroundNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneBackgroundUrlOperatorsInput>;
};

export type FilterFindOneBackgroundPersonality_TraitsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_EquipmentInput = {
  equipment?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundStarting_Equipment_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackground_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassClass_LevelsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassHit_DieOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneClassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassInput = {
  AND?: InputMaybe<Array<FilterFindOneClassInput>>;
  OR?: InputMaybe<Array<FilterFindOneClassInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneClassOperatorsInput>;
  class_levels?: InputMaybe<Scalars['String']>;
  hit_die?: InputMaybe<Scalars['Float']>;
  index?: InputMaybe<Scalars['String']>;
  multi_classing?: InputMaybe<FilterFindOneClassMulti_ClassingInput>;
  name?: InputMaybe<Scalars['String']>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  proficiency_choices?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingProficiency_ChoicesInput>>>;
  saving_throws?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  spellcasting?: InputMaybe<FilterFindOneClassSpellcastingInput>;
  spells?: InputMaybe<Scalars['String']>;
  starting_equipment?: InputMaybe<Array<InputMaybe<FilterFindOneClassStarting_EquipmentInput>>>;
  starting_equipment_options?: InputMaybe<Array<InputMaybe<FilterFindOneClassStarting_Equipment_OptionsInput>>>;
  subclasses?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingInput = {
  prerequisite_options?: InputMaybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsInput>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingPrerequisitesInput>>>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  proficiency_choices?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingProficiency_ChoicesInput>>>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingPrerequisitesInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisitesInput = {
  ability_score?: InputMaybe<AbilityScoreSkillsInput>;
  minimum_score?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneClassMulti_ClassingProficiency_ChoicesInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<AbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneClassOperatorsInput = {
  _id?: InputMaybe<FilterFindOneClass_IdOperatorsInput>;
  class_levels?: InputMaybe<FilterFindOneClassClass_LevelsOperatorsInput>;
  hit_die?: InputMaybe<FilterFindOneClassHit_DieOperatorsInput>;
  index?: InputMaybe<FilterFindOneClassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneClassNameOperatorsInput>;
  spells?: InputMaybe<FilterFindOneClassSpellsOperatorsInput>;
  url?: InputMaybe<FilterFindOneClassUrlOperatorsInput>;
};

export type FilterFindOneClassSpellcastingInfoInput = {
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassSpellcastingInput = {
  info?: InputMaybe<Array<InputMaybe<FilterFindOneClassSpellcastingInfoInput>>>;
  level?: InputMaybe<Scalars['Float']>;
  spellcasting_ability?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneClassSpellsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassStarting_EquipmentInput = {
  equipment?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsFromInput = {
  equipment?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneClassStarting_Equipment_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClass_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneConditionDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneConditionIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneConditionInput = {
  AND?: InputMaybe<Array<FilterFindOneConditionInput>>;
  OR?: InputMaybe<Array<FilterFindOneConditionInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneConditionOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneConditionNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneConditionOperatorsInput = {
  _id?: InputMaybe<FilterFindOneCondition_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneConditionDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneConditionIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneConditionNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneConditionUrlOperatorsInput>;
};

export type FilterFindOneConditionUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneCondition_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneDamageTypeDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneDamageTypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneDamageTypeInput = {
  AND?: InputMaybe<Array<FilterFindOneDamageTypeInput>>;
  OR?: InputMaybe<Array<FilterFindOneDamageTypeInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneDamageTypeOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneDamageTypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneDamageTypeOperatorsInput = {
  _id?: InputMaybe<FilterFindOneDamageType_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneDamageTypeDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneDamageTypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneDamageTypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneDamageTypeUrlOperatorsInput>;
};

export type FilterFindOneDamageTypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneDamageType_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentArmor_CategoryOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentArmor_ClassInput = {
  base?: InputMaybe<Scalars['Float']>;
  dex_bonus?: InputMaybe<Scalars['Boolean']>;
  max_bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentCapacityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentCategoryIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentCategoryInput = {
  AND?: InputMaybe<Array<FilterFindOneEquipmentCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindOneEquipmentCategoryInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneEquipmentCategoryOperatorsInput>;
  equipment?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCategoryNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEquipmentCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindOneEquipmentCategory_IdOperatorsInput>;
  index?: InputMaybe<FilterFindOneEquipmentCategoryIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneEquipmentCategoryNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneEquipmentCategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentCategoryUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentCategory_RangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentContentsInput = {
  item?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentCostInput = {
  quantity?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentDamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneEquipmentDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentInput = {
  AND?: InputMaybe<Array<FilterFindOneEquipmentInput>>;
  OR?: InputMaybe<Array<FilterFindOneEquipmentInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneEquipmentOperatorsInput>;
  armor_category?: InputMaybe<Scalars['String']>;
  armor_class?: InputMaybe<FilterFindOneEquipmentArmor_ClassInput>;
  capacity?: InputMaybe<Scalars['String']>;
  category_range?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Array<InputMaybe<FilterFindOneEquipmentContentsInput>>>;
  cost?: InputMaybe<FilterFindOneEquipmentCostInput>;
  damage?: InputMaybe<FilterFindOneEquipmentDamageInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equipment_category?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  gear_category?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  quantity?: InputMaybe<Scalars['Float']>;
  range?: InputMaybe<FilterFindOneEquipmentRangeInput>;
  special?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  speed?: InputMaybe<FilterFindOneEquipmentSpeedInput>;
  stealth_disadvantage?: InputMaybe<Scalars['Boolean']>;
  str_minimum?: InputMaybe<Scalars['Float']>;
  throw_range?: InputMaybe<FilterFindOneEquipmentThrow_RangeInput>;
  tool_category?: InputMaybe<Scalars['String']>;
  two_handed_damage?: InputMaybe<FilterFindOneEquipmentTwo_Handed_DamageInput>;
  url?: InputMaybe<Scalars['String']>;
  vehicle_category?: InputMaybe<Scalars['String']>;
  weapon_category?: InputMaybe<Scalars['String']>;
  weapon_range?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEquipmentOperatorsInput = {
  _id?: InputMaybe<FilterFindOneEquipment_IdOperatorsInput>;
  armor_category?: InputMaybe<FilterFindOneEquipmentArmor_CategoryOperatorsInput>;
  capacity?: InputMaybe<FilterFindOneEquipmentCapacityOperatorsInput>;
  category_range?: InputMaybe<FilterFindOneEquipmentCategory_RangeOperatorsInput>;
  desc?: InputMaybe<FilterFindOneEquipmentDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneEquipmentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneEquipmentNameOperatorsInput>;
  quantity?: InputMaybe<FilterFindOneEquipmentQuantityOperatorsInput>;
  special?: InputMaybe<FilterFindOneEquipmentSpecialOperatorsInput>;
  stealth_disadvantage?: InputMaybe<FilterFindOneEquipmentStealth_DisadvantageOperatorsInput>;
  str_minimum?: InputMaybe<FilterFindOneEquipmentStr_MinimumOperatorsInput>;
  tool_category?: InputMaybe<FilterFindOneEquipmentTool_CategoryOperatorsInput>;
  url?: InputMaybe<FilterFindOneEquipmentUrlOperatorsInput>;
  vehicle_category?: InputMaybe<FilterFindOneEquipmentVehicle_CategoryOperatorsInput>;
  weapon_category?: InputMaybe<FilterFindOneEquipmentWeapon_CategoryOperatorsInput>;
  weapon_range?: InputMaybe<FilterFindOneEquipmentWeapon_RangeOperatorsInput>;
  weight?: InputMaybe<FilterFindOneEquipmentWeightOperatorsInput>;
};

export type FilterFindOneEquipmentQuantityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentRangeInput = {
  long?: InputMaybe<Scalars['Float']>;
  normal?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentSpecialOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentSpeedInput = {
  quantity?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentStealth_DisadvantageOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindOneEquipmentStr_MinimumOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentThrow_RangeInput = {
  long?: InputMaybe<Scalars['Float']>;
  normal?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentTool_CategoryOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneEquipmentUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentVehicle_CategoryOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentWeapon_CategoryOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentWeapon_RangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentWeightOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatInput = {
  AND?: InputMaybe<Array<FilterFindOneFeatInput>>;
  OR?: InputMaybe<Array<FilterFindOneFeatInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneFeatOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindOneFeatPrerequisitesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFeatOperatorsInput = {
  _id?: InputMaybe<FilterFindOneFeat_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneFeatDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneFeatIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneFeatNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneFeatUrlOperatorsInput>;
};

export type FilterFindOneFeatPrerequisitesInput = {
  ability_score?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  minimum_score?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneFeatUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeat_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureChoiceInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<AbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureFeature_SpecificInput = {
  expertise_options?: InputMaybe<FilterFindOneFeatureChoiceInput>;
  subfeature_options?: InputMaybe<FilterFindOneFeatureChoiceInput>;
};

export type FilterFindOneFeatureIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureInput = {
  AND?: InputMaybe<Array<FilterFindOneFeatureInput>>;
  OR?: InputMaybe<Array<FilterFindOneFeatureInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneFeatureOperatorsInput>;
  choice?: InputMaybe<FilterFindOneFeatureChoiceInput>;
  class?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feature_specific?: InputMaybe<FilterFindOneFeatureFeature_SpecificInput>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindOneFeaturePrerequisitesInput>>>;
  reference?: InputMaybe<Scalars['String']>;
  subclass?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureLevelOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneFeatureNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFeatureOperatorsInput = {
  _id?: InputMaybe<FilterFindOneFeature_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneFeatureDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneFeatureIndexOperatorsInput>;
  level?: InputMaybe<FilterFindOneFeatureLevelOperatorsInput>;
  name?: InputMaybe<FilterFindOneFeatureNameOperatorsInput>;
  reference?: InputMaybe<FilterFindOneFeatureReferenceOperatorsInput>;
  url?: InputMaybe<FilterFindOneFeatureUrlOperatorsInput>;
};

export type FilterFindOneFeaturePrerequisitesInput = {
  level?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureReferenceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeature_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageInput = {
  AND?: InputMaybe<Array<FilterFindOneLanguageInput>>;
  OR?: InputMaybe<Array<FilterFindOneLanguageInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneLanguageOperatorsInput>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  script?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  typical_speakers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneLanguageNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLanguageOperatorsInput = {
  _id?: InputMaybe<FilterFindOneLanguage_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneLanguageDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneLanguageIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneLanguageNameOperatorsInput>;
  script?: InputMaybe<FilterFindOneLanguageScriptOperatorsInput>;
  type?: InputMaybe<FilterFindOneLanguageTypeOperatorsInput>;
  typical_speakers?: InputMaybe<FilterFindOneLanguageTypical_SpeakersOperatorsInput>;
  url?: InputMaybe<FilterFindOneLanguageUrlOperatorsInput>;
};

export type FilterFindOneLanguageScriptOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageTypical_SpeakersOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguage_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelAbility_Score_BonusesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificCreating_Spell_SlotsInput = {
  sorcery_point_cost?: InputMaybe<Scalars['Float']>;
  spell_slot_level?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificInput = {
  action_surges?: InputMaybe<Scalars['Float']>;
  arcane_recovery_levels?: InputMaybe<Scalars['Float']>;
  aura_range?: InputMaybe<Scalars['Float']>;
  bardic_inspiration_die?: InputMaybe<Scalars['Float']>;
  brutal_critical_dice?: InputMaybe<Scalars['Float']>;
  channel_divinity_charges?: InputMaybe<Scalars['Float']>;
  creating_spell_slots?: InputMaybe<Array<InputMaybe<FilterFindOneLevelClass_SpecificCreating_Spell_SlotsInput>>>;
  destroy_undead_cr?: InputMaybe<Scalars['Float']>;
  extra_attacks?: InputMaybe<Scalars['Float']>;
  favored_enemies?: InputMaybe<Scalars['Float']>;
  favored_terrain?: InputMaybe<Scalars['Float']>;
  indomitable_uses?: InputMaybe<Scalars['Float']>;
  invocations_known?: InputMaybe<Scalars['Float']>;
  ki_points?: InputMaybe<Scalars['Float']>;
  magical_secrets_max_5?: InputMaybe<Scalars['Float']>;
  magical_secrets_max_7?: InputMaybe<Scalars['Float']>;
  magical_secrets_max_9?: InputMaybe<Scalars['Float']>;
  martial_arts?: InputMaybe<FilterFindOneLevelClass_SpecificMartial_ArtsInput>;
  metamagic_known?: InputMaybe<Scalars['Float']>;
  mystic_arcanum_level_6?: InputMaybe<Scalars['Float']>;
  mystic_arcanum_level_7?: InputMaybe<Scalars['Float']>;
  mystic_arcanum_level_8?: InputMaybe<Scalars['Float']>;
  mystic_arcanum_level_9?: InputMaybe<Scalars['Float']>;
  rage_count?: InputMaybe<Scalars['Float']>;
  rage_damage_bonus?: InputMaybe<Scalars['Float']>;
  sneak_attack?: InputMaybe<FilterFindOneLevelClass_SpecificSneak_AttackInput>;
  song_of_rest_die?: InputMaybe<Scalars['Float']>;
  sorcery_points?: InputMaybe<Scalars['Float']>;
  unarmored_movement?: InputMaybe<Scalars['Float']>;
  wild_shape_fly?: InputMaybe<Scalars['Boolean']>;
  wild_shape_max_cr?: InputMaybe<Scalars['Float']>;
  wild_shape_swim?: InputMaybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: InputMaybe<Scalars['Float']>;
  dice_value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackInput = {
  dice_count?: InputMaybe<Scalars['Float']>;
  dice_value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelInput = {
  AND?: InputMaybe<Array<FilterFindOneLevelInput>>;
  OR?: InputMaybe<Array<FilterFindOneLevelInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneLevelOperatorsInput>;
  ability_score_bonuses?: InputMaybe<Scalars['Float']>;
  class?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  class_specific?: InputMaybe<FilterFindOneLevelClass_SpecificInput>;
  features?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  prof_bonus?: InputMaybe<Scalars['Float']>;
  spellcasting?: InputMaybe<FilterFindOneLevelSpellcastingInput>;
  subclass?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  subclass_specific?: InputMaybe<FilterFindOneLevelSubclass_SpecificInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneLevelLevelOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLevelOperatorsInput = {
  _id?: InputMaybe<FilterFindOneLevel_IdOperatorsInput>;
  ability_score_bonuses?: InputMaybe<FilterFindOneLevelAbility_Score_BonusesOperatorsInput>;
  index?: InputMaybe<FilterFindOneLevelIndexOperatorsInput>;
  level?: InputMaybe<FilterFindOneLevelLevelOperatorsInput>;
  prof_bonus?: InputMaybe<FilterFindOneLevelProf_BonusOperatorsInput>;
  url?: InputMaybe<FilterFindOneLevelUrlOperatorsInput>;
};

export type FilterFindOneLevelProf_BonusOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingInput = {
  cantrips_known?: InputMaybe<Scalars['Float']>;
  spell_slots_level_1?: InputMaybe<Scalars['Float']>;
  spell_slots_level_2?: InputMaybe<Scalars['Float']>;
  spell_slots_level_3?: InputMaybe<Scalars['Float']>;
  spell_slots_level_4?: InputMaybe<Scalars['Float']>;
  spell_slots_level_5?: InputMaybe<Scalars['Float']>;
  spell_slots_level_6?: InputMaybe<Scalars['Float']>;
  spell_slots_level_7?: InputMaybe<Scalars['Float']>;
  spell_slots_level_8?: InputMaybe<Scalars['Float']>;
  spell_slots_level_9?: InputMaybe<Scalars['Float']>;
  spells_known?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: InputMaybe<Scalars['Float']>;
  aura_range?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevel_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemInput = {
  AND?: InputMaybe<Array<FilterFindOneMagicItemInput>>;
  OR?: InputMaybe<Array<FilterFindOneMagicItemInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneMagicItemOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equipment_category?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMagicItemNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMagicItemOperatorsInput = {
  _id?: InputMaybe<FilterFindOneMagicItem_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneMagicItemDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneMagicItemIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneMagicItemNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneMagicItemUrlOperatorsInput>;
};

export type FilterFindOneMagicItemUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItem_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicSchoolDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicSchoolIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicSchoolInput = {
  AND?: InputMaybe<Array<FilterFindOneMagicSchoolInput>>;
  OR?: InputMaybe<Array<FilterFindOneMagicSchoolInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneMagicSchoolOperatorsInput>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMagicSchoolNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMagicSchoolOperatorsInput = {
  _id?: InputMaybe<FilterFindOneMagicSchool_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneMagicSchoolDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneMagicSchoolIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneMagicSchoolNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneMagicSchoolUrlOperatorsInput>;
};

export type FilterFindOneMagicSchoolUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicSchool_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterActionsAttack_OptionsFromInput = {
  damage?: InputMaybe<Array<InputMaybe<MonsterActionsDamageInput>>>;
  dc?: InputMaybe<MonsterActionsDcInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterActionsAttack_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterActionsAttack_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterActionsDamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<AbilityScoreSkillsInput>;
};

export type FilterFindOneMonsterActionsDcInput = {
  dc_type?: InputMaybe<AbilityScoreSkillsInput>;
  dc_value?: InputMaybe<Scalars['Float']>;
  success_type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterActionsInput = {
  attack_bonus?: InputMaybe<Scalars['Float']>;
  attack_options?: InputMaybe<FilterFindOneMonsterActionsAttack_OptionsInput>;
  attacks?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterActionsAttack_OptionsFromInput>>>;
  damage?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterActionsDamageInput>>>;
  dc?: InputMaybe<FilterFindOneMonsterActionsDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<FilterFindOneMonsterActionsOptionsInput>;
  usage?: InputMaybe<FilterFindOneMonsterActionsUsageInput>;
};

export type FilterFindOneMonsterActionsOptionsFromInput = {
  count?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterActionsOptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterActionsOptionsFromInput>>>;
};

export type FilterFindOneMonsterActionsUsageInput = {
  dice?: InputMaybe<Scalars['String']>;
  min_value?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterAlignmentOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterArmor_ClassOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterChallenge_RatingOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterCharismaOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterConstitutionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterDamage_ImmunitiesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterDamage_ResistancesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterDamage_VulnerabilitiesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterDexterityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterHit_DiceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterHit_PointsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterInput = {
  AND?: InputMaybe<Array<FilterFindOneMonsterInput>>;
  OR?: InputMaybe<Array<FilterFindOneMonsterInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneMonsterOperatorsInput>;
  actions?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterActionsInput>>>;
  alignment?: InputMaybe<Scalars['String']>;
  armor_class?: InputMaybe<Scalars['Float']>;
  challenge_rating?: InputMaybe<Scalars['Float']>;
  charisma?: InputMaybe<Scalars['Float']>;
  condition_immunities?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  constitution?: InputMaybe<Scalars['Float']>;
  damage_immunities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_resistances?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_vulnerabilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dexterity?: InputMaybe<Scalars['Float']>;
  forms?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  hit_dice?: InputMaybe<Scalars['String']>;
  hit_points?: InputMaybe<Scalars['Float']>;
  index?: InputMaybe<Scalars['String']>;
  intelligence?: InputMaybe<Scalars['Float']>;
  languages?: InputMaybe<Scalars['String']>;
  legendary_actions?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterLegendary_ActionsInput>>>;
  name?: InputMaybe<Scalars['String']>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterProficienciesInput>>>;
  reactions?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterReactionsInput>>>;
  senses?: InputMaybe<FilterFindOneMonsterSensesInput>;
  size?: InputMaybe<Scalars['String']>;
  special_abilities?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterSpecial_AbilitiesInput>>>;
  speed?: InputMaybe<FilterFindOneMonsterSpeedInput>;
  strength?: InputMaybe<Scalars['Float']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  wisdom?: InputMaybe<Scalars['Float']>;
  xp?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneMonsterIntelligenceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterLanguagesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterLegendary_ActionsInput = {
  attack_bonus?: InputMaybe<Scalars['Float']>;
  damage?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterActionsDamageInput>>>;
  dc?: InputMaybe<FilterFindOneMonsterActionsDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMonsterOperatorsInput = {
  _id?: InputMaybe<FilterFindOneMonster_IdOperatorsInput>;
  alignment?: InputMaybe<FilterFindOneMonsterAlignmentOperatorsInput>;
  armor_class?: InputMaybe<FilterFindOneMonsterArmor_ClassOperatorsInput>;
  challenge_rating?: InputMaybe<FilterFindOneMonsterChallenge_RatingOperatorsInput>;
  charisma?: InputMaybe<FilterFindOneMonsterCharismaOperatorsInput>;
  constitution?: InputMaybe<FilterFindOneMonsterConstitutionOperatorsInput>;
  damage_immunities?: InputMaybe<FilterFindOneMonsterDamage_ImmunitiesOperatorsInput>;
  damage_resistances?: InputMaybe<FilterFindOneMonsterDamage_ResistancesOperatorsInput>;
  damage_vulnerabilities?: InputMaybe<FilterFindOneMonsterDamage_VulnerabilitiesOperatorsInput>;
  dexterity?: InputMaybe<FilterFindOneMonsterDexterityOperatorsInput>;
  hit_dice?: InputMaybe<FilterFindOneMonsterHit_DiceOperatorsInput>;
  hit_points?: InputMaybe<FilterFindOneMonsterHit_PointsOperatorsInput>;
  index?: InputMaybe<FilterFindOneMonsterIndexOperatorsInput>;
  intelligence?: InputMaybe<FilterFindOneMonsterIntelligenceOperatorsInput>;
  languages?: InputMaybe<FilterFindOneMonsterLanguagesOperatorsInput>;
  name?: InputMaybe<FilterFindOneMonsterNameOperatorsInput>;
  size?: InputMaybe<FilterFindOneMonsterSizeOperatorsInput>;
  strength?: InputMaybe<FilterFindOneMonsterStrengthOperatorsInput>;
  subtype?: InputMaybe<FilterFindOneMonsterSubtypeOperatorsInput>;
  type?: InputMaybe<FilterFindOneMonsterTypeOperatorsInput>;
  url?: InputMaybe<FilterFindOneMonsterUrlOperatorsInput>;
  wisdom?: InputMaybe<FilterFindOneMonsterWisdomOperatorsInput>;
  xp?: InputMaybe<FilterFindOneMonsterXpOperatorsInput>;
};

export type FilterFindOneMonsterProficienciesInput = {
  proficiency?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneMonsterReactionsInput = {
  dc?: InputMaybe<FilterFindOneMonsterActionsDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterSensesInput = {
  blindsight?: InputMaybe<Scalars['String']>;
  darkvision?: InputMaybe<Scalars['String']>;
  passive_perception?: InputMaybe<Scalars['Float']>;
  tremorsense?: InputMaybe<Scalars['String']>;
  truesight?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterSizeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpecial_AbilitiesInput = {
  attack_bonus?: InputMaybe<Scalars['Float']>;
  damage?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterActionsDamageInput>>>;
  dc?: InputMaybe<FilterFindOneMonsterActionsDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  spellcasting?: InputMaybe<FilterFindOneMonsterSpecial_AbilitiesSpellcastingInput>;
  usage?: InputMaybe<FilterFindOneMonsterSpecial_AbilitiesSpellcastingSpellsUsageInput>;
};

export type FilterFindOneMonsterSpecial_AbilitiesSpellcastingInput = {
  ability?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  components_required?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dc?: InputMaybe<Scalars['Float']>;
  level?: InputMaybe<Scalars['Float']>;
  modifier?: InputMaybe<Scalars['Float']>;
  school?: InputMaybe<Scalars['String']>;
  slots?: InputMaybe<Scalars['JSON']>;
  spells?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterSpecial_AbilitiesSpellcastingSpellsInput>>>;
};

export type FilterFindOneMonsterSpecial_AbilitiesSpellcastingSpellsInput = {
  level?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<FilterFindOneMonsterSpecial_AbilitiesSpellcastingSpellsUsageInput>;
};

export type FilterFindOneMonsterSpecial_AbilitiesSpellcastingSpellsUsageInput = {
  rest_types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  times?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterSpeedInput = {
  burrow?: InputMaybe<Scalars['String']>;
  climb?: InputMaybe<Scalars['String']>;
  fly?: InputMaybe<Scalars['String']>;
  hover?: InputMaybe<Scalars['Boolean']>;
  swim?: InputMaybe<Scalars['String']>;
  walk?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterStrengthOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterSubtypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterWisdomOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterXpOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonster_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneProficiencyIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneProficiencyInput = {
  AND?: InputMaybe<Array<FilterFindOneProficiencyInput>>;
  OR?: InputMaybe<Array<FilterFindOneProficiencyInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneProficiencyOperatorsInput>;
  classes?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  races?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  reference?: InputMaybe<FilterFindOneProficiencyReferenceInput>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneProficiencyNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneProficiencyOperatorsInput = {
  _id?: InputMaybe<FilterFindOneProficiency_IdOperatorsInput>;
  index?: InputMaybe<FilterFindOneProficiencyIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneProficiencyNameOperatorsInput>;
  type?: InputMaybe<FilterFindOneProficiencyTypeOperatorsInput>;
  url?: InputMaybe<FilterFindOneProficiencyUrlOperatorsInput>;
};

export type FilterFindOneProficiencyReferenceInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneProficiencyTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneProficiencyUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneProficiency_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsFromInput = {
  ability_score?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneRaceAbility_Bonus_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_BonusesInput = {
  ability_score?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneRaceAgeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceAlignmentOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceInput = {
  AND?: InputMaybe<Array<FilterFindOneRaceInput>>;
  OR?: InputMaybe<Array<FilterFindOneRaceInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneRaceOperatorsInput>;
  ability_bonus_options?: InputMaybe<FilterFindOneRaceAbility_Bonus_OptionsInput>;
  ability_bonuses?: InputMaybe<Array<InputMaybe<FilterFindOneRaceAbility_BonusesInput>>>;
  age?: InputMaybe<Scalars['String']>;
  alignment?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  language_desc?: InputMaybe<Scalars['String']>;
  language_options?: InputMaybe<FilterFindOneRaceLanguage_OptionsInput>;
  languages?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  size_description?: InputMaybe<Scalars['String']>;
  speed?: InputMaybe<Scalars['Float']>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  starting_proficiency_options?: InputMaybe<FilterFindOneRaceStarting_Proficiency_OptionsInput>;
  subraces?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  traits?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceLanguage_DescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRaceOperatorsInput = {
  _id?: InputMaybe<FilterFindOneRace_IdOperatorsInput>;
  age?: InputMaybe<FilterFindOneRaceAgeOperatorsInput>;
  alignment?: InputMaybe<FilterFindOneRaceAlignmentOperatorsInput>;
  index?: InputMaybe<FilterFindOneRaceIndexOperatorsInput>;
  language_desc?: InputMaybe<FilterFindOneRaceLanguage_DescOperatorsInput>;
  name?: InputMaybe<FilterFindOneRaceNameOperatorsInput>;
  size?: InputMaybe<FilterFindOneRaceSizeOperatorsInput>;
  size_description?: InputMaybe<FilterFindOneRaceSize_DescriptionOperatorsInput>;
  speed?: InputMaybe<FilterFindOneRaceSpeedOperatorsInput>;
  url?: InputMaybe<FilterFindOneRaceUrlOperatorsInput>;
};

export type FilterFindOneRaceSizeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceSize_DescriptionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceSpeedOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRace_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleInput = {
  AND?: InputMaybe<Array<FilterFindOneRuleInput>>;
  OR?: InputMaybe<Array<FilterFindOneRuleInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneRuleOperatorsInput>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  subsections?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRuleNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRuleOperatorsInput = {
  _id?: InputMaybe<FilterFindOneRule_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneRuleDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneRuleIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneRuleNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneRuleUrlOperatorsInput>;
};

export type FilterFindOneRuleSectionDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleSectionIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleSectionInput = {
  AND?: InputMaybe<Array<FilterFindOneRuleSectionInput>>;
  OR?: InputMaybe<Array<FilterFindOneRuleSectionInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneRuleSectionOperatorsInput>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRuleSectionNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRuleSectionOperatorsInput = {
  _id?: InputMaybe<FilterFindOneRuleSection_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneRuleSectionDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneRuleSectionIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneRuleSectionNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneRuleSectionUrlOperatorsInput>;
};

export type FilterFindOneRuleSectionUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleSection_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRule_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillInput = {
  AND?: InputMaybe<Array<FilterFindOneSkillInput>>;
  OR?: InputMaybe<Array<FilterFindOneSkillInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneSkillOperatorsInput>;
  ability_score?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSkillNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSkillOperatorsInput = {
  _id?: InputMaybe<FilterFindOneSkill_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneSkillDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneSkillIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneSkillNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneSkillUrlOperatorsInput>;
};

export type FilterFindOneSkillUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkill_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellArea_Of_EffectInput = {
  size?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpellAttack_TypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellCasting_TimeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellComponentsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellConcentrationOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindOneSpellDamageInput = {
  damage_at_character_level?: InputMaybe<Scalars['JSON']>;
  damage_at_slot_level?: InputMaybe<Scalars['JSON']>;
  damage_type?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneSpellDcInput = {
  dc_success?: InputMaybe<Scalars['String']>;
  dc_type?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  desc?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpellDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellDurationOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellHigher_LevelOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellInput = {
  AND?: InputMaybe<Array<FilterFindOneSpellInput>>;
  OR?: InputMaybe<Array<FilterFindOneSpellInput>>;
  _id?: InputMaybe<FilterFindOneSpell_IdInput>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneSpellOperatorsInput>;
  area_of_effect?: InputMaybe<FilterFindOneSpellArea_Of_EffectInput>;
  attack_type?: InputMaybe<Scalars['String']>;
  casting_time?: InputMaybe<Scalars['String']>;
  classes?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  components?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  concentration?: InputMaybe<Scalars['Boolean']>;
  damage?: InputMaybe<FilterFindOneSpellDamageInput>;
  dc?: InputMaybe<FilterFindOneSpellDcInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  duration?: InputMaybe<Scalars['String']>;
  heal_at_slot_level?: InputMaybe<Scalars['JSON']>;
  higher_level?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  material?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  range?: InputMaybe<Scalars['String']>;
  ritual?: InputMaybe<Scalars['Boolean']>;
  school?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  subclasses?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpellMaterialOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSpellOperatorsInput = {
  _id?: InputMaybe<FilterFindOneSpell_IdOperatorsInput>;
  attack_type?: InputMaybe<FilterFindOneSpellAttack_TypeOperatorsInput>;
  casting_time?: InputMaybe<FilterFindOneSpellCasting_TimeOperatorsInput>;
  components?: InputMaybe<FilterFindOneSpellComponentsOperatorsInput>;
  concentration?: InputMaybe<FilterFindOneSpellConcentrationOperatorsInput>;
  desc?: InputMaybe<FilterFindOneSpellDescOperatorsInput>;
  duration?: InputMaybe<FilterFindOneSpellDurationOperatorsInput>;
  higher_level?: InputMaybe<FilterFindOneSpellHigher_LevelOperatorsInput>;
  index?: InputMaybe<FilterFindOneSpellIndexOperatorsInput>;
  material?: InputMaybe<FilterFindOneSpellMaterialOperatorsInput>;
  name?: InputMaybe<FilterFindOneSpellNameOperatorsInput>;
  range?: InputMaybe<FilterFindOneSpellRangeOperatorsInput>;
  ritual?: InputMaybe<FilterFindOneSpellRitualOperatorsInput>;
  url?: InputMaybe<FilterFindOneSpellUrlOperatorsInput>;
};

export type FilterFindOneSpellRangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellRitualOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindOneSpellUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpell_IdInput = {
  select?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpell_IdOperatorsInput = {
  type?: InputMaybe<FilterFindOneSpell_IdTypeOperatorsInput>;
};

export type FilterFindOneSpell_IdTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassInput = {
  AND?: InputMaybe<Array<FilterFindOneSubclassInput>>;
  OR?: InputMaybe<Array<FilterFindOneSubclassInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneSubclassOperatorsInput>;
  class?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  spells?: InputMaybe<Array<InputMaybe<FilterFindOneSubclassSpellsInput>>>;
  subclass_flavor?: InputMaybe<Scalars['String']>;
  subclass_levels?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubclassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSubclassOperatorsInput = {
  _id?: InputMaybe<FilterFindOneSubclass_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneSubclassDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneSubclassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneSubclassNameOperatorsInput>;
  subclass_flavor?: InputMaybe<FilterFindOneSubclassSubclass_FlavorOperatorsInput>;
  subclass_levels?: InputMaybe<FilterFindOneSubclassSubclass_LevelsOperatorsInput>;
  url?: InputMaybe<FilterFindOneSubclassUrlOperatorsInput>;
};

export type FilterFindOneSubclassSpellsInput = {
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindOneSubclassSpellsPrerequisitesInput>>>;
  spell?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneSubclassSpellsPrerequisitesInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubclassSubclass_FlavorOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassSubclass_LevelsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclass_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceAbility_BonusesInput = {
  ability_score?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneSubraceDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceInput = {
  AND?: InputMaybe<Array<FilterFindOneSubraceInput>>;
  OR?: InputMaybe<Array<FilterFindOneSubraceInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneSubraceOperatorsInput>;
  ability_bonuses?: InputMaybe<Array<InputMaybe<FilterFindOneSubraceAbility_BonusesInput>>>;
  desc?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['String']>;
  language_options?: InputMaybe<FilterFindOneSubraceLanguage_OptionsInput>;
  name?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  racial_traits?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubraceLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubraceNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSubraceOperatorsInput = {
  _id?: InputMaybe<FilterFindOneSubrace_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneSubraceDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneSubraceIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneSubraceNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneSubraceUrlOperatorsInput>;
};

export type FilterFindOneSubraceUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubrace_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitInput = {
  AND?: InputMaybe<Array<FilterFindOneTraitInput>>;
  OR?: InputMaybe<Array<FilterFindOneTraitInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneTraitOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneTraitProficienciesInput>>>;
  proficiency_choices?: InputMaybe<FilterFindOneTraitProficiency_ChoicesInput>;
  races?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  subraces?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  trait_specific?: InputMaybe<FilterFindOneTraitTrait_SpecificInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTraitOperatorsInput = {
  _id?: InputMaybe<FilterFindOneTrait_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneTraitDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneTraitIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneTraitNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneTraitUrlOperatorsInput>;
};

export type FilterFindOneTraitProficienciesInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitProficiency_ChoicesInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDamageInput = {
  damage_at_character_level?: InputMaybe<Scalars['JSON']>;
  damage_type?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcInput = {
  dc_type?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  success_type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponInput = {
  damage?: InputMaybe<Array<InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDamageInput>>>;
  dc?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageInput = {
  times?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificInput = {
  breath_weapon?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponInput>;
  damage_type?: InputMaybe<FilterFindOneAbilityScoreSkillsInput>;
  spell_options?: InputMaybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput>;
  subtrait_options?: InputMaybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<AbilityScoreSkillsInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTrait_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneWeaponPropertyDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneWeaponPropertyIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneWeaponPropertyInput = {
  AND?: InputMaybe<Array<FilterFindOneWeaponPropertyInput>>;
  OR?: InputMaybe<Array<FilterFindOneWeaponPropertyInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneWeaponPropertyOperatorsInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneWeaponPropertyNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneWeaponPropertyOperatorsInput = {
  _id?: InputMaybe<FilterFindOneWeaponProperty_IdOperatorsInput>;
  desc?: InputMaybe<FilterFindOneWeaponPropertyDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneWeaponPropertyIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneWeaponPropertyNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneWeaponPropertyUrlOperatorsInput>;
};

export type FilterFindOneWeaponPropertyUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneWeaponProperty_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type Language = {
  __typename?: 'Language';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typical_speakers?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type Level = {
  __typename?: 'Level';
  _id: Scalars['String'];
  ability_score_bonuses?: Maybe<Scalars['Float']>;
  class?: Maybe<AbilityScoreSkills>;
  class_specific?: Maybe<LevelClass_Specific>;
  features: Array<Feature>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  prof_bonus?: Maybe<Scalars['Float']>;
  spellcasting?: Maybe<LevelSpellcasting>;
  subclass?: Maybe<AbilityScoreSkills>;
  subclass_specific?: Maybe<LevelSubclass_Specific>;
  url?: Maybe<Scalars['String']>;
};


export type LevelFeaturesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyFeatureInput>;
};

export type LevelClass_Specific = {
  __typename?: 'LevelClass_specific';
  action_surges?: Maybe<Scalars['Float']>;
  arcane_recovery_levels?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
  bardic_inspiration_die?: Maybe<Scalars['Float']>;
  brutal_critical_dice?: Maybe<Scalars['Float']>;
  channel_divinity_charges?: Maybe<Scalars['Float']>;
  creating_spell_slots?: Maybe<Array<Maybe<LevelClass_SpecificCreating_Spell_Slots>>>;
  destroy_undead_cr?: Maybe<Scalars['Float']>;
  extra_attacks?: Maybe<Scalars['Float']>;
  favored_enemies?: Maybe<Scalars['Float']>;
  favored_terrain?: Maybe<Scalars['Float']>;
  indomitable_uses?: Maybe<Scalars['Float']>;
  invocations_known?: Maybe<Scalars['Float']>;
  ki_points?: Maybe<Scalars['Float']>;
  magical_secrets_max_5?: Maybe<Scalars['Float']>;
  magical_secrets_max_7?: Maybe<Scalars['Float']>;
  magical_secrets_max_9?: Maybe<Scalars['Float']>;
  martial_arts?: Maybe<LevelClass_SpecificMartial_Arts>;
  metamagic_known?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_6?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_7?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_8?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_9?: Maybe<Scalars['Float']>;
  rage_count?: Maybe<Scalars['Float']>;
  rage_damage_bonus?: Maybe<Scalars['Float']>;
  sneak_attack?: Maybe<LevelClass_SpecificSneak_Attack>;
  song_of_rest_die?: Maybe<Scalars['Float']>;
  sorcery_points?: Maybe<Scalars['Float']>;
  unarmored_movement?: Maybe<Scalars['Float']>;
  wild_shape_fly?: Maybe<Scalars['Boolean']>;
  wild_shape_max_cr?: Maybe<Scalars['Float']>;
  wild_shape_swim?: Maybe<Scalars['Boolean']>;
};

export type LevelClass_SpecificCreating_Spell_Slots = {
  __typename?: 'LevelClass_specificCreating_spell_slots';
  sorcery_point_cost?: Maybe<Scalars['Float']>;
  spell_slot_level?: Maybe<Scalars['Float']>;
};

export type LevelClass_SpecificMartial_Arts = {
  __typename?: 'LevelClass_specificMartial_arts';
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type LevelClass_SpecificSneak_Attack = {
  __typename?: 'LevelClass_specificSneak_attack';
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type LevelSpellcasting = {
  __typename?: 'LevelSpellcasting';
  cantrips_known?: Maybe<Scalars['Float']>;
  spell_slots_level_1?: Maybe<Scalars['Float']>;
  spell_slots_level_2?: Maybe<Scalars['Float']>;
  spell_slots_level_3?: Maybe<Scalars['Float']>;
  spell_slots_level_4?: Maybe<Scalars['Float']>;
  spell_slots_level_5?: Maybe<Scalars['Float']>;
  spell_slots_level_6?: Maybe<Scalars['Float']>;
  spell_slots_level_7?: Maybe<Scalars['Float']>;
  spell_slots_level_8?: Maybe<Scalars['Float']>;
  spell_slots_level_9?: Maybe<Scalars['Float']>;
  spells_known?: Maybe<Scalars['Float']>;
};

export type LevelSubclass_Specific = {
  __typename?: 'LevelSubclass_specific';
  additional_magical_secrets_max_lvl?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
};

export type MagicItem = {
  __typename?: 'MagicItem';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<AbilityScoreSkills>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MagicSchool = {
  __typename?: 'MagicSchool';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Monster = {
  __typename?: 'Monster';
  _id: Scalars['String'];
  actions?: Maybe<Array<Maybe<MonsterActions>>>;
  alignment?: Maybe<Scalars['String']>;
  armor_class?: Maybe<Scalars['Float']>;
  challenge_rating?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  condition_immunities?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  constitution?: Maybe<Scalars['Float']>;
  damage_immunities?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  dexterity?: Maybe<Scalars['Float']>;
  forms?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  hit_dice?: Maybe<Scalars['String']>;
  hit_points?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['Float']>;
  languages?: Maybe<Scalars['String']>;
  legendary_actions?: Maybe<Array<Maybe<MonsterLegendary_Actions>>>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<MonsterProficiencies>>>;
  reactions?: Maybe<Array<Maybe<MonsterReactions>>>;
  senses?: Maybe<MonsterSenses>;
  size?: Maybe<Scalars['String']>;
  special_abilities?: Maybe<Array<Maybe<MonsterSpecial_Abilities>>>;
  speed?: Maybe<MonsterSpeed>;
  strength?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wisdom?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

export type MonsterActions = {
  __typename?: 'MonsterActions';
  attack_bonus?: Maybe<Scalars['Float']>;
  attack_options?: Maybe<MonsterActionsAttack_Options>;
  attacks?: Maybe<Array<Maybe<MonsterActionsAttack_OptionsFrom>>>;
  damage?: Maybe<Array<Maybe<MonsterActionsDamage>>>;
  dc?: Maybe<MonsterActionsDc>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<MonsterActionsOptions>;
  usage?: Maybe<MonsterActionsUsage>;
};

export type MonsterActionsAttack_Options = {
  __typename?: 'MonsterActionsAttack_options';
  choose: Scalars['Float'];
  from?: Maybe<Array<Maybe<MonsterActionsAttack_OptionsFrom>>>;
  type: Scalars['String'];
};

export type MonsterActionsAttack_OptionsFrom = {
  __typename?: 'MonsterActionsAttack_optionsFrom';
  damage?: Maybe<Array<Maybe<MonsterActionsDamage>>>;
  dc?: Maybe<MonsterActionsDc>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterActionsDamage = {
  __typename?: 'MonsterActionsDamage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type MonsterActionsDamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<AbilityScoreSkillsInput>;
};

export type MonsterActionsDc = {
  __typename?: 'MonsterActionsDc';
  dc_type?: Maybe<AbilityScoreSkills>;
  dc_value?: Maybe<Scalars['Float']>;
  success_type?: Maybe<Scalars['String']>;
};

export type MonsterActionsDcInput = {
  dc_type?: InputMaybe<AbilityScoreSkillsInput>;
  dc_value?: InputMaybe<Scalars['Float']>;
  success_type?: InputMaybe<Scalars['String']>;
};

export type MonsterActionsOptions = {
  __typename?: 'MonsterActionsOptions';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<MonsterActionsOptionsFrom>>>;
};

export type MonsterActionsOptionsFrom = {
  __typename?: 'MonsterActionsOptionsFrom';
  count?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type MonsterActionsUsage = {
  __typename?: 'MonsterActionsUsage';
  dice?: Maybe<Scalars['String']>;
  min_value?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type MonsterLegendary_Actions = {
  __typename?: 'MonsterLegendary_actions';
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<MonsterActionsDamage>>>;
  dc?: Maybe<MonsterActionsDc>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterProficiencies = {
  __typename?: 'MonsterProficiencies';
  proficiency?: Maybe<AbilityScoreSkills>;
  value?: Maybe<Scalars['Float']>;
};

export type MonsterReactions = {
  __typename?: 'MonsterReactions';
  dc?: Maybe<MonsterActionsDc>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterSenses = {
  __typename?: 'MonsterSenses';
  blindsight?: Maybe<Scalars['String']>;
  darkvision?: Maybe<Scalars['String']>;
  passive_perception?: Maybe<Scalars['Float']>;
  tremorsense?: Maybe<Scalars['String']>;
  truesight?: Maybe<Scalars['String']>;
};

export type MonsterSpecial_Abilities = {
  __typename?: 'MonsterSpecial_abilities';
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<MonsterActionsDamage>>>;
  dc?: Maybe<MonsterActionsDc>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spellcasting?: Maybe<MonsterSpecial_AbilitiesSpellcasting>;
  usage?: Maybe<MonsterSpecial_AbilitiesSpellcastingSpellsUsage>;
};

export type MonsterSpecial_AbilitiesSpellcasting = {
  __typename?: 'MonsterSpecial_abilitiesSpellcasting';
  ability?: Maybe<AbilityScoreSkills>;
  components_required?: Maybe<Array<Maybe<Scalars['String']>>>;
  dc?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  modifier?: Maybe<Scalars['Float']>;
  school?: Maybe<Scalars['String']>;
  slots?: Maybe<Scalars['JSON']>;
  spells?: Maybe<Array<Maybe<MonsterSpecial_AbilitiesSpellcastingSpells>>>;
};

export type MonsterSpecial_AbilitiesSpellcastingSpells = {
  __typename?: 'MonsterSpecial_abilitiesSpellcastingSpells';
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  usage?: Maybe<MonsterSpecial_AbilitiesSpellcastingSpellsUsage>;
};

export type MonsterSpecial_AbilitiesSpellcastingSpellsUsage = {
  __typename?: 'MonsterSpecial_abilitiesSpellcastingSpellsUsage';
  rest_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  times?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
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

export type Proficiency = {
  __typename?: 'Proficiency';
  _id: Scalars['String'];
  classes?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  reference?: Maybe<ProficiencyReference>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProficiencyReference = {
  __typename?: 'ProficiencyReference';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  abilityScore?: Maybe<AbilityScore>;
  abilityScores: Array<AbilityScore>;
  alignment?: Maybe<Alignment>;
  alignments: Array<Alignment>;
  background?: Maybe<Background>;
  backgrounds: Array<Background>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  condition?: Maybe<Condition>;
  conditions: Array<Condition>;
  damageType?: Maybe<DamageType>;
  damageTypes: Array<DamageType>;
  equipment?: Maybe<Equipment>;
  equipmentCategories: Array<EquipmentCategory>;
  equipmentCategory?: Maybe<EquipmentCategory>;
  equipments: Array<Equipment>;
  feat?: Maybe<Feat>;
  feats: Array<Feat>;
  feature?: Maybe<Feature>;
  features: Array<Feature>;
  language?: Maybe<Language>;
  languages: Array<Language>;
  level?: Maybe<Level>;
  levels: Array<Level>;
  magicItem?: Maybe<MagicItem>;
  magicItems: Array<MagicItem>;
  magicSchool?: Maybe<MagicSchool>;
  magicSchools: Array<MagicSchool>;
  monster?: Maybe<Monster>;
  monsters: Array<Monster>;
  proficiencies: Array<Proficiency>;
  proficiency?: Maybe<Proficiency>;
  race?: Maybe<Race>;
  races: Array<Race>;
  rule?: Maybe<Rule>;
  ruleSection?: Maybe<RuleSection>;
  ruleSections: Array<RuleSection>;
  rules: Array<Rule>;
  skill?: Maybe<Skill>;
  skills: Array<Skill>;
  spell?: Maybe<Spell>;
  spells: Array<Spell>;
  subclass?: Maybe<Subclass>;
  subclasses: Array<Subclass>;
  subrace?: Maybe<Subrace>;
  subraces: Array<Subrace>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  weaponProperties: Array<WeaponProperty>;
  weaponProperty?: Maybe<WeaponProperty>;
};


export type QueryAbilityScoreArgs = {
  filter?: InputMaybe<FilterFindOneAbilityScoreInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneAbilityScoreInput>;
};


export type QueryAbilityScoresArgs = {
  filter?: InputMaybe<FilterFindManyAbilityScoreInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyAbilityScoreInput>;
};


export type QueryAlignmentArgs = {
  filter?: InputMaybe<FilterFindOneAlignmentInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneAlignmentInput>;
};


export type QueryAlignmentsArgs = {
  filter?: InputMaybe<FilterFindManyAlignmentInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyAlignmentInput>;
};


export type QueryBackgroundArgs = {
  filter?: InputMaybe<FilterFindOneBackgroundInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneBackgroundInput>;
};


export type QueryBackgroundsArgs = {
  filter?: InputMaybe<FilterFindManyBackgroundInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyBackgroundInput>;
};


export type QueryClassArgs = {
  filter?: InputMaybe<FilterFindOneClassInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneClassInput>;
};


export type QueryClassesArgs = {
  filter?: InputMaybe<FilterFindManyClassInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyClassInput>;
};


export type QueryConditionArgs = {
  filter?: InputMaybe<FilterFindOneConditionInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneConditionInput>;
};


export type QueryConditionsArgs = {
  filter?: InputMaybe<FilterFindManyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyConditionInput>;
};


export type QueryDamageTypeArgs = {
  filter?: InputMaybe<FilterFindOneDamageTypeInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneDamageTypeInput>;
};


export type QueryDamageTypesArgs = {
  filter?: InputMaybe<FilterFindManyDamageTypeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyDamageTypeInput>;
};


export type QueryEquipmentArgs = {
  filter?: InputMaybe<FilterFindOneEquipmentInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneEquipmentInput>;
};


export type QueryEquipmentCategoriesArgs = {
  filter?: InputMaybe<FilterFindManyEquipmentCategoryInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyEquipmentCategoryInput>;
};


export type QueryEquipmentCategoryArgs = {
  filter?: InputMaybe<FilterFindOneEquipmentCategoryInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneEquipmentCategoryInput>;
};


export type QueryEquipmentsArgs = {
  filter?: InputMaybe<FilterFindManyEquipmentInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyEquipmentInput>;
};


export type QueryFeatArgs = {
  filter?: InputMaybe<FilterFindOneFeatInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneFeatInput>;
};


export type QueryFeatsArgs = {
  filter?: InputMaybe<FilterFindManyFeatInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyFeatInput>;
};


export type QueryFeatureArgs = {
  filter?: InputMaybe<FilterFindOneFeatureInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneFeatureInput>;
};


export type QueryFeaturesArgs = {
  filter?: InputMaybe<FilterFindManyFeatureInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyFeatureInput>;
};


export type QueryLanguageArgs = {
  filter?: InputMaybe<FilterFindOneLanguageInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneLanguageInput>;
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<FilterFindManyLanguageInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyLanguageInput>;
};


export type QueryLevelArgs = {
  filter?: InputMaybe<FilterFindOneLevelInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneLevelInput>;
};


export type QueryLevelsArgs = {
  filter?: InputMaybe<FilterFindManyLevelInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyLevelInput>;
};


export type QueryMagicItemArgs = {
  filter?: InputMaybe<FilterFindOneMagicItemInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneMagicItemInput>;
};


export type QueryMagicItemsArgs = {
  filter?: InputMaybe<FilterFindManyMagicItemInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyMagicItemInput>;
};


export type QueryMagicSchoolArgs = {
  filter?: InputMaybe<FilterFindOneMagicSchoolInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneMagicSchoolInput>;
};


export type QueryMagicSchoolsArgs = {
  filter?: InputMaybe<FilterFindManyMagicSchoolInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyMagicSchoolInput>;
};


export type QueryMonsterArgs = {
  filter?: InputMaybe<FilterFindOneMonsterInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneMonsterInput>;
};


export type QueryMonstersArgs = {
  filter?: InputMaybe<FilterFindManyMonsterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyMonsterInput>;
};


export type QueryProficienciesArgs = {
  filter?: InputMaybe<FilterFindManyProficiencyInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyProficiencyInput>;
};


export type QueryProficiencyArgs = {
  filter?: InputMaybe<FilterFindOneProficiencyInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneProficiencyInput>;
};


export type QueryRaceArgs = {
  filter?: InputMaybe<FilterFindOneRaceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneRaceInput>;
};


export type QueryRacesArgs = {
  filter?: InputMaybe<FilterFindManyRaceInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyRaceInput>;
};


export type QueryRuleArgs = {
  filter?: InputMaybe<FilterFindOneRuleInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneRuleInput>;
};


export type QueryRuleSectionArgs = {
  filter?: InputMaybe<FilterFindOneRuleSectionInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneRuleSectionInput>;
};


export type QueryRuleSectionsArgs = {
  filter?: InputMaybe<FilterFindManyRuleSectionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyRuleSectionInput>;
};


export type QueryRulesArgs = {
  filter?: InputMaybe<FilterFindManyRuleInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyRuleInput>;
};


export type QuerySkillArgs = {
  filter?: InputMaybe<FilterFindOneSkillInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneSkillInput>;
};


export type QuerySkillsArgs = {
  filter?: InputMaybe<FilterFindManySkillInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManySkillInput>;
};


export type QuerySpellArgs = {
  filter?: InputMaybe<FilterFindOneSpellInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneSpellInput>;
};


export type QuerySpellsArgs = {
  filter?: InputMaybe<FilterFindManySpellInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManySpellInput>;
};


export type QuerySubclassArgs = {
  filter?: InputMaybe<FilterFindOneSubclassInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneSubclassInput>;
};


export type QuerySubclassesArgs = {
  filter?: InputMaybe<FilterFindManySubclassInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManySubclassInput>;
};


export type QuerySubraceArgs = {
  filter?: InputMaybe<FilterFindOneSubraceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneSubraceInput>;
};


export type QuerySubracesArgs = {
  filter?: InputMaybe<FilterFindManySubraceInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManySubraceInput>;
};


export type QueryTraitArgs = {
  filter?: InputMaybe<FilterFindOneTraitInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneTraitInput>;
};


export type QueryTraitsArgs = {
  filter?: InputMaybe<FilterFindManyTraitInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyTraitInput>;
};


export type QueryWeaponPropertiesArgs = {
  filter?: InputMaybe<FilterFindManyWeaponPropertyInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyWeaponPropertyInput>;
};


export type QueryWeaponPropertyArgs = {
  filter?: InputMaybe<FilterFindOneWeaponPropertyInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneWeaponPropertyInput>;
};

export type Race = {
  __typename?: 'Race';
  _id: Scalars['String'];
  ability_bonus_options?: Maybe<RaceAbility_Bonus_Options>;
  ability_bonuses?: Maybe<Array<Maybe<RaceAbility_Bonuses>>>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_desc?: Maybe<Scalars['String']>;
  language_options?: Maybe<RaceLanguage_Options>;
  languages?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_description?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  starting_proficiencies?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  starting_proficiency_options?: Maybe<RaceStarting_Proficiency_Options>;
  subraces?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  traits: Array<Trait>;
  url?: Maybe<Scalars['String']>;
};


export type RaceTraitsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyTraitInput>;
};

export type RaceAbility_Bonus_Options = {
  __typename?: 'RaceAbility_bonus_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceAbility_Bonus_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceAbility_Bonus_OptionsFrom = {
  __typename?: 'RaceAbility_bonus_optionsFrom';
  ability_score?: Maybe<AbilityScoreSkills>;
  bonus?: Maybe<Scalars['Float']>;
};

export type RaceAbility_Bonuses = {
  __typename?: 'RaceAbility_bonuses';
  ability_score?: Maybe<AbilityScoreSkills>;
  bonus?: Maybe<Scalars['Float']>;
};

export type RaceLanguage_Options = {
  __typename?: 'RaceLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceStarting_Proficiency_Options = {
  __typename?: 'RaceStarting_proficiency_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars['String']>;
};

export type Rule = {
  __typename?: 'Rule';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subsections: Array<RuleSection>;
  url?: Maybe<Scalars['String']>;
};


export type RuleSubsectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyRuleSectionInput>;
};

export type RuleSection = {
  __typename?: 'RuleSection';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Skill = {
  __typename?: 'Skill';
  _id: Scalars['String'];
  ability_score?: Maybe<AbilityScoreSkills>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum SortFindManyAbilityScoreInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyAlignmentInput {
  AbbreviationAsc = 'ABBREVIATION_ASC',
  AbbreviationDesc = 'ABBREVIATION_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyBackgroundInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyClassInput {
  ClassLevelsAsc = 'CLASS_LEVELS_ASC',
  ClassLevelsDesc = 'CLASS_LEVELS_DESC',
  HitDieAsc = 'HIT_DIE_ASC',
  HitDieDesc = 'HIT_DIE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SpellsAsc = 'SPELLS_ASC',
  SpellsDesc = 'SPELLS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyConditionInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyDamageTypeInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyEquipmentCategoryInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyEquipmentInput {
  ArmorCategoryAsc = 'ARMOR_CATEGORY_ASC',
  ArmorCategoryDesc = 'ARMOR_CATEGORY_DESC',
  CapacityAsc = 'CAPACITY_ASC',
  CapacityDesc = 'CAPACITY_DESC',
  CategoryRangeAsc = 'CATEGORY_RANGE_ASC',
  CategoryRangeDesc = 'CATEGORY_RANGE_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  SpecialAsc = 'SPECIAL_ASC',
  SpecialDesc = 'SPECIAL_DESC',
  StealthDisadvantageAsc = 'STEALTH_DISADVANTAGE_ASC',
  StealthDisadvantageDesc = 'STEALTH_DISADVANTAGE_DESC',
  StrMinimumAsc = 'STR_MINIMUM_ASC',
  StrMinimumDesc = 'STR_MINIMUM_DESC',
  ToolCategoryAsc = 'TOOL_CATEGORY_ASC',
  ToolCategoryDesc = 'TOOL_CATEGORY_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  VehicleCategoryAsc = 'VEHICLE_CATEGORY_ASC',
  VehicleCategoryDesc = 'VEHICLE_CATEGORY_DESC',
  WeaponCategoryAsc = 'WEAPON_CATEGORY_ASC',
  WeaponCategoryDesc = 'WEAPON_CATEGORY_DESC',
  WeaponRangeAsc = 'WEAPON_RANGE_ASC',
  WeaponRangeDesc = 'WEAPON_RANGE_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyFeatInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyFeatureInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyLanguageInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ScriptAsc = 'SCRIPT_ASC',
  ScriptDesc = 'SCRIPT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  TypicalSpeakersAsc = 'TYPICAL_SPEAKERS_ASC',
  TypicalSpeakersDesc = 'TYPICAL_SPEAKERS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyLevelInput {
  AbilityScoreBonusesAsc = 'ABILITY_SCORE_BONUSES_ASC',
  AbilityScoreBonusesDesc = 'ABILITY_SCORE_BONUSES_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  ProfBonusAsc = 'PROF_BONUS_ASC',
  ProfBonusDesc = 'PROF_BONUS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMagicItemInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMagicSchoolInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMonsterInput {
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  ArmorClassAsc = 'ARMOR_CLASS_ASC',
  ArmorClassDesc = 'ARMOR_CLASS_DESC',
  ChallengeRatingAsc = 'CHALLENGE_RATING_ASC',
  ChallengeRatingDesc = 'CHALLENGE_RATING_DESC',
  CharismaAsc = 'CHARISMA_ASC',
  CharismaDesc = 'CHARISMA_DESC',
  ConstitutionAsc = 'CONSTITUTION_ASC',
  ConstitutionDesc = 'CONSTITUTION_DESC',
  DamageImmunitiesAsc = 'DAMAGE_IMMUNITIES_ASC',
  DamageImmunitiesDesc = 'DAMAGE_IMMUNITIES_DESC',
  DamageResistancesAsc = 'DAMAGE_RESISTANCES_ASC',
  DamageResistancesDesc = 'DAMAGE_RESISTANCES_DESC',
  DamageVulnerabilitiesAsc = 'DAMAGE_VULNERABILITIES_ASC',
  DamageVulnerabilitiesDesc = 'DAMAGE_VULNERABILITIES_DESC',
  DexterityAsc = 'DEXTERITY_ASC',
  DexterityDesc = 'DEXTERITY_DESC',
  HitDiceAsc = 'HIT_DICE_ASC',
  HitDiceDesc = 'HIT_DICE_DESC',
  HitPointsAsc = 'HIT_POINTS_ASC',
  HitPointsDesc = 'HIT_POINTS_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IntelligenceAsc = 'INTELLIGENCE_ASC',
  IntelligenceDesc = 'INTELLIGENCE_DESC',
  LanguagesAsc = 'LANGUAGES_ASC',
  LanguagesDesc = 'LANGUAGES_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  StrengthAsc = 'STRENGTH_ASC',
  StrengthDesc = 'STRENGTH_DESC',
  SubtypeAsc = 'SUBTYPE_ASC',
  SubtypeDesc = 'SUBTYPE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WisdomAsc = 'WISDOM_ASC',
  WisdomDesc = 'WISDOM_DESC',
  XpAsc = 'XP_ASC',
  XpDesc = 'XP_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyProficiencyInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyRaceInput {
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageDescAsc = 'LANGUAGE_DESC_ASC',
  LanguageDescDesc = 'LANGUAGE_DESC_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SizeDescriptionAsc = 'SIZE_DESCRIPTION_ASC',
  SizeDescriptionDesc = 'SIZE_DESCRIPTION_DESC',
  SpeedAsc = 'SPEED_ASC',
  SpeedDesc = 'SPEED_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyRuleInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyRuleSectionInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySkillInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySpellInput {
  AttackTypeAsc = 'ATTACK_TYPE_ASC',
  AttackTypeDesc = 'ATTACK_TYPE_DESC',
  CastingTimeAsc = 'CASTING_TIME_ASC',
  CastingTimeDesc = 'CASTING_TIME_DESC',
  ComponentsAsc = 'COMPONENTS_ASC',
  ComponentsDesc = 'COMPONENTS_DESC',
  ConcentrationAsc = 'CONCENTRATION_ASC',
  ConcentrationDesc = 'CONCENTRATION_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  HigherLevelAsc = 'HIGHER_LEVEL_ASC',
  HigherLevelDesc = 'HIGHER_LEVEL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  MaterialAsc = 'MATERIAL_ASC',
  MaterialDesc = 'MATERIAL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RangeAsc = 'RANGE_ASC',
  RangeDesc = 'RANGE_DESC',
  RitualAsc = 'RITUAL_ASC',
  RitualDesc = 'RITUAL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdTypeAsc = '_ID__TYPE_ASC',
  IdTypeDesc = '_ID__TYPE_DESC'
}

export enum SortFindManySubclassInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SubclassFlavorAsc = 'SUBCLASS_FLAVOR_ASC',
  SubclassFlavorDesc = 'SUBCLASS_FLAVOR_DESC',
  SubclassLevelsAsc = 'SUBCLASS_LEVELS_ASC',
  SubclassLevelsDesc = 'SUBCLASS_LEVELS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySubraceInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyTraitInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyWeaponPropertyInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneAbilityScoreInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneAlignmentInput {
  AbbreviationAsc = 'ABBREVIATION_ASC',
  AbbreviationDesc = 'ABBREVIATION_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneBackgroundInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneClassInput {
  ClassLevelsAsc = 'CLASS_LEVELS_ASC',
  ClassLevelsDesc = 'CLASS_LEVELS_DESC',
  HitDieAsc = 'HIT_DIE_ASC',
  HitDieDesc = 'HIT_DIE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SpellsAsc = 'SPELLS_ASC',
  SpellsDesc = 'SPELLS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneConditionInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneDamageTypeInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneEquipmentCategoryInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneEquipmentInput {
  ArmorCategoryAsc = 'ARMOR_CATEGORY_ASC',
  ArmorCategoryDesc = 'ARMOR_CATEGORY_DESC',
  CapacityAsc = 'CAPACITY_ASC',
  CapacityDesc = 'CAPACITY_DESC',
  CategoryRangeAsc = 'CATEGORY_RANGE_ASC',
  CategoryRangeDesc = 'CATEGORY_RANGE_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  SpecialAsc = 'SPECIAL_ASC',
  SpecialDesc = 'SPECIAL_DESC',
  StealthDisadvantageAsc = 'STEALTH_DISADVANTAGE_ASC',
  StealthDisadvantageDesc = 'STEALTH_DISADVANTAGE_DESC',
  StrMinimumAsc = 'STR_MINIMUM_ASC',
  StrMinimumDesc = 'STR_MINIMUM_DESC',
  ToolCategoryAsc = 'TOOL_CATEGORY_ASC',
  ToolCategoryDesc = 'TOOL_CATEGORY_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  VehicleCategoryAsc = 'VEHICLE_CATEGORY_ASC',
  VehicleCategoryDesc = 'VEHICLE_CATEGORY_DESC',
  WeaponCategoryAsc = 'WEAPON_CATEGORY_ASC',
  WeaponCategoryDesc = 'WEAPON_CATEGORY_DESC',
  WeaponRangeAsc = 'WEAPON_RANGE_ASC',
  WeaponRangeDesc = 'WEAPON_RANGE_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneFeatInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneFeatureInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneLanguageInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ScriptAsc = 'SCRIPT_ASC',
  ScriptDesc = 'SCRIPT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  TypicalSpeakersAsc = 'TYPICAL_SPEAKERS_ASC',
  TypicalSpeakersDesc = 'TYPICAL_SPEAKERS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneLevelInput {
  AbilityScoreBonusesAsc = 'ABILITY_SCORE_BONUSES_ASC',
  AbilityScoreBonusesDesc = 'ABILITY_SCORE_BONUSES_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  ProfBonusAsc = 'PROF_BONUS_ASC',
  ProfBonusDesc = 'PROF_BONUS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneMagicItemInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneMagicSchoolInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneMonsterInput {
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  ArmorClassAsc = 'ARMOR_CLASS_ASC',
  ArmorClassDesc = 'ARMOR_CLASS_DESC',
  ChallengeRatingAsc = 'CHALLENGE_RATING_ASC',
  ChallengeRatingDesc = 'CHALLENGE_RATING_DESC',
  CharismaAsc = 'CHARISMA_ASC',
  CharismaDesc = 'CHARISMA_DESC',
  ConstitutionAsc = 'CONSTITUTION_ASC',
  ConstitutionDesc = 'CONSTITUTION_DESC',
  DamageImmunitiesAsc = 'DAMAGE_IMMUNITIES_ASC',
  DamageImmunitiesDesc = 'DAMAGE_IMMUNITIES_DESC',
  DamageResistancesAsc = 'DAMAGE_RESISTANCES_ASC',
  DamageResistancesDesc = 'DAMAGE_RESISTANCES_DESC',
  DamageVulnerabilitiesAsc = 'DAMAGE_VULNERABILITIES_ASC',
  DamageVulnerabilitiesDesc = 'DAMAGE_VULNERABILITIES_DESC',
  DexterityAsc = 'DEXTERITY_ASC',
  DexterityDesc = 'DEXTERITY_DESC',
  HitDiceAsc = 'HIT_DICE_ASC',
  HitDiceDesc = 'HIT_DICE_DESC',
  HitPointsAsc = 'HIT_POINTS_ASC',
  HitPointsDesc = 'HIT_POINTS_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IntelligenceAsc = 'INTELLIGENCE_ASC',
  IntelligenceDesc = 'INTELLIGENCE_DESC',
  LanguagesAsc = 'LANGUAGES_ASC',
  LanguagesDesc = 'LANGUAGES_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  StrengthAsc = 'STRENGTH_ASC',
  StrengthDesc = 'STRENGTH_DESC',
  SubtypeAsc = 'SUBTYPE_ASC',
  SubtypeDesc = 'SUBTYPE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WisdomAsc = 'WISDOM_ASC',
  WisdomDesc = 'WISDOM_DESC',
  XpAsc = 'XP_ASC',
  XpDesc = 'XP_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneProficiencyInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneRaceInput {
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageDescAsc = 'LANGUAGE_DESC_ASC',
  LanguageDescDesc = 'LANGUAGE_DESC_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SizeDescriptionAsc = 'SIZE_DESCRIPTION_ASC',
  SizeDescriptionDesc = 'SIZE_DESCRIPTION_DESC',
  SpeedAsc = 'SPEED_ASC',
  SpeedDesc = 'SPEED_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneRuleInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneRuleSectionInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSkillInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSpellInput {
  AttackTypeAsc = 'ATTACK_TYPE_ASC',
  AttackTypeDesc = 'ATTACK_TYPE_DESC',
  CastingTimeAsc = 'CASTING_TIME_ASC',
  CastingTimeDesc = 'CASTING_TIME_DESC',
  ComponentsAsc = 'COMPONENTS_ASC',
  ComponentsDesc = 'COMPONENTS_DESC',
  ConcentrationAsc = 'CONCENTRATION_ASC',
  ConcentrationDesc = 'CONCENTRATION_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  HigherLevelAsc = 'HIGHER_LEVEL_ASC',
  HigherLevelDesc = 'HIGHER_LEVEL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  MaterialAsc = 'MATERIAL_ASC',
  MaterialDesc = 'MATERIAL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RangeAsc = 'RANGE_ASC',
  RangeDesc = 'RANGE_DESC',
  RitualAsc = 'RITUAL_ASC',
  RitualDesc = 'RITUAL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdTypeAsc = '_ID__TYPE_ASC',
  IdTypeDesc = '_ID__TYPE_DESC'
}

export enum SortFindOneSubclassInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SubclassFlavorAsc = 'SUBCLASS_FLAVOR_ASC',
  SubclassFlavorDesc = 'SUBCLASS_FLAVOR_DESC',
  SubclassLevelsAsc = 'SUBCLASS_LEVELS_ASC',
  SubclassLevelsDesc = 'SUBCLASS_LEVELS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSubraceInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneTraitInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneWeaponPropertyInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type Spell = {
  __typename?: 'Spell';
  _id: Spell_Id;
  area_of_effect?: Maybe<SpellArea_Of_Effect>;
  attack_type?: Maybe<Scalars['String']>;
  casting_time?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  components?: Maybe<Array<Maybe<Scalars['String']>>>;
  concentration?: Maybe<Scalars['Boolean']>;
  damage?: Maybe<SpellDamage>;
  dc?: Maybe<SpellDc>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['String']>;
  heal_at_slot_level?: Maybe<Scalars['JSON']>;
  higher_level?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  material?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['Boolean']>;
  school?: Maybe<MagicSchool>;
  subclasses?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars['String']>;
};


export type SpellSchoolArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneMagicSchoolInput>;
};

export type SpellArea_Of_Effect = {
  __typename?: 'SpellArea_of_effect';
  size: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
};

export type SpellDamage = {
  __typename?: 'SpellDamage';
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_at_slot_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type SpellDc = {
  __typename?: 'SpellDc';
  dc_success?: Maybe<Scalars['String']>;
  dc_type?: Maybe<AbilityScoreSkills>;
  desc?: Maybe<Scalars['String']>;
};

export type Spell_Id = {
  __typename?: 'Spell_id';
  select?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
};

export type Subclass = {
  __typename?: 'Subclass';
  _id: Scalars['String'];
  class?: Maybe<AbilityScoreSkills>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spells?: Maybe<Array<Maybe<SubclassSpells>>>;
  subclass_flavor?: Maybe<Scalars['String']>;
  subclass_levels: Array<Level>;
  url?: Maybe<Scalars['String']>;
};


export type SubclassSubclass_LevelsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyLevelInput>;
};

export type SubclassSpells = {
  __typename?: 'SubclassSpells';
  prerequisites?: Maybe<Array<Maybe<SubclassSpellsPrerequisites>>>;
  spell?: Maybe<AbilityScoreSkills>;
};

export type SubclassSpellsPrerequisites = {
  __typename?: 'SubclassSpellsPrerequisites';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Subrace = {
  __typename?: 'Subrace';
  _id: Scalars['String'];
  ability_bonuses?: Maybe<Array<Maybe<SubraceAbility_Bonuses>>>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<SubraceLanguage_Options>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<AbilityScoreSkills>;
  racial_traits: Array<Trait>;
  starting_proficiencies?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars['String']>;
};


export type SubraceRacial_TraitsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyTraitInput>;
};

export type SubraceAbility_Bonuses = {
  __typename?: 'SubraceAbility_bonuses';
  ability_score?: Maybe<AbilityScoreSkills>;
  bonus?: Maybe<Scalars['Float']>;
};

export type SubraceLanguage_Options = {
  __typename?: 'SubraceLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars['String']>;
};

export type Trait = {
  __typename?: 'Trait';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<AbilityScoreSkills>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<TraitProficiency_Choices>;
  races?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  subraces?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  trait_specific?: Maybe<TraitTrait_Specific>;
  url?: Maybe<Scalars['String']>;
};


export type TraitProficienciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyProficiencyInput>;
};

export type TraitProficiency_Choices = {
  __typename?: 'TraitProficiency_choices';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_Specific = {
  __typename?: 'TraitTrait_specific';
  breath_weapon?: Maybe<TraitTrait_SpecificBreath_Weapon>;
  damage_type?: Maybe<AbilityScoreSkills>;
  spell_options?: Maybe<TraitTrait_SpecificSubtrait_Options>;
  subtrait_options?: Maybe<TraitTrait_SpecificSubtrait_Options>;
};

export type TraitTrait_SpecificBreath_Weapon = {
  __typename?: 'TraitTrait_specificBreath_weapon';
  damage?: Maybe<Array<Maybe<TraitTrait_SpecificBreath_WeaponDamage>>>;
  dc?: Maybe<TraitTrait_SpecificBreath_WeaponDc>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  usage?: Maybe<TraitTrait_SpecificBreath_WeaponUsage>;
};

export type TraitTrait_SpecificBreath_WeaponDamage = {
  __typename?: 'TraitTrait_specificBreath_weaponDamage';
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type TraitTrait_SpecificBreath_WeaponDc = {
  __typename?: 'TraitTrait_specificBreath_weaponDc';
  dc_type?: Maybe<AbilityScoreSkills>;
  success_type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponUsage = {
  __typename?: 'TraitTrait_specificBreath_weaponUsage';
  times?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSubtrait_Options = {
  __typename?: 'TraitTrait_specificSubtrait_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars['String']>;
};

export type WeaponProperty = {
  __typename?: 'WeaponProperty';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GetEquipmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEquipmentsQuery = { __typename?: 'Query', equipments: Array<{ __typename: 'Equipment', index?: string | null, weight?: number | null, name?: string | null, quantity?: number | null, capacity?: string | null, category_range?: string | null, desc?: Array<string | null> | null, special?: Array<string | null> | null, gear_category?: { __typename?: 'AbilityScoreSkills', name?: string | null } | null, cost?: { __typename: 'EquipmentCost', quantity?: number | null, unit?: string | null } | null, damage?: { __typename?: 'EquipmentDamage', damage_dice?: string | null, damage_type?: { __typename: 'AbilityScoreSkills', name?: string | null } | null } | null }> };

export type GetMonstersListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonstersListQuery = { __typename?: 'Query', monsters: Array<{ __typename: 'Monster', url?: string | null, name?: string | null, challenge_rating?: number | null, hit_dice?: string | null, hit_points?: number | null, type?: string | null, xp?: number | null, armor_class?: number | null, charisma?: number | null, constitution?: number | null, dexterity?: number | null, strength?: number | null, wisdom?: number | null, intelligence?: number | null, damage_immunities?: Array<string | null> | null, damage_resistances?: Array<string | null> | null, speed?: { __typename?: 'MonsterSpeed', burrow?: string | null, climb?: string | null, fly?: string | null, hover?: boolean | null, swim?: string | null, walk?: string | null } | null, special_abilities?: Array<{ __typename?: 'MonsterSpecial_abilities', desc?: string | null, name?: string | null } | null> | null }> };

export type GetSpellQueryVariables = Exact<{
  filter?: InputMaybe<FilterFindOneSpellInput>;
}>;


export type GetSpellQuery = { __typename?: 'Query', spell?: { __typename?: 'Spell', index?: string | null, level: number, name?: string | null, ritual?: boolean | null, range?: string | null, higher_level?: Array<string | null> | null, heal_at_slot_level?: any | null, duration?: string | null, desc?: Array<string | null> | null, concentration?: boolean | null, components?: Array<string | null> | null, casting_time?: string | null, attack_type?: string | null, material?: string | null, school?: { __typename?: 'MagicSchool', url?: string | null, name?: string | null, index?: string | null, desc?: string | null } | null, subclasses?: Array<{ __typename?: 'AbilityScoreSkills', url?: string | null, name?: string | null, index?: string | null } | null> | null, dc?: { __typename?: 'SpellDc', desc?: string | null, dc_success?: string | null, dc_type?: { __typename?: 'AbilityScoreSkills', index?: string | null, name?: string | null, url?: string | null } | null } | null, classes?: Array<{ __typename?: 'AbilityScoreSkills', url?: string | null, name?: string | null, index?: string | null } | null> | null, area_of_effect?: { __typename?: 'SpellArea_of_effect', type?: string | null, size: number } | null, damage?: { __typename?: 'SpellDamage', damage_at_slot_level?: any | null, damage_at_character_level?: any | null, damage_type?: { __typename?: 'AbilityScoreSkills', url?: string | null, name?: string | null, index?: string | null } | null } | null } | null };

export type GetSpellsQueryVariables = Exact<{
  filter?: InputMaybe<FilterFindManySpellInput>;
}>;


export type GetSpellsQuery = { __typename?: 'Query', spells: Array<{ __typename: 'Spell', index?: string | null, level: number, name?: string | null, url?: string | null, duration?: string | null, school?: { __typename: 'MagicSchool', name?: string | null, index?: string | null } | null, classes?: Array<{ __typename: 'AbilityScoreSkills', index?: string | null, name?: string | null } | null> | null, subclasses?: Array<{ __typename?: 'AbilityScoreSkills', index?: string | null, name?: string | null } | null> | null }> };


export const GetEquipmentsDocument = gql`
    query getEquipments {
  equipments(limit: 1000) {
    __typename
    index
    weight
    name
    quantity
    capacity
    category_range
    gear_category {
      name
    }
    desc
    special
    cost {
      quantity
      unit
      __typename
    }
    damage {
      damage_dice
      damage_type {
        name
        __typename
      }
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
export const GetMonstersListDocument = gql`
    query GetMonstersList {
  monsters(limit: 1000, sort: CHALLENGE_RATING_ASC) {
    __typename
    url
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
    armor_class
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
    query getSpell($filter: FilterFindOneSpellInput) {
  spell(filter: $filter) {
    index
    level
    name
    ritual
    school {
      url
      name
      index
      desc
    }
    subclasses {
      url
      name
      index
    }
    range
    higher_level
    heal_at_slot_level
    duration
    desc
    dc {
      desc
      dc_type {
        index
        name
        url
      }
      dc_success
    }
    concentration
    components
    classes {
      url
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
        url
        name
        index
      }
      damage_at_slot_level
      damage_at_character_level
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
 *      filter: // value for 'filter'
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
    query getSpells($filter: FilterFindManySpellInput) {
  spells(filter: $filter) {
    __typename
    index
    level
    name
    url
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
 *      filter: // value for 'filter'
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