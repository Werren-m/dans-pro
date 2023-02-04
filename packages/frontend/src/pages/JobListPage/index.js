import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'

import styles from './styles'

import { getJobList } from '../../api'
import JobTable from '../../components/JobTable'

const useStyle = makeStyles(styles)

const JoblistPage = () => {
  const classes = useStyle()

  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [fullTime, setFullTime] = useState(false)
  const [jobList, setJobList] = useState([])

  const toggleFullTime = () => {
    setFullTime(!fullTime)
  }

  useEffect(() => {
    handleSearch()
  }, [])

  const handleSearch = async () => {
    try {
      const response = await getJobList({ params: { description, location, full_time: fullTime, page: 1 } })
      console.log(response, 'haharespon')
      setJobList(response.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Grid className={classes.mainContainer}>
      <Grid className={classes.optionContainer}>
        <Grid>
          <Typography fontWeight={700}>Job Description</Typography>
          <TextField
            style={{ minWidth: '28rem' }}
            placeholder="Filter by title, benefits, companies, experties"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid>
          <Typography fontWeight={700}>Location</Typography>
          <TextField
            style={{ minWidth: '28rem' }}
            placeholder="Filter by city, or country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <FormControlLabel
          control={
            <Checkbox onChange={toggleFullTime} checked={fullTime} />
          }
          label={<Typography fontWeight={700}>Full Time Only</Typography>}
        />
        <Button onClick={handleSearch}>
          Search
        </Button>
      </Grid>
      {jobList.length > 0 && (
        <Paper className={classes.tableContainer}>
          <Grid padding={2}>
            <Typography variant="h4">Job List</Typography>
          </Grid>
          <JobTable jobs={jobList} />
        </Paper>
      )}
    </Grid>
  )
}

export default JoblistPage