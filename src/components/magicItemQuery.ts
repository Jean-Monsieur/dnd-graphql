import { gql } from "@apollo/client";

export const QUERY_MAGIC_ITEM = gql`
  query getMagicalItem($filter: FilterFindOneMagicItemInput) {
    magicItem(filter: $filter) {
      name
      index
      equipment_category {
        index
        name
        url
      }
      desc
      url
    }
  }
`;
