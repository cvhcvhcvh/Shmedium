export const requestResponses = responses => (
  $.ajax({
      method: 'get',
      url: '/api/responses',
      data: {responses}
  })
)

export const requestResponse = id => (
  $.ajax({
      method: 'get',
      url: `/api/responses/${id}`
  })
)

export const createResponse = response => (
  $.ajax({
      method: 'post',
      url: '/api/responses',
      data: {response}
  })
)

export const deleteResponse = responseId => (
  $.ajax({
      method: 'delete',
      url: `/api/responses/${responseId}`
  })
)