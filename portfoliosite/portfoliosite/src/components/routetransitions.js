const pageVariants = {
    RouteTransition: {
        initial: {
            x: '-100vw', 
            transition: {
                duration: 0.8, 
                ease: 'easeInOut'
            }},
        animate: {
            x: 0, 
            transition: {
                duration: 0.8, 
                ease: 'easeInOut'
        }},
        exit: {
            x: '100vw', 
            transition: {
                duration: 0.8, 
                ease: 'easeInOut'
            }}
        }
}
export default pageVariants