import { gql } from "@apollo/client";

export const QUERY_SPELL = gql`
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
