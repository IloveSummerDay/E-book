import { useRecoilState, useRecoilValue } from 'recoil'
import { bookTypeState, booksStoreListState } from '../stores'
export default async function LoadBooksList() {
  const bookType = useRecoilValue(bookTypeState)
  const [booksStoreList, setBooksStoreList] = useRecoilState(booksStoreListState)
  const res = await fetch(`/api/getBooksStoreList/${bookType}`, {
    method: 'GET'
  })
    .then(res => {
      res.json()
    })
    .then(res => {
      console.log('【设置新得到的书籍们】', res)
      // setBooksStoreList(res.bookList)
    })
  return <></>
}
