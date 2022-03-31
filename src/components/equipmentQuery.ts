import { gql } from "@apollo/client";

export const QUERY_EQUIPMENTS = gql`
query getEquipment($filter: FilterFindOneEquipmentInput) {
  equipment(filter: $filter) {
    index
    name
    armor_category
    armor_class {
      base
      dex_bonus
      max_bonus
    }
    capacity
    category_range
    contents {
      item {
        index
        name
        url
      }
      quantity
    }
    cost {
      quantity
      unit
    }
    damage {
      damage_dice
      damage_type {
        index
        name
        url
      }
    }
    desc
    equipment_category {
      index
      name
      url
    }
    gear_category {
      index
      name
      url
    }

    properties {
      desc
      index
      name
      url
    }
    quantity
    range {
      long
      normal
    }
    special
    speed {
      quantity
      unit
    }
    stealth_disadvantage
    str_minimum
    throw_range {
      long
      normal
    }
    tool_category
    two_handed_damage {
      damage_dice
      damage_type {
        index
        name
        url
      }
    }
    url
    vehicle_category
    weapon_category
    weapon_range
    weight
  }
}
`;
