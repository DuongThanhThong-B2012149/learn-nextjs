import React from 'react'
import useSWR from 'swr'
interface Props {
  studentId: string
}

const TIME_CONSTANTS = 60 * 60 * 1000

const StudentDetail = ({ studentId }: Props) => {
  const { data, mutate, isValidating, error } = useSWR(`students/${studentId}`, {
    revalidateOnFocus: false,
    // revalidateOnMount: false,
    dedupingInterval: TIME_CONSTANTS,
  })
  const handleClick = () => {
    // mutate({ name: '123' }, true)
    mutate({ name: '123' }, false)
  }
  return (
    <div>
      Name: {data?.name || '--'}
      <button onClick={handleClick}>mutate</button>
    </div>
  )
}

export default StudentDetail
