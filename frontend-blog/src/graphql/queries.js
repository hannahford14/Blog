import { gql } from "apollo-boost";

// Query to get blog by key
export const GET_BLOG =
  gql`query getBlog {
    getBlog{
      date
      description
      image
      rid {
        cluster
        position
      }
      title
    }
  }`;