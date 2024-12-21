import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', Breed: 'Sphynx' },
  { name: 'Mittens', age: '2', Breed: 'Peterbald' },
  { name: 'Shadow', age: '1', Breed: 'Birman' },
  { name: 'Pumpkin', age: '3', Breed: 'Sphynx' },
  { name: 'Luna', age: '4', Breed: 'Persian' },
  { name: 'Simba', age: '2', Breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    const filtered = cats.filter((cat) => {
      const matchesBreed = breedFilter ? cat.Breed === breedFilter : true;
      const matchesSearch = searchQuery ? cat.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesBreed && matchesSearch;
    });

    setFilteredCats(filtered);
  }, [breedFilter, searchQuery, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4">
        <div className="filter-dropdown mb-2">
          <label htmlFor="breedFilter" className="form-label">Filter by Breed:</label>
          <select
            id="breedFilter"
            className="form-select"
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
          >
            <option value="">All Breeds</option>
            {[...new Set(availableCats.map((cat) => cat.Breed))].map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-search">
          <label htmlFor="searchQuery" className="form-label">Search by Name:</label>
          <input
            type="text"
            id="searchQuery"
            className="form-control"
            placeholder="Enter cat name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '180px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.Breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
