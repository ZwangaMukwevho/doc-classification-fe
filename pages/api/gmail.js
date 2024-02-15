export default async function handler(req, res) {
  // Extract query parameters from the request URL
  const { code, ...query } = req.query;
  
  // Send a request to localhost:8080 with the extracted query parameters as the body
  try {
    const response = await fetch('http://localhost:8080/gmail/authkey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
     
    });
    
    // Check if the request to localhost:8080 was successful
    if (!response.ok) {
      throw new Error('Failed to process data');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', 'message': error });
  }

  // Redirect the page to '/signin'
  const redirecturl = '/categories/2/' + code;
  console.log('redirect url: ',redirecturl);
  res.redirect(redirecturl);
}
