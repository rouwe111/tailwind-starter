import { useMemo } from 'react';

const useCollection = (userId: string) => {
    const options = {
        enabled: !!userId,
        staleTime: 3
    };

    const query = () => {
        return {
            test: true,
            product: {
                name: 'Product Name',
                id: '2'
            },
            ...options
        };
    }

    const productName = useMemo(() => {
        const queryData = query();
        return queryData && queryData?.product?.name || '';
    });

    return {
        productName
    };
};

export default useCollection;