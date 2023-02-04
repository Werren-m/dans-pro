import { Grid, Link, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import moment from 'moment'

import styles from './styles'
import { useNavigate } from 'react-router-dom'

const useStyle = makeStyles(styles)

const JobTable = (props) => {
  const classes = useStyle()
  const navigate = useNavigate()
  const { jobs } = props

  const handleNavigate = (jobId) => {
    navigate(`/jobDetail?id=${jobId}`, { replace: true })
  }

  return (
    <Grid>
      {jobs.map((job, i) => (
        job && (
          <Grid key={i} className={classes.textContainer}>
            <Grid>
              <Typography onClick={() => handleNavigate(job.id)} fontWeight={700} className={classes.jobTitle}>
                {job.title}
              </Typography>
              <Grid className={classes.subCategoryText} gap={1}>
                <Typography>
                  {job.company} -
                </Typography>
                <Typography fontWeight={700} className={classes.fullTimeText}>
                  {job.type}
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography>
                {job.location}
              </Typography>
              <Typography className={classes.dateText}>
                {moment(job.created_at).fromNow()}
              </Typography>
            </Grid>
          </Grid>
        )
      ))}
    </Grid>
  )
}

export default JobTable