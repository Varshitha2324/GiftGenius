import { Search, Filter, Tag } from 'lucide-react';

export default function LoadingView() {
  return (
    <div className="max-w-lg mx-auto text-center py-16">
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <h2 className="text-2xl font-heading font-bold mb-4">Finding Perfect Gift Ideas</h2>
      <p className="text-neutral-dark mb-6">Our AI is analyzing thousands of gift options to find the perfect match based on your answers...</p>
      <div className="max-w-md mx-auto bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-start mb-4">
          <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
            <Search className="text-primary" size={18} />
          </div>
          <div className="text-left">
            <div className="font-medium">Analyzing interests</div>
            <p className="text-sm text-neutral-dark">Matching preferences with curated gift database</p>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
            <Filter className="text-primary" size={18} />
          </div>
          <div className="text-left">
            <div className="font-medium">Filtering by occasion</div>
            <p className="text-sm text-neutral-dark">Finding appropriate gifts for the special moment</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
            <Tag className="text-primary" size={18} />
          </div>
          <div className="text-left">
            <div className="font-medium">Matching budget</div>
            <p className="text-sm text-neutral-dark">Identifying options within your price range</p>
          </div>
        </div>
      </div>
    </div>
  );
}
