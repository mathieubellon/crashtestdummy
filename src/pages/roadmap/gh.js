

import { graphql } from "@octokit/graphql";

const resp = await graphql(
    `
    query ($owner: String!, $repo: String!, $projectNumber: Int!) {
    repository(owner: $owner, name: $repo) {
        projectV2(number: $projectNumber) {
        title
        items(first: 100) {
            totalCount
            nodes {
            id
            updatedAt
            content{
                __typename
                ... on Issue{
                title
                state
                labels(first:30) {
                    nodes {
                    id
                    name
                    }
                }
                }
                ... on DraftIssue {
                title
                }
            }
            }
                    pageInfo{
            hasNextPage
            startCursor
            endCursor
            hasPreviousPage
            }
            
        }
        }
    }
    }
        `,
    {
        owner: "mathieubellon",
        repo: "LivestormBar",
        projectNumber: 3,
        headers: {
            authorization: `token xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
        },
    },
);

console.log(resp.repository.projectV2.items.nodes);

