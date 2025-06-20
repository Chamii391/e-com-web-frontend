export default function ProductCard({ product }) {
  const {
    productname,
    altName,
    description,
    images,
    labelledPrice,
    price,
    stock,
    isAvailable,
  } = product;
  
  const imageSrc = images?.length > 0 ? images[0] : "/no-image.jpg";
  const isOnSale = labelledPrice > price;
  const alt = altName?.[0] || productname;
  const discountPercent = isOnSale ? Math.round(((labelledPrice - price) / labelledPrice) * 100) : 0;

  return (
    <div className="group relative w-[320px] h-[520px] bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-lg shadow-2xl rounded-3xl m-4 border border-white/20 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-all duration-500 flex flex-col overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Image Container with Enhanced Effects */}
      <div className="relative w-full h-[240px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-3xl">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Sale Badge with Animation */}
        {isOnSale && (
          <div className="absolute -top-2 -left-2 transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-2 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1">
                <span>🔥</span>
                <span>{discountPercent}% OFF</span>
              </div>
            </div>
          </div>
        )}

        {/* Floating Action Icons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-100">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200">
            <span className="text-gray-700 text-lg">♡</span>
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200">
            <span className="text-gray-700 text-lg">👁</span>
          </button>
        </div>
      </div>
      

      {/* Content Section */}
      <div className="relative flex flex-col flex-1 px-6 py-5 z-10">
        {/* Product Name with Gradient Text */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 line-clamp-1 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
          {productname}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        {/* Price Section */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Rs. {price.toLocaleString()}
          </span>
          {isOnSale && (
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 line-through font-medium">
                Rs. {labelledPrice.toLocaleString()}
              </span>
              <span className="text-xs text-green-600 font-semibold">
                Save Rs. {(labelledPrice - price).toLocaleString()}
              </span>
            </div>
          )}
        </div>

        {/* Stock Status with Modern Design */}
        <div className="flex justify-between items-center mb-4">
          <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-semibold ${
            isAvailable && stock > 0
              ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200'
              : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border border-red-200'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              isAvailable && stock > 0 ? 'bg-green-500 animate-pulse' : 'bg-red-500'
            }`}></div>
            <span>
              {isAvailable && stock > 0 ? `${stock} in stock` : 'Out of stock'}
            </span>
          </div>
          
          {/* Rating Stars (placeholder) */}
          <div className="flex text-yellow-400 text-sm">
            {'★★★★☆'}
          </div>
        </div>

        {/* Action Button with Advanced Styling */}
        <button
          disabled={!isAvailable || stock <= 0}
          className={`relative overflow-hidden py-3 w-full rounded-2xl text-sm font-bold transition-all duration-300 transform ${
            isAvailable && stock > 0
              ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98] bg-size-200 bg-pos-0 hover:bg-pos-100'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          style={{
            backgroundSize: '200% 100%',
            backgroundPosition: '0% 0%',
          }}
        >
          {/* Button Content */}
          <div className="relative z-10 flex items-center justify-center space-x-2">
            {isAvailable && stock > 0 ? (
              <>
                <span>Add to Cart</span>
                <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-200">🛒</span>
              </>
            ) : (
              <span>Unavailable</span>
            )}
          </div>
          
          {/* Button Shimmer Effect */}
          {isAvailable && stock > 0 && (
            <div className="absolute inset-0 -top-4 -bottom-4 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          )}
        </button>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

