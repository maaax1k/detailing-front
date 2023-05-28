import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../custom_hook/useFetching";
import ApiService from "../api/apiService";
import Loader from "../UI/Loader/Loader";
import Details from "../components/Details";

const ServiceDetail = () => {
    const ident = useParams()
    const [service, setService] = useState({})
    const [fetchServiceId, isLoading, error] = useFetching(async () =>{
        const response = await ApiService.getById(ident.id)
        setService(response.data);
    })
    useEffect(() =>{
        fetchServiceId(ident.id);
    }, [])
    return (
        <div>
            {isLoading ? <div className="load"><Loader/></div> :
                <div>
                    <Details service={service}/>
                </div>}
        </div>
    );
};

export default ServiceDetail;