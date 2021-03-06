import { gql } from "@apollo/client";

export const QUERY_SPELLS = gql`
    query getSpells($filter: FilterFindManySpellInput) {
      spells(filter: $filter, limit: 1000) {
        __typename
        index
        level
        name
        url
        school {
          name
          index
          __typename
        }
        classes {
          index
          name
          __typename
        }
        subclasses {
          index
          name
        }
        duration
      }
    }
`;
