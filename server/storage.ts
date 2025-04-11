import { 
  InsertUser, User, 
  InsertRecipient, Recipient,
  InsertQuestionnaire, Questionnaire,
  InsertRecommendation, Recommendation
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Recipient methods
  getRecipient(id: number): Promise<Recipient | undefined>;
  createRecipient(recipient: InsertRecipient): Promise<Recipient>;
  
  // Questionnaire methods
  getQuestionnaire(id: number): Promise<Questionnaire | undefined>;
  getQuestionnairesByRecipient(recipientId: number): Promise<Questionnaire[]>;
  createQuestionnaire(questionnaire: InsertQuestionnaire): Promise<Questionnaire>;
  
  // Recommendation methods
  getRecommendation(id: number): Promise<Recommendation | undefined>;
  getRecommendationsByQuestionnaire(questionnaireId: number): Promise<Recommendation[]>;
  createRecommendation(recommendation: InsertRecommendation): Promise<Recommendation>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private recipients: Map<number, Recipient>;
  private questionnaires: Map<number, Questionnaire>;
  private recommendations: Map<number, Recommendation>;
  
  private userCurrentId: number;
  private recipientCurrentId: number;
  private questionnaireCurrentId: number;
  private recommendationCurrentId: number;

  constructor() {
    this.users = new Map();
    this.recipients = new Map();
    this.questionnaires = new Map();
    this.recommendations = new Map();
    
    this.userCurrentId = 1;
    this.recipientCurrentId = 1;
    this.questionnaireCurrentId = 1;
    this.recommendationCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Recipient methods
  async getRecipient(id: number): Promise<Recipient | undefined> {
    return this.recipients.get(id);
  }
  
  async createRecipient(insertRecipient: InsertRecipient): Promise<Recipient> {
    const id = this.recipientCurrentId++;
    const recipient: Recipient = { 
      ...insertRecipient, 
      id,
      createdAt: new Date()
    };
    this.recipients.set(id, recipient);
    return recipient;
  }
  
  // Questionnaire methods
  async getQuestionnaire(id: number): Promise<Questionnaire | undefined> {
    return this.questionnaires.get(id);
  }
  
  async getQuestionnairesByRecipient(recipientId: number): Promise<Questionnaire[]> {
    return Array.from(this.questionnaires.values())
      .filter(q => q.recipientId === recipientId);
  }
  
  async createQuestionnaire(insertQuestionnaire: InsertQuestionnaire): Promise<Questionnaire> {
    const id = this.questionnaireCurrentId++;
    const questionnaire: Questionnaire = {
      ...insertQuestionnaire,
      id,
      createdAt: new Date()
    };
    this.questionnaires.set(id, questionnaire);
    return questionnaire;
  }
  
  // Recommendation methods
  async getRecommendation(id: number): Promise<Recommendation | undefined> {
    return this.recommendations.get(id);
  }
  
  async getRecommendationsByQuestionnaire(questionnaireId: number): Promise<Recommendation[]> {
    return Array.from(this.recommendations.values())
      .filter(r => r.questionnaireId === questionnaireId);
  }
  
  async createRecommendation(insertRecommendation: InsertRecommendation): Promise<Recommendation> {
    const id = this.recommendationCurrentId++;
    const recommendation: Recommendation = {
      ...insertRecommendation,
      id,
      createdAt: new Date()
    };
    this.recommendations.set(id, recommendation);
    return recommendation;
  }
}

export const storage = new MemStorage();
