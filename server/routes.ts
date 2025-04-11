import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { formDataSchema } from "@shared/schema";
import { generateRecommendations } from "./recommendationEngine";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to generate gift recommendations
  app.post('/api/recommendations', async (req, res) => {
    try {
      // Validate the request body
      const formData = formDataSchema.parse(req.body);
      
      // Store the questionnaire data
      const recipient = await storage.createRecipient({
        name: formData.recipientName,
        relationship: formData.recipientRelationship,
        age: formData.recipientAge,
        gender: formData.recipientGender
      });
      
      const questionnaire = await storage.createQuestionnaire({
        recipientId: recipient.id,
        occasion: formData.occasion,
        budget: formData.budget,
        occasionDate: formData.occasionDate,
        interests: formData.interests,
        otherInterests: formData.otherInterests,
        personality: formData.personality,
        giftTypes: formData.giftTypes,
        avoid: formData.avoid,
        previousGifts: formData.previousGifts,
        additionalNotes: formData.additionalNotes,
        savePreferences: formData.savePreferences,
        emailUpdates: formData.emailUpdates
      });

      // Generate gift recommendations using our local recommendation engine
      const recommendations = generateRecommendations(formData);
      
      // Store the recommendations
      for (const rec of recommendations) {
        await storage.createRecommendation({
          questionnaireId: questionnaire.id,
          title: rec.title,
          price: rec.price,
          description: rec.description,
          imageUrl: rec.imageUrl,
          explanation: rec.explanation,
          category: rec.category,
          url: rec.url
        });
      }

      // Return the recommendations
      res.json({ recommendations });
    } catch (error) {
      console.error("Error generating recommendations:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Failed to generate recommendations" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
