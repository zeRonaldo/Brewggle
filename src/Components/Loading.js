import React from 'react'
import { BarLoader } from 'react-spinners'
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    width: 100% !important;
    border-color: red;
`;

const Loading = (props) => {
    return (
        <BarLoader 
        css={override}
        sizeUnit={"vh"}
        height={4}
        color={'#F2C94C'}
        loading={props.loading}
        />
    )
}

export default Loading