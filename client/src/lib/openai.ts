import { FormData } from "@shared/schema";

// This would typically use the OpenAI SDK, but we're using fetch for simplicity
// since we're calling our own server endpoint
export async function getGiftRecommendations(formData: FormData) {
  try {
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting recommendations:', error);
    throw error;
  }
}
