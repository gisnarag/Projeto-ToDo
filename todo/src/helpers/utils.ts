// Emular delay de uma requisição 
export function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

