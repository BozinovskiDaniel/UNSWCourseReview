/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFaculty = /* GraphQL */ `
  query GetFaculty($id: ID!) {
    getFaculty(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listFacultys = /* GraphQL */ `
  query ListFacultys(
    $filter: ModelFacultyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacultys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
