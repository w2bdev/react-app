export const logging = (store) => (next) => (action) => {
        
    console.log(`Redux Log:`, action)
    
    next(action);
}
