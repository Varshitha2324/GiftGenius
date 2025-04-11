import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Gift Recipient Schema
export const recipients = pgTable("recipients", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  relationship: text("relationship").notNull(),
  age: text("age").notNull(),
  gender: text("gender").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertRecipientSchema = createInsertSchema(recipients).pick({
  name: true,
  relationship: true,
  age: true,
  gender: true,
});

export type InsertRecipient = z.infer<typeof insertRecipientSchema>;
export type Recipient = typeof recipients.$inferSelect;

// Questionnaire Schema
export const questionnaires = pgTable("questionnaires", {
  id: serial("id").primaryKey(),
  recipientId: integer("recipient_id").notNull(),
  occasion: text("occasion").notNull(),
  budget: text("budget").notNull(),
  occasionDate: text("occasion_date"),
  interests: text("interests").array(),
  otherInterests: text("other_interests"),
  personality: text("personality"),
  giftTypes: text("gift_types").array(),
  avoid: text("avoid"),
  previousGifts: text("previous_gifts"),
  additionalNotes: text("additional_notes"),
  savePreferences: boolean("save_preferences"),
  emailUpdates: boolean("email_updates"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertQuestionnaireSchema = createInsertSchema(questionnaires).omit({
  id: true,
  createdAt: true,
});

export type InsertQuestionnaire = z.infer<typeof insertQuestionnaireSchema>;
export type Questionnaire = typeof questionnaires.$inferSelect;

// Gift Recommendations Schema
export const recommendations = pgTable("recommendations", {
  id: serial("id").primaryKey(),
  questionnaireId: integer("questionnaire_id").notNull(),
  title: text("title").notNull(),
  price: text("price").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  explanation: text("explanation").notNull(),
  category: text("category"),
  url: text("url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertRecommendationSchema = createInsertSchema(recommendations).omit({
  id: true,
  createdAt: true,
});

export type InsertRecommendation = z.infer<typeof insertRecommendationSchema>;
export type Recommendation = typeof recommendations.$inferSelect;

// Combined Form Data Schema for Frontend
export const formDataSchema = z.object({
  // Recipient info
  recipientName: z.string().min(1, "Name is required"),
  recipientRelationship: z.string().min(1, "Relationship is required"),
  recipientAge: z.string().min(1, "Age is required"),
  recipientGender: z.string().min(1, "Gender is required"),
  
  // Occasion info
  occasion: z.string().min(1, "Occasion is required"),
  budget: z.string().min(1, "Budget is required"),
  occasionDate: z.string().optional(),
  
  // Interests and personality
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  otherInterests: z.string().optional(),
  personality: z.string().optional(),
  
  // Gift preferences
  giftTypes: z.array(z.string()).optional(),
  avoid: z.string().optional(),
  previousGifts: z.string().optional(),
  
  // Additional info
  additionalNotes: z.string().optional(),
  savePreferences: z.boolean().optional().default(false),
  emailUpdates: z.boolean().optional().default(false),
});

export type FormData = z.infer<typeof formDataSchema>;

// API response for recommendations
export const recommendationsResponseSchema = z.object({
  recommendations: z.array(z.object({
    title: z.string(),
    price: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    explanation: z.string(),
    category: z.string().optional(),
    url: z.string().optional(),
  })),
});

export type RecommendationsResponse = z.infer<typeof recommendationsResponseSchema>;
