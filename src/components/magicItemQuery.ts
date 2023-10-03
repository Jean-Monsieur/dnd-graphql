import { gql } from '@apollo/client';

export const QUERY_MAGIC_ITEM = gql`
query getMagicalItem {
  magicItem {
    name
    index
    equipment_category {
      index
      name
      
    }
    desc
    rarity
  }
}
`;
