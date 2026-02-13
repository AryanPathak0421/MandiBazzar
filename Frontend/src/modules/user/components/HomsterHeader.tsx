import { useNavigate } from 'react-router-dom';
import { useLocation } from '../../../hooks/useLocation';

export default function HomsterHeader() {
  const navigate = useNavigate();
  const { location: userLocation } = useLocation();

  const locationDisplayText = userLocation?.address || 
    (userLocation?.city && userLocation?.state ? `${userLocation.city}, ${userLocation.state}` : '') ||
    userLocation?.city || '';

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 px-4 pt-4 pb-4 shadow-sm">
      {/* Top Row - Logo, Name and Location */}
      <div className="flex items-center justify-between gap-3">
        {/* Logo */}
        <img 
          src="/assets/logo/logo.png" 
          alt="Mandi Bazaar" 
          className="h-12 w-12 object-contain flex-shrink-0"
        />

        {/* Center - Mandi Bazaar Text */}
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold text-gray-800 truncate">
            Mandi Bazaar
          </h1>
        </div>

        {/* Right - Location */}
        <div className="flex items-start gap-1 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-green-600 truncate">
              {locationDisplayText ? locationDisplayText.split(',')[0] : '214'}
            </div>
          </div>
        </div>
      </div>

      {/* Address Line */}
      {locationDisplayText && (
        <div className="mt-1 text-xs text-gray-600 line-clamp-1 pl-14">
          {locationDisplayText}
        </div>
      )}

      {/* Search Bar - Removed notification bell */}
      <div className="mt-3">
        <div
          onClick={() => navigate('/search')}
          className="w-full bg-white rounded-xl px-4 py-3 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow border border-green-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="#10b981" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-sm text-gray-500">Search for products...</span>
        </div>
      </div>
    </div>
  );
}
