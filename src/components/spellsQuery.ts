import { gql } from '@apollo/client';

export const QUERY_SPELLS = gql`
query getSpells {
  spells( limit: 1000) {
    __typename
    index
    level
    name
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
