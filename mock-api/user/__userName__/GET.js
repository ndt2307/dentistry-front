// eslint-disable-next-line no-undef
module.exports = (request, response) => {
  response.json({
    id: 0,
    userName: request.params.userName,
    age: 20,
  })
}
