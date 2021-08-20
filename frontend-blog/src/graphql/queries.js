import { gql } from "@apollo/client";

// Query to get blog by key
export const GET_BLOGS_FOR_HOME =
  gql`query getBlogsForHome {
    getBlogsForHome{
      date
      image
      rid {
        cluster
        position
      }
      title
      comments
    }
  }`;