import { gql } from '@apollo/client';

export const QUERY_EQUIPMENTS = gql`
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
