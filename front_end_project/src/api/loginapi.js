async function getUserProfileApi() {
  try {
    const response = await fetch('http://localhost:3002/auth/getUserProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add body if needed
      // body: JSON.stringify({ yourData: 'value' }),
    });

    // Check if the response status is not OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, 'getuserprofileapi');
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

export default getUserProfileApi;
