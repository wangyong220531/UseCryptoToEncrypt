const CryptoJS = require("crypto-js")

encrypt = (word) => {
    const KEY = CryptoJS.enc.Utf8.parse("geshukeji8888888")
    const IV = CryptoJS.enc.Utf8.parse("geshu88888888888")
    let key = KEY
    let iv = IV
    let srcs = CryptoJS.enc.Utf8.parse(word)
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

const x  = encrypt(19945372694)

console.log(x);