// src/app/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Parse the JSON body
  const { email } = req.body;

  // Validate the email
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const apiKey = "4bbc6e128e37583ced995934eb63796c-us17"; // Replace with your API Key
  const audienceId = "dc4feb7e58"; // Replace with your Audience ID
  const dataCenter = apiKey.split("-")[1];
  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Thank you for subscribing!' });
    } else {
      const error = await response.json();
      return res.status(response.status).json({ error: error.title });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'There was an error submitting your email. Please try again.' });
  }
}