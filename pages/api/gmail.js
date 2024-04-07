import { getAuthSourceIndex } from "@/logic/authenticationUtils";
import { get } from "firebase/database";

export default async function handler(req, res) {
  // Extract query parameters from the request URL
  const { code, scope, ...query } = req.query;
  
  // Send a request to localhost:8080 with the extracted query parameters as the body

  // Redirect the page to '/signin'
  const stepIndex = getAuthSourceIndex(scope);
  const redirecturl = '/categories/' +stepIndex+'/' + code;

  res.redirect(redirecturl);
}
