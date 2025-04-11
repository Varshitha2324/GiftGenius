import { useState } from 'react';
import { useLocation } from 'wouter';
import { useQuestionnaire } from '@/contexts/QuestionnaireContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowRight, Edit, RefreshCw } from 'lucide-react';
import GiftCard from '@/components/results/GiftCard';

export default function Results() {
  const { formData, recommendations, resetForm } = useQuestionnaire();
  const [, setLocation] = useLocation();
  
  const [priceFilter, setPriceFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredRecommendations = recommendations.filter(rec => {
    if (priceFilter !== 'all') {
      const price = Number(rec.price.replace(/[^0-9.]/g, ''));
      
      if (priceFilter === 'under25' && price >= 25) return false;
      if (priceFilter === '25-50' && (price < 25 || price > 50)) return false;
      if (priceFilter === '50-100' && (price < 50 || price > 100)) return false;
      if (priceFilter === '100plus' && price <= 100) return false;
    }
    
    if (categoryFilter !== 'all' && rec.category !== categoryFilter) {
      return false;
    }
    
    return true;
  });

  const editAnswers = () => {
    setLocation('/questionnaire');
  };

  const generateMoreIdeas = async () => {
    // This would typically refresh recommendations
    setLocation('/questionnaire');
  };

  const createAccount = () => {
    // Placeholder for account creation
    alert('Account creation would happen here');
  };

  const emailResults = () => {
    // Placeholder for emailing results
    alert('Email results would happen here');
  };

  if (!recommendations.length) {
    setLocation('/questionnaire');
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="mb-8">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Gift Recommendations for <span className="text-primary font-accent">{formData.recipientName}</span>
              </h2>
              <p className="text-neutral-dark mb-4">
                Here are personalized gift ideas based on your answers. Each suggestion is tailored to {formData.recipientName}'s interests, personality, and your special occasion.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-primary bg-opacity-10 text-primary">
                  {formData.occasion}
                </Badge>
                <Badge variant="secondary" className="bg-secondary bg-opacity-10 text-secondary">
                  {formData.budget}
                </Badge>
                <Badge variant="secondary" className="bg-accent bg-opacity-10 text-accent">
                  {formData.recipientRelationship}
                </Badge>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-neutral-light rounded-xl p-4">
              <div className="font-heading font-semibold mb-2">Filter Results By:</div>
              <div className="mb-3">
                <Label htmlFor="price-filter" className="text-sm mb-1">Price</Label>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger id="price-filter" className="w-full">
                    <SelectValue placeholder="All prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All prices</SelectItem>
                    <SelectItem value="under25">Under $25</SelectItem>
                    <SelectItem value="25-50">$25-$50</SelectItem>
                    <SelectItem value="50-100">$50-$100</SelectItem>
                    <SelectItem value="100plus">$100+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-3">
                <Label htmlFor="category-filter" className="text-sm mb-1">Category</Label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger id="category-filter" className="w-full">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    <SelectItem value="experiences">Experiences</SelectItem>
                    <SelectItem value="home">Home & Living</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="personal">Personal Care</SelectItem>
                    <SelectItem value="food">Food & Drink</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="secondary" className="w-full">Apply Filters</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredRecommendations.map((recommendation, index) => (
          <GiftCard key={index} gift={recommendation} recipientName={formData.recipientName || ''} />
        ))}
      </div>
      
      <div className="text-center mb-12">
        <h3 className="text-xl font-heading font-bold mb-4">Not quite right?</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={generateMoreIdeas}
          >
            <RefreshCw className="mr-2" size={18} />
            Generate More Ideas
          </Button>
          <Button 
            variant="outline"
            className="border-neutral-dark text-neutral-dark hover:bg-neutral-dark hover:text-white"
            onClick={editAnswers}
          >
            <Edit className="mr-2" size={18} />
            Edit My Answers
          </Button>
        </div>
      </div>
      
      <Card className="text-center">
        <CardContent className="p-6">
          <h3 className="text-xl font-heading font-bold mb-2">Save These Recommendations</h3>
          <p className="text-neutral-dark mb-6 max-w-lg mx-auto">Create an account to save these gift ideas and get personalized recommendations in the future.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={createAccount}>
              Create Free Account
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={emailResults}
            >
              Email My Results
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
