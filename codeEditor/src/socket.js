import {io} from 'socket.io-client'

export const initSocket=async()=>{
    const option={
        'force new connection':true,
        'reconnectionAttempt':'Infinity',
         timeout:10000,
         transport:['websocket'],
        
    }
    return io(process.env.React_APP_BACKEND_URL,option)
}