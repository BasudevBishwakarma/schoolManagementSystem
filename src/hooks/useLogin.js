export const loginApi = async ({ username, password, expiresInMins = 30 }) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, expiresInMins }),
        // credentials: 'include', // VERY IMPORTANT
    });

    if (!response.ok) throw new Error('Login failed');

    const data = await response.json();

    // Save tokens manually if you need them later (optional)
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);

    return data;
};
