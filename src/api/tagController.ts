// @ts-ignore
/* eslint-disable */
import request from '@/libs/request'

/** addTag POST /api/tag/add */
export async function addTagUsingPost(
  body: API.TagAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>('/api/tag/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteTag POST /api/tag/delete */
export async function deleteTagUsingPost(
  body: API.TagDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/tag/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getAllTag POST /api/tag/getAll */
export async function getAllTagUsingPost(
  body: API.TagQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageTagVO_>('/api/tag/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateTag POST /api/tag/update */
export async function updateTagUsingPost(
  body: API.TagUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/tag/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
