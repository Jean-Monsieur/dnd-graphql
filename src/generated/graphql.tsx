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
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
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
  bonds?: Maybe<BackgroundBonds>;
  feature?: Maybe<BackgroundFeature>;
  flaws?: Maybe<BackgroundFlaws>;
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

export type BackgroundBonds = {
  __typename?: 'BackgroundBonds';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundFeature = {
  __typename?: 'BackgroundFeature';
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type BackgroundFlaws = {
  __typename?: 'BackgroundFlaws';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundIdeals = {
  __typename?: 'BackgroundIdeals';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundIdealsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundIdealsFrom = {
  __typename?: 'BackgroundIdealsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  alignments?: Maybe<Array<Maybe<BackgroundIdealsFromAlignments>>>;
  desc?: Maybe<Scalars['String']>;
};

export type BackgroundIdealsFromAlignments = {
  __typename?: 'BackgroundIdealsFromAlignments';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BackgroundLanguage_Options = {
  __typename?: 'BackgroundLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundLanguage_OptionsFrom = {
  __typename?: 'BackgroundLanguage_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BackgroundPersonality_Traits = {
  __typename?: 'BackgroundPersonality_traits';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment = {
  __typename?: 'BackgroundStarting_equipment';
  equipment?: Maybe<BackgroundStarting_EquipmentEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type BackgroundStarting_EquipmentEquipment = {
  __typename?: 'BackgroundStarting_equipmentEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment_Options = {
  __typename?: 'BackgroundStarting_equipment_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment_OptionsFrom = {
  __typename?: 'BackgroundStarting_equipment_optionsFrom';
  equipment?: Maybe<BackgroundStarting_Equipment_OptionsFromEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type BackgroundStarting_Equipment_OptionsFromEquipment = {
  __typename?: 'BackgroundStarting_equipment_optionsFromEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  proficiency_choices?: Maybe<Array<Maybe<ClassProficiency_Choices>>>;
  saving_throws?: Maybe<Array<Maybe<ClassSaving_Throws>>>;
  spellcasting?: Maybe<ClassSpellcasting>;
  spells: Array<Spell>;
  starting_equipment?: Maybe<Array<Maybe<ClassStarting_Equipment>>>;
  starting_equipment_options?: Maybe<Array<Maybe<ClassStarting_Equipment_Options>>>;
  subclasses?: Maybe<Array<Maybe<ClassSubclasses>>>;
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
  proficiencies?: Maybe<Array<Maybe<ClassMulti_ClassingProficiencies>>>;
  proficiency_choices?: Maybe<Array<Maybe<ClassMulti_ClassingProficiency_Choices>>>;
};

export type ClassMulti_ClassingPrerequisite_Options = {
  __typename?: 'ClassMulti_classingPrerequisite_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassMulti_ClassingPrerequisite_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingPrerequisite_OptionsFrom = {
  __typename?: 'ClassMulti_classingPrerequisite_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<ClassMulti_ClassingPrerequisite_OptionsFromAbility_Score>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type ClassMulti_ClassingPrerequisite_OptionsFromAbility_Score = {
  __typename?: 'ClassMulti_classingPrerequisite_optionsFromAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingPrerequisites = {
  __typename?: 'ClassMulti_classingPrerequisites';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<ClassMulti_ClassingPrerequisitesAbility_Score>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type ClassMulti_ClassingPrerequisitesAbility_Score = {
  __typename?: 'ClassMulti_classingPrerequisitesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingProficiencies = {
  __typename?: 'ClassMulti_classingProficiencies';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingProficiency_Choices = {
  __typename?: 'ClassMulti_classingProficiency_choices';
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassMulti_ClassingProficiency_ChoicesFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingProficiency_ChoicesFrom = {
  __typename?: 'ClassMulti_classingProficiency_choicesFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassProficiency_Choices = {
  __typename?: 'ClassProficiency_choices';
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassProficiency_ChoicesFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassProficiency_ChoicesFrom = {
  __typename?: 'ClassProficiency_choicesFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassSaving_Throws = {
  __typename?: 'ClassSaving_throws';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassSpellcasting = {
  __typename?: 'ClassSpellcasting';
  info?: Maybe<Array<Maybe<ClassSpellcastingInfo>>>;
  level?: Maybe<Scalars['Float']>;
  spellcasting_ability?: Maybe<ClassSpellcastingSpellcasting_Ability>;
};

export type ClassSpellcastingInfo = {
  __typename?: 'ClassSpellcastingInfo';
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type ClassSpellcastingSpellcasting_Ability = {
  __typename?: 'ClassSpellcastingSpellcasting_ability';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment = {
  __typename?: 'ClassStarting_equipment';
  _id?: Maybe<Scalars['MongoID']>;
  equipment?: Maybe<ClassStarting_EquipmentEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ClassStarting_EquipmentEquipment = {
  __typename?: 'ClassStarting_equipmentEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment_Options = {
  __typename?: 'ClassStarting_equipment_options';
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment_OptionsFrom = {
  __typename?: 'ClassStarting_equipment_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  equipment?: Maybe<ClassStarting_Equipment_OptionsFromEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ClassStarting_Equipment_OptionsFromEquipment = {
  __typename?: 'ClassStarting_equipment_optionsFromEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassSubclasses = {
  __typename?: 'ClassSubclasses';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  equipment_category?: Maybe<EquipmentEquipment_Category>;
  gear_category?: Maybe<EquipmentGear_Category>;
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
  _id?: Maybe<Scalars['MongoID']>;
  item?: Maybe<EquipmentContentsItem>;
  quantity?: Maybe<Scalars['Float']>;
};

export type EquipmentContentsItem = {
  __typename?: 'EquipmentContentsItem';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentCost = {
  __typename?: 'EquipmentCost';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EquipmentDamage = {
  __typename?: 'EquipmentDamage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<EquipmentDamageDamage_Type>;
};

export type EquipmentDamageDamage_Type = {
  __typename?: 'EquipmentDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentEquipment_Category = {
  __typename?: 'EquipmentEquipment_category';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentGear_Category = {
  __typename?: 'EquipmentGear_category';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  damage_type?: Maybe<EquipmentTwo_Handed_DamageDamage_Type>;
};

export type EquipmentTwo_Handed_DamageDamage_Type = {
  __typename?: 'EquipmentTwo_handed_damageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FeatPrerequisitesAbility_Score>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type FeatPrerequisitesAbility_Score = {
  __typename?: 'FeatPrerequisitesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  parent?: Maybe<FeatureParent>;
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
  from?: Maybe<Array<Maybe<FeatureChoiceFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureChoiceFrom = {
  __typename?: 'FeatureChoiceFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeatureFeature_Specific = {
  __typename?: 'FeatureFeature_specific';
  expertise_options?: Maybe<FeatureFeature_SpecificExpertise_Options>;
  subfeature_options?: Maybe<FeatureFeature_SpecificSubfeature_Options>;
};

export type FeatureFeature_SpecificExpertise_Options = {
  __typename?: 'FeatureFeature_specificExpertise_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FeatureFeature_SpecificExpertise_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureFeature_SpecificExpertise_OptionsFrom = {
  __typename?: 'FeatureFeature_specificExpertise_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeatureFeature_SpecificSubfeature_Options = {
  __typename?: 'FeatureFeature_specificSubfeature_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FeatureFeature_SpecificSubfeature_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureFeature_SpecificSubfeature_OptionsFrom = {
  __typename?: 'FeatureFeature_specificSubfeature_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeatureParent = {
  __typename?: 'FeatureParent';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeaturePrerequisites = {
  __typename?: 'FeaturePrerequisites';
  _id?: Maybe<Scalars['MongoID']>;
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
  _id?: InputMaybe<Scalars['MongoID']>;
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

export type FilterFindManyBackgroundBondsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundBondsFromOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundBondsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundBondsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyBackgroundBondsChooseOperatorsInput>;
  from?: InputMaybe<FilterFindManyBackgroundBondsFromOperatorsInput>;
  type?: InputMaybe<FilterFindManyBackgroundBondsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundBondsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundFeatureDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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

export type FilterFindManyBackgroundFeatureNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundFeatureOperatorsInput = {
  desc?: InputMaybe<FilterFindManyBackgroundFeatureDescOperatorsInput>;
  name?: InputMaybe<FilterFindManyBackgroundFeatureNameOperatorsInput>;
};

export type FilterFindManyBackgroundFlawsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundFlawsFromOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundFlawsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundFlawsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyBackgroundFlawsChooseOperatorsInput>;
  from?: InputMaybe<FilterFindManyBackgroundFlawsFromOperatorsInput>;
  type?: InputMaybe<FilterFindManyBackgroundFlawsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundFlawsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundIdealsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundIdealsFromAlignmentsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  alignments?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundIdealsFromAlignmentsInput>>>;
  desc?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundIdealsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyBackgroundIdealsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyBackgroundIdealsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundIdealsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  bonds?: InputMaybe<FilterFindManyBackgroundBondsInput>;
  feature?: InputMaybe<FilterFindManyBackgroundFeatureInput>;
  flaws?: InputMaybe<FilterFindManyBackgroundFlawsInput>;
  ideals?: InputMaybe<FilterFindManyBackgroundIdealsInput>;
  index?: InputMaybe<Scalars['String']>;
  language_options?: InputMaybe<FilterFindManyBackgroundLanguage_OptionsInput>;
  name?: InputMaybe<Scalars['String']>;
  personality_traits?: InputMaybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  starting_equipment?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundStarting_EquipmentInput>>>;
  starting_equipment_options?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundStarting_Equipment_OptionsInput>>>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundStarting_ProficienciesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundLanguage_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundLanguage_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundLanguage_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundLanguage_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyBackgroundLanguage_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyBackgroundLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundLanguage_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  bonds?: InputMaybe<FilterFindManyBackgroundBondsOperatorsInput>;
  feature?: InputMaybe<FilterFindManyBackgroundFeatureOperatorsInput>;
  flaws?: InputMaybe<FilterFindManyBackgroundFlawsOperatorsInput>;
  ideals?: InputMaybe<FilterFindManyBackgroundIdealsOperatorsInput>;
  index?: InputMaybe<FilterFindManyBackgroundIndexOperatorsInput>;
  language_options?: InputMaybe<FilterFindManyBackgroundLanguage_OptionsOperatorsInput>;
  name?: InputMaybe<FilterFindManyBackgroundNameOperatorsInput>;
  personality_traits?: InputMaybe<FilterFindManyBackgroundPersonality_TraitsOperatorsInput>;
  url?: InputMaybe<FilterFindManyBackgroundUrlOperatorsInput>;
};

export type FilterFindManyBackgroundPersonality_TraitsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundPersonality_TraitsFromOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundPersonality_TraitsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundPersonality_TraitsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyBackgroundPersonality_TraitsChooseOperatorsInput>;
  from?: InputMaybe<FilterFindManyBackgroundPersonality_TraitsFromOperatorsInput>;
  type?: InputMaybe<FilterFindManyBackgroundPersonality_TraitsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundPersonality_TraitsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundStarting_EquipmentEquipmentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_EquipmentInput = {
  equipment?: InputMaybe<FilterFindManyBackgroundStarting_EquipmentEquipmentInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsFromEquipmentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: InputMaybe<FilterFindManyBackgroundStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyBackgroundStarting_Equipment_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_ProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyClassProficienciesInput>>>;
  proficiency_choices?: InputMaybe<Array<InputMaybe<FilterFindManyClassProficiency_ChoicesInput>>>;
  saving_throws?: InputMaybe<Array<InputMaybe<FilterFindManyClassSaving_ThrowsInput>>>;
  spellcasting?: InputMaybe<FilterFindManyClassSpellcastingInput>;
  spells?: InputMaybe<Scalars['String']>;
  starting_equipment?: InputMaybe<Array<InputMaybe<FilterFindManyClassStarting_EquipmentInput>>>;
  starting_equipment_options?: InputMaybe<Array<InputMaybe<FilterFindManyClassStarting_Equipment_OptionsInput>>>;
  subclasses?: InputMaybe<Array<InputMaybe<FilterFindManyClassSubclassesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingInput = {
  prerequisite_options?: InputMaybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsInput>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingPrerequisitesInput>>>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingProficienciesInput>>>;
  proficiency_choices?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingProficiency_ChoicesInput>>>;
};

export type FilterFindManyClassMulti_ClassingOperatorsInput = {
  prerequisite_options?: InputMaybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsOperatorsInput>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsFromAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsFromAbility_ScoreInput>;
  minimum_score?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsTypeOperatorsInput>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisitesAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisitesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindManyClassMulti_ClassingPrerequisitesAbility_ScoreInput>;
  minimum_score?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyClassMulti_ClassingProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingProficiency_ChoicesFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingProficiency_ChoicesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyClassMulti_ClassingProficiency_ChoicesFromInput>>>;
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
  multi_classing?: InputMaybe<FilterFindManyClassMulti_ClassingOperatorsInput>;
  name?: InputMaybe<FilterFindManyClassNameOperatorsInput>;
  spellcasting?: InputMaybe<FilterFindManyClassSpellcastingOperatorsInput>;
  spells?: InputMaybe<FilterFindManyClassSpellsOperatorsInput>;
  url?: InputMaybe<FilterFindManyClassUrlOperatorsInput>;
};

export type FilterFindManyClassProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassProficiency_ChoicesFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassProficiency_ChoicesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyClassProficiency_ChoicesFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassSaving_ThrowsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassSpellcastingInfoInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassSpellcastingInput = {
  info?: InputMaybe<Array<InputMaybe<FilterFindManyClassSpellcastingInfoInput>>>;
  level?: InputMaybe<Scalars['Float']>;
  spellcasting_ability?: InputMaybe<FilterFindManyClassSpellcastingSpellcasting_AbilityInput>;
};

export type FilterFindManyClassSpellcastingLevelOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyClassSpellcastingOperatorsInput = {
  level?: InputMaybe<FilterFindManyClassSpellcastingLevelOperatorsInput>;
  spellcasting_ability?: InputMaybe<FilterFindManyClassSpellcastingSpellcasting_AbilityOperatorsInput>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityOperatorsInput = {
  index?: InputMaybe<FilterFindManyClassSpellcastingSpellcasting_AbilityIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyClassSpellcastingSpellcasting_AbilityNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyClassSpellcastingSpellcasting_AbilityUrlOperatorsInput>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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

export type FilterFindManyClassStarting_EquipmentEquipmentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassStarting_EquipmentInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  equipment?: InputMaybe<FilterFindManyClassStarting_EquipmentEquipmentInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsFromEquipmentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  equipment?: InputMaybe<FilterFindManyClassStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyClassStarting_Equipment_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyClassSubclassesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type FilterFindManyEquipmentArmor_ClassBaseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentArmor_ClassDex_BonusOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindManyEquipmentArmor_ClassInput = {
  base?: InputMaybe<Scalars['Float']>;
  dex_bonus?: InputMaybe<Scalars['Boolean']>;
  max_bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentArmor_ClassMax_BonusOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentArmor_ClassOperatorsInput = {
  base?: InputMaybe<FilterFindManyEquipmentArmor_ClassBaseOperatorsInput>;
  dex_bonus?: InputMaybe<FilterFindManyEquipmentArmor_ClassDex_BonusOperatorsInput>;
  max_bonus?: InputMaybe<FilterFindManyEquipmentArmor_ClassMax_BonusOperatorsInput>;
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

export type FilterFindManyEquipmentCategoryEquipmentInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  equipment?: InputMaybe<Array<InputMaybe<FilterFindManyEquipmentCategoryEquipmentInput>>>;
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
  _id?: InputMaybe<Scalars['MongoID']>;
  item?: InputMaybe<FilterFindManyEquipmentContentsItemInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentContentsItemInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCostInput = {
  quantity?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCostOperatorsInput = {
  quantity?: InputMaybe<FilterFindManyEquipmentCostQuantityOperatorsInput>;
  unit?: InputMaybe<FilterFindManyEquipmentCostUnitOperatorsInput>;
};

export type FilterFindManyEquipmentCostQuantityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentCostUnitOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageDamage_DiceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeOperatorsInput = {
  index?: InputMaybe<FilterFindManyEquipmentDamageDamage_TypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyEquipmentDamageDamage_TypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyEquipmentDamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyEquipmentDamageDamage_TypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<FilterFindManyEquipmentDamageDamage_TypeInput>;
};

export type FilterFindManyEquipmentDamageOperatorsInput = {
  damage_dice?: InputMaybe<FilterFindManyEquipmentDamageDamage_DiceOperatorsInput>;
  damage_type?: InputMaybe<FilterFindManyEquipmentDamageDamage_TypeOperatorsInput>;
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

export type FilterFindManyEquipmentEquipment_CategoryIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentEquipment_CategoryInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentEquipment_CategoryNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentEquipment_CategoryOperatorsInput = {
  index?: InputMaybe<FilterFindManyEquipmentEquipment_CategoryIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyEquipmentEquipment_CategoryNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyEquipmentEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentEquipment_CategoryUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentGear_CategoryIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentGear_CategoryInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentGear_CategoryNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentGear_CategoryOperatorsInput = {
  index?: InputMaybe<FilterFindManyEquipmentGear_CategoryIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyEquipmentGear_CategoryNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyEquipmentGear_CategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentGear_CategoryUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  equipment_category?: InputMaybe<FilterFindManyEquipmentEquipment_CategoryInput>;
  gear_category?: InputMaybe<FilterFindManyEquipmentGear_CategoryInput>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<InputMaybe<FilterFindManyEquipmentPropertiesInput>>>;
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
  armor_class?: InputMaybe<FilterFindManyEquipmentArmor_ClassOperatorsInput>;
  capacity?: InputMaybe<FilterFindManyEquipmentCapacityOperatorsInput>;
  category_range?: InputMaybe<FilterFindManyEquipmentCategory_RangeOperatorsInput>;
  cost?: InputMaybe<FilterFindManyEquipmentCostOperatorsInput>;
  damage?: InputMaybe<FilterFindManyEquipmentDamageOperatorsInput>;
  desc?: InputMaybe<FilterFindManyEquipmentDescOperatorsInput>;
  equipment_category?: InputMaybe<FilterFindManyEquipmentEquipment_CategoryOperatorsInput>;
  gear_category?: InputMaybe<FilterFindManyEquipmentGear_CategoryOperatorsInput>;
  index?: InputMaybe<FilterFindManyEquipmentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyEquipmentNameOperatorsInput>;
  quantity?: InputMaybe<FilterFindManyEquipmentQuantityOperatorsInput>;
  range?: InputMaybe<FilterFindManyEquipmentRangeOperatorsInput>;
  special?: InputMaybe<FilterFindManyEquipmentSpecialOperatorsInput>;
  speed?: InputMaybe<FilterFindManyEquipmentSpeedOperatorsInput>;
  stealth_disadvantage?: InputMaybe<FilterFindManyEquipmentStealth_DisadvantageOperatorsInput>;
  str_minimum?: InputMaybe<FilterFindManyEquipmentStr_MinimumOperatorsInput>;
  throw_range?: InputMaybe<FilterFindManyEquipmentThrow_RangeOperatorsInput>;
  tool_category?: InputMaybe<FilterFindManyEquipmentTool_CategoryOperatorsInput>;
  two_handed_damage?: InputMaybe<FilterFindManyEquipmentTwo_Handed_DamageOperatorsInput>;
  url?: InputMaybe<FilterFindManyEquipmentUrlOperatorsInput>;
  vehicle_category?: InputMaybe<FilterFindManyEquipmentVehicle_CategoryOperatorsInput>;
  weapon_category?: InputMaybe<FilterFindManyEquipmentWeapon_CategoryOperatorsInput>;
  weapon_range?: InputMaybe<FilterFindManyEquipmentWeapon_RangeOperatorsInput>;
  weight?: InputMaybe<FilterFindManyEquipmentWeightOperatorsInput>;
};

export type FilterFindManyEquipmentPropertiesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type FilterFindManyEquipmentRangeLongOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentRangeNormalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentRangeOperatorsInput = {
  long?: InputMaybe<FilterFindManyEquipmentRangeLongOperatorsInput>;
  normal?: InputMaybe<FilterFindManyEquipmentRangeNormalOperatorsInput>;
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

export type FilterFindManyEquipmentSpeedOperatorsInput = {
  quantity?: InputMaybe<FilterFindManyEquipmentSpeedQuantityOperatorsInput>;
  unit?: InputMaybe<FilterFindManyEquipmentSpeedUnitOperatorsInput>;
};

export type FilterFindManyEquipmentSpeedQuantityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentSpeedUnitOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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

export type FilterFindManyEquipmentThrow_RangeLongOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentThrow_RangeNormalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentThrow_RangeOperatorsInput = {
  long?: InputMaybe<FilterFindManyEquipmentThrow_RangeLongOperatorsInput>;
  normal?: InputMaybe<FilterFindManyEquipmentThrow_RangeNormalOperatorsInput>;
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

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput = {
  index?: InputMaybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  damage_type?: InputMaybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeInput>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageOperatorsInput = {
  damage_dice?: InputMaybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput>;
  damage_type?: InputMaybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput>;
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

export type FilterFindManyFeatPrerequisitesAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatPrerequisitesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindManyFeatPrerequisitesAbility_ScoreInput>;
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

export type FilterFindManyFeatureChoiceChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyFeatureChoiceFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureChoiceInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyFeatureChoiceFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureChoiceOperatorsInput = {
  choose?: InputMaybe<FilterFindManyFeatureChoiceChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyFeatureChoiceTypeOperatorsInput>;
};

export type FilterFindManyFeatureChoiceTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureClassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureClassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureClassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureClassOperatorsInput = {
  index?: InputMaybe<FilterFindManyFeatureClassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyFeatureClassNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyFeatureClassUrlOperatorsInput>;
};

export type FilterFindManyFeatureClassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  expertise_options?: InputMaybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsInput>;
  subfeature_options?: InputMaybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsInput>;
};

export type FilterFindManyFeatureFeature_SpecificOperatorsInput = {
  expertise_options?: InputMaybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsOperatorsInput>;
  subfeature_options?: InputMaybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  class?: InputMaybe<FilterFindManyFeatureClassInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feature_specific?: InputMaybe<FilterFindManyFeatureFeature_SpecificInput>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<FilterFindManyFeatureParentInput>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindManyFeaturePrerequisitesInput>>>;
  reference?: InputMaybe<Scalars['String']>;
  subclass?: InputMaybe<FilterFindManyFeatureSubclassInput>;
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
  choice?: InputMaybe<FilterFindManyFeatureChoiceOperatorsInput>;
  class?: InputMaybe<FilterFindManyFeatureClassOperatorsInput>;
  desc?: InputMaybe<FilterFindManyFeatureDescOperatorsInput>;
  feature_specific?: InputMaybe<FilterFindManyFeatureFeature_SpecificOperatorsInput>;
  index?: InputMaybe<FilterFindManyFeatureIndexOperatorsInput>;
  level?: InputMaybe<FilterFindManyFeatureLevelOperatorsInput>;
  name?: InputMaybe<FilterFindManyFeatureNameOperatorsInput>;
  parent?: InputMaybe<FilterFindManyFeatureParentOperatorsInput>;
  reference?: InputMaybe<FilterFindManyFeatureReferenceOperatorsInput>;
  subclass?: InputMaybe<FilterFindManyFeatureSubclassOperatorsInput>;
  url?: InputMaybe<FilterFindManyFeatureUrlOperatorsInput>;
};

export type FilterFindManyFeatureParentIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureParentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureParentNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureParentOperatorsInput = {
  index?: InputMaybe<FilterFindManyFeatureParentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyFeatureParentNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyFeatureParentUrlOperatorsInput>;
};

export type FilterFindManyFeatureParentUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeaturePrerequisitesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
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

export type FilterFindManyFeatureSubclassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureSubclassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyFeatureSubclassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureSubclassOperatorsInput = {
  index?: InputMaybe<FilterFindManyFeatureSubclassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyFeatureSubclassNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyFeatureSubclassUrlOperatorsInput>;
};

export type FilterFindManyFeatureSubclassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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

export type FilterFindManyLevelClassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelClassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyLevelClassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelClassOperatorsInput = {
  index?: InputMaybe<FilterFindManyLevelClassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyLevelClassNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyLevelClassUrlOperatorsInput>;
};

export type FilterFindManyLevelClassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelClass_SpecificAction_SurgesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificAura_RangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificBardic_Inspiration_DieOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificBrutal_Critical_DiceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput = {
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
  _id?: InputMaybe<Scalars['MongoID']>;
  sorcery_point_cost?: InputMaybe<Scalars['Float']>;
  spell_slot_level?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificDestroy_Undead_CrOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificExtra_AttacksOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificFavored_EnemiesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificFavored_TerrainOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificIndomitable_UsesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
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

export type FilterFindManyLevelClass_SpecificInvocations_KnownOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificKi_PointsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: InputMaybe<Scalars['Float']>;
  dice_value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsOperatorsInput = {
  dice_count?: InputMaybe<FilterFindManyLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput>;
  dice_value?: InputMaybe<FilterFindManyLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificMetamagic_KnownOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificOperatorsInput = {
  action_surges?: InputMaybe<FilterFindManyLevelClass_SpecificAction_SurgesOperatorsInput>;
  arcane_recovery_levels?: InputMaybe<FilterFindManyLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput>;
  aura_range?: InputMaybe<FilterFindManyLevelClass_SpecificAura_RangeOperatorsInput>;
  bardic_inspiration_die?: InputMaybe<FilterFindManyLevelClass_SpecificBardic_Inspiration_DieOperatorsInput>;
  brutal_critical_dice?: InputMaybe<FilterFindManyLevelClass_SpecificBrutal_Critical_DiceOperatorsInput>;
  channel_divinity_charges?: InputMaybe<FilterFindManyLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput>;
  destroy_undead_cr?: InputMaybe<FilterFindManyLevelClass_SpecificDestroy_Undead_CrOperatorsInput>;
  extra_attacks?: InputMaybe<FilterFindManyLevelClass_SpecificExtra_AttacksOperatorsInput>;
  favored_enemies?: InputMaybe<FilterFindManyLevelClass_SpecificFavored_EnemiesOperatorsInput>;
  favored_terrain?: InputMaybe<FilterFindManyLevelClass_SpecificFavored_TerrainOperatorsInput>;
  indomitable_uses?: InputMaybe<FilterFindManyLevelClass_SpecificIndomitable_UsesOperatorsInput>;
  invocations_known?: InputMaybe<FilterFindManyLevelClass_SpecificInvocations_KnownOperatorsInput>;
  ki_points?: InputMaybe<FilterFindManyLevelClass_SpecificKi_PointsOperatorsInput>;
  magical_secrets_max_5?: InputMaybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput>;
  magical_secrets_max_7?: InputMaybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput>;
  magical_secrets_max_9?: InputMaybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput>;
  martial_arts?: InputMaybe<FilterFindManyLevelClass_SpecificMartial_ArtsOperatorsInput>;
  metamagic_known?: InputMaybe<FilterFindManyLevelClass_SpecificMetamagic_KnownOperatorsInput>;
  mystic_arcanum_level_6?: InputMaybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput>;
  mystic_arcanum_level_7?: InputMaybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput>;
  mystic_arcanum_level_8?: InputMaybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput>;
  mystic_arcanum_level_9?: InputMaybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput>;
  rage_count?: InputMaybe<FilterFindManyLevelClass_SpecificRage_CountOperatorsInput>;
  rage_damage_bonus?: InputMaybe<FilterFindManyLevelClass_SpecificRage_Damage_BonusOperatorsInput>;
  sneak_attack?: InputMaybe<FilterFindManyLevelClass_SpecificSneak_AttackOperatorsInput>;
  song_of_rest_die?: InputMaybe<FilterFindManyLevelClass_SpecificSong_Of_Rest_DieOperatorsInput>;
  sorcery_points?: InputMaybe<FilterFindManyLevelClass_SpecificSorcery_PointsOperatorsInput>;
  unarmored_movement?: InputMaybe<FilterFindManyLevelClass_SpecificUnarmored_MovementOperatorsInput>;
  wild_shape_fly?: InputMaybe<FilterFindManyLevelClass_SpecificWild_Shape_FlyOperatorsInput>;
  wild_shape_max_cr?: InputMaybe<FilterFindManyLevelClass_SpecificWild_Shape_Max_CrOperatorsInput>;
  wild_shape_swim?: InputMaybe<FilterFindManyLevelClass_SpecificWild_Shape_SwimOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificRage_CountOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificRage_Damage_BonusOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackDice_CountOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackInput = {
  dice_count?: InputMaybe<Scalars['Float']>;
  dice_value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackOperatorsInput = {
  dice_count?: InputMaybe<FilterFindManyLevelClass_SpecificSneak_AttackDice_CountOperatorsInput>;
  dice_value?: InputMaybe<FilterFindManyLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificSong_Of_Rest_DieOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificSorcery_PointsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificUnarmored_MovementOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_FlyOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_Max_CrOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_SwimOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindManyLevelFeaturesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  class?: InputMaybe<FilterFindManyLevelClassInput>;
  class_specific?: InputMaybe<FilterFindManyLevelClass_SpecificInput>;
  features?: InputMaybe<Array<InputMaybe<FilterFindManyLevelFeaturesInput>>>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  prof_bonus?: InputMaybe<Scalars['Float']>;
  spellcasting?: InputMaybe<FilterFindManyLevelSpellcastingInput>;
  subclass?: InputMaybe<FilterFindManyLevelSubclassInput>;
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
  class?: InputMaybe<FilterFindManyLevelClassOperatorsInput>;
  class_specific?: InputMaybe<FilterFindManyLevelClass_SpecificOperatorsInput>;
  index?: InputMaybe<FilterFindManyLevelIndexOperatorsInput>;
  level?: InputMaybe<FilterFindManyLevelLevelOperatorsInput>;
  prof_bonus?: InputMaybe<FilterFindManyLevelProf_BonusOperatorsInput>;
  spellcasting?: InputMaybe<FilterFindManyLevelSpellcastingOperatorsInput>;
  subclass?: InputMaybe<FilterFindManyLevelSubclassOperatorsInput>;
  subclass_specific?: InputMaybe<FilterFindManyLevelSubclass_SpecificOperatorsInput>;
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

export type FilterFindManyLevelSpellcastingCantrips_KnownOperatorsInput = {
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

export type FilterFindManyLevelSpellcastingOperatorsInput = {
  cantrips_known?: InputMaybe<FilterFindManyLevelSpellcastingCantrips_KnownOperatorsInput>;
  spell_slots_level_1?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_1OperatorsInput>;
  spell_slots_level_2?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_2OperatorsInput>;
  spell_slots_level_3?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_3OperatorsInput>;
  spell_slots_level_4?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_4OperatorsInput>;
  spell_slots_level_5?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_5OperatorsInput>;
  spell_slots_level_6?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_6OperatorsInput>;
  spell_slots_level_7?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_7OperatorsInput>;
  spell_slots_level_8?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_8OperatorsInput>;
  spell_slots_level_9?: InputMaybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_9OperatorsInput>;
  spells_known?: InputMaybe<FilterFindManyLevelSpellcastingSpells_KnownOperatorsInput>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_1OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_2OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_3OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_4OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_5OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_6OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_7OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_8OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_9OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpells_KnownOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSubclassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelSubclassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyLevelSubclassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelSubclassOperatorsInput = {
  index?: InputMaybe<FilterFindManyLevelSubclassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyLevelSubclassNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyLevelSubclassUrlOperatorsInput>;
};

export type FilterFindManyLevelSubclassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSubclass_SpecificAura_RangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: InputMaybe<Scalars['Float']>;
  aura_range?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyLevelSubclass_SpecificOperatorsInput = {
  additional_magical_secrets_max_lvl?: InputMaybe<FilterFindManyLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput>;
  aura_range?: InputMaybe<FilterFindManyLevelSubclass_SpecificAura_RangeOperatorsInput>;
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

export type FilterFindManyMagicItemEquipment_CategoryIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemEquipment_CategoryInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMagicItemEquipment_CategoryNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemEquipment_CategoryOperatorsInput = {
  index?: InputMaybe<FilterFindManyMagicItemEquipment_CategoryIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyMagicItemEquipment_CategoryNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyMagicItemEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindManyMagicItemEquipment_CategoryUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  equipment_category?: InputMaybe<FilterFindManyMagicItemEquipment_CategoryInput>;
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
  equipment_category?: InputMaybe<FilterFindManyMagicItemEquipment_CategoryOperatorsInput>;
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

export type FilterFindManyMonsterActionsDamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterActionsDamageInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<FilterFindManyMonsterActionsDamageDamage_TypeInput>;
};

export type FilterFindManyMonsterActionsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  attack_bonus?: InputMaybe<Scalars['Float']>;
  damage?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterActionsDamageInput>>>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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

export type FilterFindManyMonsterCondition_ImmunitiesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type FilterFindManyMonsterFormsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  condition_immunities?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterCondition_ImmunitiesInput>>>;
  constitution?: InputMaybe<Scalars['Float']>;
  damage_immunities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_resistances?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_vulnerabilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dexterity?: InputMaybe<Scalars['Float']>;
  forms?: InputMaybe<Array<InputMaybe<FilterFindManyMonsterFormsInput>>>;
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
  _id?: InputMaybe<Scalars['MongoID']>;
  attack_bonus?: InputMaybe<Scalars['Float']>;
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
  dexterity?: InputMaybe<FilterFindManyMonsterDexterityOperatorsInput>;
  hit_dice?: InputMaybe<FilterFindManyMonsterHit_DiceOperatorsInput>;
  hit_points?: InputMaybe<FilterFindManyMonsterHit_PointsOperatorsInput>;
  index?: InputMaybe<FilterFindManyMonsterIndexOperatorsInput>;
  intelligence?: InputMaybe<FilterFindManyMonsterIntelligenceOperatorsInput>;
  languages?: InputMaybe<FilterFindManyMonsterLanguagesOperatorsInput>;
  name?: InputMaybe<FilterFindManyMonsterNameOperatorsInput>;
  senses?: InputMaybe<FilterFindManyMonsterSensesOperatorsInput>;
  size?: InputMaybe<FilterFindManyMonsterSizeOperatorsInput>;
  speed?: InputMaybe<FilterFindManyMonsterSpeedOperatorsInput>;
  strength?: InputMaybe<FilterFindManyMonsterStrengthOperatorsInput>;
  subtype?: InputMaybe<FilterFindManyMonsterSubtypeOperatorsInput>;
  type?: InputMaybe<FilterFindManyMonsterTypeOperatorsInput>;
  url?: InputMaybe<FilterFindManyMonsterUrlOperatorsInput>;
  wisdom?: InputMaybe<FilterFindManyMonsterWisdomOperatorsInput>;
  xp?: InputMaybe<FilterFindManyMonsterXpOperatorsInput>;
};

export type FilterFindManyMonsterProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  proficiency?: InputMaybe<FilterFindManyMonsterProficienciesProficiencyInput>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyMonsterProficienciesProficiencyInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterReactionsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterSensesBlindsightOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSensesDarkvisionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSensesInput = {
  blindsight?: InputMaybe<Scalars['String']>;
  darkvision?: InputMaybe<Scalars['String']>;
  passive_perception?: InputMaybe<Scalars['Float']>;
  tremorsense?: InputMaybe<Scalars['String']>;
  truesight?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterSensesOperatorsInput = {
  blindsight?: InputMaybe<FilterFindManyMonsterSensesBlindsightOperatorsInput>;
  darkvision?: InputMaybe<FilterFindManyMonsterSensesDarkvisionOperatorsInput>;
  passive_perception?: InputMaybe<FilterFindManyMonsterSensesPassive_PerceptionOperatorsInput>;
  tremorsense?: InputMaybe<FilterFindManyMonsterSensesTremorsenseOperatorsInput>;
  truesight?: InputMaybe<FilterFindManyMonsterSensesTruesightOperatorsInput>;
};

export type FilterFindManyMonsterSensesPassive_PerceptionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterSensesTremorsenseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSensesTruesightOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  _id?: InputMaybe<Scalars['MongoID']>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterSpeedBurrowOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpeedClimbOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpeedFlyOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpeedHoverOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindManyMonsterSpeedInput = {
  burrow?: InputMaybe<Scalars['String']>;
  climb?: InputMaybe<Scalars['String']>;
  fly?: InputMaybe<Scalars['String']>;
  hover?: InputMaybe<Scalars['Boolean']>;
  swim?: InputMaybe<Scalars['String']>;
  walk?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyMonsterSpeedOperatorsInput = {
  burrow?: InputMaybe<FilterFindManyMonsterSpeedBurrowOperatorsInput>;
  climb?: InputMaybe<FilterFindManyMonsterSpeedClimbOperatorsInput>;
  fly?: InputMaybe<FilterFindManyMonsterSpeedFlyOperatorsInput>;
  hover?: InputMaybe<FilterFindManyMonsterSpeedHoverOperatorsInput>;
  swim?: InputMaybe<FilterFindManyMonsterSpeedSwimOperatorsInput>;
  walk?: InputMaybe<FilterFindManyMonsterSpeedWalkOperatorsInput>;
};

export type FilterFindManyMonsterSpeedSwimOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpeedWalkOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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

export type FilterFindManyProficiencyClassesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  classes?: InputMaybe<Array<InputMaybe<FilterFindManyProficiencyClassesInput>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  races?: InputMaybe<Array<InputMaybe<FilterFindManyProficiencyRacesInput>>>;
  references?: InputMaybe<Array<InputMaybe<FilterFindManyProficiencyReferencesInput>>>;
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

export type FilterFindManyProficiencyRacesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyProficiencyReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
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

export type FilterFindManyRaceAbility_Bonus_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsFromAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindManyRaceAbility_Bonus_OptionsFromAbility_ScoreInput>;
  bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyRaceAbility_Bonus_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyRaceAbility_Bonus_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyRaceAbility_Bonus_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceAbility_BonusesAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_BonusesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindManyRaceAbility_BonusesAbility_ScoreInput>;
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
  languages?: InputMaybe<Array<InputMaybe<FilterFindManyRaceLanguagesInput>>>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  size_description?: InputMaybe<Scalars['String']>;
  speed?: InputMaybe<Scalars['Float']>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyRaceStarting_ProficienciesInput>>>;
  starting_proficiency_options?: InputMaybe<FilterFindManyRaceStarting_Proficiency_OptionsInput>;
  subraces?: InputMaybe<Array<InputMaybe<FilterFindManyRaceSubracesInput>>>;
  traits?: InputMaybe<Array<InputMaybe<FilterFindManyRaceTraitsInput>>>;
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

export type FilterFindManyRaceLanguage_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyRaceLanguage_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyRaceLanguage_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceLanguage_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyRaceLanguage_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyRaceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceLanguage_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceLanguagesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  ability_bonus_options?: InputMaybe<FilterFindManyRaceAbility_Bonus_OptionsOperatorsInput>;
  age?: InputMaybe<FilterFindManyRaceAgeOperatorsInput>;
  alignment?: InputMaybe<FilterFindManyRaceAlignmentOperatorsInput>;
  index?: InputMaybe<FilterFindManyRaceIndexOperatorsInput>;
  language_desc?: InputMaybe<FilterFindManyRaceLanguage_DescOperatorsInput>;
  language_options?: InputMaybe<FilterFindManyRaceLanguage_OptionsOperatorsInput>;
  name?: InputMaybe<FilterFindManyRaceNameOperatorsInput>;
  size?: InputMaybe<FilterFindManyRaceSizeOperatorsInput>;
  size_description?: InputMaybe<FilterFindManyRaceSize_DescriptionOperatorsInput>;
  speed?: InputMaybe<FilterFindManyRaceSpeedOperatorsInput>;
  starting_proficiency_options?: InputMaybe<FilterFindManyRaceStarting_Proficiency_OptionsOperatorsInput>;
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

export type FilterFindManyRaceStarting_ProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyRaceStarting_Proficiency_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyRaceStarting_Proficiency_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyRaceStarting_Proficiency_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceSubracesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyRaceTraitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  subsections?: InputMaybe<Array<InputMaybe<FilterFindManyRuleSubsectionsInput>>>;
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

export type FilterFindManyRuleSubsectionsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type FilterFindManySkillAbility_ScoreIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySkillAbility_ScoreNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillAbility_ScoreOperatorsInput = {
  index?: InputMaybe<FilterFindManySkillAbility_ScoreIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManySkillAbility_ScoreNameOperatorsInput>;
  url?: InputMaybe<FilterFindManySkillAbility_ScoreUrlOperatorsInput>;
};

export type FilterFindManySkillAbility_ScoreUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  ability_score?: InputMaybe<FilterFindManySkillAbility_ScoreInput>;
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
  ability_score?: InputMaybe<FilterFindManySkillAbility_ScoreOperatorsInput>;
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

export type FilterFindManySpellClassesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpellDamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpellDamageInput = {
  damage_at_character_level?: InputMaybe<Scalars['JSON']>;
  damage_at_slot_level?: InputMaybe<Scalars['JSON']>;
  damage_type?: InputMaybe<FilterFindManySpellDamageDamage_TypeInput>;
};

export type FilterFindManySpellDcDc_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpellDcInput = {
  dc_success?: InputMaybe<Scalars['String']>;
  dc_type?: InputMaybe<FilterFindManySpellDcDc_TypeInput>;
  desc?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpellInput = {
  AND?: InputMaybe<Array<FilterFindManySpellInput>>;
  OR?: InputMaybe<Array<FilterFindManySpellInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySpellOperatorsInput>;
  area_of_effect?: InputMaybe<FilterFindManySpellArea_Of_EffectInput>;
  attack_type?: InputMaybe<Scalars['String']>;
  casting_time?: InputMaybe<Scalars['String']>;
  classes?: InputMaybe<Array<InputMaybe<FilterFindManySpellClassesInput>>>;
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
  school?: InputMaybe<FilterFindManySpellSchoolInput>;
  subclasses?: InputMaybe<Array<InputMaybe<FilterFindManySpellSubclassesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySpellOperatorsInput = {
  _id?: InputMaybe<FilterFindManySpell_IdOperatorsInput>;
  school?: InputMaybe<FilterFindManySpellSchoolOperatorsInput>;
};

export type FilterFindManySpellSchoolIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellSchoolInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpellSchoolNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellSchoolOperatorsInput = {
  index?: InputMaybe<FilterFindManySpellSchoolIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManySpellSchoolNameOperatorsInput>;
  url?: InputMaybe<FilterFindManySpellSchoolUrlOperatorsInput>;
};

export type FilterFindManySpellSchoolUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellSubclassesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySpell_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassClassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassClassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubclassClassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassClassOperatorsInput = {
  index?: InputMaybe<FilterFindManySubclassClassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManySubclassClassNameOperatorsInput>;
  url?: InputMaybe<FilterFindManySubclassClassUrlOperatorsInput>;
};

export type FilterFindManySubclassClassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  class?: InputMaybe<FilterFindManySubclassClassInput>;
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
  class?: InputMaybe<FilterFindManySubclassClassOperatorsInput>;
  desc?: InputMaybe<FilterFindManySubclassDescOperatorsInput>;
  index?: InputMaybe<FilterFindManySubclassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManySubclassNameOperatorsInput>;
  subclass_flavor?: InputMaybe<FilterFindManySubclassSubclass_FlavorOperatorsInput>;
  subclass_levels?: InputMaybe<FilterFindManySubclassSubclass_LevelsOperatorsInput>;
  url?: InputMaybe<FilterFindManySubclassUrlOperatorsInput>;
};

export type FilterFindManySubclassSpellsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindManySubclassSpellsPrerequisitesInput>>>;
  spell?: InputMaybe<FilterFindManySubclassSpellsSpellInput>;
};

export type FilterFindManySubclassSpellsPrerequisitesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubclassSpellsSpellInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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

export type FilterFindManySubraceAbility_BonusesAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubraceAbility_BonusesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindManySubraceAbility_BonusesAbility_ScoreInput>;
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
  race?: InputMaybe<FilterFindManySubraceRaceInput>;
  racial_traits?: InputMaybe<Array<InputMaybe<FilterFindManySubraceRacial_TraitsInput>>>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManySubraceStarting_ProficienciesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubraceLanguage_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManySubraceLanguage_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubraceLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManySubraceLanguage_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubraceLanguage_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManySubraceLanguage_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManySubraceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManySubraceLanguage_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  language_options?: InputMaybe<FilterFindManySubraceLanguage_OptionsOperatorsInput>;
  name?: InputMaybe<FilterFindManySubraceNameOperatorsInput>;
  race?: InputMaybe<FilterFindManySubraceRaceOperatorsInput>;
  url?: InputMaybe<FilterFindManySubraceUrlOperatorsInput>;
};

export type FilterFindManySubraceRaceIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceRaceInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubraceRaceNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceRaceOperatorsInput = {
  index?: InputMaybe<FilterFindManySubraceRaceIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManySubraceRaceNameOperatorsInput>;
  url?: InputMaybe<FilterFindManySubraceRaceUrlOperatorsInput>;
};

export type FilterFindManySubraceRaceUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceRacial_TraitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManySubraceStarting_ProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  parent?: InputMaybe<FilterFindManyTraitParentInput>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindManyTraitProficienciesInput>>>;
  proficiency_choices?: InputMaybe<FilterFindManyTraitProficiency_ChoicesInput>;
  races?: InputMaybe<Array<InputMaybe<FilterFindManyTraitRacesInput>>>;
  subraces?: InputMaybe<Array<InputMaybe<FilterFindManyTraitSubracesInput>>>;
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
  parent?: InputMaybe<FilterFindManyTraitParentOperatorsInput>;
  proficiency_choices?: InputMaybe<FilterFindManyTraitProficiency_ChoicesOperatorsInput>;
  trait_specific?: InputMaybe<FilterFindManyTraitTrait_SpecificOperatorsInput>;
  url?: InputMaybe<FilterFindManyTraitUrlOperatorsInput>;
};

export type FilterFindManyTraitParentIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitParentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitParentNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitParentOperatorsInput = {
  index?: InputMaybe<FilterFindManyTraitParentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyTraitParentNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyTraitParentUrlOperatorsInput>;
};

export type FilterFindManyTraitParentUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitProficiency_ChoicesChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyTraitProficiency_ChoicesFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitProficiency_ChoicesInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyTraitProficiency_ChoicesFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitProficiency_ChoicesOperatorsInput = {
  choose?: InputMaybe<FilterFindManyTraitProficiency_ChoicesChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyTraitProficiency_ChoicesTypeOperatorsInput>;
};

export type FilterFindManyTraitProficiency_ChoicesTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitRacesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitSubracesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDamageInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  damage_at_character_level?: InputMaybe<Scalars['JSON']>;
  damage_type?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput = {
  index?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcInput = {
  dc_type?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeInput>;
  success_type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcOperatorsInput = {
  dc_type?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput>;
  success_type?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponInput = {
  damage?: InputMaybe<Array<InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDamageInput>>>;
  dc?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponOperatorsInput = {
  dc?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcOperatorsInput>;
  desc?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDescOperatorsInput>;
  name?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponNameOperatorsInput>;
  usage?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageInput = {
  times?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageOperatorsInput = {
  times?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput>;
  type?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeOperatorsInput = {
  index?: InputMaybe<FilterFindManyTraitTrait_SpecificDamage_TypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindManyTraitTrait_SpecificDamage_TypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindManyTraitTrait_SpecificDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificInput = {
  breath_weapon?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponInput>;
  damage_type?: InputMaybe<FilterFindManyTraitTrait_SpecificDamage_TypeInput>;
  spell_options?: InputMaybe<FilterFindManyTraitTrait_SpecificSpell_OptionsInput>;
  subtrait_options?: InputMaybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput>;
};

export type FilterFindManyTraitTrait_SpecificOperatorsInput = {
  breath_weapon?: InputMaybe<FilterFindManyTraitTrait_SpecificBreath_WeaponOperatorsInput>;
  damage_type?: InputMaybe<FilterFindManyTraitTrait_SpecificDamage_TypeOperatorsInput>;
  spell_options?: InputMaybe<FilterFindManyTraitTrait_SpecificSpell_OptionsOperatorsInput>;
  subtrait_options?: InputMaybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyTraitTrait_SpecificSpell_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyTraitTrait_SpecificSpell_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyTraitTrait_SpecificSpell_OptionsTypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  _id?: InputMaybe<Scalars['MongoID']>;
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

export type FilterFindOneBackgroundBondsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundBondsFromOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundBondsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundBondsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneBackgroundBondsChooseOperatorsInput>;
  from?: InputMaybe<FilterFindOneBackgroundBondsFromOperatorsInput>;
  type?: InputMaybe<FilterFindOneBackgroundBondsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundBondsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundFeatureDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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

export type FilterFindOneBackgroundFeatureNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundFeatureOperatorsInput = {
  desc?: InputMaybe<FilterFindOneBackgroundFeatureDescOperatorsInput>;
  name?: InputMaybe<FilterFindOneBackgroundFeatureNameOperatorsInput>;
};

export type FilterFindOneBackgroundFlawsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundFlawsFromOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundFlawsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundFlawsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneBackgroundFlawsChooseOperatorsInput>;
  from?: InputMaybe<FilterFindOneBackgroundFlawsFromOperatorsInput>;
  type?: InputMaybe<FilterFindOneBackgroundFlawsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundFlawsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundIdealsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundIdealsFromAlignmentsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  alignments?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundIdealsFromAlignmentsInput>>>;
  desc?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundIdealsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneBackgroundIdealsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneBackgroundIdealsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundIdealsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  bonds?: InputMaybe<FilterFindOneBackgroundBondsInput>;
  feature?: InputMaybe<FilterFindOneBackgroundFeatureInput>;
  flaws?: InputMaybe<FilterFindOneBackgroundFlawsInput>;
  ideals?: InputMaybe<FilterFindOneBackgroundIdealsInput>;
  index?: InputMaybe<Scalars['String']>;
  language_options?: InputMaybe<FilterFindOneBackgroundLanguage_OptionsInput>;
  name?: InputMaybe<Scalars['String']>;
  personality_traits?: InputMaybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  starting_equipment?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundStarting_EquipmentInput>>>;
  starting_equipment_options?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundStarting_Equipment_OptionsInput>>>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundStarting_ProficienciesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundLanguage_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundLanguage_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundLanguage_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundLanguage_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneBackgroundLanguage_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneBackgroundLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundLanguage_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  bonds?: InputMaybe<FilterFindOneBackgroundBondsOperatorsInput>;
  feature?: InputMaybe<FilterFindOneBackgroundFeatureOperatorsInput>;
  flaws?: InputMaybe<FilterFindOneBackgroundFlawsOperatorsInput>;
  ideals?: InputMaybe<FilterFindOneBackgroundIdealsOperatorsInput>;
  index?: InputMaybe<FilterFindOneBackgroundIndexOperatorsInput>;
  language_options?: InputMaybe<FilterFindOneBackgroundLanguage_OptionsOperatorsInput>;
  name?: InputMaybe<FilterFindOneBackgroundNameOperatorsInput>;
  personality_traits?: InputMaybe<FilterFindOneBackgroundPersonality_TraitsOperatorsInput>;
  url?: InputMaybe<FilterFindOneBackgroundUrlOperatorsInput>;
};

export type FilterFindOneBackgroundPersonality_TraitsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundPersonality_TraitsFromOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundPersonality_TraitsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundPersonality_TraitsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneBackgroundPersonality_TraitsChooseOperatorsInput>;
  from?: InputMaybe<FilterFindOneBackgroundPersonality_TraitsFromOperatorsInput>;
  type?: InputMaybe<FilterFindOneBackgroundPersonality_TraitsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundPersonality_TraitsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundStarting_EquipmentEquipmentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_EquipmentInput = {
  equipment?: InputMaybe<FilterFindOneBackgroundStarting_EquipmentEquipmentInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsFromEquipmentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: InputMaybe<FilterFindOneBackgroundStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneBackgroundStarting_Equipment_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_ProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneClassProficienciesInput>>>;
  proficiency_choices?: InputMaybe<Array<InputMaybe<FilterFindOneClassProficiency_ChoicesInput>>>;
  saving_throws?: InputMaybe<Array<InputMaybe<FilterFindOneClassSaving_ThrowsInput>>>;
  spellcasting?: InputMaybe<FilterFindOneClassSpellcastingInput>;
  spells?: InputMaybe<Scalars['String']>;
  starting_equipment?: InputMaybe<Array<InputMaybe<FilterFindOneClassStarting_EquipmentInput>>>;
  starting_equipment_options?: InputMaybe<Array<InputMaybe<FilterFindOneClassStarting_Equipment_OptionsInput>>>;
  subclasses?: InputMaybe<Array<InputMaybe<FilterFindOneClassSubclassesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingInput = {
  prerequisite_options?: InputMaybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsInput>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingPrerequisitesInput>>>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingProficienciesInput>>>;
  proficiency_choices?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingProficiency_ChoicesInput>>>;
};

export type FilterFindOneClassMulti_ClassingOperatorsInput = {
  prerequisite_options?: InputMaybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsOperatorsInput>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsFromAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsFromAbility_ScoreInput>;
  minimum_score?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsTypeOperatorsInput>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisitesAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisitesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindOneClassMulti_ClassingPrerequisitesAbility_ScoreInput>;
  minimum_score?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneClassMulti_ClassingProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingProficiency_ChoicesFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingProficiency_ChoicesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneClassMulti_ClassingProficiency_ChoicesFromInput>>>;
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
  multi_classing?: InputMaybe<FilterFindOneClassMulti_ClassingOperatorsInput>;
  name?: InputMaybe<FilterFindOneClassNameOperatorsInput>;
  spellcasting?: InputMaybe<FilterFindOneClassSpellcastingOperatorsInput>;
  spells?: InputMaybe<FilterFindOneClassSpellsOperatorsInput>;
  url?: InputMaybe<FilterFindOneClassUrlOperatorsInput>;
};

export type FilterFindOneClassProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassProficiency_ChoicesFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassProficiency_ChoicesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneClassProficiency_ChoicesFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassSaving_ThrowsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassSpellcastingInfoInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassSpellcastingInput = {
  info?: InputMaybe<Array<InputMaybe<FilterFindOneClassSpellcastingInfoInput>>>;
  level?: InputMaybe<Scalars['Float']>;
  spellcasting_ability?: InputMaybe<FilterFindOneClassSpellcastingSpellcasting_AbilityInput>;
};

export type FilterFindOneClassSpellcastingLevelOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneClassSpellcastingOperatorsInput = {
  level?: InputMaybe<FilterFindOneClassSpellcastingLevelOperatorsInput>;
  spellcasting_ability?: InputMaybe<FilterFindOneClassSpellcastingSpellcasting_AbilityOperatorsInput>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityOperatorsInput = {
  index?: InputMaybe<FilterFindOneClassSpellcastingSpellcasting_AbilityIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneClassSpellcastingSpellcasting_AbilityNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneClassSpellcastingSpellcasting_AbilityUrlOperatorsInput>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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

export type FilterFindOneClassStarting_EquipmentEquipmentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassStarting_EquipmentInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  equipment?: InputMaybe<FilterFindOneClassStarting_EquipmentEquipmentInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsFromEquipmentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  equipment?: InputMaybe<FilterFindOneClassStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneClassStarting_Equipment_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneClassSubclassesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type FilterFindOneEquipmentArmor_ClassBaseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentArmor_ClassDex_BonusOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindOneEquipmentArmor_ClassInput = {
  base?: InputMaybe<Scalars['Float']>;
  dex_bonus?: InputMaybe<Scalars['Boolean']>;
  max_bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentArmor_ClassMax_BonusOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentArmor_ClassOperatorsInput = {
  base?: InputMaybe<FilterFindOneEquipmentArmor_ClassBaseOperatorsInput>;
  dex_bonus?: InputMaybe<FilterFindOneEquipmentArmor_ClassDex_BonusOperatorsInput>;
  max_bonus?: InputMaybe<FilterFindOneEquipmentArmor_ClassMax_BonusOperatorsInput>;
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

export type FilterFindOneEquipmentCategoryEquipmentInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  equipment?: InputMaybe<Array<InputMaybe<FilterFindOneEquipmentCategoryEquipmentInput>>>;
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
  _id?: InputMaybe<Scalars['MongoID']>;
  item?: InputMaybe<FilterFindOneEquipmentContentsItemInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentContentsItemInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCostInput = {
  quantity?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCostOperatorsInput = {
  quantity?: InputMaybe<FilterFindOneEquipmentCostQuantityOperatorsInput>;
  unit?: InputMaybe<FilterFindOneEquipmentCostUnitOperatorsInput>;
};

export type FilterFindOneEquipmentCostQuantityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentCostUnitOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageDamage_DiceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeOperatorsInput = {
  index?: InputMaybe<FilterFindOneEquipmentDamageDamage_TypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneEquipmentDamageDamage_TypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneEquipmentDamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneEquipmentDamageDamage_TypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageInput = {
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<FilterFindOneEquipmentDamageDamage_TypeInput>;
};

export type FilterFindOneEquipmentDamageOperatorsInput = {
  damage_dice?: InputMaybe<FilterFindOneEquipmentDamageDamage_DiceOperatorsInput>;
  damage_type?: InputMaybe<FilterFindOneEquipmentDamageDamage_TypeOperatorsInput>;
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

export type FilterFindOneEquipmentEquipment_CategoryIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentEquipment_CategoryInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentEquipment_CategoryNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentEquipment_CategoryOperatorsInput = {
  index?: InputMaybe<FilterFindOneEquipmentEquipment_CategoryIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneEquipmentEquipment_CategoryNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneEquipmentEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentEquipment_CategoryUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentGear_CategoryIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentGear_CategoryInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentGear_CategoryNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentGear_CategoryOperatorsInput = {
  index?: InputMaybe<FilterFindOneEquipmentGear_CategoryIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneEquipmentGear_CategoryNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneEquipmentGear_CategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentGear_CategoryUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  equipment_category?: InputMaybe<FilterFindOneEquipmentEquipment_CategoryInput>;
  gear_category?: InputMaybe<FilterFindOneEquipmentGear_CategoryInput>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<InputMaybe<FilterFindOneEquipmentPropertiesInput>>>;
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
  armor_class?: InputMaybe<FilterFindOneEquipmentArmor_ClassOperatorsInput>;
  capacity?: InputMaybe<FilterFindOneEquipmentCapacityOperatorsInput>;
  category_range?: InputMaybe<FilterFindOneEquipmentCategory_RangeOperatorsInput>;
  cost?: InputMaybe<FilterFindOneEquipmentCostOperatorsInput>;
  damage?: InputMaybe<FilterFindOneEquipmentDamageOperatorsInput>;
  desc?: InputMaybe<FilterFindOneEquipmentDescOperatorsInput>;
  equipment_category?: InputMaybe<FilterFindOneEquipmentEquipment_CategoryOperatorsInput>;
  gear_category?: InputMaybe<FilterFindOneEquipmentGear_CategoryOperatorsInput>;
  index?: InputMaybe<FilterFindOneEquipmentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneEquipmentNameOperatorsInput>;
  quantity?: InputMaybe<FilterFindOneEquipmentQuantityOperatorsInput>;
  range?: InputMaybe<FilterFindOneEquipmentRangeOperatorsInput>;
  special?: InputMaybe<FilterFindOneEquipmentSpecialOperatorsInput>;
  speed?: InputMaybe<FilterFindOneEquipmentSpeedOperatorsInput>;
  stealth_disadvantage?: InputMaybe<FilterFindOneEquipmentStealth_DisadvantageOperatorsInput>;
  str_minimum?: InputMaybe<FilterFindOneEquipmentStr_MinimumOperatorsInput>;
  throw_range?: InputMaybe<FilterFindOneEquipmentThrow_RangeOperatorsInput>;
  tool_category?: InputMaybe<FilterFindOneEquipmentTool_CategoryOperatorsInput>;
  two_handed_damage?: InputMaybe<FilterFindOneEquipmentTwo_Handed_DamageOperatorsInput>;
  url?: InputMaybe<FilterFindOneEquipmentUrlOperatorsInput>;
  vehicle_category?: InputMaybe<FilterFindOneEquipmentVehicle_CategoryOperatorsInput>;
  weapon_category?: InputMaybe<FilterFindOneEquipmentWeapon_CategoryOperatorsInput>;
  weapon_range?: InputMaybe<FilterFindOneEquipmentWeapon_RangeOperatorsInput>;
  weight?: InputMaybe<FilterFindOneEquipmentWeightOperatorsInput>;
};

export type FilterFindOneEquipmentPropertiesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type FilterFindOneEquipmentRangeLongOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentRangeNormalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentRangeOperatorsInput = {
  long?: InputMaybe<FilterFindOneEquipmentRangeLongOperatorsInput>;
  normal?: InputMaybe<FilterFindOneEquipmentRangeNormalOperatorsInput>;
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

export type FilterFindOneEquipmentSpeedOperatorsInput = {
  quantity?: InputMaybe<FilterFindOneEquipmentSpeedQuantityOperatorsInput>;
  unit?: InputMaybe<FilterFindOneEquipmentSpeedUnitOperatorsInput>;
};

export type FilterFindOneEquipmentSpeedQuantityOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentSpeedUnitOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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

export type FilterFindOneEquipmentThrow_RangeLongOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentThrow_RangeNormalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentThrow_RangeOperatorsInput = {
  long?: InputMaybe<FilterFindOneEquipmentThrow_RangeLongOperatorsInput>;
  normal?: InputMaybe<FilterFindOneEquipmentThrow_RangeNormalOperatorsInput>;
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

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput = {
  index?: InputMaybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  damage_type?: InputMaybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeInput>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageOperatorsInput = {
  damage_dice?: InputMaybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput>;
  damage_type?: InputMaybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput>;
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

export type FilterFindOneFeatPrerequisitesAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatPrerequisitesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindOneFeatPrerequisitesAbility_ScoreInput>;
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

export type FilterFindOneFeatureChoiceChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneFeatureChoiceFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureChoiceInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneFeatureChoiceFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureChoiceOperatorsInput = {
  choose?: InputMaybe<FilterFindOneFeatureChoiceChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneFeatureChoiceTypeOperatorsInput>;
};

export type FilterFindOneFeatureChoiceTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureClassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureClassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureClassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureClassOperatorsInput = {
  index?: InputMaybe<FilterFindOneFeatureClassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneFeatureClassNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneFeatureClassUrlOperatorsInput>;
};

export type FilterFindOneFeatureClassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  expertise_options?: InputMaybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsInput>;
  subfeature_options?: InputMaybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsInput>;
};

export type FilterFindOneFeatureFeature_SpecificOperatorsInput = {
  expertise_options?: InputMaybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsOperatorsInput>;
  subfeature_options?: InputMaybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  class?: InputMaybe<FilterFindOneFeatureClassInput>;
  desc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feature_specific?: InputMaybe<FilterFindOneFeatureFeature_SpecificInput>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<FilterFindOneFeatureParentInput>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindOneFeaturePrerequisitesInput>>>;
  reference?: InputMaybe<Scalars['String']>;
  subclass?: InputMaybe<FilterFindOneFeatureSubclassInput>;
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
  choice?: InputMaybe<FilterFindOneFeatureChoiceOperatorsInput>;
  class?: InputMaybe<FilterFindOneFeatureClassOperatorsInput>;
  desc?: InputMaybe<FilterFindOneFeatureDescOperatorsInput>;
  feature_specific?: InputMaybe<FilterFindOneFeatureFeature_SpecificOperatorsInput>;
  index?: InputMaybe<FilterFindOneFeatureIndexOperatorsInput>;
  level?: InputMaybe<FilterFindOneFeatureLevelOperatorsInput>;
  name?: InputMaybe<FilterFindOneFeatureNameOperatorsInput>;
  parent?: InputMaybe<FilterFindOneFeatureParentOperatorsInput>;
  reference?: InputMaybe<FilterFindOneFeatureReferenceOperatorsInput>;
  subclass?: InputMaybe<FilterFindOneFeatureSubclassOperatorsInput>;
  url?: InputMaybe<FilterFindOneFeatureUrlOperatorsInput>;
};

export type FilterFindOneFeatureParentIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureParentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureParentNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureParentOperatorsInput = {
  index?: InputMaybe<FilterFindOneFeatureParentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneFeatureParentNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneFeatureParentUrlOperatorsInput>;
};

export type FilterFindOneFeatureParentUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeaturePrerequisitesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
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

export type FilterFindOneFeatureSubclassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureSubclassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneFeatureSubclassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureSubclassOperatorsInput = {
  index?: InputMaybe<FilterFindOneFeatureSubclassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneFeatureSubclassNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneFeatureSubclassUrlOperatorsInput>;
};

export type FilterFindOneFeatureSubclassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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

export type FilterFindOneLevelClassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelClassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneLevelClassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelClassOperatorsInput = {
  index?: InputMaybe<FilterFindOneLevelClassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneLevelClassNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneLevelClassUrlOperatorsInput>;
};

export type FilterFindOneLevelClassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelClass_SpecificAction_SurgesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificAura_RangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificBardic_Inspiration_DieOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificBrutal_Critical_DiceOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput = {
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
  _id?: InputMaybe<Scalars['MongoID']>;
  sorcery_point_cost?: InputMaybe<Scalars['Float']>;
  spell_slot_level?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificDestroy_Undead_CrOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificExtra_AttacksOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificFavored_EnemiesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificFavored_TerrainOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificIndomitable_UsesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
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

export type FilterFindOneLevelClass_SpecificInvocations_KnownOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificKi_PointsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: InputMaybe<Scalars['Float']>;
  dice_value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsOperatorsInput = {
  dice_count?: InputMaybe<FilterFindOneLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput>;
  dice_value?: InputMaybe<FilterFindOneLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificMetamagic_KnownOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificOperatorsInput = {
  action_surges?: InputMaybe<FilterFindOneLevelClass_SpecificAction_SurgesOperatorsInput>;
  arcane_recovery_levels?: InputMaybe<FilterFindOneLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput>;
  aura_range?: InputMaybe<FilterFindOneLevelClass_SpecificAura_RangeOperatorsInput>;
  bardic_inspiration_die?: InputMaybe<FilterFindOneLevelClass_SpecificBardic_Inspiration_DieOperatorsInput>;
  brutal_critical_dice?: InputMaybe<FilterFindOneLevelClass_SpecificBrutal_Critical_DiceOperatorsInput>;
  channel_divinity_charges?: InputMaybe<FilterFindOneLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput>;
  destroy_undead_cr?: InputMaybe<FilterFindOneLevelClass_SpecificDestroy_Undead_CrOperatorsInput>;
  extra_attacks?: InputMaybe<FilterFindOneLevelClass_SpecificExtra_AttacksOperatorsInput>;
  favored_enemies?: InputMaybe<FilterFindOneLevelClass_SpecificFavored_EnemiesOperatorsInput>;
  favored_terrain?: InputMaybe<FilterFindOneLevelClass_SpecificFavored_TerrainOperatorsInput>;
  indomitable_uses?: InputMaybe<FilterFindOneLevelClass_SpecificIndomitable_UsesOperatorsInput>;
  invocations_known?: InputMaybe<FilterFindOneLevelClass_SpecificInvocations_KnownOperatorsInput>;
  ki_points?: InputMaybe<FilterFindOneLevelClass_SpecificKi_PointsOperatorsInput>;
  magical_secrets_max_5?: InputMaybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput>;
  magical_secrets_max_7?: InputMaybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput>;
  magical_secrets_max_9?: InputMaybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput>;
  martial_arts?: InputMaybe<FilterFindOneLevelClass_SpecificMartial_ArtsOperatorsInput>;
  metamagic_known?: InputMaybe<FilterFindOneLevelClass_SpecificMetamagic_KnownOperatorsInput>;
  mystic_arcanum_level_6?: InputMaybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput>;
  mystic_arcanum_level_7?: InputMaybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput>;
  mystic_arcanum_level_8?: InputMaybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput>;
  mystic_arcanum_level_9?: InputMaybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput>;
  rage_count?: InputMaybe<FilterFindOneLevelClass_SpecificRage_CountOperatorsInput>;
  rage_damage_bonus?: InputMaybe<FilterFindOneLevelClass_SpecificRage_Damage_BonusOperatorsInput>;
  sneak_attack?: InputMaybe<FilterFindOneLevelClass_SpecificSneak_AttackOperatorsInput>;
  song_of_rest_die?: InputMaybe<FilterFindOneLevelClass_SpecificSong_Of_Rest_DieOperatorsInput>;
  sorcery_points?: InputMaybe<FilterFindOneLevelClass_SpecificSorcery_PointsOperatorsInput>;
  unarmored_movement?: InputMaybe<FilterFindOneLevelClass_SpecificUnarmored_MovementOperatorsInput>;
  wild_shape_fly?: InputMaybe<FilterFindOneLevelClass_SpecificWild_Shape_FlyOperatorsInput>;
  wild_shape_max_cr?: InputMaybe<FilterFindOneLevelClass_SpecificWild_Shape_Max_CrOperatorsInput>;
  wild_shape_swim?: InputMaybe<FilterFindOneLevelClass_SpecificWild_Shape_SwimOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificRage_CountOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificRage_Damage_BonusOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackDice_CountOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackInput = {
  dice_count?: InputMaybe<Scalars['Float']>;
  dice_value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackOperatorsInput = {
  dice_count?: InputMaybe<FilterFindOneLevelClass_SpecificSneak_AttackDice_CountOperatorsInput>;
  dice_value?: InputMaybe<FilterFindOneLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificSong_Of_Rest_DieOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificSorcery_PointsOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificUnarmored_MovementOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_FlyOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_Max_CrOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_SwimOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindOneLevelFeaturesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  class?: InputMaybe<FilterFindOneLevelClassInput>;
  class_specific?: InputMaybe<FilterFindOneLevelClass_SpecificInput>;
  features?: InputMaybe<Array<InputMaybe<FilterFindOneLevelFeaturesInput>>>;
  index?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  prof_bonus?: InputMaybe<Scalars['Float']>;
  spellcasting?: InputMaybe<FilterFindOneLevelSpellcastingInput>;
  subclass?: InputMaybe<FilterFindOneLevelSubclassInput>;
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
  class?: InputMaybe<FilterFindOneLevelClassOperatorsInput>;
  class_specific?: InputMaybe<FilterFindOneLevelClass_SpecificOperatorsInput>;
  index?: InputMaybe<FilterFindOneLevelIndexOperatorsInput>;
  level?: InputMaybe<FilterFindOneLevelLevelOperatorsInput>;
  prof_bonus?: InputMaybe<FilterFindOneLevelProf_BonusOperatorsInput>;
  spellcasting?: InputMaybe<FilterFindOneLevelSpellcastingOperatorsInput>;
  subclass?: InputMaybe<FilterFindOneLevelSubclassOperatorsInput>;
  subclass_specific?: InputMaybe<FilterFindOneLevelSubclass_SpecificOperatorsInput>;
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

export type FilterFindOneLevelSpellcastingCantrips_KnownOperatorsInput = {
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

export type FilterFindOneLevelSpellcastingOperatorsInput = {
  cantrips_known?: InputMaybe<FilterFindOneLevelSpellcastingCantrips_KnownOperatorsInput>;
  spell_slots_level_1?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_1OperatorsInput>;
  spell_slots_level_2?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_2OperatorsInput>;
  spell_slots_level_3?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_3OperatorsInput>;
  spell_slots_level_4?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_4OperatorsInput>;
  spell_slots_level_5?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_5OperatorsInput>;
  spell_slots_level_6?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_6OperatorsInput>;
  spell_slots_level_7?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_7OperatorsInput>;
  spell_slots_level_8?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_8OperatorsInput>;
  spell_slots_level_9?: InputMaybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_9OperatorsInput>;
  spells_known?: InputMaybe<FilterFindOneLevelSpellcastingSpells_KnownOperatorsInput>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_1OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_2OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_3OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_4OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_5OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_6OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_7OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_8OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_9OperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpells_KnownOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSubclassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelSubclassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneLevelSubclassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelSubclassOperatorsInput = {
  index?: InputMaybe<FilterFindOneLevelSubclassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneLevelSubclassNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneLevelSubclassUrlOperatorsInput>;
};

export type FilterFindOneLevelSubclassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSubclass_SpecificAura_RangeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: InputMaybe<Scalars['Float']>;
  aura_range?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneLevelSubclass_SpecificOperatorsInput = {
  additional_magical_secrets_max_lvl?: InputMaybe<FilterFindOneLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput>;
  aura_range?: InputMaybe<FilterFindOneLevelSubclass_SpecificAura_RangeOperatorsInput>;
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

export type FilterFindOneMagicItemEquipment_CategoryIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemEquipment_CategoryInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMagicItemEquipment_CategoryNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemEquipment_CategoryOperatorsInput = {
  index?: InputMaybe<FilterFindOneMagicItemEquipment_CategoryIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneMagicItemEquipment_CategoryNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneMagicItemEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindOneMagicItemEquipment_CategoryUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  equipment_category?: InputMaybe<FilterFindOneMagicItemEquipment_CategoryInput>;
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
  equipment_category?: InputMaybe<FilterFindOneMagicItemEquipment_CategoryOperatorsInput>;
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

export type FilterFindOneMonsterActionsDamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterActionsDamageInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  damage_dice?: InputMaybe<Scalars['String']>;
  damage_type?: InputMaybe<FilterFindOneMonsterActionsDamageDamage_TypeInput>;
};

export type FilterFindOneMonsterActionsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  attack_bonus?: InputMaybe<Scalars['Float']>;
  damage?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterActionsDamageInput>>>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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

export type FilterFindOneMonsterCondition_ImmunitiesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type FilterFindOneMonsterFormsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  condition_immunities?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterCondition_ImmunitiesInput>>>;
  constitution?: InputMaybe<Scalars['Float']>;
  damage_immunities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_resistances?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  damage_vulnerabilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dexterity?: InputMaybe<Scalars['Float']>;
  forms?: InputMaybe<Array<InputMaybe<FilterFindOneMonsterFormsInput>>>;
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
  _id?: InputMaybe<Scalars['MongoID']>;
  attack_bonus?: InputMaybe<Scalars['Float']>;
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
  dexterity?: InputMaybe<FilterFindOneMonsterDexterityOperatorsInput>;
  hit_dice?: InputMaybe<FilterFindOneMonsterHit_DiceOperatorsInput>;
  hit_points?: InputMaybe<FilterFindOneMonsterHit_PointsOperatorsInput>;
  index?: InputMaybe<FilterFindOneMonsterIndexOperatorsInput>;
  intelligence?: InputMaybe<FilterFindOneMonsterIntelligenceOperatorsInput>;
  languages?: InputMaybe<FilterFindOneMonsterLanguagesOperatorsInput>;
  name?: InputMaybe<FilterFindOneMonsterNameOperatorsInput>;
  senses?: InputMaybe<FilterFindOneMonsterSensesOperatorsInput>;
  size?: InputMaybe<FilterFindOneMonsterSizeOperatorsInput>;
  speed?: InputMaybe<FilterFindOneMonsterSpeedOperatorsInput>;
  strength?: InputMaybe<FilterFindOneMonsterStrengthOperatorsInput>;
  subtype?: InputMaybe<FilterFindOneMonsterSubtypeOperatorsInput>;
  type?: InputMaybe<FilterFindOneMonsterTypeOperatorsInput>;
  url?: InputMaybe<FilterFindOneMonsterUrlOperatorsInput>;
  wisdom?: InputMaybe<FilterFindOneMonsterWisdomOperatorsInput>;
  xp?: InputMaybe<FilterFindOneMonsterXpOperatorsInput>;
};

export type FilterFindOneMonsterProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  proficiency?: InputMaybe<FilterFindOneMonsterProficienciesProficiencyInput>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneMonsterProficienciesProficiencyInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterReactionsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterSensesBlindsightOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSensesDarkvisionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSensesInput = {
  blindsight?: InputMaybe<Scalars['String']>;
  darkvision?: InputMaybe<Scalars['String']>;
  passive_perception?: InputMaybe<Scalars['Float']>;
  tremorsense?: InputMaybe<Scalars['String']>;
  truesight?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterSensesOperatorsInput = {
  blindsight?: InputMaybe<FilterFindOneMonsterSensesBlindsightOperatorsInput>;
  darkvision?: InputMaybe<FilterFindOneMonsterSensesDarkvisionOperatorsInput>;
  passive_perception?: InputMaybe<FilterFindOneMonsterSensesPassive_PerceptionOperatorsInput>;
  tremorsense?: InputMaybe<FilterFindOneMonsterSensesTremorsenseOperatorsInput>;
  truesight?: InputMaybe<FilterFindOneMonsterSensesTruesightOperatorsInput>;
};

export type FilterFindOneMonsterSensesPassive_PerceptionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterSensesTremorsenseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSensesTruesightOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  _id?: InputMaybe<Scalars['MongoID']>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterSpeedBurrowOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpeedClimbOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpeedFlyOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpeedHoverOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FilterFindOneMonsterSpeedInput = {
  burrow?: InputMaybe<Scalars['String']>;
  climb?: InputMaybe<Scalars['String']>;
  fly?: InputMaybe<Scalars['String']>;
  hover?: InputMaybe<Scalars['Boolean']>;
  swim?: InputMaybe<Scalars['String']>;
  walk?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneMonsterSpeedOperatorsInput = {
  burrow?: InputMaybe<FilterFindOneMonsterSpeedBurrowOperatorsInput>;
  climb?: InputMaybe<FilterFindOneMonsterSpeedClimbOperatorsInput>;
  fly?: InputMaybe<FilterFindOneMonsterSpeedFlyOperatorsInput>;
  hover?: InputMaybe<FilterFindOneMonsterSpeedHoverOperatorsInput>;
  swim?: InputMaybe<FilterFindOneMonsterSpeedSwimOperatorsInput>;
  walk?: InputMaybe<FilterFindOneMonsterSpeedWalkOperatorsInput>;
};

export type FilterFindOneMonsterSpeedSwimOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpeedWalkOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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

export type FilterFindOneProficiencyClassesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  classes?: InputMaybe<Array<InputMaybe<FilterFindOneProficiencyClassesInput>>>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  races?: InputMaybe<Array<InputMaybe<FilterFindOneProficiencyRacesInput>>>;
  references?: InputMaybe<Array<InputMaybe<FilterFindOneProficiencyReferencesInput>>>;
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

export type FilterFindOneProficiencyRacesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneProficiencyReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
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

export type FilterFindOneRaceAbility_Bonus_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsFromAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindOneRaceAbility_Bonus_OptionsFromAbility_ScoreInput>;
  bonus?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneRaceAbility_Bonus_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneRaceAbility_Bonus_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneRaceAbility_Bonus_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceAbility_BonusesAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_BonusesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindOneRaceAbility_BonusesAbility_ScoreInput>;
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
  languages?: InputMaybe<Array<InputMaybe<FilterFindOneRaceLanguagesInput>>>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  size_description?: InputMaybe<Scalars['String']>;
  speed?: InputMaybe<Scalars['Float']>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneRaceStarting_ProficienciesInput>>>;
  starting_proficiency_options?: InputMaybe<FilterFindOneRaceStarting_Proficiency_OptionsInput>;
  subraces?: InputMaybe<Array<InputMaybe<FilterFindOneRaceSubracesInput>>>;
  traits?: InputMaybe<Array<InputMaybe<FilterFindOneRaceTraitsInput>>>;
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

export type FilterFindOneRaceLanguage_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneRaceLanguage_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneRaceLanguage_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceLanguage_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneRaceLanguage_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneRaceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceLanguage_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceLanguagesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  ability_bonus_options?: InputMaybe<FilterFindOneRaceAbility_Bonus_OptionsOperatorsInput>;
  age?: InputMaybe<FilterFindOneRaceAgeOperatorsInput>;
  alignment?: InputMaybe<FilterFindOneRaceAlignmentOperatorsInput>;
  index?: InputMaybe<FilterFindOneRaceIndexOperatorsInput>;
  language_desc?: InputMaybe<FilterFindOneRaceLanguage_DescOperatorsInput>;
  language_options?: InputMaybe<FilterFindOneRaceLanguage_OptionsOperatorsInput>;
  name?: InputMaybe<FilterFindOneRaceNameOperatorsInput>;
  size?: InputMaybe<FilterFindOneRaceSizeOperatorsInput>;
  size_description?: InputMaybe<FilterFindOneRaceSize_DescriptionOperatorsInput>;
  speed?: InputMaybe<FilterFindOneRaceSpeedOperatorsInput>;
  starting_proficiency_options?: InputMaybe<FilterFindOneRaceStarting_Proficiency_OptionsOperatorsInput>;
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

export type FilterFindOneRaceStarting_ProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneRaceStarting_Proficiency_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneRaceStarting_Proficiency_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneRaceStarting_Proficiency_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceSubracesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneRaceTraitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  subsections?: InputMaybe<Array<InputMaybe<FilterFindOneRuleSubsectionsInput>>>;
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

export type FilterFindOneRuleSubsectionsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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

export type FilterFindOneSkillAbility_ScoreIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSkillAbility_ScoreNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillAbility_ScoreOperatorsInput = {
  index?: InputMaybe<FilterFindOneSkillAbility_ScoreIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneSkillAbility_ScoreNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneSkillAbility_ScoreUrlOperatorsInput>;
};

export type FilterFindOneSkillAbility_ScoreUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  ability_score?: InputMaybe<FilterFindOneSkillAbility_ScoreInput>;
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
  ability_score?: InputMaybe<FilterFindOneSkillAbility_ScoreOperatorsInput>;
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

export type FilterFindOneSpellClassesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpellDamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpellDamageInput = {
  damage_at_character_level?: InputMaybe<Scalars['JSON']>;
  damage_at_slot_level?: InputMaybe<Scalars['JSON']>;
  damage_type?: InputMaybe<FilterFindOneSpellDamageDamage_TypeInput>;
};

export type FilterFindOneSpellDcDc_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpellDcInput = {
  dc_success?: InputMaybe<Scalars['String']>;
  dc_type?: InputMaybe<FilterFindOneSpellDcDc_TypeInput>;
  desc?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpellInput = {
  AND?: InputMaybe<Array<FilterFindOneSpellInput>>;
  OR?: InputMaybe<Array<FilterFindOneSpellInput>>;
  _id?: InputMaybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneSpellOperatorsInput>;
  area_of_effect?: InputMaybe<FilterFindOneSpellArea_Of_EffectInput>;
  attack_type?: InputMaybe<Scalars['String']>;
  casting_time?: InputMaybe<Scalars['String']>;
  classes?: InputMaybe<Array<InputMaybe<FilterFindOneSpellClassesInput>>>;
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
  school?: InputMaybe<FilterFindOneSpellSchoolInput>;
  subclasses?: InputMaybe<Array<InputMaybe<FilterFindOneSpellSubclassesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSpellOperatorsInput = {
  _id?: InputMaybe<FilterFindOneSpell_IdOperatorsInput>;
  school?: InputMaybe<FilterFindOneSpellSchoolOperatorsInput>;
};

export type FilterFindOneSpellSchoolIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellSchoolInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpellSchoolNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellSchoolOperatorsInput = {
  index?: InputMaybe<FilterFindOneSpellSchoolIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneSpellSchoolNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneSpellSchoolUrlOperatorsInput>;
};

export type FilterFindOneSpellSchoolUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellSubclassesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSpell_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassClassIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassClassInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubclassClassNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassClassOperatorsInput = {
  index?: InputMaybe<FilterFindOneSubclassClassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneSubclassClassNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneSubclassClassUrlOperatorsInput>;
};

export type FilterFindOneSubclassClassUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
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
  class?: InputMaybe<FilterFindOneSubclassClassInput>;
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
  class?: InputMaybe<FilterFindOneSubclassClassOperatorsInput>;
  desc?: InputMaybe<FilterFindOneSubclassDescOperatorsInput>;
  index?: InputMaybe<FilterFindOneSubclassIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneSubclassNameOperatorsInput>;
  subclass_flavor?: InputMaybe<FilterFindOneSubclassSubclass_FlavorOperatorsInput>;
  subclass_levels?: InputMaybe<FilterFindOneSubclassSubclass_LevelsOperatorsInput>;
  url?: InputMaybe<FilterFindOneSubclassUrlOperatorsInput>;
};

export type FilterFindOneSubclassSpellsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  prerequisites?: InputMaybe<Array<InputMaybe<FilterFindOneSubclassSpellsPrerequisitesInput>>>;
  spell?: InputMaybe<FilterFindOneSubclassSpellsSpellInput>;
};

export type FilterFindOneSubclassSpellsPrerequisitesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubclassSpellsSpellInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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

export type FilterFindOneSubraceAbility_BonusesAbility_ScoreInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubraceAbility_BonusesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  ability_score?: InputMaybe<FilterFindOneSubraceAbility_BonusesAbility_ScoreInput>;
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
  race?: InputMaybe<FilterFindOneSubraceRaceInput>;
  racial_traits?: InputMaybe<Array<InputMaybe<FilterFindOneSubraceRacial_TraitsInput>>>;
  starting_proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneSubraceStarting_ProficienciesInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubraceLanguage_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneSubraceLanguage_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubraceLanguage_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneSubraceLanguage_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubraceLanguage_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneSubraceLanguage_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneSubraceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneSubraceLanguage_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  language_options?: InputMaybe<FilterFindOneSubraceLanguage_OptionsOperatorsInput>;
  name?: InputMaybe<FilterFindOneSubraceNameOperatorsInput>;
  race?: InputMaybe<FilterFindOneSubraceRaceOperatorsInput>;
  url?: InputMaybe<FilterFindOneSubraceUrlOperatorsInput>;
};

export type FilterFindOneSubraceRaceIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceRaceInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubraceRaceNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceRaceOperatorsInput = {
  index?: InputMaybe<FilterFindOneSubraceRaceIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneSubraceRaceNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneSubraceRaceUrlOperatorsInput>;
};

export type FilterFindOneSubraceRaceUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceRacial_TraitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneSubraceStarting_ProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  parent?: InputMaybe<FilterFindOneTraitParentInput>;
  proficiencies?: InputMaybe<Array<InputMaybe<FilterFindOneTraitProficienciesInput>>>;
  proficiency_choices?: InputMaybe<FilterFindOneTraitProficiency_ChoicesInput>;
  races?: InputMaybe<Array<InputMaybe<FilterFindOneTraitRacesInput>>>;
  subraces?: InputMaybe<Array<InputMaybe<FilterFindOneTraitSubracesInput>>>;
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
  parent?: InputMaybe<FilterFindOneTraitParentOperatorsInput>;
  proficiency_choices?: InputMaybe<FilterFindOneTraitProficiency_ChoicesOperatorsInput>;
  trait_specific?: InputMaybe<FilterFindOneTraitTrait_SpecificOperatorsInput>;
  url?: InputMaybe<FilterFindOneTraitUrlOperatorsInput>;
};

export type FilterFindOneTraitParentIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitParentInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitParentNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitParentOperatorsInput = {
  index?: InputMaybe<FilterFindOneTraitParentIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneTraitParentNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneTraitParentUrlOperatorsInput>;
};

export type FilterFindOneTraitParentUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitProficienciesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitProficiency_ChoicesChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneTraitProficiency_ChoicesFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitProficiency_ChoicesInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneTraitProficiency_ChoicesFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitProficiency_ChoicesOperatorsInput = {
  choose?: InputMaybe<FilterFindOneTraitProficiency_ChoicesChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneTraitProficiency_ChoicesTypeOperatorsInput>;
};

export type FilterFindOneTraitProficiency_ChoicesTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitRacesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitSubracesInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDamageInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  damage_at_character_level?: InputMaybe<Scalars['JSON']>;
  damage_type?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput = {
  index?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcInput = {
  dc_type?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeInput>;
  success_type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcOperatorsInput = {
  dc_type?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput>;
  success_type?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDescOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponInput = {
  damage?: InputMaybe<Array<InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDamageInput>>>;
  dc?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcInput>;
  desc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponOperatorsInput = {
  dc?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcOperatorsInput>;
  desc?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDescOperatorsInput>;
  name?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponNameOperatorsInput>;
  usage?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageInput = {
  times?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageOperatorsInput = {
  times?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput>;
  type?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeIndexOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeInput = {
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeOperatorsInput = {
  index?: InputMaybe<FilterFindOneTraitTrait_SpecificDamage_TypeIndexOperatorsInput>;
  name?: InputMaybe<FilterFindOneTraitTrait_SpecificDamage_TypeNameOperatorsInput>;
  url?: InputMaybe<FilterFindOneTraitTrait_SpecificDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeUrlOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificInput = {
  breath_weapon?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponInput>;
  damage_type?: InputMaybe<FilterFindOneTraitTrait_SpecificDamage_TypeInput>;
  spell_options?: InputMaybe<FilterFindOneTraitTrait_SpecificSpell_OptionsInput>;
  subtrait_options?: InputMaybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput>;
};

export type FilterFindOneTraitTrait_SpecificOperatorsInput = {
  breath_weapon?: InputMaybe<FilterFindOneTraitTrait_SpecificBreath_WeaponOperatorsInput>;
  damage_type?: InputMaybe<FilterFindOneTraitTrait_SpecificDamage_TypeOperatorsInput>;
  spell_options?: InputMaybe<FilterFindOneTraitTrait_SpecificSpell_OptionsOperatorsInput>;
  subtrait_options?: InputMaybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneTraitTrait_SpecificSpell_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneTraitTrait_SpecificSpell_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneTraitTrait_SpecificSpell_OptionsTypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsFromInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  index?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput = {
  choose?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Array<InputMaybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsFromInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsOperatorsInput = {
  choose?: InputMaybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput>;
  type?: InputMaybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']>;
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
  class?: Maybe<LevelClass>;
  class_specific?: Maybe<LevelClass_Specific>;
  features: Array<Feature>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  prof_bonus?: Maybe<Scalars['Float']>;
  spellcasting?: Maybe<LevelSpellcasting>;
  subclass?: Maybe<LevelSubclass>;
  subclass_specific?: Maybe<LevelSubclass_Specific>;
  url?: Maybe<Scalars['String']>;
};


export type LevelFeaturesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyFeatureInput>;
};

export type LevelClass = {
  __typename?: 'LevelClass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  _id?: Maybe<Scalars['MongoID']>;
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

export type LevelSubclass = {
  __typename?: 'LevelSubclass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  equipment_category?: Maybe<MagicItemEquipment_Category>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MagicItemEquipment_Category = {
  __typename?: 'MagicItemEquipment_category';
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
  condition_immunities?: Maybe<Array<Maybe<MonsterCondition_Immunities>>>;
  constitution?: Maybe<Scalars['Float']>;
  damage_immunities?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  dexterity?: Maybe<Scalars['Float']>;
  forms?: Maybe<Array<Maybe<MonsterForms>>>;
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
  _id?: Maybe<Scalars['MongoID']>;
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<MonsterActionsDamage>>>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterActionsDamage = {
  __typename?: 'MonsterActionsDamage';
  _id?: Maybe<Scalars['MongoID']>;
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<MonsterActionsDamageDamage_Type>;
};

export type MonsterActionsDamageDamage_Type = {
  __typename?: 'MonsterActionsDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterCondition_Immunities = {
  __typename?: 'MonsterCondition_immunities';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterForms = {
  __typename?: 'MonsterForms';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterLegendary_Actions = {
  __typename?: 'MonsterLegendary_actions';
  _id?: Maybe<Scalars['MongoID']>;
  attack_bonus?: Maybe<Scalars['Float']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterProficiencies = {
  __typename?: 'MonsterProficiencies';
  _id?: Maybe<Scalars['MongoID']>;
  proficiency?: Maybe<MonsterProficienciesProficiency>;
  value?: Maybe<Scalars['Float']>;
};

export type MonsterProficienciesProficiency = {
  __typename?: 'MonsterProficienciesProficiency';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterReactions = {
  __typename?: 'MonsterReactions';
  _id?: Maybe<Scalars['MongoID']>;
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
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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
  classes?: Maybe<Array<Maybe<ProficiencyClasses>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<ProficiencyRaces>>>;
  references?: Maybe<Array<Maybe<ProficiencyReferences>>>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProficiencyClasses = {
  __typename?: 'ProficiencyClasses';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProficiencyRaces = {
  __typename?: 'ProficiencyRaces';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProficiencyReferences = {
  __typename?: 'ProficiencyReferences';
  _id?: Maybe<Scalars['MongoID']>;
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
  languages?: Maybe<Array<Maybe<RaceLanguages>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_description?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  starting_proficiencies?: Maybe<Array<Maybe<RaceStarting_Proficiencies>>>;
  starting_proficiency_options?: Maybe<RaceStarting_Proficiency_Options>;
  subraces?: Maybe<Array<Maybe<RaceSubraces>>>;
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
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<RaceAbility_Bonus_OptionsFromAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
};

export type RaceAbility_Bonus_OptionsFromAbility_Score = {
  __typename?: 'RaceAbility_bonus_optionsFromAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceAbility_Bonuses = {
  __typename?: 'RaceAbility_bonuses';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<RaceAbility_BonusesAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
};

export type RaceAbility_BonusesAbility_Score = {
  __typename?: 'RaceAbility_bonusesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceLanguage_Options = {
  __typename?: 'RaceLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceLanguage_OptionsFrom = {
  __typename?: 'RaceLanguage_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceLanguages = {
  __typename?: 'RaceLanguages';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceStarting_Proficiencies = {
  __typename?: 'RaceStarting_proficiencies';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceStarting_Proficiency_Options = {
  __typename?: 'RaceStarting_proficiency_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceStarting_Proficiency_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceStarting_Proficiency_OptionsFrom = {
  __typename?: 'RaceStarting_proficiency_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceSubraces = {
  __typename?: 'RaceSubraces';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  ability_score?: Maybe<SkillAbility_Score>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SkillAbility_Score = {
  __typename?: 'SkillAbility_score';
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
  BondsChooseAsc = 'BONDS__CHOOSE_ASC',
  BondsChooseDesc = 'BONDS__CHOOSE_DESC',
  BondsFromAsc = 'BONDS__FROM_ASC',
  BondsFromDesc = 'BONDS__FROM_DESC',
  BondsTypeAsc = 'BONDS__TYPE_ASC',
  BondsTypeDesc = 'BONDS__TYPE_DESC',
  FeatureDescAsc = 'FEATURE__DESC_ASC',
  FeatureDescDesc = 'FEATURE__DESC_DESC',
  FeatureNameAsc = 'FEATURE__NAME_ASC',
  FeatureNameDesc = 'FEATURE__NAME_DESC',
  FlawsChooseAsc = 'FLAWS__CHOOSE_ASC',
  FlawsChooseDesc = 'FLAWS__CHOOSE_DESC',
  FlawsFromAsc = 'FLAWS__FROM_ASC',
  FlawsFromDesc = 'FLAWS__FROM_DESC',
  FlawsTypeAsc = 'FLAWS__TYPE_ASC',
  FlawsTypeDesc = 'FLAWS__TYPE_DESC',
  IdealsChooseAsc = 'IDEALS__CHOOSE_ASC',
  IdealsChooseDesc = 'IDEALS__CHOOSE_DESC',
  IdealsTypeAsc = 'IDEALS__TYPE_ASC',
  IdealsTypeDesc = 'IDEALS__TYPE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PersonalityTraitsChooseAsc = 'PERSONALITY_TRAITS__CHOOSE_ASC',
  PersonalityTraitsChooseDesc = 'PERSONALITY_TRAITS__CHOOSE_DESC',
  PersonalityTraitsFromAsc = 'PERSONALITY_TRAITS__FROM_ASC',
  PersonalityTraitsFromDesc = 'PERSONALITY_TRAITS__FROM_DESC',
  PersonalityTraitsTypeAsc = 'PERSONALITY_TRAITS__TYPE_ASC',
  PersonalityTraitsTypeDesc = 'PERSONALITY_TRAITS__TYPE_DESC',
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
  MultiClassingPrerequisiteOptionsChooseAsc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_ASC',
  MultiClassingPrerequisiteOptionsChooseDesc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_DESC',
  MultiClassingPrerequisiteOptionsTypeAsc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_ASC',
  MultiClassingPrerequisiteOptionsTypeDesc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SpellcastingLevelAsc = 'SPELLCASTING__LEVEL_ASC',
  SpellcastingLevelDesc = 'SPELLCASTING__LEVEL_DESC',
  SpellcastingSpellcastingAbilityIndexAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_ASC',
  SpellcastingSpellcastingAbilityIndexDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_DESC',
  SpellcastingSpellcastingAbilityNameAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_ASC',
  SpellcastingSpellcastingAbilityNameDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_DESC',
  SpellcastingSpellcastingAbilityUrlAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_ASC',
  SpellcastingSpellcastingAbilityUrlDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_DESC',
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
  ArmorClassBaseAsc = 'ARMOR_CLASS__BASE_ASC',
  ArmorClassBaseDesc = 'ARMOR_CLASS__BASE_DESC',
  ArmorClassDexBonusAsc = 'ARMOR_CLASS__DEX_BONUS_ASC',
  ArmorClassDexBonusDesc = 'ARMOR_CLASS__DEX_BONUS_DESC',
  ArmorClassMaxBonusAsc = 'ARMOR_CLASS__MAX_BONUS_ASC',
  ArmorClassMaxBonusDesc = 'ARMOR_CLASS__MAX_BONUS_DESC',
  CapacityAsc = 'CAPACITY_ASC',
  CapacityDesc = 'CAPACITY_DESC',
  CategoryRangeAsc = 'CATEGORY_RANGE_ASC',
  CategoryRangeDesc = 'CATEGORY_RANGE_DESC',
  CostQuantityAsc = 'COST__QUANTITY_ASC',
  CostQuantityDesc = 'COST__QUANTITY_DESC',
  CostUnitAsc = 'COST__UNIT_ASC',
  CostUnitDesc = 'COST__UNIT_DESC',
  DamageDamageDiceAsc = 'DAMAGE__DAMAGE_DICE_ASC',
  DamageDamageDiceDesc = 'DAMAGE__DAMAGE_DICE_DESC',
  DamageDamageTypeIndexAsc = 'DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  DamageDamageTypeIndexDesc = 'DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  DamageDamageTypeNameAsc = 'DAMAGE__DAMAGE_TYPE__NAME_ASC',
  DamageDamageTypeNameDesc = 'DAMAGE__DAMAGE_TYPE__NAME_DESC',
  DamageDamageTypeUrlAsc = 'DAMAGE__DAMAGE_TYPE__URL_ASC',
  DamageDamageTypeUrlDesc = 'DAMAGE__DAMAGE_TYPE__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  GearCategoryIndexAsc = 'GEAR_CATEGORY__INDEX_ASC',
  GearCategoryIndexDesc = 'GEAR_CATEGORY__INDEX_DESC',
  GearCategoryNameAsc = 'GEAR_CATEGORY__NAME_ASC',
  GearCategoryNameDesc = 'GEAR_CATEGORY__NAME_DESC',
  GearCategoryUrlAsc = 'GEAR_CATEGORY__URL_ASC',
  GearCategoryUrlDesc = 'GEAR_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  RangeLongAsc = 'RANGE__LONG_ASC',
  RangeLongDesc = 'RANGE__LONG_DESC',
  RangeNormalAsc = 'RANGE__NORMAL_ASC',
  RangeNormalDesc = 'RANGE__NORMAL_DESC',
  SpecialAsc = 'SPECIAL_ASC',
  SpecialDesc = 'SPECIAL_DESC',
  SpeedQuantityAsc = 'SPEED__QUANTITY_ASC',
  SpeedQuantityDesc = 'SPEED__QUANTITY_DESC',
  SpeedUnitAsc = 'SPEED__UNIT_ASC',
  SpeedUnitDesc = 'SPEED__UNIT_DESC',
  StealthDisadvantageAsc = 'STEALTH_DISADVANTAGE_ASC',
  StealthDisadvantageDesc = 'STEALTH_DISADVANTAGE_DESC',
  StrMinimumAsc = 'STR_MINIMUM_ASC',
  StrMinimumDesc = 'STR_MINIMUM_DESC',
  ThrowRangeLongAsc = 'THROW_RANGE__LONG_ASC',
  ThrowRangeLongDesc = 'THROW_RANGE__LONG_DESC',
  ThrowRangeNormalAsc = 'THROW_RANGE__NORMAL_ASC',
  ThrowRangeNormalDesc = 'THROW_RANGE__NORMAL_DESC',
  ToolCategoryAsc = 'TOOL_CATEGORY_ASC',
  ToolCategoryDesc = 'TOOL_CATEGORY_DESC',
  TwoHandedDamageDamageDiceAsc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_ASC',
  TwoHandedDamageDamageDiceDesc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_DESC',
  TwoHandedDamageDamageTypeIndexAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  TwoHandedDamageDamageTypeIndexDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  TwoHandedDamageDamageTypeNameAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_ASC',
  TwoHandedDamageDamageTypeNameDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_DESC',
  TwoHandedDamageDamageTypeUrlAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_ASC',
  TwoHandedDamageDamageTypeUrlDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_DESC',
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
  ChoiceChooseAsc = 'CHOICE__CHOOSE_ASC',
  ChoiceChooseDesc = 'CHOICE__CHOOSE_DESC',
  ChoiceTypeAsc = 'CHOICE__TYPE_ASC',
  ChoiceTypeDesc = 'CHOICE__TYPE_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FeatureSpecificExpertiseOptionsChooseAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificExpertiseOptionsChooseDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificExpertiseOptionsTypeAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_ASC',
  FeatureSpecificExpertiseOptionsTypeDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_DESC',
  FeatureSpecificSubfeatureOptionsChooseAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificSubfeatureOptionsChooseDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificSubfeatureOptionsTypeAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_ASC',
  FeatureSpecificSubfeatureOptionsTypeDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
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
  ClassSpecificActionSurgesAsc = 'CLASS_SPECIFIC__ACTION_SURGES_ASC',
  ClassSpecificActionSurgesDesc = 'CLASS_SPECIFIC__ACTION_SURGES_DESC',
  ClassSpecificArcaneRecoveryLevelsAsc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_ASC',
  ClassSpecificArcaneRecoveryLevelsDesc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_DESC',
  ClassSpecificAuraRangeAsc = 'CLASS_SPECIFIC__AURA_RANGE_ASC',
  ClassSpecificAuraRangeDesc = 'CLASS_SPECIFIC__AURA_RANGE_DESC',
  ClassSpecificBardicInspirationDieAsc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_ASC',
  ClassSpecificBardicInspirationDieDesc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_DESC',
  ClassSpecificBrutalCriticalDiceAsc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_ASC',
  ClassSpecificBrutalCriticalDiceDesc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_DESC',
  ClassSpecificChannelDivinityChargesAsc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_ASC',
  ClassSpecificChannelDivinityChargesDesc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_DESC',
  ClassSpecificDestroyUndeadCrAsc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_ASC',
  ClassSpecificDestroyUndeadCrDesc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_DESC',
  ClassSpecificExtraAttacksAsc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_ASC',
  ClassSpecificExtraAttacksDesc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_DESC',
  ClassSpecificFavoredEnemiesAsc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_ASC',
  ClassSpecificFavoredEnemiesDesc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_DESC',
  ClassSpecificFavoredTerrainAsc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_ASC',
  ClassSpecificFavoredTerrainDesc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_DESC',
  ClassSpecificIndomitableUsesAsc = 'CLASS_SPECIFIC__INDOMITABLE_USES_ASC',
  ClassSpecificIndomitableUsesDesc = 'CLASS_SPECIFIC__INDOMITABLE_USES_DESC',
  ClassSpecificInvocationsKnownAsc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_ASC',
  ClassSpecificInvocationsKnownDesc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_DESC',
  ClassSpecificKiPointsAsc = 'CLASS_SPECIFIC__KI_POINTS_ASC',
  ClassSpecificKiPointsDesc = 'CLASS_SPECIFIC__KI_POINTS_DESC',
  ClassSpecificMagicalSecretsMax_5Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_ASC',
  ClassSpecificMagicalSecretsMax_5Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_DESC',
  ClassSpecificMagicalSecretsMax_7Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_ASC',
  ClassSpecificMagicalSecretsMax_7Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_DESC',
  ClassSpecificMagicalSecretsMax_9Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_ASC',
  ClassSpecificMagicalSecretsMax_9Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_DESC',
  ClassSpecificMartialArtsDiceCountAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_ASC',
  ClassSpecificMartialArtsDiceCountDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_DESC',
  ClassSpecificMartialArtsDiceValueAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_ASC',
  ClassSpecificMartialArtsDiceValueDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_DESC',
  ClassSpecificMetamagicKnownAsc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_ASC',
  ClassSpecificMetamagicKnownDesc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_DESC',
  ClassSpecificMysticArcanumLevel_6Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_ASC',
  ClassSpecificMysticArcanumLevel_6Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_DESC',
  ClassSpecificMysticArcanumLevel_7Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_ASC',
  ClassSpecificMysticArcanumLevel_7Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_DESC',
  ClassSpecificMysticArcanumLevel_8Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_ASC',
  ClassSpecificMysticArcanumLevel_8Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_DESC',
  ClassSpecificMysticArcanumLevel_9Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_ASC',
  ClassSpecificMysticArcanumLevel_9Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_DESC',
  ClassSpecificRageCountAsc = 'CLASS_SPECIFIC__RAGE_COUNT_ASC',
  ClassSpecificRageCountDesc = 'CLASS_SPECIFIC__RAGE_COUNT_DESC',
  ClassSpecificRageDamageBonusAsc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_ASC',
  ClassSpecificRageDamageBonusDesc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_DESC',
  ClassSpecificSneakAttackDiceCountAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_ASC',
  ClassSpecificSneakAttackDiceCountDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_DESC',
  ClassSpecificSneakAttackDiceValueAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_ASC',
  ClassSpecificSneakAttackDiceValueDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_DESC',
  ClassSpecificSongOfRestDieAsc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_ASC',
  ClassSpecificSongOfRestDieDesc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_DESC',
  ClassSpecificSorceryPointsAsc = 'CLASS_SPECIFIC__SORCERY_POINTS_ASC',
  ClassSpecificSorceryPointsDesc = 'CLASS_SPECIFIC__SORCERY_POINTS_DESC',
  ClassSpecificUnarmoredMovementAsc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_ASC',
  ClassSpecificUnarmoredMovementDesc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_DESC',
  ClassSpecificWildShapeFlyAsc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_ASC',
  ClassSpecificWildShapeFlyDesc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_DESC',
  ClassSpecificWildShapeMaxCrAsc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_ASC',
  ClassSpecificWildShapeMaxCrDesc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_DESC',
  ClassSpecificWildShapeSwimAsc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_ASC',
  ClassSpecificWildShapeSwimDesc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  ProfBonusAsc = 'PROF_BONUS_ASC',
  ProfBonusDesc = 'PROF_BONUS_DESC',
  SpellcastingCantripsKnownAsc = 'SPELLCASTING__CANTRIPS_KNOWN_ASC',
  SpellcastingCantripsKnownDesc = 'SPELLCASTING__CANTRIPS_KNOWN_DESC',
  SpellcastingSpellsKnownAsc = 'SPELLCASTING__SPELLS_KNOWN_ASC',
  SpellcastingSpellsKnownDesc = 'SPELLCASTING__SPELLS_KNOWN_DESC',
  SpellcastingSpellSlotsLevel_1Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_ASC',
  SpellcastingSpellSlotsLevel_1Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_DESC',
  SpellcastingSpellSlotsLevel_2Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_ASC',
  SpellcastingSpellSlotsLevel_2Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_DESC',
  SpellcastingSpellSlotsLevel_3Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_ASC',
  SpellcastingSpellSlotsLevel_3Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_DESC',
  SpellcastingSpellSlotsLevel_4Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_ASC',
  SpellcastingSpellSlotsLevel_4Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_DESC',
  SpellcastingSpellSlotsLevel_5Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_ASC',
  SpellcastingSpellSlotsLevel_5Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_DESC',
  SpellcastingSpellSlotsLevel_6Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_ASC',
  SpellcastingSpellSlotsLevel_6Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_DESC',
  SpellcastingSpellSlotsLevel_7Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_ASC',
  SpellcastingSpellSlotsLevel_7Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_DESC',
  SpellcastingSpellSlotsLevel_8Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_ASC',
  SpellcastingSpellSlotsLevel_8Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_DESC',
  SpellcastingSpellSlotsLevel_9Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_ASC',
  SpellcastingSpellSlotsLevel_9Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_DESC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlAsc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_ASC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlDesc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_DESC',
  SubclassSpecificAuraRangeAsc = 'SUBCLASS_SPECIFIC__AURA_RANGE_ASC',
  SubclassSpecificAuraRangeDesc = 'SUBCLASS_SPECIFIC__AURA_RANGE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMagicItemInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
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
  SensesBlindsightAsc = 'SENSES__BLINDSIGHT_ASC',
  SensesBlindsightDesc = 'SENSES__BLINDSIGHT_DESC',
  SensesDarkvisionAsc = 'SENSES__DARKVISION_ASC',
  SensesDarkvisionDesc = 'SENSES__DARKVISION_DESC',
  SensesPassivePerceptionAsc = 'SENSES__PASSIVE_PERCEPTION_ASC',
  SensesPassivePerceptionDesc = 'SENSES__PASSIVE_PERCEPTION_DESC',
  SensesTremorsenseAsc = 'SENSES__TREMORSENSE_ASC',
  SensesTremorsenseDesc = 'SENSES__TREMORSENSE_DESC',
  SensesTruesightAsc = 'SENSES__TRUESIGHT_ASC',
  SensesTruesightDesc = 'SENSES__TRUESIGHT_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SpeedBurrowAsc = 'SPEED__BURROW_ASC',
  SpeedBurrowDesc = 'SPEED__BURROW_DESC',
  SpeedClimbAsc = 'SPEED__CLIMB_ASC',
  SpeedClimbDesc = 'SPEED__CLIMB_DESC',
  SpeedFlyAsc = 'SPEED__FLY_ASC',
  SpeedFlyDesc = 'SPEED__FLY_DESC',
  SpeedHoverAsc = 'SPEED__HOVER_ASC',
  SpeedHoverDesc = 'SPEED__HOVER_DESC',
  SpeedSwimAsc = 'SPEED__SWIM_ASC',
  SpeedSwimDesc = 'SPEED__SWIM_DESC',
  SpeedWalkAsc = 'SPEED__WALK_ASC',
  SpeedWalkDesc = 'SPEED__WALK_DESC',
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
  AbilityBonusOptionsChooseAsc = 'ABILITY_BONUS_OPTIONS__CHOOSE_ASC',
  AbilityBonusOptionsChooseDesc = 'ABILITY_BONUS_OPTIONS__CHOOSE_DESC',
  AbilityBonusOptionsTypeAsc = 'ABILITY_BONUS_OPTIONS__TYPE_ASC',
  AbilityBonusOptionsTypeDesc = 'ABILITY_BONUS_OPTIONS__TYPE_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageDescAsc = 'LANGUAGE_DESC_ASC',
  LanguageDescDesc = 'LANGUAGE_DESC_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SizeDescriptionAsc = 'SIZE_DESCRIPTION_ASC',
  SizeDescriptionDesc = 'SIZE_DESCRIPTION_DESC',
  SpeedAsc = 'SPEED_ASC',
  SpeedDesc = 'SPEED_DESC',
  StartingProficiencyOptionsChooseAsc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_ASC',
  StartingProficiencyOptionsChooseDesc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_DESC',
  StartingProficiencyOptionsTypeAsc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_ASC',
  StartingProficiencyOptionsTypeDesc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_DESC',
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
  AbilityScoreIndexAsc = 'ABILITY_SCORE__INDEX_ASC',
  AbilityScoreIndexDesc = 'ABILITY_SCORE__INDEX_DESC',
  AbilityScoreNameAsc = 'ABILITY_SCORE__NAME_ASC',
  AbilityScoreNameDesc = 'ABILITY_SCORE__NAME_DESC',
  AbilityScoreUrlAsc = 'ABILITY_SCORE__URL_ASC',
  AbilityScoreUrlDesc = 'ABILITY_SCORE__URL_DESC',
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
  SchoolIndexAsc = 'SCHOOL__INDEX_ASC',
  SchoolIndexDesc = 'SCHOOL__INDEX_DESC',
  SchoolNameAsc = 'SCHOOL__NAME_ASC',
  SchoolNameDesc = 'SCHOOL__NAME_DESC',
  SchoolUrlAsc = 'SCHOOL__URL_ASC',
  SchoolUrlDesc = 'SCHOOL__URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySubclassInput {
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
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
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RaceIndexAsc = 'RACE__INDEX_ASC',
  RaceIndexDesc = 'RACE__INDEX_DESC',
  RaceNameAsc = 'RACE__NAME_ASC',
  RaceNameDesc = 'RACE__NAME_DESC',
  RaceUrlAsc = 'RACE__URL_ASC',
  RaceUrlDesc = 'RACE__URL_DESC',
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
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  ProficiencyChoicesChooseAsc = 'PROFICIENCY_CHOICES__CHOOSE_ASC',
  ProficiencyChoicesChooseDesc = 'PROFICIENCY_CHOICES__CHOOSE_DESC',
  ProficiencyChoicesTypeAsc = 'PROFICIENCY_CHOICES__TYPE_ASC',
  ProficiencyChoicesTypeDesc = 'PROFICIENCY_CHOICES__TYPE_DESC',
  TraitSpecificBreathWeaponDcDcTypeIndexAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_ASC',
  TraitSpecificBreathWeaponDcDcTypeIndexDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_DESC',
  TraitSpecificBreathWeaponDcDcTypeNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_ASC',
  TraitSpecificBreathWeaponDcDcTypeNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_DESC',
  TraitSpecificBreathWeaponDcDcTypeUrlAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_ASC',
  TraitSpecificBreathWeaponDcDcTypeUrlDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_DESC',
  TraitSpecificBreathWeaponDcSuccessTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_ASC',
  TraitSpecificBreathWeaponDcSuccessTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_DESC',
  TraitSpecificBreathWeaponDescAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_ASC',
  TraitSpecificBreathWeaponDescDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_DESC',
  TraitSpecificBreathWeaponNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_ASC',
  TraitSpecificBreathWeaponNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_DESC',
  TraitSpecificBreathWeaponUsageTimesAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_ASC',
  TraitSpecificBreathWeaponUsageTimesDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_DESC',
  TraitSpecificBreathWeaponUsageTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_ASC',
  TraitSpecificBreathWeaponUsageTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_DESC',
  TraitSpecificDamageTypeIndexAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_ASC',
  TraitSpecificDamageTypeIndexDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_DESC',
  TraitSpecificDamageTypeNameAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_ASC',
  TraitSpecificDamageTypeNameDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_DESC',
  TraitSpecificDamageTypeUrlAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_ASC',
  TraitSpecificDamageTypeUrlDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_DESC',
  TraitSpecificSpellOptionsChooseAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_ASC',
  TraitSpecificSpellOptionsChooseDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_DESC',
  TraitSpecificSpellOptionsTypeAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_ASC',
  TraitSpecificSpellOptionsTypeDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_DESC',
  TraitSpecificSubtraitOptionsChooseAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_ASC',
  TraitSpecificSubtraitOptionsChooseDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_DESC',
  TraitSpecificSubtraitOptionsTypeAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_ASC',
  TraitSpecificSubtraitOptionsTypeDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_DESC',
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
  BondsChooseAsc = 'BONDS__CHOOSE_ASC',
  BondsChooseDesc = 'BONDS__CHOOSE_DESC',
  BondsFromAsc = 'BONDS__FROM_ASC',
  BondsFromDesc = 'BONDS__FROM_DESC',
  BondsTypeAsc = 'BONDS__TYPE_ASC',
  BondsTypeDesc = 'BONDS__TYPE_DESC',
  FeatureDescAsc = 'FEATURE__DESC_ASC',
  FeatureDescDesc = 'FEATURE__DESC_DESC',
  FeatureNameAsc = 'FEATURE__NAME_ASC',
  FeatureNameDesc = 'FEATURE__NAME_DESC',
  FlawsChooseAsc = 'FLAWS__CHOOSE_ASC',
  FlawsChooseDesc = 'FLAWS__CHOOSE_DESC',
  FlawsFromAsc = 'FLAWS__FROM_ASC',
  FlawsFromDesc = 'FLAWS__FROM_DESC',
  FlawsTypeAsc = 'FLAWS__TYPE_ASC',
  FlawsTypeDesc = 'FLAWS__TYPE_DESC',
  IdealsChooseAsc = 'IDEALS__CHOOSE_ASC',
  IdealsChooseDesc = 'IDEALS__CHOOSE_DESC',
  IdealsTypeAsc = 'IDEALS__TYPE_ASC',
  IdealsTypeDesc = 'IDEALS__TYPE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PersonalityTraitsChooseAsc = 'PERSONALITY_TRAITS__CHOOSE_ASC',
  PersonalityTraitsChooseDesc = 'PERSONALITY_TRAITS__CHOOSE_DESC',
  PersonalityTraitsFromAsc = 'PERSONALITY_TRAITS__FROM_ASC',
  PersonalityTraitsFromDesc = 'PERSONALITY_TRAITS__FROM_DESC',
  PersonalityTraitsTypeAsc = 'PERSONALITY_TRAITS__TYPE_ASC',
  PersonalityTraitsTypeDesc = 'PERSONALITY_TRAITS__TYPE_DESC',
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
  MultiClassingPrerequisiteOptionsChooseAsc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_ASC',
  MultiClassingPrerequisiteOptionsChooseDesc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_DESC',
  MultiClassingPrerequisiteOptionsTypeAsc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_ASC',
  MultiClassingPrerequisiteOptionsTypeDesc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SpellcastingLevelAsc = 'SPELLCASTING__LEVEL_ASC',
  SpellcastingLevelDesc = 'SPELLCASTING__LEVEL_DESC',
  SpellcastingSpellcastingAbilityIndexAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_ASC',
  SpellcastingSpellcastingAbilityIndexDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_DESC',
  SpellcastingSpellcastingAbilityNameAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_ASC',
  SpellcastingSpellcastingAbilityNameDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_DESC',
  SpellcastingSpellcastingAbilityUrlAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_ASC',
  SpellcastingSpellcastingAbilityUrlDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_DESC',
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
  ArmorClassBaseAsc = 'ARMOR_CLASS__BASE_ASC',
  ArmorClassBaseDesc = 'ARMOR_CLASS__BASE_DESC',
  ArmorClassDexBonusAsc = 'ARMOR_CLASS__DEX_BONUS_ASC',
  ArmorClassDexBonusDesc = 'ARMOR_CLASS__DEX_BONUS_DESC',
  ArmorClassMaxBonusAsc = 'ARMOR_CLASS__MAX_BONUS_ASC',
  ArmorClassMaxBonusDesc = 'ARMOR_CLASS__MAX_BONUS_DESC',
  CapacityAsc = 'CAPACITY_ASC',
  CapacityDesc = 'CAPACITY_DESC',
  CategoryRangeAsc = 'CATEGORY_RANGE_ASC',
  CategoryRangeDesc = 'CATEGORY_RANGE_DESC',
  CostQuantityAsc = 'COST__QUANTITY_ASC',
  CostQuantityDesc = 'COST__QUANTITY_DESC',
  CostUnitAsc = 'COST__UNIT_ASC',
  CostUnitDesc = 'COST__UNIT_DESC',
  DamageDamageDiceAsc = 'DAMAGE__DAMAGE_DICE_ASC',
  DamageDamageDiceDesc = 'DAMAGE__DAMAGE_DICE_DESC',
  DamageDamageTypeIndexAsc = 'DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  DamageDamageTypeIndexDesc = 'DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  DamageDamageTypeNameAsc = 'DAMAGE__DAMAGE_TYPE__NAME_ASC',
  DamageDamageTypeNameDesc = 'DAMAGE__DAMAGE_TYPE__NAME_DESC',
  DamageDamageTypeUrlAsc = 'DAMAGE__DAMAGE_TYPE__URL_ASC',
  DamageDamageTypeUrlDesc = 'DAMAGE__DAMAGE_TYPE__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  GearCategoryIndexAsc = 'GEAR_CATEGORY__INDEX_ASC',
  GearCategoryIndexDesc = 'GEAR_CATEGORY__INDEX_DESC',
  GearCategoryNameAsc = 'GEAR_CATEGORY__NAME_ASC',
  GearCategoryNameDesc = 'GEAR_CATEGORY__NAME_DESC',
  GearCategoryUrlAsc = 'GEAR_CATEGORY__URL_ASC',
  GearCategoryUrlDesc = 'GEAR_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  RangeLongAsc = 'RANGE__LONG_ASC',
  RangeLongDesc = 'RANGE__LONG_DESC',
  RangeNormalAsc = 'RANGE__NORMAL_ASC',
  RangeNormalDesc = 'RANGE__NORMAL_DESC',
  SpecialAsc = 'SPECIAL_ASC',
  SpecialDesc = 'SPECIAL_DESC',
  SpeedQuantityAsc = 'SPEED__QUANTITY_ASC',
  SpeedQuantityDesc = 'SPEED__QUANTITY_DESC',
  SpeedUnitAsc = 'SPEED__UNIT_ASC',
  SpeedUnitDesc = 'SPEED__UNIT_DESC',
  StealthDisadvantageAsc = 'STEALTH_DISADVANTAGE_ASC',
  StealthDisadvantageDesc = 'STEALTH_DISADVANTAGE_DESC',
  StrMinimumAsc = 'STR_MINIMUM_ASC',
  StrMinimumDesc = 'STR_MINIMUM_DESC',
  ThrowRangeLongAsc = 'THROW_RANGE__LONG_ASC',
  ThrowRangeLongDesc = 'THROW_RANGE__LONG_DESC',
  ThrowRangeNormalAsc = 'THROW_RANGE__NORMAL_ASC',
  ThrowRangeNormalDesc = 'THROW_RANGE__NORMAL_DESC',
  ToolCategoryAsc = 'TOOL_CATEGORY_ASC',
  ToolCategoryDesc = 'TOOL_CATEGORY_DESC',
  TwoHandedDamageDamageDiceAsc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_ASC',
  TwoHandedDamageDamageDiceDesc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_DESC',
  TwoHandedDamageDamageTypeIndexAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  TwoHandedDamageDamageTypeIndexDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  TwoHandedDamageDamageTypeNameAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_ASC',
  TwoHandedDamageDamageTypeNameDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_DESC',
  TwoHandedDamageDamageTypeUrlAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_ASC',
  TwoHandedDamageDamageTypeUrlDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_DESC',
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
  ChoiceChooseAsc = 'CHOICE__CHOOSE_ASC',
  ChoiceChooseDesc = 'CHOICE__CHOOSE_DESC',
  ChoiceTypeAsc = 'CHOICE__TYPE_ASC',
  ChoiceTypeDesc = 'CHOICE__TYPE_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FeatureSpecificExpertiseOptionsChooseAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificExpertiseOptionsChooseDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificExpertiseOptionsTypeAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_ASC',
  FeatureSpecificExpertiseOptionsTypeDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_DESC',
  FeatureSpecificSubfeatureOptionsChooseAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificSubfeatureOptionsChooseDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificSubfeatureOptionsTypeAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_ASC',
  FeatureSpecificSubfeatureOptionsTypeDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
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
  ClassSpecificActionSurgesAsc = 'CLASS_SPECIFIC__ACTION_SURGES_ASC',
  ClassSpecificActionSurgesDesc = 'CLASS_SPECIFIC__ACTION_SURGES_DESC',
  ClassSpecificArcaneRecoveryLevelsAsc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_ASC',
  ClassSpecificArcaneRecoveryLevelsDesc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_DESC',
  ClassSpecificAuraRangeAsc = 'CLASS_SPECIFIC__AURA_RANGE_ASC',
  ClassSpecificAuraRangeDesc = 'CLASS_SPECIFIC__AURA_RANGE_DESC',
  ClassSpecificBardicInspirationDieAsc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_ASC',
  ClassSpecificBardicInspirationDieDesc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_DESC',
  ClassSpecificBrutalCriticalDiceAsc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_ASC',
  ClassSpecificBrutalCriticalDiceDesc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_DESC',
  ClassSpecificChannelDivinityChargesAsc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_ASC',
  ClassSpecificChannelDivinityChargesDesc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_DESC',
  ClassSpecificDestroyUndeadCrAsc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_ASC',
  ClassSpecificDestroyUndeadCrDesc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_DESC',
  ClassSpecificExtraAttacksAsc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_ASC',
  ClassSpecificExtraAttacksDesc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_DESC',
  ClassSpecificFavoredEnemiesAsc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_ASC',
  ClassSpecificFavoredEnemiesDesc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_DESC',
  ClassSpecificFavoredTerrainAsc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_ASC',
  ClassSpecificFavoredTerrainDesc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_DESC',
  ClassSpecificIndomitableUsesAsc = 'CLASS_SPECIFIC__INDOMITABLE_USES_ASC',
  ClassSpecificIndomitableUsesDesc = 'CLASS_SPECIFIC__INDOMITABLE_USES_DESC',
  ClassSpecificInvocationsKnownAsc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_ASC',
  ClassSpecificInvocationsKnownDesc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_DESC',
  ClassSpecificKiPointsAsc = 'CLASS_SPECIFIC__KI_POINTS_ASC',
  ClassSpecificKiPointsDesc = 'CLASS_SPECIFIC__KI_POINTS_DESC',
  ClassSpecificMagicalSecretsMax_5Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_ASC',
  ClassSpecificMagicalSecretsMax_5Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_DESC',
  ClassSpecificMagicalSecretsMax_7Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_ASC',
  ClassSpecificMagicalSecretsMax_7Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_DESC',
  ClassSpecificMagicalSecretsMax_9Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_ASC',
  ClassSpecificMagicalSecretsMax_9Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_DESC',
  ClassSpecificMartialArtsDiceCountAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_ASC',
  ClassSpecificMartialArtsDiceCountDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_DESC',
  ClassSpecificMartialArtsDiceValueAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_ASC',
  ClassSpecificMartialArtsDiceValueDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_DESC',
  ClassSpecificMetamagicKnownAsc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_ASC',
  ClassSpecificMetamagicKnownDesc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_DESC',
  ClassSpecificMysticArcanumLevel_6Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_ASC',
  ClassSpecificMysticArcanumLevel_6Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_DESC',
  ClassSpecificMysticArcanumLevel_7Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_ASC',
  ClassSpecificMysticArcanumLevel_7Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_DESC',
  ClassSpecificMysticArcanumLevel_8Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_ASC',
  ClassSpecificMysticArcanumLevel_8Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_DESC',
  ClassSpecificMysticArcanumLevel_9Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_ASC',
  ClassSpecificMysticArcanumLevel_9Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_DESC',
  ClassSpecificRageCountAsc = 'CLASS_SPECIFIC__RAGE_COUNT_ASC',
  ClassSpecificRageCountDesc = 'CLASS_SPECIFIC__RAGE_COUNT_DESC',
  ClassSpecificRageDamageBonusAsc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_ASC',
  ClassSpecificRageDamageBonusDesc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_DESC',
  ClassSpecificSneakAttackDiceCountAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_ASC',
  ClassSpecificSneakAttackDiceCountDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_DESC',
  ClassSpecificSneakAttackDiceValueAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_ASC',
  ClassSpecificSneakAttackDiceValueDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_DESC',
  ClassSpecificSongOfRestDieAsc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_ASC',
  ClassSpecificSongOfRestDieDesc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_DESC',
  ClassSpecificSorceryPointsAsc = 'CLASS_SPECIFIC__SORCERY_POINTS_ASC',
  ClassSpecificSorceryPointsDesc = 'CLASS_SPECIFIC__SORCERY_POINTS_DESC',
  ClassSpecificUnarmoredMovementAsc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_ASC',
  ClassSpecificUnarmoredMovementDesc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_DESC',
  ClassSpecificWildShapeFlyAsc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_ASC',
  ClassSpecificWildShapeFlyDesc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_DESC',
  ClassSpecificWildShapeMaxCrAsc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_ASC',
  ClassSpecificWildShapeMaxCrDesc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_DESC',
  ClassSpecificWildShapeSwimAsc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_ASC',
  ClassSpecificWildShapeSwimDesc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  ProfBonusAsc = 'PROF_BONUS_ASC',
  ProfBonusDesc = 'PROF_BONUS_DESC',
  SpellcastingCantripsKnownAsc = 'SPELLCASTING__CANTRIPS_KNOWN_ASC',
  SpellcastingCantripsKnownDesc = 'SPELLCASTING__CANTRIPS_KNOWN_DESC',
  SpellcastingSpellsKnownAsc = 'SPELLCASTING__SPELLS_KNOWN_ASC',
  SpellcastingSpellsKnownDesc = 'SPELLCASTING__SPELLS_KNOWN_DESC',
  SpellcastingSpellSlotsLevel_1Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_ASC',
  SpellcastingSpellSlotsLevel_1Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_DESC',
  SpellcastingSpellSlotsLevel_2Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_ASC',
  SpellcastingSpellSlotsLevel_2Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_DESC',
  SpellcastingSpellSlotsLevel_3Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_ASC',
  SpellcastingSpellSlotsLevel_3Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_DESC',
  SpellcastingSpellSlotsLevel_4Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_ASC',
  SpellcastingSpellSlotsLevel_4Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_DESC',
  SpellcastingSpellSlotsLevel_5Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_ASC',
  SpellcastingSpellSlotsLevel_5Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_DESC',
  SpellcastingSpellSlotsLevel_6Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_ASC',
  SpellcastingSpellSlotsLevel_6Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_DESC',
  SpellcastingSpellSlotsLevel_7Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_ASC',
  SpellcastingSpellSlotsLevel_7Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_DESC',
  SpellcastingSpellSlotsLevel_8Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_ASC',
  SpellcastingSpellSlotsLevel_8Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_DESC',
  SpellcastingSpellSlotsLevel_9Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_ASC',
  SpellcastingSpellSlotsLevel_9Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_DESC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlAsc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_ASC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlDesc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_DESC',
  SubclassSpecificAuraRangeAsc = 'SUBCLASS_SPECIFIC__AURA_RANGE_ASC',
  SubclassSpecificAuraRangeDesc = 'SUBCLASS_SPECIFIC__AURA_RANGE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneMagicItemInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
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
  SensesBlindsightAsc = 'SENSES__BLINDSIGHT_ASC',
  SensesBlindsightDesc = 'SENSES__BLINDSIGHT_DESC',
  SensesDarkvisionAsc = 'SENSES__DARKVISION_ASC',
  SensesDarkvisionDesc = 'SENSES__DARKVISION_DESC',
  SensesPassivePerceptionAsc = 'SENSES__PASSIVE_PERCEPTION_ASC',
  SensesPassivePerceptionDesc = 'SENSES__PASSIVE_PERCEPTION_DESC',
  SensesTremorsenseAsc = 'SENSES__TREMORSENSE_ASC',
  SensesTremorsenseDesc = 'SENSES__TREMORSENSE_DESC',
  SensesTruesightAsc = 'SENSES__TRUESIGHT_ASC',
  SensesTruesightDesc = 'SENSES__TRUESIGHT_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SpeedBurrowAsc = 'SPEED__BURROW_ASC',
  SpeedBurrowDesc = 'SPEED__BURROW_DESC',
  SpeedClimbAsc = 'SPEED__CLIMB_ASC',
  SpeedClimbDesc = 'SPEED__CLIMB_DESC',
  SpeedFlyAsc = 'SPEED__FLY_ASC',
  SpeedFlyDesc = 'SPEED__FLY_DESC',
  SpeedHoverAsc = 'SPEED__HOVER_ASC',
  SpeedHoverDesc = 'SPEED__HOVER_DESC',
  SpeedSwimAsc = 'SPEED__SWIM_ASC',
  SpeedSwimDesc = 'SPEED__SWIM_DESC',
  SpeedWalkAsc = 'SPEED__WALK_ASC',
  SpeedWalkDesc = 'SPEED__WALK_DESC',
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
  AbilityBonusOptionsChooseAsc = 'ABILITY_BONUS_OPTIONS__CHOOSE_ASC',
  AbilityBonusOptionsChooseDesc = 'ABILITY_BONUS_OPTIONS__CHOOSE_DESC',
  AbilityBonusOptionsTypeAsc = 'ABILITY_BONUS_OPTIONS__TYPE_ASC',
  AbilityBonusOptionsTypeDesc = 'ABILITY_BONUS_OPTIONS__TYPE_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageDescAsc = 'LANGUAGE_DESC_ASC',
  LanguageDescDesc = 'LANGUAGE_DESC_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SizeDescriptionAsc = 'SIZE_DESCRIPTION_ASC',
  SizeDescriptionDesc = 'SIZE_DESCRIPTION_DESC',
  SpeedAsc = 'SPEED_ASC',
  SpeedDesc = 'SPEED_DESC',
  StartingProficiencyOptionsChooseAsc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_ASC',
  StartingProficiencyOptionsChooseDesc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_DESC',
  StartingProficiencyOptionsTypeAsc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_ASC',
  StartingProficiencyOptionsTypeDesc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_DESC',
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
  AbilityScoreIndexAsc = 'ABILITY_SCORE__INDEX_ASC',
  AbilityScoreIndexDesc = 'ABILITY_SCORE__INDEX_DESC',
  AbilityScoreNameAsc = 'ABILITY_SCORE__NAME_ASC',
  AbilityScoreNameDesc = 'ABILITY_SCORE__NAME_DESC',
  AbilityScoreUrlAsc = 'ABILITY_SCORE__URL_ASC',
  AbilityScoreUrlDesc = 'ABILITY_SCORE__URL_DESC',
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
  SchoolIndexAsc = 'SCHOOL__INDEX_ASC',
  SchoolIndexDesc = 'SCHOOL__INDEX_DESC',
  SchoolNameAsc = 'SCHOOL__NAME_ASC',
  SchoolNameDesc = 'SCHOOL__NAME_DESC',
  SchoolUrlAsc = 'SCHOOL__URL_ASC',
  SchoolUrlDesc = 'SCHOOL__URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSubclassInput {
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
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
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RaceIndexAsc = 'RACE__INDEX_ASC',
  RaceIndexDesc = 'RACE__INDEX_DESC',
  RaceNameAsc = 'RACE__NAME_ASC',
  RaceNameDesc = 'RACE__NAME_DESC',
  RaceUrlAsc = 'RACE__URL_ASC',
  RaceUrlDesc = 'RACE__URL_DESC',
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
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  ProficiencyChoicesChooseAsc = 'PROFICIENCY_CHOICES__CHOOSE_ASC',
  ProficiencyChoicesChooseDesc = 'PROFICIENCY_CHOICES__CHOOSE_DESC',
  ProficiencyChoicesTypeAsc = 'PROFICIENCY_CHOICES__TYPE_ASC',
  ProficiencyChoicesTypeDesc = 'PROFICIENCY_CHOICES__TYPE_DESC',
  TraitSpecificBreathWeaponDcDcTypeIndexAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_ASC',
  TraitSpecificBreathWeaponDcDcTypeIndexDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_DESC',
  TraitSpecificBreathWeaponDcDcTypeNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_ASC',
  TraitSpecificBreathWeaponDcDcTypeNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_DESC',
  TraitSpecificBreathWeaponDcDcTypeUrlAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_ASC',
  TraitSpecificBreathWeaponDcDcTypeUrlDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_DESC',
  TraitSpecificBreathWeaponDcSuccessTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_ASC',
  TraitSpecificBreathWeaponDcSuccessTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_DESC',
  TraitSpecificBreathWeaponDescAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_ASC',
  TraitSpecificBreathWeaponDescDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_DESC',
  TraitSpecificBreathWeaponNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_ASC',
  TraitSpecificBreathWeaponNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_DESC',
  TraitSpecificBreathWeaponUsageTimesAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_ASC',
  TraitSpecificBreathWeaponUsageTimesDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_DESC',
  TraitSpecificBreathWeaponUsageTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_ASC',
  TraitSpecificBreathWeaponUsageTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_DESC',
  TraitSpecificDamageTypeIndexAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_ASC',
  TraitSpecificDamageTypeIndexDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_DESC',
  TraitSpecificDamageTypeNameAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_ASC',
  TraitSpecificDamageTypeNameDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_DESC',
  TraitSpecificDamageTypeUrlAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_ASC',
  TraitSpecificDamageTypeUrlDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_DESC',
  TraitSpecificSpellOptionsChooseAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_ASC',
  TraitSpecificSpellOptionsChooseDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_DESC',
  TraitSpecificSpellOptionsTypeAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_ASC',
  TraitSpecificSpellOptionsTypeDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_DESC',
  TraitSpecificSubtraitOptionsChooseAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_ASC',
  TraitSpecificSubtraitOptionsChooseDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_DESC',
  TraitSpecificSubtraitOptionsTypeAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_ASC',
  TraitSpecificSubtraitOptionsTypeDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_DESC',
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
  _id: Scalars['String'];
  area_of_effect?: Maybe<SpellArea_Of_Effect>;
  attack_type?: Maybe<Scalars['String']>;
  casting_time?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<SpellClasses>>>;
  components?: Maybe<Array<Maybe<Scalars['String']>>>;
  concentration?: Maybe<Scalars['Boolean']>;
  damage?: Maybe<SpellDamage>;
  dc?: Maybe<SpellDc>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['String']>;
  heal_at_slot_level?: Maybe<Scalars['JSON']>;
  higher_level?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  material?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['Boolean']>;
  school?: Maybe<MagicSchool>;
  subclasses?: Maybe<Array<Maybe<SpellSubclasses>>>;
  url?: Maybe<Scalars['String']>;
};


export type SpellSchoolArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneMagicSchoolInput>;
};

export type SpellArea_Of_Effect = {
  __typename?: 'SpellArea_of_effect';
  size?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type SpellClasses = {
  __typename?: 'SpellClasses';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellDamage = {
  __typename?: 'SpellDamage';
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_at_slot_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<SpellDamageDamage_Type>;
};

export type SpellDamageDamage_Type = {
  __typename?: 'SpellDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellDc = {
  __typename?: 'SpellDc';
  dc_success?: Maybe<Scalars['String']>;
  dc_type?: Maybe<SpellDcDc_Type>;
  desc?: Maybe<Scalars['String']>;
};

export type SpellDcDc_Type = {
  __typename?: 'SpellDcDc_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellSubclasses = {
  __typename?: 'SpellSubclasses';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Subclass = {
  __typename?: 'Subclass';
  _id: Scalars['String'];
  class?: Maybe<SubclassClass>;
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

export type SubclassClass = {
  __typename?: 'SubclassClass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubclassSpells = {
  __typename?: 'SubclassSpells';
  _id?: Maybe<Scalars['MongoID']>;
  prerequisites?: Maybe<Array<Maybe<SubclassSpellsPrerequisites>>>;
  spell?: Maybe<SubclassSpellsSpell>;
};

export type SubclassSpellsPrerequisites = {
  __typename?: 'SubclassSpellsPrerequisites';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubclassSpellsSpell = {
  __typename?: 'SubclassSpellsSpell';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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
  race?: Maybe<SubraceRace>;
  racial_traits: Array<Trait>;
  starting_proficiencies?: Maybe<Array<Maybe<SubraceStarting_Proficiencies>>>;
  url?: Maybe<Scalars['String']>;
};


export type SubraceRacial_TraitsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyTraitInput>;
};

export type SubraceAbility_Bonuses = {
  __typename?: 'SubraceAbility_bonuses';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<SubraceAbility_BonusesAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
};

export type SubraceAbility_BonusesAbility_Score = {
  __typename?: 'SubraceAbility_bonusesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceLanguage_Options = {
  __typename?: 'SubraceLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<SubraceLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type SubraceLanguage_OptionsFrom = {
  __typename?: 'SubraceLanguage_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceRace = {
  __typename?: 'SubraceRace';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceStarting_Proficiencies = {
  __typename?: 'SubraceStarting_proficiencies';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Trait = {
  __typename?: 'Trait';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<TraitParent>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<TraitProficiency_Choices>;
  races?: Maybe<Array<Maybe<TraitRaces>>>;
  subraces?: Maybe<Array<Maybe<TraitSubraces>>>;
  trait_specific?: Maybe<TraitTrait_Specific>;
  url?: Maybe<Scalars['String']>;
};


export type TraitProficienciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyProficiencyInput>;
};

export type TraitParent = {
  __typename?: 'TraitParent';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitProficiency_Choices = {
  __typename?: 'TraitProficiency_choices';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitProficiency_ChoicesFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitProficiency_ChoicesFrom = {
  __typename?: 'TraitProficiency_choicesFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitRaces = {
  __typename?: 'TraitRaces';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitSubraces = {
  __typename?: 'TraitSubraces';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_Specific = {
  __typename?: 'TraitTrait_specific';
  breath_weapon?: Maybe<TraitTrait_SpecificBreath_Weapon>;
  damage_type?: Maybe<TraitTrait_SpecificDamage_Type>;
  spell_options?: Maybe<TraitTrait_SpecificSpell_Options>;
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
  _id?: Maybe<Scalars['MongoID']>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<TraitTrait_SpecificBreath_WeaponDamageDamage_Type>;
};

export type TraitTrait_SpecificBreath_WeaponDamageDamage_Type = {
  __typename?: 'TraitTrait_specificBreath_weaponDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponDc = {
  __typename?: 'TraitTrait_specificBreath_weaponDc';
  dc_type?: Maybe<TraitTrait_SpecificBreath_WeaponDcDc_Type>;
  success_type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponDcDc_Type = {
  __typename?: 'TraitTrait_specificBreath_weaponDcDc_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponUsage = {
  __typename?: 'TraitTrait_specificBreath_weaponUsage';
  times?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificDamage_Type = {
  __typename?: 'TraitTrait_specificDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSpell_Options = {
  __typename?: 'TraitTrait_specificSpell_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitTrait_SpecificSpell_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSpell_OptionsFrom = {
  __typename?: 'TraitTrait_specificSpell_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSubtrait_Options = {
  __typename?: 'TraitTrait_specificSubtrait_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitTrait_SpecificSubtrait_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSubtrait_OptionsFrom = {
  __typename?: 'TraitTrait_specificSubtrait_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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


export type GetEquipmentsQuery = { __typename?: 'Query', equipments: Array<{ __typename: 'Equipment', index?: string | null, weight?: number | null, name?: string | null, quantity?: number | null, capacity?: string | null, category_range?: string | null, desc?: Array<string | null> | null, special?: Array<string | null> | null, gear_category?: { __typename?: 'EquipmentGear_category', name?: string | null } | null, cost?: { __typename: 'EquipmentCost', quantity?: number | null, unit?: string | null } | null, damage?: { __typename?: 'EquipmentDamage', damage_dice?: string | null, damage_type?: { __typename: 'EquipmentDamageDamage_type', name?: string | null } | null } | null }> };

export type GetMonstersListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonstersListQuery = { __typename?: 'Query', monsters: Array<{ __typename: 'Monster', url?: string | null, name?: string | null, challenge_rating?: number | null, hit_dice?: string | null, hit_points?: number | null, type?: string | null, xp?: number | null, armor_class?: number | null, charisma?: number | null, constitution?: number | null, dexterity?: number | null, strength?: number | null, wisdom?: number | null, intelligence?: number | null, damage_immunities?: Array<string | null> | null, damage_resistances?: Array<string | null> | null, speed?: { __typename?: 'MonsterSpeed', burrow?: string | null, climb?: string | null, fly?: string | null, hover?: boolean | null, swim?: string | null, walk?: string | null } | null, special_abilities?: Array<{ __typename?: 'MonsterSpecial_abilities', desc?: string | null, name?: string | null, _id?: any | null } | null> | null }> };

export type GetSpellQueryVariables = Exact<{
  filter?: InputMaybe<FilterFindOneSpellInput>;
}>;


export type GetSpellQuery = { __typename?: 'Query', spell?: { __typename?: 'Spell', index?: string | null, level?: number | null, name?: string | null, ritual?: boolean | null, range?: string | null, higher_level?: Array<string | null> | null, heal_at_slot_level?: any | null, duration?: string | null, desc?: Array<string | null> | null, concentration?: boolean | null, components?: Array<string | null> | null, casting_time?: string | null, attack_type?: string | null, material?: string | null, school?: { __typename?: 'MagicSchool', url?: string | null, name?: string | null, index?: string | null, desc?: string | null } | null, subclasses?: Array<{ __typename?: 'SpellSubclasses', url?: string | null, name?: string | null, index?: string | null } | null> | null, dc?: { __typename?: 'SpellDc', desc?: string | null, dc_success?: string | null, dc_type?: { __typename?: 'SpellDcDc_type', index?: string | null, name?: string | null, url?: string | null } | null } | null, classes?: Array<{ __typename?: 'SpellClasses', url?: string | null, name?: string | null, index?: string | null } | null> | null, area_of_effect?: { __typename?: 'SpellArea_of_effect', type?: string | null, size?: number | null } | null, damage?: { __typename?: 'SpellDamage', damage_at_slot_level?: any | null, damage_at_character_level?: any | null, damage_type?: { __typename?: 'SpellDamageDamage_type', url?: string | null, name?: string | null, index?: string | null } | null } | null } | null };

export type GetSpellsQueryVariables = Exact<{
  filter?: InputMaybe<FilterFindManySpellInput>;
}>;


export type GetSpellsQuery = { __typename?: 'Query', spells: Array<{ __typename: 'Spell', index?: string | null, level?: number | null, name?: string | null, url?: string | null, duration?: string | null, school?: { __typename: 'MagicSchool', name?: string | null, index?: string | null } | null, classes?: Array<{ __typename: 'SpellClasses', index?: string | null, name?: string | null } | null> | null, subclasses?: Array<{ __typename?: 'SpellSubclasses', index?: string | null, name?: string | null } | null> | null }> };


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
      _id
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