import { gql } from "@apollo/client";

export const QUERY_EQUIPMENT = gql`
  query getEquipments {
    equipments(limit: 1000) {
      __typename
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
