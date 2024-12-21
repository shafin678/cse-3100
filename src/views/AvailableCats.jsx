import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },
];
//adding all breeds
const breeds = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);

  //  using for search functionality
  const [searchBreed, setSearchBreed] = useState('');
  const [searchName, setSearchName] = useState('');
  const [catsToShow, setCatsToShow] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
          //adding breeeds
          breed: breeds[Math.floor(Math.random() * breeds.length)],
        }));

        setCats(catsWithImages);
        //setting
        setCatsToShow(catsWithImages);
        console.log(catsToShow);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  function handleSearch() {
    const filteredCats = cats.filter((cat) => {
      return (!searchBreed || cat.breed.toLowerCase() === searchBreed.toLowerCase()) && (!searchName || cat.name.toLowerCase().includes(searchName.toLowerCase()));
    });

    setCatsToShow(filteredCats);
  }

  return (
    <section className="text-center mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Available Cats</h2>

        <div className="d-flex gap-4">
          {/* Breed selection part */}
          <select name="" id="" onChange={(e) => setSearchBreed(e.target.value)}>
            <option value="">select breed</option>
            {breeds.map((breed, idx) => (
              <option key={idx} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          {/* search by cat name part */}
          <input type="text" placeholder="search by name" onChange={(e) => setSearchName(e.target.value.trim())} />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <hr />
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {catsToShow.map((cat, i) => (
          <div key={i} className="col-md-4 ">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-1">Age: {cat.age}</p>
                <p className="mb-1">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}