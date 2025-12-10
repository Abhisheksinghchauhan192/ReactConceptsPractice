export function validateEmail(value){

    const v = (value ||'').trim()
    if(!v) return {ok:false,error:"Email is required"}

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if(!re.test(v))return{ok:false,error:"Enter Valid Email"}

    return {ok:true}
}


export function validatePassword(value){

    const v = value || ''
    if(!v)return {ok:false,error:"Must Provide Password !"}
    const strongPasswordRegex = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,}$/;

    if(!strongPasswordRegex.test(v))return{ok:false,error:"Password must contain UpperCase,Special Chars and numbers and atleast be of length 8"}

    return {ok:true}
}