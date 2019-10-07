export const checkLogged = () => ({
	type: 'SIGN_IN',
});

export const addComment = (data) => ({
	type: 'ADD_COMMENT',
	payload: data
});

export const userDetails = (data, type) => ({
	type: 'ADD_USER',
	payload: data
});
