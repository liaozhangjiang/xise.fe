import axios from 'axios' 

const request = ({
    url,
    method = 'get' || 'GET',
    headers,
    params,
    data,//post请求的数据参数
    withCredentials, //跨源凭证，想后端证明我们是有资格来进行后端接口请求 
}) => {
    return new Promise(( resolve,reject ) => {
        switch ( method ) {
            case 'get' || 'GET':
                axios.get( url, {
                    headers, 
                    params,
                    withCredentials
                }).then( res => resolve( res )).catch( e => console.log( e ))
                break;
        
            case 'post' || 'POST':
                let paramsData = new URLSearchParams()
                for ( var key in data ) {
                    paramsData.append( key,data[ key ] )
                }
                axios({
                    url,
                    data: paramsData,
                    headers
                }).then( res => resolve( res ))
                    .catch( err => console.log( err ))
                break;
            case 'put' || 'PUT':
                axios({
                    url,
                    data,
                    headers
                }).then( res => resolve( res ))
                    .catch( err => console.log( err ))
                break;
            case 'delete' || 'DELETE':
                axios({
                    url,
                    data,
                    headers
                }).then( res => resolve( res ))
                    .catch( err => console.log( err ))
                break;
            default:
                break;
        }
    })
}

export default request 