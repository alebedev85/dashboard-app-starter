export const ADD_CATEGORE = 'ADD_CATEGORE'
export const DEL_CATEGORE = 'DEL_CATEGORE'

export const addCategore = (categore) => ({
    type: ADD_CATEGORE,
    payload: categore
});

export const delCategore = (categore) => ({
    type: DEL_CATEGORE,
    payload: categore
})