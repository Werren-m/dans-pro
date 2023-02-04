const styles = () => {
  return {
    backButtonContainer: {
      width: 'fit-content',
      display: 'flex',
      gap: '0.25rem',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
      }
    },

    backButton: {
      color: '#0F4D92',
    },

    jobTypeText: {
      color: 'gray',
    },

    jobDescContainer: {
      padding: '1rem',
      marginTop: '2rem',
    },

    headerContainer: {
      marginBottom: '1rem',
    },

    detailContainer: {
      display: 'flex',
      flexDirection: 'row',
    },

    detailSubCategoryContainer: {
      maxWidth: '50%',
    },

    howToApplyContainer: {
      backgroundColor: 'yellow !important',
      marginTop: '2rem',
      padding: '1rem',
    }
  }
}

export default styles