import React, { useEffect, useState } from 'react'
import Form from '../components/Form/Form'
import { form_two } from '../components/Form/index';
import api from '../api/api'
const Position = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true)
      try {
        const response = await api.get('/jobs/paginated');
        if (response && response.data) setData(response.data.data)
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

        } else {
          console.log(`Error: ${error.message}`)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchJobs();
  }, [])

  useEffect(() => {
    console.log(data);

  }, [data])
  return (
    isLoading ? 'Loading...' :
      <Form Locations={data} details={form_two} />
  )
}

export default Position