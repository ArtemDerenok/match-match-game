import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypeSelector;
