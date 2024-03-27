import axios from "axios";

export const baseUrl = "https://le-nkap-v1.onrender.com/"

const config = {
    headers : {"Content-Type": "application/json"}
}

export const postRequest = async (url, body) =>{


        // const response = await fetch("https://le-nkap-v1.onrender.com/users", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: body
        // })

        // //     (response) => console.log(response)
        // // ).catch(err => console.dir(err))
    
        // console.log(data.response);
        // console.log('----------------');
        // console.log(data.response.status);
        // const data = await response.json()
        // console.dir(data);
        // if (data.status != 200 ) {
        //     let message;
                
        //    message = response.message

        //     return {error: true, message}
            
        // } 

        // return data;
        let res;

        try {
        const data = await axios.post(url, body, config)

            if (data.status == 200) {
                res = {error: false, message: data.data}
            }
            
        } catch (error) {
             // console.log('----------------');
             console.log(error.response);
        res = {error: true, message: error.response.data};
        }


    return res;
       
}
// {
//     "_id": "65dde87bd447418e80388bbd",
//     "name": "Tyler Banks",
//     "email": "tylerbanks@gmail.com",
//     "phone": "+237680890098"
// }


export const getRequest = async (url, body) =>{
    let res;

    try {
    const data = await axios.post(url, body, config)

        if (data.status == 200) {
            res = {error: false, message: data.data}
        }
        
    } catch (error) {
         // console.log('----------------');
    res = {error: true, message: error.response.data};
    }


return res;
}

// 

