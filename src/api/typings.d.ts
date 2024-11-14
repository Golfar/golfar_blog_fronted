declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseCommentVO_ = {
    code?: number
    data?: CommentVO
    message?: string
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponsePageCategoryVO_ = {
    code?: number
    data?: PageCategoryVO_
    message?: string
  }

  type BaseResponsePageCommentVO_ = {
    code?: number
    data?: PageCommentVO_
    message?: string
  }

  type BaseResponsePagePostPageVO_ = {
    code?: number
    data?: PagePostPageVO_
    message?: string
  }

  type BaseResponsePageTagVO_ = {
    code?: number
    data?: PageTagVO_
    message?: string
  }

  type BaseResponsePostDetailVO_ = {
    code?: number
    data?: PostDetailVO
    message?: string
  }

  type BaseResponseUserLoginVO_ = {
    code?: number
    data?: UserLoginVO
    message?: string
  }

  type BaseResponseUserVO_ = {
    code?: number
    data?: UserVO
    message?: string
  }

  type CategoryAddRequest = {
    name?: string
  }

  type CategoryDeleteRequest = {
    id?: number
  }

  type CategoryQueryRequest = {
    pageNum?: number
    pageSize?: number
  }

  type CategoryUpdateRequest = {
    id?: number
    name?: string
  }

  type CategoryVO = {
    id?: number
    name?: string
  }

  type CommentAddRequest = {
    content?: string
    postId?: number
    rootCommentId?: number
    toCommentId?: number
    toUserId?: number
  }

  type CommentChildQueryRequest = {
    pageNum?: number
    pageSize?: number
    rootCommentId?: number
  }

  type CommentQueryRequest = {
    childPageNum?: number
    childPageSize?: number
    pageNum?: number
    pageSize?: number
    postId?: number
    sortField?: string
  }

  type CommentVO = {
    children?: PageCommentVO_
    content?: string
    createTime?: string
    id?: number
    postId?: number
    thumbNum?: number
    toCommentId?: number
    toUserId?: number
    toUserName?: string
    userId?: number
    userName?: string
  }

  type deleteCommentUsingGETParams = {
    /** commentId */
    commentId?: number
  }

  type favourPostUsingGETParams = {
    /** postId */
    postId?: number
  }

  type OrderItem = {
    asc?: boolean
    column?: string
  }

  type PageCategoryVO_ = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CategoryVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageCommentVO_ = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CommentVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PagePostPageVO_ = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: PostPageVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageTagVO_ = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: TagVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PostAddRequest = {
    categoryId?: number
    content?: string
    isDraft?: string
    tags?: string[]
    title?: string
  }

  type PostDeleteRequest = {
    id?: number
  }

  type PostDetailVO = {
    categoryName?: string
    content?: string
    createTime?: string
    favourNum?: number
    hasFavour?: boolean
    hasThumb?: boolean
    id?: number
    tags?: string[]
    thumbNum?: number
    title?: string
    updateTime?: string
    userId?: number
    userName?: string
    viewCount?: number
  }

  type PostFavourQueryPageRequest = {
    pageNum?: number
    pageSize?: number
  }

  type PostPageVO = {
    categoryName?: string
    createTime?: string
    id?: number
    isDraft?: string
    tags?: string[]
    title?: string
    userId?: number
    userName?: string
    viewCount?: number
  }

  type PostQueryDetailRequest = {
    id?: number
    isMyPost?: boolean
  }

  type PostQueryPageRequest = {
    isMyPost?: boolean
    pageNum?: number
    pageSize?: number
  }

  type PostUpdateRequest = {
    categoryId?: number
    content?: string
    id?: number
    isDraft?: string
    tags?: string[]
    title?: string
  }

  type TagAddRequest = {
    name?: string
  }

  type TagDeleteRequest = {
    id?: number
  }

  type TagQueryRequest = {
    pageNum?: number
    pageSize?: number
  }

  type TagUpdateRequest = {
    id?: number
    name?: string
  }

  type TagVO = {
    id?: number
    name?: string
  }

  type thumbCommentUsingGETParams = {
    /** commentId */
    commentId?: number
  }

  type thumbPostUsingGETParams = {
    /** postId */
    postId?: number
  }

  type UserGetInfoRequest = {
    id?: number
  }

  type UserLoginRequest = {
    userAccount?: string
    userPassword?: string
  }

  type UserLoginVO = {
    email?: string
    id?: number
    phoneNumber?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserRegisterRequest = {
    checkPassword?: string
    userAccount?: string
    userPassword?: string
  }

  type UserUpdateMyInfoRequest = {
    email?: string
    phoneNumber?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
  }

  type UserVO = {
    createTime?: string
    email?: string
    id?: number
    phoneNumber?: string
    updateTime?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }
}
