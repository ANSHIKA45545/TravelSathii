export const FilterSidebar = ({ filters = {}, setFilters = () => {} }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <aside className="w-full md:w-64 bg-white border p-5 rounded-xl shadow-md sticky top-20">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Filters</h2>

      <div className="space-y-5">
        {/* Rating */}
        <div>
          <label className="block text-gray-600 font-semibold mb-2">Rating</label>
          <select
            name="rating"
            value={filters.rating || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Any</option>
            <option value="5">5★ & above</option>
            <option value="4">4★ & above</option>
            <option value="3">3★ & above</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 font-semibold mb-2">Price Range</label>
          <select
            name="price"
            value={filters.price || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">All</option>
            <option value="low">₹0 - ₹1000</option>
            <option value="mid">₹1000 - ₹5000</option>
            <option value="high">₹5000+</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-600 font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location || ""}
            onChange={handleChange}
            placeholder="Enter city or area"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-gray-600 font-semibold mb-2">Sort By</label>
          <select
            name="sort"
            value={filters.sort || "recommended"}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="recommended">Recommended</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="topRated">Top Rated</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

