import { cryptoAssets, cryptoData } from './data'

export  function fakeFetchCrypto(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 0)
    })
}

export  function fetchAssets(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 0)
    })
}