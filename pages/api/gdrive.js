export default async function handler(req, res) {
    // Extract query parameters from the request URL
    const { code, ...query } = req.query;
    
  
    // Redirect the page to '/signin'
    const redirecturl = '/categories/3/' + code;
    res.redirect(redirecturl);
  }
  