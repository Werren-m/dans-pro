const { default: axios } = require('axios')

const api = axios.create({
    baseURL: 'http://dev3.dansmultipro.co.id/api/',
    timeout: 20000,
  })

class JobController {
  static async getJob(req, res, next) {
    try {
      const { data } = await api.get('recruitment/positions.json', { params: req.query })
      res.json({ data })
    } catch (err) {
      next(err)
    }
  }

  static async getJobDetails(req, res, next) {
    const { id } = req.params
    try {
      const { data } = await api.get(`recruitment/positions/${id}`)
      res.json({ data })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = JobController