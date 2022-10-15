import { useActions } from './useActions';
import { useLocation } from 'react-router-dom';

export const useSetActivePage = () => {
    const location = useLocation();
    const { setActivePage } = useActions();

    return () => void setActivePage(location);
};
