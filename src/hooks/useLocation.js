import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from './../App';

export const useLocation = () => {
    const { transition, setTransition } = useContext(Context);

    const nav = useNavigate();

    const navigate = (location) => {
        setTransition(true);
        nav(location);
    }

    return navigate
}