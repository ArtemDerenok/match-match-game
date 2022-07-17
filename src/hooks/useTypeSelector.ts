import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypeSelector;
