import { gql } from '@apollo/client';

export const QUERY_MONSTERS = gql`
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
