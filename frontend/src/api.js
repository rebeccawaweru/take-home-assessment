import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

export const useBooks = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);
  return { data, loading, error };
};
