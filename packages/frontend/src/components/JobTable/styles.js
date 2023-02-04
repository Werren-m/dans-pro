const styles = () => {
  return {
    textContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      padding: '1rem',
    },

    subCategoryText: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: 'gray',
    },

    jobTitle: {
      color: '#0F4D92',
      '&:hover': {
        cursor: 'pointer',
      }
    },

    fullTimeText: {
      color: 'green',
    },

    dateText: {
      color: 'gray',
      float: 'right',
    }
  }
}

export default styles