import { gql } from '@apollo/client';

export const QUERY_MAGIC_ITEMS = gql`
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
