import { gql } from '@apollo/client';

export const QUERY_SPELL = gql`
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
