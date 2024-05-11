import { createClient } from '@/lib/api'

const client = createClient({
  url: 'https://backboard.railway.app/graphql/v2',
  headers: {
    Authorization: 'Bearer '
  },
})

export const me = async () => {
  const { me } = await client.query({
    me: {
      id: true,
      email: true,
      avatar: true,
      username: true
    }
  });
  return me
}

export const projects = async () => {
  const { projects } = await client.query({
    projects: {
      edges: {
        node: {
          id: true,
          name: true,
          updatedAt: true,
          baseEnvironmentId: true
        }
      }
    }
  });
  return projects.edges.map(edge => ({ ...edge.node }))
}

export const project_environments = async (projectId: string) => {
  const { environments } = await client.query({
    environments: {
      __args: {
        projectId: projectId
      },
      edges: {
        node: {
          id: true,
          updatedAt: true,
          name: true,
          unmergedChangesCount: true
        }
      }
    }
  })
  return environments.edges.map(edge => ({ ...edge.node }))
}


console.log(await projects())
