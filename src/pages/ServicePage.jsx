import React, {useEffect, useState} from 'react';
import {useFetching} from "../custom_hook/useFetching";
import apiService from "../api/apiService";
import TableApi from "../components/TableApi";
import RowApi from "../components/RowApi";
import Loader from "../UI/Loader/Loader";

const ServicePage = () => {

    const [services, setService] = useState([])
    const [outsides, setOutside] = useState([])
    const [fetchServices, isServicesLoading, servicesError] = useFetching(async () => {
        const services = await  apiService.getAll()
        const outsides = await apiService.getAllOut()
        setService(services)
        setOutside(outsides)
    })

    useEffect( () => {
        fetchServices()
    }, [])

    console.log(services, outsides)

    return (
        <div>
            <div>
                <img src="https://www.constantcontact.com/blog/wp-content/uploads/2021/01/Blog-header-3-1.jpg" className="serviceImage"/>
                <div className="descr">
                    <h1>
                        Услуги детейлинга и автосервиса
                    </h1>
                    <h2>
                        Закрываем 99% потребностей автомобилистов
                    </h2>
                </div>
            </div>
            <div className="service">
                <h1>Наши Услуги:</h1>
                {
                    servicesError && <div className="load">${servicesError}</div>
                }
                {isServicesLoading ? <div className="load"><Loader/></div> :
                    services.length ? <TableApi services={services}/> : <div className="f_service">Запрос пуст!</div>
                }
                <h1>выездные услуги:</h1>
                {
                    servicesError && <div className="load">${servicesError}</div>
                }
                {isServicesLoading ? <div className="load"><Loader/></div> :
                    outsides.length ? <RowApi outsides={outsides}/> : <div className="f_service">Запрос пуст!</div>
                }
            </div>
        </div>
    );
};

export default ServicePage;