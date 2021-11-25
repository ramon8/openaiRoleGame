
export const container = {
    position: 'relative',
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    div: {
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
        fontSize: '2rem'
    },
    'div:first-child': { color: '#f9c962' },
    'div:last-child': { color: '#333032' }
}

export const button = {
    position: 'absolute',
    color: '#333032',
    fontFamily: '"Fredoka One", cursive',
    left: '50%',
    transform: 'translate(-50%)',
    border: '.4rem solid #333032',
    borderRadius: '.4rem',
    fontWeight: 'bolder'
}