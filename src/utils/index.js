export function compactGetters(...args) {
    return args.reduce(function(t, getter) {
        if(getter in this) t[getter] = this[getter]()
        
        return t
        
    }.bind(this), {})
}
