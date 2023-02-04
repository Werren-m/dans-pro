const styles = () => {
  return {
    sectionContainer: {
      display: 'flex',
      flexDirection: 'column !important',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      minHeight: '70vh',
    },

    loginButton: {
      borderRadius: '15px !important',
      marginTop: '1rem !important',
    },

    signupButton: {
      borderRadius: '15px !important',
      marginTop: '1rem !important',
      backgroundColor: 'red !important',
    },

    actionButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }
}

export default styles
