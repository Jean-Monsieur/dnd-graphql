import { gql } from "@apollo/client";

export const QUERY_MAGIC_ITEMS = gql`
  query getMagicalItems {
    magicItems(limit: 1000) {
      index
      name
      url
      equipment_category {
        index
        name
        url
      }
    }
  }
`;
