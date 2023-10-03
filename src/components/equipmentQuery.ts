import { gql } from '@apollo/client';

export const QUERY_EQUIPMENTS = gql`
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
      equipment{
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
