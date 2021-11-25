
export const container = {
    initial: { width: '0%' },
    animate: { width: '100%' },
    exit: { width: '0%', transition: { duration: .4, delay: .2 } },
    transition: { duration: .4, ease: 'linear' }
}

export const text = {
    initial: { opacity: '0' },
    animate: { opacity: '1' },
    exit: { opacity: '0', transition: { delay: 0 } },
    transition: { duration: .4, delay: .4 }
}

export const button = {
    initial: { opacity: 0, top: '48%' },
    animate: { opacity: 1, top: '50%' },
    exit: {
      opacity: 0,
      transition: { delay: 0 }
    },
    transition: { duration: .4, delay: .4 }
  }