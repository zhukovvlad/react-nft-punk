import { useState, useEffect } from "react";

import axios from "axios";

const usePunks = () => {
    const [punkListData, setPunkListData] = useState([]);

    useEffect(() => {
        getMyNfts();
    }, []);

    const getMyNfts = async () => {
        const openseaData = await axios.get(
          'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x8Dd973F8b26ef734A36A07be42FBA7AF48D041b1&order_direction=desc&offset=0&limit=20&include_orders=false'
        );
        console.log(openseaData.data.assets);
        setPunkListData(openseaData.data.assets);
    };

    return(punkListData);
};

export default usePunks;
