const routes = {
  example: '/example',
}

const Router = {
  ...routes,
  get: (pathInput: string, params: any) => {
    let path = pathInput

    if (params) {
      Object.keys(params).forEach((paramKey: string) => {
        path = path.replace(`:${paramKey}`, params[paramKey])
      })
    }
    return path
  },
}

export default Router
