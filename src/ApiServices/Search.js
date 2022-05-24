import * as request from '~/helper/httpRequest';
export const searchLess = async (q, handleSuccess, handleError) => {
    try {
        const res = await request.get(`users/search?`, {
            params: {
                q,
                type: 'less',
            },
        });
        handleSuccess(res.data);
    } catch (error) {
        handleError(error);
    }
};
