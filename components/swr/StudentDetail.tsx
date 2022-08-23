import React from 'react'
import useSWR from 'swr'

interface StudentDetailProps {
  studentId: string
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000

const StudentDetail = ({ studentId }: StudentDetailProps) => {
  const { data, mutate, error, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
  })

  const handleMutateClick = () => {
    mutate({ name: 'hehe' }, true)
  }
  return (
    <div>
      Name: {data?.name || '--'}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  )
}

export default StudentDetail
