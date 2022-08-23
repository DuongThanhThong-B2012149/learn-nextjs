import StudentDetail from '@/components/swr/StudentDetail'
import Link from 'next/link'
import * as React from 'react'

export default function SWRPage() {
  const [detailList, setDetailList] = React.useState([1, 1, 1])
  const handleAddClick = () => {
    setDetailList((prevList) => [...prevList, 1])
  }
  return (
    <div>
      <h1>SWR Playround</h1>
      <Link href={'/'}>
        <a>Navigate</a>
      </Link>

      <button onClick={handleAddClick}>Add list</button>
      <ul>
        {detailList.map((x, index) => (
          <li key={index}>
            <StudentDetail studentId="sktwi1cgkkuif36f3" />
          </li>
        ))}
      </ul>
    </div>
  )
}
