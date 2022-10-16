import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../service/actions-creation';
import { useMemo } from 'react';

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actionCreators, dispatch), [dispatch]);
};
