export function isValidEmail(email){

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(String(email).toLowerCase()) === true){
                return true && regex.test(String(email).toLowerCase());                 //validaçãod o input de email
                
        }else{
                alert('Insira um email valido!')
        }
        
        
        
}


export function isValidName(nome){
        const re = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
        if(re.test(String(nome).toLocaleLowerCase()) === true){
                return true && re.test(String(nome).toLocaleLowerCase())                //validação do input nome
        }else{
                alert('Insira um nome e sobrenome validos!')
        }
}



export function isValidCell(n){
        if(n.length < 15){
                alert('insira um numero valido de 9 digitos e com DDD')
                return false
        }else{
                return true
        }
}


export function maskPhone(value){
        return value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "($1) $2")            //Mascara para o input de celular
          .replace(/(\d{5})(\d)/, "$1-$2")
          .replace(/(-\d{4})(\d+?)$/, "$1");
      };



        

        
    

              
    

