// @ts-ignore
/* eslint-disable */
import request from '@/libs/request'

/** addPost POST /api/post/add */
export async function addPostUsingPost(
  body: API.PostAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>('/api/post/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deletePost POST /api/post/delete */
export async function deletePostUsingPost(
  body: API.PostDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/post/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** favourPost GET /api/post/favour */
export async function favourPostUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.favourPostUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/post/favour', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getPostDetail POST /api/post/get/detail */
export async function getPostDetailUsingPost(
  body: API.PostQueryDetailRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePostDetailVO_>('/api/post/get/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getPostPage POST /api/post/get/page */
export async function getPostPageUsingPost(
  body: API.PostQueryPageRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePostPageVO_>('/api/post/get/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getFavourPostPage GET /api/post/get/page/favour */
export async function getFavourPostPageUsingGet(
  body: API.PostFavourQueryPageRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePostPageVO_>('/api/post/get/page/favour', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** thumbPost GET /api/post/thumb */
export async function thumbPostUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.thumbPostUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/post/thumb', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** editPost POST /api/post/update */
export async function editPostUsingPost(
  body: API.PostUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/post/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
