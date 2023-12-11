import { atom } from 'recoil'

export const bookTypeState = atom({
  key: 'bookTypeState',
  default: '' // 页面初次渲染时需要渲染默认值图书类型
})

export const booksStoreListState = atom({
  key: 'booksStoreListState',
  default: []
})
