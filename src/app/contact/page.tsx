import Link from 'next/link';
import { Construction, ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import PageViewTracker from '../../components/PageViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Questions | Japan Food Chains",
  description: "Contact Japan Food Chains. Questions, suggestions, partnerships: we're listening.",
  keywords: "contact Japan Food Chains, questions, suggestions, partnership, support",
  openGraph: {
    title: "Contact | Questions | Japan Food Chains",
    description: "Contact Japan Food Chains. Questions, suggestions, partnerships: we're listening.",
    type: "website",
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: "/contact"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ContactPage() {
  return (
    <>
      <PageViewTracker 
        pageName="contact" 
        pageCategory="information" 
        pageType="contact_page" 
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Construction className="w-16 h-16 text-orange-500" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Page Under Construction
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                This page is currently under development. 
                We're working to soon offer you a simple way to contact us.
              </p>
              <div className="text-sm text-gray-500 japanese-text mb-8">
                準備中
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Come Back Soon!
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                We're preparing a complete contact section with:
              </p>
              <ul className="list-disc list-inside space-y-2 max-w-md mx-auto">
                <li>Simple contact form</li>
                <li>FAQ about Japanese restaurants</li>
                <li>Site improvement suggestions</li>
                <li>Support for your questions</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <Link
                href="/guides"
                className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors text-center"
              >
                Check our guides
              </Link>
            </div>
          </div>
          
          {/* Temporary Info */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900 mb-2">
                  In the meantime...
                </h3>
                <p className="text-blue-800 text-sm">
                  If you have urgent questions about Japanese restaurant chains,
                  feel free to check our detailed practical guides which already contain
                  many answers to frequently asked questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}