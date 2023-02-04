import React, { useEffect, useState } from 'react'
import {
  Divider,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getJobDetail } from '../../api'

import styles from './styles'
import { useNavigate } from 'react-router-dom'

const useStyle = makeStyles(styles)

const JobDetailPage = (props) => {
  const classes = useStyle()
  const navigate = useNavigate()
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  const [job, setJob] = useState({})

  useEffect(() => {
    fetchJob()
  })

  const fetchJob = async () => {
    try {
      const response = await getJobDetail(id)
      setJob(response.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleBack = () => {
    navigate('/joblist', { replace: true })
  }

  return (
    <Grid padding={2}>
      <Grid onClick={handleBack} className={classes.backButtonContainer}>
        <ArrowBackIcon fontSize='small' />
        <Typography className={classes.backButton} fontWeight={700}>Back</Typography>
      </Grid>
      <Paper className={classes.jobDescContainer}>
        <Grid>
          <Grid className={classes.headerContainer}>
            <Typography className={classes.jobTypeText}>
              {job.type} / {job.location}
            </Typography>
            <Typography variant="h6" fontWeight={700} className={classes.jobTitleText}>
              {job.title}
            </Typography>
          </Grid>
          <Divider/>
          <Grid className={classes.detailContainer}>
            <Grid className={classes.detailSubCategoryContainer}>
              <div dangerouslySetInnerHTML={{ __html: job.description }} />
            </Grid>
            <Grid className={classes.detailSubCategoryContainer}>
              <Grid className={classes.companyLogo}>
                <img
                  src={job.company_logo}
                  alt="Not found"
                />
              </Grid>
              <Paper className={classes.howToApplyContainer}>
                <Typography variant="h6" fontWeight={700}>How to apply</Typography>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default JobDetailPage