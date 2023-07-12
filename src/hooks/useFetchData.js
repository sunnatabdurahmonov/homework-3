import { useEffect,useState } from "react"
import axios from "axios"
import { Url } from "../Url"


export const useFetch = ({endpoint}) => {


    const [data, setData]  = useState({
        isFetched: false,
        error:null,
        data:[]
    })

    useEffect(() => {
        axios.get(`${Url}/${endpoint}`)
        .then(data => {
            setData({
                isFetched:true,
                error:false,
                data:data.data
            })
        })
        .catch(err => {
            setData({
                isFetched:false,
                error:err,
                data:[]
            })
        })
    },[])

    return {data}

}