/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-26 17:39:18
 * @LastEditors: Knight
 * @LastEditTime: 2024-04-26 19:02:04
 */
// 默认响应接口，用于服务器响应数据
export interface DefaultResponse<T> {
  append?: object
  data?: T
  message?: string
  respId?: string
  serverTime?: number
  status?: number
}

// 统计响应接口，包含有关数据的统计信息以及页码数据
export interface StatisticResponse<ListResponse> {
  all: number
  high: number
  low: number
  medium: number
  page: ListResponse
  top: number
}
// 列表响应接口，用于包含列表数据及其相关信息
export interface ListResponse<TRecords> {
  current: number
  pages: number
  records: TRecords[]
  searchCount?: boolean
  size: number
  total: number
}

// 过滤器接口，用于定义列表过滤条件
export interface Filter {
  size?: number
  current?: number
  desc?: string
  asc?: string
}
// 表单选项接口，用于描述表单选项的标签和值
export interface FormOption<T> {
  label: string
  value: T
}
// 排序类型定义
export type SortType = 'ascending' | 'descending'
// 排序对象接口，用于描述排序字段和排序类型
export interface SortingObject<T> {
  value: T
  type: SortType
}
