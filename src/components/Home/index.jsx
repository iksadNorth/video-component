import React, { useState, useEffect } from "react";
import { VideoHolder } from "./VideoHolder";
import { ListContainer } from "../layout/ListContainer";

import api from "../../axio";
import { useProxy } from "../AxioProxy";


const Home = () => {
    const [items, setItems] = useState([]);
    const proxy = useProxy();

    const fetchData = async () => {
        return await api(
            `/api/v1/videos?sort=-created_at`
        ).then(res => res.data);
    };

    useEffect(() => {
        proxy(fetchData).then((res) => res?.items).then(setItems);
    }, []);
    
    return (
        <ListContainer>
            { items.map((item, index) => <VideoHolder key={index} { ...item }/>) }
        </ListContainer>
    )
};

export default Home;
